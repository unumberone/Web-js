const sliderWrapper = document.querySelector(".sliderWrapper");
const sliderItems = Array.from(document.querySelectorAll(".sliderItem"));
const itemCount = sliderItems.length;
// Đặt kích thước của sliderWrapper để chứa tất cả các phần tử
sliderWrapper.style.width = `${itemCount * 100}%`;
function rotateSlides() {
  // Chuyển phần tử đầu tiên ra khỏi danh sách
  const firstItem = sliderItems.shift();
  sliderItems.push(firstItem);
  // Cập nhật DOM để phản ánh sự thay đổi
  sliderWrapper.innerHTML = ""; 
  sliderItems.forEach((item) => sliderWrapper.appendChild(item)); 
  // Tính toán dịch chuyển cần thiết
  const offset = -100; // Dịch chuyển một slide về phía bên trái
  sliderWrapper.style.transform = `translateX(${offset}%)`;
  setTimeout(() => {
    sliderWrapper.style.transition = "none"; // Tắt hiệu ứng chuyển động
    sliderWrapper.style.transform = `translateX(0%)`; // Quay lại vị trí ban đầu
    // Cập nhật DOM để phản ánh sự thay đổi
    sliderWrapper.appendChild(firstItem); // Đặt phần tử đầu tiên về cuối
    setTimeout(() => {
      sliderWrapper.style.transition = "transform 1s ease-in-out";
}, 20); }, 3000); 
}
setInterval(rotateSlides, 3000);
