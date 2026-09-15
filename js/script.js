// 프로모션
setInterval(function () {

    $("#promotion_slide ul").animate({
        top: "-30px"
    }, 500, function () {

        $("#promotion_slide ul li:first-child")
            .appendTo("#promotion_slide ul");

        $("#promotion_slide ul").css("top", "0");

    });

}, 2000);


// 배너 swiper
const visualSwiper = new Swiper(".visualSwiper", {

    loop: true,

    speed: 1000,

    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },

    pagination: {
        el: ".visual_pagination",
        type: "progressbar",
    },

    navigation: {
        nextEl: ".visual_next",
        prevEl: ".visual_prev",
    },

});

// collage
$(function () {

    $(".collage_menu li a").click(function (e) {

        e.preventDefault();

        let index = $(this).parent().index();

        $(this).parent().addClass("on").siblings().removeClass("on");

        $(".collage_wrap ul").removeClass("on");
        $(".collage_wrap ul").eq(index).addClass("on");

    });

});

// product scroll

$(function () {

    // product scroll 전체 섹션
    const $productScroll = $("#product_scroll");

    // 왼쪽 / 오른쪽 이미지 묶음
    const $leftTrack = $(".product_left .product_track");
    const $rightTrack = $(".product_right .product_track");


    function productScrollMove() {

        // product_scroll이 문서 위에서 얼마나 떨어져 있는지
        const sectionTop = $productScroll.offset().top;

        // product_scroll 전체 높이
        const sectionHeight = $productScroll.outerHeight();

        // 현재 브라우저 화면 높이
        const windowHeight = $(window).height();

        // 현재 문서가 얼마나 스크롤됐는지
        const scrollTop = $(window).scrollTop();


        // product scroll 영역 안에서
        // 얼마나 진행했는지 0 ~ 1 값으로 계산
        const scrollRange = sectionHeight - windowHeight;

        let progress =
            (scrollTop - sectionTop) / scrollRange;


        // 0보다 작아지거나 1보다 커지지 않게 제한
        progress = Math.max(0, Math.min(1, progress));


        // 왼쪽 이미지 묶음이 움직일 수 있는 최대 거리
        const leftMax =
            Math.max(0, $leftTrack.outerHeight() - windowHeight);

        // 오른쪽 이미지 묶음이 움직일 수 있는 최대 거리
        const rightMax =
            Math.max(0, $rightTrack.outerHeight() - windowHeight);


        // 왼쪽 이미지
        // 스크롤할수록 아래에서 위로 올라감
        $leftTrack.css(
            "transform",
            "translateY(" + (-leftMax * progress) + "px)"
        );


        // 오른쪽 이미지
        // 처음에는 위로 당겨져 있다가
        // 스크롤할수록 아래로 내려옴
        $rightTrack.css(
            "transform",
            "translateY(" + (-rightMax * (1 - progress)) + "px)"
        );

    }


    // 스크롤할 때마다 실행
    $(window).on("scroll", function () {
        productScrollMove();
    });


    // 브라우저 크기가 바뀔 때도 다시 계산
    $(window).on("resize", function () {
        productScrollMove();
    });


    // 새로고침했을 때 현재 스크롤 위치에 맞게 한 번 실행
    productScrollMove();

});

// Instagram Swiper 
var swiper = new Swiper(".instaSwiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 5000,
});
