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

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({
    "(min-width:1200px)": function () {
      /*con01 */
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".con01",
            start: "0% 50%",
            end: "30% 0%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(
          ".circle",
          { width: 0, height: 0, duration: 10, top: "3%" },
          { width: "2500px", height: "2500px", duration: 10, top: "40%" }
        );

      /*con01 seoul*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".con01",
            start: "0% 50%",
            end: "30% 0%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(
          ".seoul",
          { duration: 10, top: "50%" },
          { duration: 10, top: "0" }
        );

      let list = gsap.utils.toArray(".con02 .con02_list li");
      let listA = gsap.utils.toArray(".con02 .con02_list li.a");
      let listB = gsap.utils.toArray(".con02 .con02_list li.b");
      gsap.to(list, {
        scrollTrigger: {
          trigger: ".con02",
          pin: true,
          scrub: 2,
          start: "center center",
          end: "100% 0%",
          //markers: true,
        },
        xPercent: -500,
        ease: "none",
      });

      gsap.to(listA, {
        rotation: 20,
        scrollTrigger: {
          trigger: ".con01",
          scrub: 2,
          end: "100%",
        },
      });
      gsap.to(listB, {
        rotation: -20,
        scrollTrigger: {
          trigger: ".con01",
          scrub: 2,
          end: "100%",
        },
      });
    },

    "(min-width:600px) and (max-width:1200px)": function () {
      /*con01 */
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".con01",
            start: "0% 50%",
            end: "30% 0%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(
          ".circle",
          { width: 0, height: 0, duration: 10, top: "3%" },
          { width: "2500px", height: "2500px", duration: 10, top: "40%" }
        );

      /*con01 seoul*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".con01",
            start: "0% 50%",
            end: "30% 0%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(
          ".seoul",
          { duration: 10, top: "50%", opacity: 0 },
          { duration: 10, top: "0", opacity: 1 }
        );

      let list = gsap.utils.toArray(".con02 .con02_list li");
      let listA = gsap.utils.toArray(".con02 .con02_list li.a");
      let listB = gsap.utils.toArray(".con02 .con02_list li.b");
      gsap.to(list, {
        scrollTrigger: {
          trigger: ".con02",
          pin: true,
          scrub: 2,
          start: "center center",
          end: "100% 0%",
          //markers: true,
        },
        xPercent: -500,
        ease: "none",
      });

      gsap.to(listA, {
        rotation: 20,
        scrollTrigger: {
          trigger: ".con01",
          scrub: 2,
          end: "100%",
        },
      });
      gsap.to(listB, {
        rotation: -20,
        scrollTrigger: {
          trigger: ".con01",
          scrub: 2,
          end: "100%",
        },
      });
    },

    "(max-width:600px)": function () {
      /*con01 */
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".con01",
            start: "40% 50%",
            end: "40% 0%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(
          ".circle",
          { width: 0, height: 0, duration: 10, top: "3%" },
          { width: "2500px", height: "2500px", duration: 10, top: "40%" }
        );

      /*con01 seoul*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".con01",
            start: "0% 30%",
            end: "60% 0%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(
          ".seoul",
          { duration: 10, top: "50%", opacity: 0 },
          { duration: 10, top: "0", opacity: 1 }
        );

      /*con02*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".con02",
            start: "top 50%",
            end: "top 50%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(
          ".con02 .con02_textBox h2",
          { duration: 5, x: -1000 },
          { duration: 5, x: 0 },
          0
        )
        .fromTo(
          ".con02 .con02_textBox p",
          { duration: 5, x: 1000 },
          { duration: 5, x: 0 },
          0
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".con02 .con02_list",
            start: "top 50%",
            end: "70% 50%",
            scrub: 2,
            //markers: true,
          },
        })
        .fromTo(
          ".con02 .con02_list .list01",
          { duration: 10, y: 1000 },
          { duration: 10, y: 0 }
        )
        .fromTo(
          ".con02 .con02_list .list02",
          { duration: 10, y: 1000 },
          { duration: 10, y: 0 }
        )
        .fromTo(
          ".con02 .con02_list .list03",
          { duration: 10, y: 1000 },
          { duration: 10, y: 0 }
        )
        .fromTo(
          ".con02 .con02_list .list04",
          { duration: 10, y: 1000 },
          { duration: 10, y: 0 }
        );
    },
  });
});
