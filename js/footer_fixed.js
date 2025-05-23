$(function () {
  //mouse 올렸을 때 이미지 회전
  $(".fixed").on("mouseenter", function () {
    $(".fixed img").animate({ rotate: "360deg" }, 2000);
  });
  $(".fixed").on("mouseleave", function () {
    $(".fixed img").css({ rotate: "0deg" }, 0);
  });
  //페이지 가장 위로 이동
  $(".fixed").on("click", function () {
    $("html,body").animate({ scrollTop: "0" }, 400);
    return false;
  });
});
