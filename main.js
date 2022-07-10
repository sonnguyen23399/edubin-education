const barsIcon = document.querySelector(".bars-icon");
const headerMenu = document.querySelector(".header-menu");
const subNavs = document.querySelectorAll(".sub-nav");
const plusIcons = document.querySelectorAll(".nav-link > a");
const nav = document.querySelector(".navigation");
const scrollToTop = document.querySelector(".scroll-to-top");
let navTop = nav.offsetTop;

barsIcon.addEventListener("click", () => {
  headerMenu.classList.toggle("visible");
});

for (let i = 0; i < subNavs.length; i++) {
  plusIcons[i].addEventListener("click", () => {
    subNavs[i].classList.toggle("visible");
  });
}

function handleScroll() {
  if (window.scrollY >= navTop) {
    nav.classList.add("fixed");
    scrollToTop.classList.add("visible");
  } else {
    nav.classList.remove("fixed");
    scrollToTop.classList.remove("visible");
  }
}

window.addEventListener("scroll", handleScroll);

$(".slide").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 300000,
  prevArrow: $(".slide-prev"),
  nextArrow: $(".slide-next"),
});

$(".flatform-slick").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $(".flatform-prev"),
  nextArrow: $(".flatform-next"),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
});

$(".partners-list").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        autoplaySpeed: 2000,
      },
    },
  ],
});

$(".feedback-list").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        autoplaySpeed: 2000,
      },
    },
  ],
});

fetch("https://60d4611a61160900173cb070.mockapi.io/courses")
  .then((res) => res.json())
  .then((data) => getCouresList(data))
  .catch((err) => console.log(err))
  .finally(() => console.log("Loading courses list is done"));

const getCouresList = (data) => {
  const coursesList = document.querySelector(".courses-list");

  let html = "";

  data.map((data) => {
    let lisList = "";
    for (let i = 0; i < 5; i++) {
      if (i < data.rate) {
        lisList += '<li><i class="fa-solid fa-star bg-primary"></i></li>';
      } else lisList += '<li><i class="fa-regular fa-star"></i></li>';
    }
    console.log(lisList);
    html += `
        <div class="course">
        <div class="image-price">
          <img
            class="image"
            src= ${data.image}
            alt=""
          />
          <div class="level">${data.level}</div>
          <i class="fa-regular fa-bookmark"></i>
        </div>
        <div class="course-content p-5">
          <div class="flex">
            <div class="rate">
              <ul class="flex mr-4 mb-3">
                ${lisList}
              </ul>
            </div>
            <div class="rate_quantity text-gray-6">
              ${data.rate} (${data.rate_quantity})
            </div>
          </div>
          <a href="#" class="course-name name font-bold text-xl text-secondary">
            ${data.name}
          </a>
          <div class="flex items-center ml-auto text-gray-6 my-3">
            <i class="fa-regular fa-user h-4 mr-1 text-sm"></i>
            <div class="mr-2">${data.total_enrolled}</div>
            <i class="fa-regular fa-clock mr-1"></i>
            <div>${data.duration}</div>
          </div>
          <div class="flex items-center text-sm">
            <img
              src="/public/images/teacher_1.jpg"
              alt=""
              width="20"
              height="20"
              class="rounded-full mr-2"
            />
            <div class="font-medium text-gray-5">by <a href="#" class="text-secondary name">
              ${data.teacher}
            </a> In <a href="#" class="text-secondary language">
                ${data.categories}</a>
            </div>
          </div>
          <div
            class="course-footer flex justify-between items-center mt-6 pt-5"
          >
            <div class="flex items-center text-secondary">
              ${data.price != 0 ? `&#163;${data.price}` : "Free"}
            </div>
            <a href="#" class="flex justify-end items-center ml-auto text-sm">
              <i class="fa-solid fa-cart-shopping h-4 mr-1 text-primary opacity-75"></i>
              <div class="text-gray-8">Get Enrolled</div>
            </a>
            <p></p>
          </div>
        </div>
      </div>
        `;
    return html;
  });

  coursesList.innerHTML = html;

  $(".courses-list").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".course-prev"),
    nextArrow: $(".course-next"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  });
};

// handle toggle youtube frame
document.querySelector(".facilities-btn").addEventListener("click", () => {
  document.querySelector(".youtube-overlay").classList.add("visible");
});
document.querySelector(".youtube-overlay").addEventListener("click", () => {
  document.querySelector(".youtube-overlay").classList.remove("visible");
});

// Render books list
const bookImgList = document.querySelectorAll(".book-img");
for (key in bookImgList) {
  let innerHTML = `
      <img src="/public/images/book_${key}.jpg" alt="Book 9">
      <div class="book-overlay">
        <div>
          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>`;
  bookImgList[key].innerHTML = innerHTML;
}
