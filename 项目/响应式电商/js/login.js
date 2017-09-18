setTimeout(function () {
    //判断当前用户已登录则显示用户名，否则显示注册登录
    if (localStorage.getItem("token")) {
        //屏蔽浏览器滚动条
        layer.open({
            content: `${localStorage.getItem("username")},您已成功登录！请不要重复登录`,
            btn: ["确定"],
            btn1: function () {
                location.href = "index.html";
            },
            scrollbar: false
        });


    }
}, 501);



// 点击登录
$("#loginBtn").click(login);

// 键盘登录
$("#pwd").keydown(function (event) {

    if (event.keyCode === 13) {
        event.preventDefault();
        console.log(123);
        login();
    }
})

// 登录函数
function login() {
    var username = $("#username").val();
    var pwd = $("#pwd").val();

    console.log(username, pwd);
    $.ajax({
        "url": "http://h6.duchengjiu.top/shop/api_user.php",
        "type": "POST",
        "dataType": "json",
        "data": {
            "status": "login",
            "username": username,
            "password": pwd
        },
        "success": function (response) {
            // console.log(response);

            if (response.code === 0) {
                var data = response.data;

                for (prop in data) {
                    if (data.hasOwnProperty(prop)) {
                        localStorage.setItem(prop, data[prop]);
                    }
                }

                $(".error2").hide();

                layer.msg(response.message,{icon:1});

                setTimeout(function () {
                    var callbackURL = location.hash.substr(10);
                    // console.log(callbackURL);
                    if (callbackURL) {
                        location.href = callbackURL;
                    } else {
                        location.href = "index.html";
                    }
                }, 500)


            } else {
                layer.open({
                    content: `${response.message}`,
                    scrollbar: false,
                }, {
                    icon: 6
                });
                // $(".error2").show();
                return;
            }
        },
        "error": function () {
            layer.msg("数据获取失败！",{icon:2});
        }
    })
}