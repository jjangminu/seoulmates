//header 위치
let header = $("header").offset().top;
//창 높이, 넓이
let innerHeight = $(window).innerHeight();
let innerWidth = $(window).width();
//페이지 전체 길이
let scrollHeight = $("body").prop("scrollHeight");

//창크기 조절 시 재부팅
$(function () {
  $(window).resize(function () {
    location.reload();
  });
});

//scroll 시 실행
$(window).on("scroll", function () {
  //현재 스크롤 위치
  let scroll = $(this).scrollTop();
  //헤더 배경, 메뉴, bar 색상 변경
  if (scroll > header) {
    $("header").addClass("on");
    $("header .pc_menu > li a").addClass("on");
    $("header .bar").addClass("on");
  } else if (scroll == header) {
    $("header").removeClass("on");
    $("header .pc_menu > li a").removeClass("on");
    $("header .bar").removeClass("on");
  }
  //fixed 버튼 보이기
  if (scroll > 150) {
    $(".fixed").fadeIn(1000);
  } else {
    $(".fixed").fadeOut(1000);
  }
  //fix 버튼 위치 변경
  if (innerHeight + scroll == scrollHeight) {
    $(".fixed").addClass("fix_mov");
  } else {
    $(".fixed").removeClass("fix_mov");
  }
});

//mobile navi
$(".bar").on("click", function () {
  $("header .modal_menu").fadeIn(200);
  $("header .modal_menu").css({ display: "flex" });
});
$(".close").on("click", function () {
  $("header .modal_menu").fadeOut(200);
});

//fixed 호버 시 이미지 회전
$(".fixed").on("mouseenter", function () {
  $(".fixed img").stop().animate({ rotate: "360deg" }, 2000);
});
$(".fixed").on("mouseleave", function () {
  $(".fixed img").stop().animate({ rotate: "0deg" }, 0);
});
//fixed 클릭 시 페이지 가장 위로 이동
$(".fixed").on("click", function () {
  $("html,body").animate({ scrollTop: "0" }, 400);
  return false;
});

//페이지 로딩 시 바로 실행
$(document).ready(function () {
  //visual image scale 축소
  $(".visual img").addClass("visual_mov1");
  //visual text 보이기
  $(".visual .title").addClass("visual_mov2");
  $(".visual .en").addClass("visual_mov3");
  //con01 보이기
  $(".con01 .wrap").stop().animate({ opacity: "1" }, 3000);
});

//con02 마우스 호버 시 사이즈 및 영상 재생
$(".con02 li").on("mouseenter", function () {
  $(".con02 li").removeClass("on");
  $(".con02 li").children("video").removeClass("on");
  $(".con02 li .text").removeClass("on");
  $(this).addClass("on");
  $(this).children("video").addClass("on");
  $(this).children(".text").addClass("on");
});

//con02 모바일, 태블릿 removeClass
if (innerWidth <= 1220) {
  $(".con02 li").removeClass("on");
  $(".con02 li").children("video").removeClass("on");
  $(".con02 li .text").removeClass("on");
  //con02 mouseleave 실행
  $(".con02 li").on("mouseleave", function () {
    $(".con02 li").removeClass("on");
    $(".con02 li").children("video").removeClass("on");
    $(".con02 li .text").removeClass("on");
  });
}

//con03 card rotate
//con03 전체 원형 틀
const circle = document.querySelector(".con03");
//con03 card, card갯수
const cards = circle.querySelectorAll(".con03 .card");
const total = cards.length;
//con03 card 순번
const count = document.querySelector(".con03 .count");
//con03 처음 순번
let currentIndex = 0;
//con03 연속 회전 함수
let autoRotateInterval = null;
let autoRotateTimeout = null;
//con03 card간 간격
let radius = 800;
//con03 웹페이지 사이즈에 맞게 간격 조절
if (innerWidth <= 1220 && innerWidth >= 600) {
  radius = 450;
} else if (innerWidth < 600) {
  radius = 300;
}
//con03 card 위치, 회전
function updatePositions() {
  cards.forEach((card, i) => {
    const diff = (i - currentIndex + total) % total;
    const angle = (diff * (2 * Math.PI)) / total - Math.PI / 2;

    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    const rotateDeg = (angle * 180) / Math.PI + 90;
    //정중앙 카드 위치
    if (i === currentIndex) {
      card.style.transform = `translate(${x}px, ${y}px)`;
    }
    //나머지 카드 위치, 회전
    else {
      card.style.transform = `translate(${x}px, ${y}px) rotate(${rotateDeg}deg)`;
    }

    if (i === currentIndex) {
      card.classList.add("center");
    }
  });
  count.textContent = `0${currentIndex + 1}`;
}
//con03 왼쪽 버튼 눌렀을 때 실행되는 함수
function rotateLeft() {
  currentIndex = (currentIndex - 1 + total) % total;
  updatePositions();
  restartAutoRotate();
}
//con03 오른쪽 버튼 눌렀을 때 실행되는 함수
function rotateRight() {
  currentIndex = (currentIndex + 1) % total;
  updatePositions();
  restartAutoRotate();
}
//con03 2초에 한번씩 반시계방향으로 회전
function startAutoRotate() {
  clearInterval(autoRotateInterval);
  autoRotateInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % total;
    updatePositions();
  }, 2000);
}
//버튼클릭 시 반복 중지 후 다시 시작해주는 함수
function restartAutoRotate() {
  clearInterval(autoRotateInterval);
  clearTimeout(autoRotateTimeout);
  autoRotateTimeout = setTimeout(startAutoRotate, 2000);
}
//con03 버튼 클릭
document.getElementById("leftBtn").addEventListener("click", rotateLeft);
document.getElementById("rightBtn").addEventListener("click", rotateRight);
//con03 함수 호출
updatePositions();
startAutoRotate();

//gsap
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  //pc
  "(min-width:1220px)": function () {
    //con01 text fill
    const textElements = gsap.utils.toArray(".con01 .b_txt");
    textElements.forEach((text) => {
      gsap.to(text, {
        backgroundSize: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
          end: "bottom 50%",
          scrub: 2,
        },
      });
    });
    //con01 icon rotate
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".con01",
          start: "60% 70%",
          end: "70% 50%",
          scrub: 2,
        },
      })
      .to(".con01 .start i", {
        rotate: -135,
      });
    //con02 background color
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".con02",
          start: "top 50%",
          end: "70% 100%",
          scrub: 2,
        },
      })
      //con01 배경 색 변경
      .to(
        ".con01 .wrap",
        {
          backgroundColor: "#2c5044",
          duration: 5,
        },
        0
      )
      //body 배경 색 변경
      .to(
        "body",
        {
          backgroundColor: "#2c5044",
          duration: 5,
        },
        0
      )
      //con03 배경 색 변경
      .to(
        ".con03",
        {
          backgroundImage: "linear-gradient(to top, #98212b, #2c5044",
          duration: 5,
        },
        0
      );
    //con02
    gsap.timeline({
      scrollTrigger: {
        trigger: ".con02",
        start: "top top",
        end: "",
        srub: 2,
        pin: true,
        pinSpacing: false, //pin여백없음
      },
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".con02",
          start: "top 50%",
          end: "70% 80%",
          scrub: 2,
        },
      })
      //con02 title 보이기
      .fromTo(
        ".con02 .title",
        {
          x: -500,
          opacity: 0,
        },
        { x: 0, opacity: 1, duration: 5 },
        0
      )
      //con02 이미지 보이기
      .fromTo(
        ".con02 .wrap li",
        {
          y: 500,
          opacity: 0,
        },
        { y: 0, opacity: 1, duration: 5 },
        0
      );
    //con03
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".con03",
          start: "top 50%",
          end: "70% 90%",
          scrub: 2,
        },
      })
      //con03 title 보이기
      .fromTo(
        ".con03 .title",
        { scale: 5, y: 500, opacity: 0 },
        { scale: 1, opacity: 1, duration: 5 },
        0
      )
      .to(".con03 .title", { y: 0 });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".con03",
          start: "80% 100%",
          end: "100% 90%",
          scrub: 2,
        },
      })
      //con03 card 보이기
      .fromTo(
        ".con03 .circle",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 },
        0
      )
      .fromTo(
        ".con03 .page",
        {
          opacity: 0,
        },
        { opacity: 1, duration: 3 },
        0
      );
    //con04
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".con04",
          start: "30% 100%",
          end: "50% 80%",
          scrub: 2,
        },
      })
      .fromTo(
        ".con04 .title p",
        { x: 500, opacity: 0 },
        { x: 0, opacity: 1, duration: 4 }
      )
      .fromTo(
        ".con04 .title h3",
        { x: -500, opacity: 0 },
        { x: 0, opacity: 1, duration: 4 },
        0
      )
      .fromTo(
        ".con04 li",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 5 },
        0
      );
  },
  //tablet
  "(max-width:1220px)": function () {
    //con01 text fill
    const textElements = gsap.utils.toArray(".con01 .b_txt");
    textElements.forEach((text) => {
      gsap.to(text, {
        backgroundSize: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: text,
          start: "top 38%",
          end: "bottom 35%",
          scrub: 2,
        },
      });
    });
    //con01 icon rotate
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".con01",
          start: "60% 40%",
          end: "70% 35%",
          scrub: 2,
        },
      })
      .to(".con01 .start i", {
        rotate: -135,
      });
    //background color
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".con02",
          start: "top 40%",
          end: "60% 60%",
          scrub: 2,
        },
      })
      //con01 배경 색 변경
      .to(
        ".con01 .wrap",
        {
          backgroundColor: "#2c5044",
          duration: 5,
        },
        0
      )
      //body 배경 색 변경
      .to(
        "body",
        {
          backgroundColor: "#2c5044",
          duration: 5,
        },
        0
      )
      //con03 배경 색 변경
      .to(
        ".con03",
        {
          backgroundImage: "linear-gradient(to top, #98212b, #2c5044",
          duration: 5,
        },
        0
      );
    //con02
    gsap.timeline({
      scrollTrigger: {
        trigger: ".con02",
        start: "top top",
        end: "",
        srub: 2,
        pin: true,
        pinSpacing: false, //pin여백없음
      },
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".con02",
          start: "top 50%",
          end: "70% 70%",
          scrub: 2,
        },
      })
      //con02 title 보이기
      .fromTo(
        ".con02 .title",
        {
          x: -500,
          opacity: 0,
        },
        { x: 0, opacity: 1, duration: 5 },
        0
      )
      //con02 이미지 보이기
      .fromTo(
        ".con02 .wrap li",
        {
          y: 500,
          opacity: 0,
        },
        { y: 0, opacity: 1, duration: 5 },
        0
      );
    //con03
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".con03",
          start: "top 30%",
          end: "70% 90%",
          scrub: 2,
        },
      })
      //con03 title 보이기
      .fromTo(
        ".con03 .title",
        { scale: 5, y: 300, opacity: 0 },
        { scale: 1, opacity: 1, duration: 5 },
        0
      )
      .to(".con03 .title", { y: 0 });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".con03",
          start: "50% 60%",
          end: "80% 40%",
          scrub: 2,
        },
      })
      //con03 card 보이기
      .fromTo(
        ".con03 .circle",
        { y: 1000, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        0
      )
      .fromTo(
        ".con03 .page",
        {
          opacity: 0,
        },
        { opacity: 1, duration: 3 }
      ),
      0;
    //con04
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".con04",
          start: "50% 100%",
          end: "70% 80%",
          scrub: 2,
        },
      })
      .fromTo(
        ".con04 .title p",
        { x: 500, opacity: 0 },
        { x: 0, opacity: 1, duration: 4 }
      )
      .fromTo(
        ".con04 .title h3",
        { x: -500, opacity: 0 },
        { x: 0, opacity: 1, duration: 4 },
        0
      )
      .fromTo(
        ".con04 li",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 5 },
        0
      );
  },
  //mobile
  "(max-width:600px)": function () {
    //con01 text fill
    const textElements = gsap.utils.toArray(".con01 .b_txt");
    textElements.forEach((text) => {
      gsap.to(text, {
        backgroundSize: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: text,
          start: "top 20%",
          end: "bottom 15%",
          scrub: 2,
        },
      });
    });
    //con01 icon rotate
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".con01",
          start: "60% 40%",
          end: "70% 35%",
          scrub: 2,
        },
      })
      .to(".con01 .start i", {
        rotate: -135,
      });
    //background color
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".con02",
          start: "top 30%",
          end: "60% 50%",
          scrub: 2,
        },
      })
      //con01 배경 색 변경
      .to(
        ".con01 .wrap",
        {
          backgroundColor: "#2c5044",
          duration: 5,
        },
        0
      )
      //body 배경 색 변경
      .to(
        "body",
        {
          backgroundColor: "#2c5044",
          duration: 5,
        },
        0
      )
      //con03 배경 색 변경
      .to(
        ".con03",
        {
          backgroundImage: "linear-gradient(to top, #98212b, #2c5044",
          duration: 5,
        },
        0
      );
    //con02
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".con02",
          start: "top 30%",
          end: "60% 60%",
          scrub: 2,
        },
      })
      //con02 title 보이기
      .fromTo(
        ".con02 .title",
        {
          x: -500,
          opacity: 0,
        },
        { x: 0, opacity: 1, duration: 5 },
        0
      )
      //con02 이미지 보이기
      .fromTo(
        ".con02 .wrap li",
        {
          y: 500,
          opacity: 0,
        },
        { y: 0, opacity: 1, duration: 5 },
        0
      );
    //con03
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".con03",
          start: "top 30%",
          end: "70% 90%",
          scrub: 2,
        },
      })
      //con03 title 보이기
      .fromTo(
        ".con03 .title",
        { scale: 5, y: 300, opacity: 0 },
        { scale: 1, opacity: 1, duration: 5 },
        0
      )
      .to(".con03 .title", { y: 0 });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".con03",
          start: "50% 50%",
          end: "80% 30%",
          scrub: 2,
        },
      })
      //con03 card 보이기
      .fromTo(
        ".con03 .circle",
        { y: 1000, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        0
      )
      .fromTo(
        ".con03 .page",
        {
          opacity: 0,
        },
        { opacity: 1, duration: 3 },
        0
      );
    //con04
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".con04",
          start: "50% 100%",
          end: "70% 80%",
          scrub: 2,
        },
      })
      .fromTo(
        ".con04 .title p",
        { x: 500, opacity: 0 },
        { x: 0, opacity: 1, duration: 4 }
      )
      .fromTo(
        ".con04 .title h3",
        { x: -500, opacity: 0 },
        { x: 0, opacity: 1, duration: 4 },
        0
      )
      .fromTo(
        ".con04 li",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 5 },
        0
      );
  },
});
