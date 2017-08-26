$(function () {
    router("microShop", $("#homeWrap"));
    $("#microShop").click(function () {
        router("microShop", $("#homeWrap"));
    })
    $("#commodity").click(function () {
        router("commodity", $("#homeWrap"));
    });
    $("#shopping").click(function () {
        router("shopping");
    });
    $("#mine").click(function () {
        router("mine", $("#homeWrap"));
    });
    $("#Tabbar .item").on("click",function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })
})