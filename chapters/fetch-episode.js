

const episodeCounts = {
  yzk: 41,
  leza: 41,
  valens: 42,
  mabel: 29,
  sonunBaslangici: 2,
  derinSular: 5,
  olumculSerisi:1
};


function generateEpisodes(bookName, count) {
  return Array.from({ length: count }, (_, i) => {
    // Special handling for books with hyphens in their names
    const fileSafeName = bookName.toLowerCase()
      .replace(/\s+/g, '-')  // Replace spaces with hyphens
      .replace(/ı/g, 'i')    // Replace Turkish 'ı' with 'i'
      .replace(/ğ/g, 'g')    // Replace Turkish 'ğ' with 'g'
      .replace(/ü/g, 'u')    // Replace Turkish 'ü' with 'u')
      .replace(/ş/g, 's')    // Replace Turkish 'ş' with 's')
      .replace(/ç/g, 'c');   // Replace Turkish 'ç' with 'c'

    // Special cases for specific books
    let folderName = fileSafeName;
    if (bookName === 'Sonun Başlangıcı') {
      folderName = 'sonun-başlangıcı';
    } else if (bookName === 'Derin Sular') {
      folderName = 'derin-sular';
    }

    return {
      name: `${bookName} ${i + 1}.Bölüm`,
      file: `${folderName}/${folderName}-${i + 1}.docx`
    };
  });
}
const episodesYzk = generateEpisodes('YZK', episodeCounts.yzk);
const episodesLeza = generateEpisodes('Leza', episodeCounts.leza);
const episodesValens = generateEpisodes('Valens', episodeCounts.valens);
const episodesMabel = generateEpisodes('Mabel', episodeCounts.mabel);
const episodesSonunBaslangici = generateEpisodes('Sonun Başlangıcı', episodeCounts.sonunBaslangici);
const episodesDerinSular = generateEpisodes('Derin Sular', episodeCounts.derinSular);
const episodesOlumculSerisi = generateEpisodes('Olumcul Serisi', episodeCounts.olumculSerisi);
  
 // References to elements
 let commentsCache = {}; // Cache to store preloaded comments for the current episode
const customDropdown = document.getElementById('customDropdown');
const dropdownSelect = customDropdown.querySelector('.dropdown-select');
const selectedOption = customDropdown.querySelector('.selected-option');
const episodeName = customDropdown.querySelector('.episode-name');
const optionsList = document.getElementById('optionsList');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const nextButton2 = document.querySelector('.next-episode');

const arrowIcon = dropdownSelect.querySelector('.arrow i');

let currentIndex = 0; // Set to 0 to select the first episode by default
let isFirstLoad = true; // Flag to prevent scrolling on first load
let globalEpisodeTitle = '';  // Store episode name globally

// Extract book name from current HTML file name
function getBookNameFromURL() {
  const pathArray = window.location.pathname.split('/');
  const fileName = pathArray[pathArray.length - 1];  // Get file name (e.g., yzk.html)
  const bookName = fileName.replace('.html', '');   // Remove .html to get book name
  return bookName.charAt(0).toUpperCase() + bookName.slice(1);  // Capitalize
}

const currentBook = getBookNameFromURL();
console.log('Current Book:', currentBook);  // For debugging
let episodes;
switch (currentBook.toLowerCase()) {
  case 'yzk':
      episodes = episodesYzk;
      break;
  case 'leza':
      episodes = episodesLeza;
      break;
  case 'mabel':
      episodes = episodesMabel;
      break;
  case 'sonun-baslangici':
      episodes = episodesSonunBaslangici;
      break;
  case 'derin-sular':
      episodes = episodesDerinSular;
      break;
  case 'valens':
      episodes = episodesValens;
      break;
  default:
    case 'olumcul-serisi':
      episodes = episodesOlumculSerisi;
      break;
      episodes = []; // or handle the case where no match is found
}
import {
  ref,
  push,
  get,
  child,
  onValue,
  getDatabase,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
import { db } from "./firebase-config.js"; // Import your initialized Firebase database


// Populate the options list
episodes.forEach((episode, index) => {
  const optionDiv = document.createElement('div');
  optionDiv.classList.add('option');
  optionDiv.textContent = episode.name;
  optionDiv.dataset.file = episode.file; // Store the filename for later use
  optionDiv.dataset.index = index; // Store the index for easy navigation
  optionsList.appendChild(optionDiv);
});

// Automatically select the first episode when the page loads
updateSelectedOption();

// Toggle dropdown visibility
dropdownSelect.addEventListener('click', () => {
  const isOpen = optionsList.style.display === 'block';
  optionsList.style.display = isOpen ? 'none' : 'block';
  arrowIcon.classList.toggle('fa-angle-down', isOpen);
  arrowIcon.classList.toggle('fa-angle-up', !isOpen);
});

// Handle option selection
optionsList.addEventListener('click', (event) => {
  const clickedOption = event.target;
  if (clickedOption.classList.contains('option')) {
    const previousSelected = optionsList.querySelector('.option.selected');
    if (previousSelected) {
      previousSelected.classList.remove('selected');
    }
    clickedOption.classList.add('selected');
    currentIndex = parseInt(clickedOption.dataset.index);
    episodeName.textContent = clickedOption.textContent;
    optionsList.style.display = 'none';
    arrowIcon.classList.remove('fa-angle-up');
    arrowIcon.classList.add('fa-angle-down');
    loadDocument(clickedOption.dataset.file);
    scrollToContentTop();
    updateSelectedOption();
  }
});

document.addEventListener('click', (event) => {
  if (!customDropdown.contains(event.target)) {
    optionsList.style.display = 'none';
    arrowIcon.classList.remove('fa-angle-up');
    arrowIcon.classList.add('fa-angle-down');
  }
});

// Event listeners for Previous and Next buttons
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSelectedOption();
  }
});
nextButton.addEventListener('click', () => {
  if (currentIndex < episodes.length - 1) {
    currentIndex++;
    updateSelectedOption();
  }
});
nextButton2.addEventListener('click', () => {
  if (currentIndex < episodes.length - 1) {
    currentIndex++;
    updateSelectedOption();
  }
});

// Function to update the selected option and load the document
// Function to load the selected document
function loadDocument(filename, episodeId) {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = ''; // Clear previous content

  if (filename) {
    const fileExtension = filename.split('.').pop().toLowerCase();
    const filePath = `chapters/${filename}`;

    if (fileExtension === 'pdf') {
      loadPDF(filePath);
    } else if (fileExtension === 'docx') {
      loadDOCX(filePath, episodeId);
    }
  }
}

function loadDOCX(url, episodeId) {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = 'Bölüm Yükleniyor...';

  fetch(url)
    .then((response) => response.arrayBuffer())
    .then((arrayBuffer) => {
      return mammoth.convertToHtml({ arrayBuffer });
    })
    .then((result) => {
      contentDiv.innerHTML = ''; // Clear loading message

      // Split the content into lines or paragraphs
      const paragraphs = result.value.split(/<\/p>\s*<p>/); // Use simple split logic for separating <p> tags

      paragraphs.forEach((paragraphContent, index) => {
        const paragraphContainer = document.createElement('div');
        paragraphContainer.classList.add('paragraph-container');
        paragraphContainer.dataset.index = index;

        // Add paragraph text
        const p = document.createElement('p');
        p.innerHTML = paragraphContent.replace(/<\/?p>/g, '').trim(); // Clean up <p> tags
        paragraphContainer.appendChild(p);


        // Capture episode title from first paragraph (data-index=0)
        if (index === 0) {
          globalEpisodeTitle = p.textContent;  // Store the first paragraph globally
        }

        // Add Comment Button with Font Awesome icon and counter
        const commentButton = document.createElement('button');
        commentButton.classList.add('comment-button');
        const commentCount = commentsCache[index]?.length || 0;

        if(commentCount > 0){
          commentButton.innerHTML = `
          <i class="fa-solid fa-message"></i>
          <span class="comment-count">${commentCount}</span>
        `;
        } else {
          commentButton.innerHTML = `
          <i class="fa-solid fa-message"></i>
          <span class="comment-count">
          <i class="fa-solid fa-plus"></i>
          </span>
        `;
        }
        commentButton.addEventListener('click', () => {
          showCommentBox(index, episodeId, paragraphContainer);
        });
        paragraphContainer.appendChild(commentButton);

        // Append paragraph container to the content div
        contentDiv.appendChild(paragraphContainer);
      });
    })
    .catch((error) => {
      console.error('Error loading DOCX:', error);
      contentDiv.innerHTML = 'Bölüm Yüklenirken Hata Oluştu Lütfen Hatayı Bizlerle Paylaşınız';
    });
}






// Function to show the comment box

function showCommentBox(paragraphIndex, episodeId, container) {

  document.querySelector('#commentModal')?.remove();
  document.querySelector('#modalOverlay')?.remove();

  // Check if a modal already exists
  let existingModal = document.querySelector('#commentModal');
  if (existingModal) {
    existingModal.remove(); // Remove any existing modals
  }


   // Create the overlay (dark background)
   const overlay = document.createElement('div');
   overlay.id = 'modalOverlay';
   overlay.classList.add('modal-overlay');
   document.body.appendChild(overlay);



  const paragraphText = container.querySelector('p').innerHTML;
  // Create the modal container
  const modal = document.createElement('div');
  modal.id = 'commentModal';
  modal.classList.add('comment-modal');

  const kitapOkuDiv = document.querySelector('.kitap-oku');
  if (kitapOkuDiv && kitapOkuDiv.classList.contains('dark-mode')) {
    modal.classList.add('dark-mode'); // Add dark-mode class to the modal
  }

  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.id = 'modalContent';
  modalContent.classList.add('modal-content');

  // Close button for modal
  const closeButton = document.createElement('span');
  closeButton.id = 'closeButton';
  closeButton.classList.add('close-button');
  closeButton.textContent = '×';
   closeButton.addEventListener('click', () => {
    modal.remove();  // Remove modal
    overlay.remove();  // Remove overlay when closing the modal
  });
  //kitap baslik
  const bookTitle = document.createElement('h3');
  bookTitle.id = 'bookTitle';
  bookTitle.textContent = globalEpisodeTitle;

  // Title for comments section - Use paragraph content
  const modalTitle = document.createElement('h3');
  modalTitle.id = 'modalTitle';
  modalTitle.innerHTML = `${paragraphText}`;  // Set paragraph content as title

  // Comments display section
  const commentDisplay = document.createElement('div');
  commentDisplay.id = `commentDisplay-${paragraphIndex}`;
  commentDisplay.classList.add('comment-display-modal');

  // Load comments from cache
  const cachedComments = commentsCache[paragraphIndex] || [];
  cachedComments.forEach((comment) => {
    const commentDiv = document.createElement('div');
    const timeAgoText = timeAgo(comment.timestamp);
    const userDiv = document.createElement('div');
    userDiv.classList.add('user-icon');
    const otherDiv = document.createElement('div');
    otherDiv.classList.add('other-div');
    otherDiv.innerHTML=`
    <strong>${comment.username}</strong> <p>${comment.comment}</p>
    <span class="time-ago">${timeAgoText}</span>
  `;

    userDiv.innerHTML= '<i class="fa-solid fa-circle-user"></i>'
    commentDiv.innerHTML = `
    ${userDiv.outerHTML}
    ${otherDiv.outerHTML}
  `;
    commentDisplay.appendChild(commentDiv);
  });

  // Input for username
  const divforinput = document.createElement('div');
  divforinput.id = 'divforinput';

  const usernameInput = document.createElement('input');
  usernameInput.id = 'usernameInput';
  usernameInput.placeholder = ' Kullanıcı Adı';

  divforinput.appendChild(usernameInput);

  const commentInputContainer = document.createElement('div');
commentInputContainer.classList.add('comment-input-container');


  // Input for comment
  const textarea = document.createElement('textarea');
  textarea.id = 'commentTextarea';
  textarea.placeholder = 'Bir yorum yaz...';

  const submitButton = document.createElement('button');
submitButton.id = 'submitButton';

// Create the <i> element for the icon
const icon = document.createElement('i');
icon.className = 'fa-regular fa-paper-plane';  // FontAwesome icon class

// Append the icon to the button
submitButton.appendChild(icon);

// Add event listener (same as before)
submitButton.addEventListener('click', async () => {
    await saveComment(paragraphIndex, episodeId, usernameInput.value, textarea.value);
    // usernameInput.value = '';
    // textarea.value = '';

    // Update the modal with the new comment
    const newComment = {
      username: usernameInput.value,
      comment: textarea.value,
      time: "1sn önce",
    };
    const newCommentDiv = document.createElement('div');

    const userDiv = document.createElement('div');
    userDiv.classList.add('user-icon');

    const otherDiv = document.createElement('div');
    otherDiv.classList.add('other-div');

    otherDiv.innerHTML=`
    <strong>${newComment.username}</strong> <p>${newComment.comment}</p>
    <span class="time-ago">${newComment.time}</span>
  `;

    userDiv.innerHTML= '<i class="fa-solid fa-circle-user"></i>';

    newCommentDiv.innerHTML = `
    ${userDiv.outerHTML}
    ${otherDiv.outerHTML}
  `;
    commentDisplay.appendChild(newCommentDiv);
});


  commentInputContainer.appendChild(textarea);
  commentInputContainer.appendChild(submitButton);  

  // Append elements to modal content
  modalContent.appendChild(closeButton);
  modalContent.appendChild(bookTitle);
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(commentDisplay);
  modalContent.appendChild(divforinput);
  // modalContent.appendChild(textarea);
  // modalContent.appendChild(submitButton);
  modalContent.appendChild(commentInputContainer);
  

  // Append modal content to modal container
  modal.appendChild(modalContent);

  // Append modal to the body
  document.body.appendChild(modal);
}

async function saveComment(paragraphIndex, episodeId, username, comment) {
  if (!username || !comment) {
    alert('Lütfen Kullanıcı Adı ve Yorum Bölümünü Doldurunuz');
    return;
  }

  const commentData = {
    username,
    comment,
    timestamp: new Date().toISOString(),
  };

  try {
    // Reference to the Firebase Realtime Database
    const commentsRef = ref(db, `comments/${currentBook}/${episodeId}/${paragraphIndex}`);

    // Push the new comment to Firebase
    await push(commentsRef, commentData);

    console.log('Comment saved for book:', currentBook);

    // Update commentsCache locally
    if (!commentsCache[paragraphIndex]) {
      commentsCache[paragraphIndex] = [];
    }
    // commentsCache[paragraphIndex].push(commentData);

    // Update the comment counter in the UI
    const button = document.querySelector(
      `.paragraph-container[data-index="${paragraphIndex}"] .comment-button`
    );
    if (button) {
      const countSpan = button.querySelector('.comment-count');
      const newCount = commentsCache[paragraphIndex].length;
      if (countSpan) {
        // countSpan.textContent = newCount; 
      }
    }

    // alert('Comment added successfully!');
  } catch (error) {
    console.error('Error saving comment to Firebase:', error);
    alert('An error occurred while saving your comment. Please try again.');
  }
}


function loadComments(paragraphIndex, episodeId, container) {
  const commentsRef = ref(db, `comments/${episodeId}/${paragraphIndex}`);

  // Listen to comments in real-time
  onValue(commentsRef, (snapshot) => {
    const comments = snapshot.val();
    container.innerHTML = ""; // Clear existing comments

    if (comments) {
      Object.values(comments).forEach((comment) => {
        const commentDiv = document.createElement("div");
        commentDiv.innerHTML = `<strong>${comment.username}:</strong> ${comment.comment}`;
        container.appendChild(commentDiv);
      });
    }
  });
}


// Update document loading with episode ID
function updateSelectedOption() {
  const episode = episodes[currentIndex];
  const previousSelected = optionsList.querySelector('.option.selected');
  if (previousSelected) {
    previousSelected.classList.remove('selected');
  }
  const newSelected = optionsList.querySelector(`.option[data-index="${currentIndex}"]`);
  if (newSelected) {
    newSelected.classList.add('selected');
  }
  episodeName.textContent = episode.name;

  // Prefetch comments for the selected episode
  // preloadCommentsForEpisode(currentIndex);

  loadDocument(episode.file, currentIndex); // Pass episode ID
  if (!isFirstLoad) {
    scrollToContentTop();
  } else {
    isFirstLoad = false;
  }
  preloadCommentsForEpisode(currentIndex);
}

async function preloadCommentsForEpisode(episodeId) {
  const commentsRef = ref(db, `comments/${currentBook}/${episodeId}`);

  onValue(commentsRef, (snapshot) => {
    const episodeComments = snapshot.val();
    commentsCache = {}; // Clear previous cache

    if (episodeComments) {
      Object.entries(episodeComments).forEach(([paragraphId, comments]) => {
        commentsCache[paragraphId] = Object.values(comments);
      });
    }
    
    // Update counters in buttons after cache is ready
    const contentDiv = document.getElementById("content");
    const buttons = contentDiv.querySelectorAll(".comment-button");
    buttons.forEach((button, index) => {
      const commentCount = commentsCache[index]?.length || 0;
      const countSpan = button.querySelector(".comment-count");
      if (countSpan) {
        if(commentCount > 0) {
          countSpan.textContent = commentCount; // Update the count dynamically
        } else {
          // Create the <i> element for the icon
          const icon = document.createElement('i');
          icon.className = 'fa-solid fa-plus';  // FontAwesome icon class
          countSpan.textContent= '';
          countSpan.appendChild(icon);
        }
      }
    });
  });
}






// Scroll to content top
function scrollToContentTop() {
  let content = document.querySelector('.playlist-class');
  if (content) {
    const contentTop = content.offsetTop + content.offsetHeight;
    window.scrollTo({
      top: contentTop,
      behavior: 'smooth',
    });
  } else {
    console.error('#content not found.');
  }
}

function timeAgo(dateString) {
  const now = new Date();
  const past = new Date(dateString);
  const diffInSeconds = Math.floor((now - past) / 1000);

  const intervals = {
    y: 31536000,
    ay: 2592000,
    hafta: 604800,
    gün: 86400,
    saat: 3600,
    dk: 60,
    sn: 1,
  };

  for (const [key, value] of Object.entries(intervals)) {
    const count = Math.floor(diffInSeconds / value);
    if (count > 0) {
      return `${count}${key} önce`;  // e.g., 2 ay önce, 1 yıl önce
    }
  }
  return "az önce";
}