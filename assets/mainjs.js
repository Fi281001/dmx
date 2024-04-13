// slide top banner
$(document).ready(function () {
  var currentIndex = 0;
  var images = [
    "/assets/img/banner.jpg", // Đường dẫn tới ảnh 1
    "/assets/img/banner2.jpg", // Đường dẫn tới ảnh 2
    // Thêm các đường dẫn tới các ảnh khác nếu cần
  ];
  var total = images.length;

  function showImage(index) {
    $(".banner-slider img").attr("src", images[index]);
    if (index === 1) {
      $(".head-banner").css("background-color", "rgb(0, 182, 241)");
    } else {
      $(".head-banner").css("background-color", "rgb(0, 137, 208)"); // Reset màu nền về mặc định
    }
  }

  $(".prev").click(function () {
    currentIndex = (currentIndex - 1 + total) % total;
    showImage(currentIndex);
  });

  $(".next").click(function () {
    currentIndex = (currentIndex + 1) % total;
    showImage(currentIndex);
  });
});
//slide banners dùng thư viên cdn
$(document).ready(function () {
  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: false,
    nextArrow: false,
  });
  // set time tự động chayj
  // tạo hàm auto slide
  function autoSlide() {
    $(".multiple-items").slick("slickNext");
  }
  var interval = setInterval(autoSlide, 3000);
  $(".multiple-items").hover(
    function () {
      clearInterval(interval); // Dừng interval khi hover vào
    },
    function () {
      interval = setInterval(autoSlide, 3000); // Bắt đầu lại interval khi hover ra
    }
  );
  $(".prev2").click(function () {
    $(".multiple-items").slick("slickPrev");
  });

  // Kích hoạt sự kiện khi click vào nút next
  $(".next2").click(function () {
    $(".multiple-items").slick("slickNext");
  });
});
// slide local
$(document).ready(function () {
  $(".multiple-items-2").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });
});
//slide product
$(document).ready(function () {
  $(".multiple-items-4").slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    rows: 2,
  });
});
//event
$(document).ready(function () {
  $(".multiple-items-3").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
  });
});
// famoust slick silde
$(".responsive").slick({
  infinite: false,
  speed: 300,
  slidesToShow: 10,
  slidesToScroll: 10,
  rows: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        rows: 2,
        dots: true,
      },
    },
  ],
});
