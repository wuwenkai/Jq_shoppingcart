function fontSize(){
    var w = document.documentElement.clientWidth > 750? 750:document.documentElement.clientWidth;
    document.documentElement.style.fontSize = w/7.5+"px";
};

function router(src,$container) {
    $container = $container || $("#share");
    $.ajax({
        url: "views/"+src+".html",
        success: function (data) {
            $container.html(data);
            loadJs(src);
        }
    })
};

function loadJs(m) {
    $.ajax({
        url: "js/"+m+".js"
    })
};

$(function () {
    fontSize();
    window.onresize = fontSize;
    router("home");
})