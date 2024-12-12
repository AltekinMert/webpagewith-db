document.getElementById('slider-next').onclick = function(){
    const widthItem = document.querySelector('.item-slider').offsetWidth;
    document.getElementById('slider-formList').scrollLeft += widthItem ;
  }
  document.getElementById('slider-prev').onclick = function(){
    const widthItem = document.querySelector('.item-slider').offsetWidth;
    document.getElementById('slider-formList').scrollLeft -= widthItem;
  }


  document.addEventListener("DOMContentLoaded", function () {
    const sliderList = document.getElementById("slider-list");
    const sliderItems = document.querySelectorAll(".item-slider");

    let currentPosition = 0;
    let itemWidth = sliderItems[0].offsetWidth; // Dynamically calculate item width
    const firstSlideTime = 4000; // First slide starts after 4000ms
    const intervalTime = 11000; // Subsequent slides every 12000ms

    function slide() {
      const totalItems = sliderItems.length;
      const maxSlide = totalItems - 1;

      currentPosition++;

      if (currentPosition > maxSlide) {
        currentPosition = 0; // Reset to the first item when reaching the end
      }

      // Calculate how far to slide and apply transformation
      const translateValue = -(currentPosition * itemWidth);
      sliderList.style.transform = `translateX(${translateValue}px)`;
    }

    // Start the first slide after 4000ms
    setTimeout(() => {
      slide(); // Run the first slide immediately

      // Set interval for every 11000ms after the first slide
      setInterval(slide, intervalTime);
    }, firstSlideTime);

    // Adjust item width on window resize
    window.addEventListener("resize", () => {
      itemWidth = sliderItems[0].offsetWidth;
    });
  });