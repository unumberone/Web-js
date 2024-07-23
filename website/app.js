document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".sliderItem");
  let currentSlide = 0;
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.querySelector(".sliderImg").classList.toggle("active", i === index);
    });
  }
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    document.querySelector(".sliderWrapper").style.transform = `translateX(-${ currentSlide * 100  }vw)`;
  }
  showSlide(currentSlide);
  setInterval(nextSlide, 2000);
});

document.addEventListener('DOMContentLoaded', () => {
  const cartMap = new Map();
  const products = document.querySelectorAll('.products li');

  products.forEach(product => {
      product.querySelector('.buy-now').addEventListener('click', () => {
          const itemKey = product.getAttribute('data-key');
          const itemNew = product.cloneNode(true);

          if (cartMap.has(itemKey)) {
              const existingItem = cartMap.get(itemKey);
              existingItem.classList.add('danger');
              setTimeout(() => {
                  existingItem.classList.remove('danger');
              }, 1000);
          } else {
              cartMap.set(itemKey, itemNew);
              document.querySelector('.list-cart').appendChild(itemNew);
          }
      });
  });
});
