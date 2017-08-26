$(function () {
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 2000,//可选选项，自动滑动
        loop : true,
        pagination : '.swiper-pagination',
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next'
    });
    $(".option li").on("click", function () {
        router("commodity");
        // console.log(1)
    });
    $(".productList li").on("click", function () {
        router("detail");
        console.log(1)
    });

    $("#landId").click(function () {
        router("landId", $("#homeWrap"));
    });
    $("#registerId").click(function () {
        router("registerId", $("#homeWrap"));
    })
})