// List of episodes (your existing array)
// const API_URL = 'https://this-should-work-l9hj.onrender.com'; 

const episodes = [
    { name: 'YZK 1.Bölüm', file: 'yzk-1.docx' },
    { name: 'YZK 2.Bölüm', file: 'yzk-2.docx' },
    { name: 'YZK 3.Bölüm', file: 'yzk-3.docx' },
    { name: 'YZK 4.Bölüm', file: 'yzk-4.docx' },
    { name: 'YZK 5.Bölüm', file: 'yzk-5.docx' },
    { name: 'YZK 6.Bölüm', file: 'yzk-6.docx' },
    { name: 'YZK 7.Bölüm', file: 'yzk-7.docx' },
    { name: 'YZK 8.Bölüm', file: 'yzk-8.docx' },
    { name: 'YZK 9.Bölüm', file: 'yzk-9.docx' },
    { name: 'YZK 10.Bölüm', file: 'yzk-10.docx' },
    { name: 'YZK 11.Bölüm', file: 'yzk-11.docx' },
    { name: 'YZK 12.Bölüm', file: 'yzk-12.docx' },
    { name: 'YZK 13.Bölüm', file: 'yzk-13.docx' },
    { name: 'YZK 14.Bölüm', file: 'yzk-14.docx' },
    { name: 'YZK 15.Bölüm', file: 'yzk-15.docx' },
    { name: 'YZK 16.Bölüm', file: 'yzk-16.docx' },
    { name: 'YZK 17.Bölüm', file: 'yzk-17.docx' },
    { name: 'YZK 18.Bölüm', file: 'yzk-18.docx' },
    { name: 'YZK 19.Bölüm', file: 'yzk-19.docx' },
    { name: 'YZK 20.Bölüm', file: 'yzk-20.docx' },
    { name: 'YZK 21.Bölüm', file: 'yzk-21.docx' },
    { name: 'YZK 22.Bölüm', file: 'yzk-22.docx' },
    { name: 'YZK 23.Bölüm', file: 'yzk-23.docx' },
    { name: 'YZK 24.Bölüm', file: 'yzk-24.docx' },
    { name: 'YZK 25.Bölüm', file: 'yzk-25.docx' },
    // Add more episodes as needed
  ];
  
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
  contentDiv.innerHTML = 'Loading DOCX...';

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

        // Add Comment Button with Font Awesome icon and counter
        const commentButton = document.createElement('button');
        commentButton.classList.add('comment-button');
        const commentCount = commentsCache[index]?.length || 0;
        commentButton.innerHTML = `
          <i class="fa-solid fa-message"></i>
          <span class="comment-count">${commentCount}</span>
        `;
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
      contentDiv.innerHTML = 'Error loading document.';
    });
}






// Function to show the comment box

function showCommentBox(paragraphIndex, episodeId, container) {
  // Check if a modal already exists
  let existingModal = document.querySelector('#commentModal');
  if (existingModal) {
    existingModal.remove(); // Remove any existing modals
  }

  // Create the modal container
  const modal = document.createElement('div');
  modal.id = 'commentModal';
  modal.classList.add('comment-modal');

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
    modal.remove(); // Close the modal
  });

  // Title for comments section
  const modalTitle = document.createElement('h3');
  modalTitle.id = 'modalTitle';
  modalTitle.textContent = `Comments for Paragraph ${paragraphIndex + 1}`;

  // Comments display section
  const commentDisplay = document.createElement('div');
  commentDisplay.id = `commentDisplay-${paragraphIndex}`;
  commentDisplay.classList.add('comment-display-modal');

  // Load comments from cache
  const cachedComments = commentsCache[paragraphIndex] || [];
  cachedComments.forEach((comment) => {
    const commentDiv = document.createElement('div');
    commentDiv.innerHTML = `<strong>${comment.username}:</strong> ${comment.comment}`;
    commentDisplay.appendChild(commentDiv);
  });

  // Input for username
  const usernameInput = document.createElement('input');
  usernameInput.id = 'usernameInput';
  usernameInput.placeholder = 'Kullanıcı Adı';

  // Input for comment
  const textarea = document.createElement('textarea');
  textarea.id = 'commentTextarea';
  textarea.placeholder = 'Bir yorum yaz';

  // Submit button
  const submitButton = document.createElement('button');
  submitButton.id = 'submitButton';
  submitButton.textContent = 'Submit';
  submitButton.addEventListener('click', async () => {
    await saveComment(paragraphIndex, episodeId, usernameInput.value, textarea.value);
    usernameInput.value = '';
    textarea.value = '';

    // Update the modal with the new comment
    const newComment = {
      username: usernameInput.value,
      comment: textarea.value,
    };
    const newCommentDiv = document.createElement('div');
    newCommentDiv.innerHTML = `<strong>${newComment.username}:</strong> ${newComment.comment}`;
    commentDisplay.appendChild(newCommentDiv);
  });

  // Append elements to modal content
  modalContent.appendChild(closeButton);
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(commentDisplay);
  modalContent.appendChild(usernameInput);
  modalContent.appendChild(textarea);
  modalContent.appendChild(submitButton);
  

  // Append modal content to modal container
  modal.appendChild(modalContent);

  // Append modal to the body
  document.body.appendChild(modal);
}

async function saveComment(paragraphIndex, episodeId, username, comment) {
  if (!username || !comment) {
    alert('Please enter both username and comment.');
    return;
  }

  const commentData = {
    username,
    comment,
    timestamp: new Date().toISOString(),
  };

  try {
    // Reference to the Firebase Realtime Database
    const commentsRef = ref(db, `comments/${episodeId}/${paragraphIndex}`);

    // Push the new comment to Firebase
    await push(commentsRef, commentData);

    console.log('Comment saved successfully:', commentData);

    // Update commentsCache locally
    if (!commentsCache[paragraphIndex]) {
      commentsCache[paragraphIndex] = [];
    }
    commentsCache[paragraphIndex].push(commentData);

    // Update the comment counter in the UI
    const button = document.querySelector(
      `.paragraph-container[data-index="${paragraphIndex}"] .comment-button`
    );
    if (button) {
      const countSpan = button.querySelector('.comment-count');
      const newCount = commentsCache[paragraphIndex].length;
      if (countSpan) {
        countSpan.textContent = newCount; // Update the counter dynamically
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
  preloadCommentsForEpisode(currentIndex);

  loadDocument(episode.file, currentIndex); // Pass episode ID
  if (!isFirstLoad) {
    scrollToContentTop();
  } else {
    isFirstLoad = false;
  }
}

async function preloadCommentsForEpisode(episodeId) {
  const commentsRef = ref(db, `comments/${episodeId}`);

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
        countSpan.textContent = commentCount; // Update the count dynamically
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