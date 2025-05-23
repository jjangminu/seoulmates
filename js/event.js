$(function () {


    /*con01*/

    //text 옆에서 들어오는 효과
    gsap.timeline({
        scrollTrigger: {
            trigger: "#con01",
            start: "0% 80%",
            end: "0% 30%",
            scrub: 2,
            //markers: true,
        }
    })
        .fromTo(
            "#con01 .seoul", { x: "-200%" }, { x: "0%", ease: "none", duration: 10 }
        )
        .fromTo(
            "#con01 .festi", { x: "200%" }, { x: "0%", ease: "none", duration: 5 }
        )

    // text 고정
    gsap.timeline({
        scrollTrigger: {
            trigger: "#con01 .wrap",
            start: "0% 50%",
            end: "0% 80%",
            scrub: 2,
            //markers: true,
        }
    })
        .to("#con01 .title", { position: "fixed", zIndex: 1, left: 0, top: 0, width: "100%", ease: "none", duration: 5 }, 0)


    //모달창
    $("#con01 .hover li").on("click", function () {
        let i = $(this).index();
        $("#imge > li").hide();
        $("#imge > li").eq(i).show();
        $("#modalBox").addClass("on");
    });


    $(".xmark").on("click", function () {
        $("#modalBox").removeClass("on");
        $("#imge > li").hide(); // 모달 닫을 때 모든 이미지 숨김 처리
    });

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
});