//chuyển động slide
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
    document.querySelector(".sliderWrapper").style.transform = `translateX(-${currentSlide * 100}vw)`;
  }
  showSlide(currentSlide);
  setInterval(nextSlide, 2000);
});
//click vào mua ngay, form thanh toán hiện lên


// --------------------------------------------------
class Create {
  Product1(name, price,image){
    return {name,price,image}
  }
  Product2(name, price){
    return {name,price}
  }
}
let newProduct = (type,profile) => {
  // profile = {name,image,price}
  if (type == 1) {
    return new Create().Product1(profile.name,profile.price,profile.image);
  } else {
    return new Create().Product2(profile.name,profile.price);
  }
}
const arrProduct = []
const name = 'new name';
const price = 250;
const image = 'http://image.jpg';
arrProduct.push(newProduct(1,{name,price,image}))
console.log(arrProduct);
// --------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const buyNowButtons = document.querySelectorAll(".buynow");
  buyNowButtons.forEach(button => {
    button.addEventListener("click", (event) => {
      const payment = document.querySelector(".payment");
      payment.style.display = "flex";
      const rect = button.getBoundingClientRect();
      const paymentRect = payment.getBoundingClientRect();
      let left = rect.left;
      let top = rect.bottom + window.scrollY;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      if (left + paymentRect.width > viewportWidth) {
        left = viewportWidth - paymentRect.width * 2;
      }
      if (top + paymentRect.height > viewportHeight + window.scrollY) {
        top = viewportHeight + window.scrollY - paymentRect.height;
      }
      payment.style.left = `${Math.max(left, 0)}px`;
      payment.style.top = `${Math.max(top, window.scrollY)}px`;
    });
  });
  // Xử lý sự kiện cho nút "Close"
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".payment").style.display = "none";
  });
});
//hiệu ứng nav
 document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const oneThirdScreenHeight = window.innerHeight / 3;
  window.addEventListener('scroll', () => {
    if (window.scrollY >= oneThirdScreenHeight) {
      nav.style.display = 'none'; 
    } else {
      nav.style.display = 'block'; 
    }
  });
});




