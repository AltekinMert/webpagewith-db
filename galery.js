// Local video data (update paths to your local video files)
const videos = [
    {
        title: "Yzk",
        path: "assets/videos/Yzk2.mp4",
        thumbnail: "assets/thum/yzk1.png"
    },
    {
        title: "Yzk",
        path: "assets/videos/Yzk3.mp4",
        thumbnail: "assets/thum/yzk2.png"
    },
    {
        title: "Sb",
        path: "assets/videos/Sb.mp4",
        thumbnail: "assets/thum/sb1.png"
    },
    {
        title: "As",
        path: "assets/videos/as1.mp4",
        thumbnail: "assets/thum/as1.png"
    },
    {
        title: "ös",
        path: "assets/videos/ös.mp4",
        thumbnail: "assets/thum/ös.png"
    }
];

// Helper function to create video cards
function createVideoCard(video, index) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.innerHTML = `
        <img src="${video.thumbnail}" class="thumbnail" alt="${video.title}">
        <div class="play-button"></div>
        <div class="video-info">
            <h3 class="video-title">${video.title}</h3>
        </div>
    `;
    card.addEventListener('click', () => openModal(index));
    return card;
}
// Helper function to create category sections
function createCategorySection(titleText) {
    const section = document.createElement('div');
    section.className = 'category-section';

    const header = document.createElement('h1');
    header.textContent = titleText;
    
    const grid = document.createElement('div');
    grid.className = 'video-grid';

    section.appendChild(header);
    section.appendChild(grid);

    return { section, grid };
}
// Initialize gallery
function initGallery() {
    const container = document.getElementById('galleryContainer');

    // Create containers for each category
    const categories = {
        yzk: createCategorySection("Yarınlar Zifiri Karanlık"),
        sb: createCategorySection("Sonun Başlangıcı"),
        as: createCategorySection("Askadar"),
        ös: createCategorySection("Ölümcül Serisi")
    };

    // Add all videos to their respective categories
    videos.forEach((video, index) => {
        const card = createVideoCard(video, index);
        
        if (video.title === "Yzk") {
            categories.yzk.grid.appendChild(card);
        } else if (video.title === "Sb") {
            categories.sb.grid.appendChild(card);
        } else if (video.title === "As") {
            categories.as.grid.appendChild(card);
        }else if (video.title === "ös") {
            categories.ös.grid.appendChild(card);
        }
        
    });

    // Add sections to main container
    container.appendChild(categories.yzk.section);
    container.appendChild(categories.sb.section);
    container.appendChild(categories.as.section);
    container.appendChild(categories.ös.section);
}

// Rest of the code remains the same
function openModal(index) {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('modal-video');
    
    videoPlayer.src = videos[index].path;
    modal.style.display = 'block';
    videoPlayer.play();
}

function closeModal() {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('modal-video');
    
    videoPlayer.pause();
    videoPlayer.src = '';
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Initialize the gallery when page loads
initGallery();