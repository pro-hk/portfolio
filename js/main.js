Splitting();
const typed = new Typed(".typing .txt", {
  strings: [
    "I am little <strong>slow</strong>",
    "but, try <strong>steadily</strong>",
    "I want to be a <strong>full stack developer</strong>.",
    "my name is <strong>Jang Hyeok</strong>",
    "keep an <strong>eyes on me.</strong>",
  ],
  typeSpeed: 50,
  startDelay: 1000,
  backSpeed: 20,
  backDelay: 3000,
  loop: true,
});

gsap.defaults({
  duration: 1,
  ease: "back",
});

// ScrollTrigger.defaults({
//   markers: true,
// });

const mySkill = {
  java: $("#skill ul li").eq(0).find(".num").data("percent"),
  jsp: $("#skill ul li").eq(1).find(".num").data("percent"),
  spring: $("#skill ul li").eq(2).find(".num").data("percent"),
  oracleDB: $("#skill ul li").eq(3).find(".num").data("percent"),
  kotlin: $("#skill ul li").eq(4).find(".num").data("percent"),
};
const skillTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#skill",
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 0.5,
  },
});
skillTL
  .from(
    "#skill ul li",
    {
      y: "-100",
      opacity: 0,
      stagger: {
        each: 0.1,
      },
    },
    "circleStart"
  )
  .to(
    "#skill ul li:nth-child(1) .line circle ",
    {
      strokeDashoffset: -570 * 0.15,
      ease: "linear",
      duration: 3,
    },
    "circleStart+=1"
  )
  .to(
    "#skill ul li:nth-child(2) .line circle ",
    {
      strokeDashoffset: -570 * 0.15,
      ease: "linear",
      duration: 3,
    },
    "circleStart+=1"
  )
  .to(
    "#skill ul li:nth-child(3) .line circle ",
    {
      strokeDashoffset: -570 * 0.1,
      ease: "linear",
      duration: 3,
    },
    "circleStart+=1"
  )
  .to(
    "#skill ul li:nth-child(4) .line circle ",
    {
      strokeDashoffset: -570 * 0.15,
      ease: "linear",
      duration: 3,
    },
    "circleStart+=1"
  )
  .to(
    "#skill ul li:nth-child(5) .line circle ",
    {
      strokeDashoffset: -570 * 0.3,
      ease: "linear",
      duration: 3,
    },
    "circleStart+=1"
  )
  .from(
    mySkill,
    {
      java: 0,
      jsp: 0,
      spring: 0,
      oracleDB: 0,
      kotlin: 0,
      duration: 3,
      ease: "linear",
      onUpdate: function () {
        $("#skill li").eq(0).find(".num").text(Math.floor(mySkill.java));
        $("#skill li").eq(1).find(".num").text(Math.floor(mySkill.jsp));
        $("#skill li").eq(2).find(".num").text(Math.floor(mySkill.spring));
        $("#skill li").eq(3).find(".num").text(Math.floor(mySkill.oracleDB));
        $("#skill li").eq(4).find(".num").text(Math.floor(mySkill.kotlin));
      },
    },
    "circleStart+=1"
  )
  .from("#skill .knowlege", {
    y: "+100",
    opacity: 0,
  })
  .from("#skill .knowleges", {
    y: "+100",
    opacity: 0,
  });

// // main section scroll event
// var height = $(window).height();
// $("#intro").on("mousewheel", function (e) {
//   const num = $(this).index();
//   console.log(num);
//   if (e.originalEvent.wheelDelta < 0) {
//     e.preventDefault();
//     $("html").animate({ scrollTop: height * (num + 1) }, 1000);
//   }
// });

// $("#aboutMe").on("mousewheel", function (e) {
//   const num = $(this).index();
//   console.log(num);
//   if (e.originalEvent.wheelDelta < 0) {
//     e.preventDefault();
//     $("html").animate({ scrollTop: height * (num + 1) }, 1000);
//   } else {
//     e.preventDefault();
//     $("html").animate({ scrollTop: height * (num - 1) }, 1000);
//   }
// });

var hwenSwiper = new Swiper(".hwen", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var poopSwiper = new Swiper(".poop", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var poopSwiper = new Swiper(".instagram", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var projectSwiper = new Swiper(".contents", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
});

// nav 클릭 시, 'on' class 추가
$("nav a").on("click", function () {
  var parent = $(this).parent();
  parent.addClass("on");
  parent.siblings().removeClass("on");
});

$(".menu").on("click", function () {
  $("header").toggleClass("on");
  $("main").toggleClass("on");
  $("#project .swiper-pagination").toggleClass("on");
});
