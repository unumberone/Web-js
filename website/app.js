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

document.addEventListener("DOMContentLoaded", () => {
  // Xử lý sự kiện cho các nút "Buy Now"
  const buyNowButtons = document.querySelectorAll(".buynow");
  buyNowButtons.forEach(button => {
      button.addEventListener("click", (event) => {
          const payment = document.querySelector(".payment");
          payment.style.display = "flex";

          // Lấy vị trí của nút
          const rect = button.getBoundingClientRect();
          const paymentRect = payment.getBoundingClientRect();
          
          // Tính toán vị trí và điều chỉnh nếu cần
          let left = rect.left;
          let top = rect.bottom + window.scrollY;
          
          // Xác định các giới hạn của viewport
          const viewportWidth = window.innerWidth;
          const viewportHeight = window.innerHeight;

          // Điều chỉnh nếu form nằm ngoài viewport theo chiều ngang
          if (left + paymentRect.width > viewportWidth) {
              left = viewportWidth - paymentRect.width * 2;
          }

          // Điều chỉnh nếu form nằm ngoài viewport theo chiều dọc
          if (top + paymentRect.height > viewportHeight + window.scrollY) {
              top = viewportHeight + window.scrollY - paymentRect.height;
          }

          // Đặt vị trí của form thanh toán
          payment.style.left = `${Math.max(left, 0)}px`;
          payment.style.top = `${Math.max(top, window.scrollY)}px`;
      });
  });

  // Xử lý sự kiện cho nút "Close"
  document.querySelector(".close").addEventListener("click", () => {
      document.querySelector(".payment").style.display = "none";
  });
});

