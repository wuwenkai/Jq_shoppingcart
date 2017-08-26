$(function () {
    $("#goback").click(function () {
        window.history.go(-1);//返回上一页
        window.location.reload();//刷新
    });
    $("#botgoback").click(function () {
        window.history.go(-1);//返回上一页
        window.location.reload();//刷新
    });
})