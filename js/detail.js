$(function () {
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 2000,//可选选项，自动滑动
        loop : true,
        pagination : '.swiper-pagination',
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next'
    });
    $("#detailgoback").click(function () {
        window.history.go(-1);//返回上一页
        window.location.reload();//刷新
    });
    $("#liked").click(function () {
        if ($(this).hasClass("active")){
            $(this).removeClass("active")
        }else{
            $(this).addClass("active")
        }
    });
    $("#forlist li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    $("#catelist a").click(function () {
        let _index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".proinfoList").eq(_index).show().siblings(".proinfoList").hide();
    });
    $("#jionCart").click(function () {
        router("shopping");
    });
    $("#univalentDel").click(function () {
        let num = $("#univalentNum").html();
        +num--
        if (num < 0){
            router("commodity");
        }
        $("#univalentNum").html(num);
    });
    $("#univalentAdd").click(function () {
        let num = $("#univalentNum").html();
        +num++;
        $("#univalentNum").html(num);
    })
})