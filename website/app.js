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
 document.addEventListener("DOMContentLoaded", () => {
 const buyNowButtons = document.querySelectorAll(".sumbit");
 buyNowButtons.forEach(button => {
   button.addEventListener("click", () => {
     const payment = document.querySelector(".payment");
     payment.style.display = "flex";
     const rect = button.getBoundingClientRect();
     const paymentRect = payment.getBoundingClientRect();
     let top = rect.bottom + window.scrollY;
     const viewportWidth = window.innerWidth;
     const viewportHeight = window.innerHeight;
     if (top + paymentRect.height > viewportHeight + window.scrollY) {
       top = viewportHeight + window.scrollY - paymentRect.height;
     }
     payment.style.top = `${Math.max(top, window.scrollY)}px`;
   });
 });

 // Xử lý sự kiện cho nút "Close"
 document.querySelector(".Close").addEventListener("click", () => {
   document.querySelector(".payment").style.display = "none";
 });
});
//===================================hiệu ứng nav
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const ScreenHeight = window.innerHeight / 7;
  window.addEventListener('scroll', () => {
    if (window.scrollY >= ScreenHeight) {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'block';
    }
  });
});

//========================================================
document.addEventListener("DOMContentLoaded", () => {
  const cartImg = document.querySelector('.cart img');
  const cartPopup = document.querySelector('.cart-popup');
  const cartItemsList = document.querySelector('.cart-items');
  const totalPriceElement = document.querySelector('.total-price');
  const closeCartButton = document.querySelector('.close-cart');

  let cartItems = {};
  let totalPrice = 0;

  document.querySelectorAll('.products-item').forEach(item => {
    item.querySelector('.buynow').addEventListener('click', () => {
      const productName = item.nextElementSibling.querySelector('.products-name').textContent;
      const productPrice = parseFloat(item.nextElementSibling.querySelector('.products-price').textContent.replace('$', ''));

      if (!cartItems[productName]) {
        cartItems[productName] = { quantity: 0, price: productPrice };
      }

      cartItems[productName].quantity += 1;
      updateCart();
    });
  });

  function updateCart() {
    cartItemsList.innerHTML = '';
    totalPrice = 0;

    for (const [productName, { quantity, price }] of Object.entries(cartItems)) {
      const itemTotal = quantity * price;
      totalPrice += itemTotal;

      const li = document.createElement('li');
      li.innerHTML = `
        <span class="item-name">${productName}</span>
        <input type="number" class="item-quantity" value="${quantity}" min="0" data-product="${productName}">
        <span class="item-price">${itemTotal.toFixed(2)}$</span>
        <button class="add-item" data-product="${productName}">+</button>
        <button class="remove-item" data-product="${productName}">-</button>
      `;
      cartItemsList.appendChild(li);
    }

    document.querySelector('.cart .quantity').textContent = Object.keys(cartItems).reduce((sum, key) => sum + cartItems[key].quantity, 0);
    totalPriceElement.textContent = totalPrice.toFixed(2) + '$';

    document.querySelectorAll('.item-quantity').forEach(input => {
      input.addEventListener('change', (e) => {
        const productName = e.target.getAttribute('data-product');
        const newQuantity = parseInt(e.target.value);

        if (newQuantity >= 0) {
          cartItems[productName].quantity = newQuantity;
          if (newQuantity === 0) {
            delete cartItems[productName];
          }
          updateCart();
        }
      });
    });

    document.querySelectorAll('.add-item').forEach(button => {
      button.addEventListener('click', (e) => {
        const productName = e.target.getAttribute('data-product');
        if (cartItems[productName]) {
          cartItems[productName].quantity += 1;
          updateCart();
        }
      });
    });

    document.querySelectorAll('.remove-item').forEach(button => {
      button.addEventListener('click', (e) => {
        const productName = e.target.getAttribute('data-product');
        if (cartItems[productName]) {
          cartItems[productName].quantity -= 1;
          if (cartItems[productName].quantity <= 0) {
            delete cartItems[productName];
          }
          updateCart();
        }
      });
    });
  }

  cartImg.addEventListener('click', () => {
    cartPopup.classList.toggle('active');
  });

  closeCartButton.addEventListener('click', () => {
    cartPopup.classList.remove('active');
  });
});

//tìm kiếm sản phẩm






