let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnaile .item');
let thumbnailContainer = document.querySelector('.thumbnaile');
let dots = document.querySelectorAll('.slider .dots li');


// config param
let countItem = items.length;
let itemActive = 0;
let touchStartX = 0;
let touchEndX = 0;
let autoflag = false;


//swipe detection
items.forEach(item => {
    item.addEventListener('touchstart', handleTouchStart, false);
    item.addEventListener('touchmove', handleTouchMove, false);
    item.addEventListener('touchend', handleTouchEnd, false);
});


function handleTouchStart(event) {
    touchStartX = event.changedTouches[0].screenX;
}

function handleTouchMove(event) {
    touchEndX = event.changedTouches[0].screenX;
}

function handleTouchEnd() {
    if (touchEndX == 0) {
        return;
    }
    else if (touchStartX - touchEndX > 50) {
        // Swipe left
        next.click();
        touchEndX = 0;
    } else if (touchStartX - touchEndX < -50) {
        // Swipe right
        prev.click();
        touchEndX = 0;
    }
}

// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    autoflag=true;
    next.click();
}, 5000)
function showSlider() {
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    itemActiveOld.classList.remove('active');
    // active new item
    items[itemActive].classList.add('active');

    // Update dots
    let lastActiveDot = document.querySelector('.slider .dots li.active');
    if (lastActiveDot) {
        lastActiveDot.classList.remove('active');
    }
    dots[itemActive].classList.add('active');


    if (!autoflag) {
        scrollHomeSectionToCenter();
    }    

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        autoflag = true;
        next.click();
    }, 8000);
    autoflag = false;
}
// Add click event listeners to dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});


// Scroll home-section to center vertically
function scrollHomeSectionToCenter() {
    let homeSection = document.querySelector('#home-section');
    let homeSectionBottom = homeSection.offsetTop + homeSection.offsetHeight;
    let navbar = document.querySelector('#navbar-main');
    let navbarHeight = navbar.offsetHeight;
    let thumbnaile = document.querySelector('.thumbnaile');
    let thumbnaileBottom = thumbnaile.offsetTop + thumbnaile.offsetHeight;

    if(window.scrollY > homeSectionBottom){
        return;
    }
    else if (homeSection) {
        let windowHeight = window.innerHeight;
        let sectionHeight = homeSection.offsetHeight;
        let scrollPosition = (windowHeight - sectionHeight) / 2;
        // Adjust vertical position
        window.scrollTo({
            top: (navbarHeight+sectionHeight-(navbarHeight/2))-windowHeight,
            behavior: 'smooth' // Smooth scrolling
        });
    }
}