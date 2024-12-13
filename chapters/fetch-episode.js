// List of episodes (your existing array)
const API_URL = 'https://this-should-work-l9hj.onrender.com'; // JSON Server API URL

const episodes = [
    { name: 'Yzk-Tanıtım', file: 'giris.docx' },
    { name: 'YZK 1.Bölüm', file: 'yzk ilkk bölüm.docx' },
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
  loadDocument(episode.file);
  if (!isFirstLoad) {
    scrollToContentTop();
  } else {
    isFirstLoad = false;
  }
}

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

        // Add Comment Button
        const commentButton = document.createElement('button');
        commentButton.textContent = 'Add Comment';
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

  // Load comments for this paragraph
  loadComments(paragraphIndex, episodeId, commentDisplay);

  // Input for username
  const usernameInput = document.createElement('input');
  usernameInput.id = 'usernameInput';
  usernameInput.placeholder = 'Your username';

  // Input for comment
  const textarea = document.createElement('textarea');
  textarea.id = 'commentTextarea';
  textarea.placeholder = 'Your comment';

  // Submit button
  const submitButton = document.createElement('button');
  submitButton.id = 'submitButton';
  submitButton.textContent = 'Submit';
  submitButton.addEventListener('click', () => {
    saveComment(paragraphIndex, episodeId, usernameInput.value, textarea.value);
    usernameInput.value = '';
    textarea.value = '';
    loadComments(paragraphIndex, episodeId, commentDisplay); // Reload comments
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





// Function to save a comment
async function saveComment(paragraphIndex, episodeId, username, comment) {
  if (!username || !comment) {
    alert('Please enter both username and comment.');
    return;
  }

  try {
    await fetch(`${API_URL}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        episodeId,
        paragraphId: paragraphIndex,
        username,
        comment,
        timestamp: new Date().toISOString(),
      }),
    });

    // Fetch the updated database from Render API
    const response = await fetch(`${API_URL}/comments`);
    if (!response.ok) {
      throw new Error(`Failed to fetch updated database: ${response.statusText}`);
    }

    const dbData = await response.json();

    // Save the fetched database locally
    const LOCAL_DB_PATH = '../db.json'; // Ensure this path is correct
    fs.writeFileSync(LOCAL_DB_PATH, JSON.stringify(dbData, null, 2));
    console.log('Local db.json updated with the latest comments.');

  } catch (error) {
    console.error('Error saving comment or updating local database:', error.message);
  }
}
async function loadComments(paragraphIndex, episodeId, container) {
  try {
    const response = await fetch(
      `${API_URL}/comments?episodeId=${episodeId}&paragraphId=${paragraphIndex}`
    );
    const comments = await response.json();

    let commentDisplay = container.querySelector('.comment-display');
    if (commentDisplay) {
      commentDisplay.remove();
    }

    commentDisplay = document.createElement('div');
    commentDisplay.classList.add('comment-display');

    comments.forEach((comment) => {
      const commentDiv = document.createElement('div');
      commentDiv.innerHTML = `<strong>${comment.username}:</strong> ${comment.comment}`;
      commentDisplay.appendChild(commentDiv);
    });

    container.appendChild(commentDisplay);
  } catch (error) {
    console.error('Error loading comments:', error);
  }
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

// Function to preload comments for an episode
async function preloadCommentsForEpisode(episodeId) {
  try {
    const response = await fetch(`${API_URL}/comments?episodeId=${episodeId}`);
    const comments = await response.json();

    // Organize comments by paragraph ID and store in cache
    commentsCache = {};
    comments.forEach((comment) => {
      if (!commentsCache[comment.paragraphId]) {
        commentsCache[comment.paragraphId] = [];
      }
      commentsCache[comment.paragraphId].push(comment);
    });
  } catch (error) {
    console.error('Error preloading comments:', error);
  }
}




// Scroll to content top
function scrollToContentTop() {
  let content = document.querySelector('#content');
  if (content) {
    const contentTop = content.offsetTop;
    window.scrollTo({
      top: contentTop,
      behavior: 'smooth',
    });
  } else {
    console.error('#content not found.');
  }
}