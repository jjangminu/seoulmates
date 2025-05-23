$(function () {
  let header = $("header").offset().top;
  let innerHeight = $(window).innerHeight();
  let scrollHeight = $("body").prop("scrollHeight");

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

    if (scroll >= 150) {
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

  //mouse 올렸을 때 이미지 회전
  $(".fixed").on("mouseenter", function () {
    $(".fixed img").stop().animate({ rotate: "360deg" }, 2000);
  });
  $(".fixed").on("mouseleave", function () {
    $(".fixed img").stop().animate({ rotate: "0deg" }, 0);
  });
  //페이지 가장 위로 이동
  $(".fixed").on("click", function () {
    $("html,body").animate({ scrollTop: "0" }, 400);
    return false;
  });
  //visual
  gsap.fromTo(
    "#visual",
    { "clip-path": "inset(60% 60% 60% 60% round 30%)" },
    {
      "clip-path": "inset(0% 0% 0% 0% round 0%",
      ease: "none",
      duration: 2,
    }
  );

  // con01
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con01",
        start: "0% 50%",
        end: "30% 60%",
        scrub: 2,
        // markers: true,
      },
    })
    .fromTo(
      ".con01 h2",
      { y: "50%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 10 }
    );
  // con02
  $(function () {
    $(".con02 .bg").simplyScroll({
      speed: 4,
      pauseOnHover: false,
      pauseOnTouch: false,
    });
  });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con02",
        start: "0% 50%",
        end: "30% 60%",
        scrub: 2,
        // markers: true,
      },
    })
    .fromTo(
      ".con02 h2",
      { y: "50%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 10 }
    );
  $(".con02 li").on("mouseenter", function () {
    $(this).find("img").addClass("on");
  });
  $(".con02 li").on("mouseleave", function () {
    $(this).find("img").removeClass("on");
  });

  // con03
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con03",
        start: "0% 60%",
        end: "30% 60%",
        scrub: 2,
        // markers: true,
      },
    })
    .fromTo(
      ".con03 h2",
      { y: "50%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 10 }
    );

  $(" .con03 .place01_pc > li").on("mouseenter", function () {
    let i = $(this).index();
    console.log(i);
    $(".con03 .place_bg > li").hide();
    $(".con03 .place_bg > li").eq(i).show();
  });
  // con03 태블릿 모바일
  let i = 0;
  let start = setInterval(function () {
    if (i === 3) {
      i = 0;
    } else {
      i++;
    }
    $(".con03 .place02_mo")
      .stop()
      .animate({ "margin-left": "-100%" }, 2000, function () {
        $(".place02_mo li:first-child").appendTo(".con03 .place02_mo");
        $(".con03 .place02_mo").css({ "margin-left": "0" });
      });
  }, 3000);

  $(".next").on("click", function () {
    clearInterval(start);
    if (i === 3) {
      i = 0;
    } else {
      i++;
    }

    $(".con03 .place02_mo")
      .stop()
      .animate({ "margin-left": "-100%" }, 2000, function () {
        $(".place02_mo li:first-child").appendTo(".con03 .place02_mo");
        $(".con03 .place02_mo").css({ "margin-left": "0" });
      });
  });

  $(".prev").on("click", function () {
    clearInterval(start);
    if (i === 0) {
      i = 3;
    } else {
      i--;
    }
    $(".place02_mo li:last-child").prependTo(".con03 .place02_mo");
    $(".con03 .place02_mo").css({ "margin-left": "-100%" });
    $(".con03 .place02_mo").animate({ "margin-left": "0" });
  });
});
