$(function () {
    $("#goback").click(function () {
        window.history.go(-1);//返回上一页
        window.location.reload();//刷新
    });

    function getList(n, callback) {
        //判断是否有缓存,有本地缓存就读取本地缓存，没有就ajax请求
        if (checkCache()){
            console.log("本地数据");
            let list = JSON.parse(localStorage.getItem("list"));
            callback(list);
        }else {
            $.ajax({
                url: "data/productList.json",
                success: function (data) {
                    console.log(data.stockLists);
                    let list = data.stockLists;
                    localStorage.setItem("list", JSON.stringify(list));
                    localStorage.setItem("cacheTime", new Date().getTime());//获取缓存时间
                    callback(list);
                }
            })
            console.log("网络数据");
        }
    };

    function checkCache() {
        if (!localStorage.getItem("list")){
            return false
        }
        var nowTime = new Date().getTime() - localStorage.getItem("cacheTime");//计算当前时间和缓存数据时间的时间差
        if (nowTime > 8*1000){//通过时间差是否大于8秒来判断是否需要重新请求数据，实现即时更新效果
            return false
        }
        return true
    }

    getList(8, function (data) {
        let item = $(".stocklist").html();
        console.log(data.length, item)
        for (let i = 0; i < data.length; i ++){
            let $item = $(item);
            $item.find("img").attr("src", data[i].img);
            $item.find("a").html(data[i].name);
            $item.find(".price").html("￥"+data[i].oldPrice*data[i].discount+"<span>￥"+data[i].oldPrice+"</span>");
            $("#stocklist").append($item);
        }
    });
})