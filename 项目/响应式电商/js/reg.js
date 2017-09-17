// 验证用户名是否重复
$("#username").blur(nameCheck);

// 验证表单
$("#regBtn").click(reg);

$("#pwdCon").keydown(function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        reg();
    }
})


function nameCheck() {
    var username = $("#username").val();
    console.log($(this).val());

    $.ajax({
        "url": "http://h6.duchengjiu.top/shop/api_user.php",
        "type": "POST",
        "dataType": "json",
        "data": {
            "status": "check",
            "username": username
        },
        "success": function (response) {
            console.log(response);
            if (response.code === 0) {
                $(".success").show();
                $(".error").hide();
                $(".error2").hide();
            } else if (response.code === 2001) {
                $(".success").hide();
                $(".error").show();
                $(".error2").hide();
            } else if (response.code === 1000) {
                $(".success").hide();
                $(".error").hide();
                $(".error2").show();
            }
        }

    })
}

function reg() {
    var pwd = $("#pwd").val();
    var username = $("#username").val();
    var pwdCon = $("#pwdCon").val();
    var rule = $("#rule");
    
    if (!username) {
        $(".success").hide();
        $(".error").show();
        return;
    }
    if (pwd.length < 6 || pwd.length > 20) {
        $(".pw-error").show();
        return;
    }
    if (pwdCon != pwd) {
        $(".pw-error").hide();
        $(".pw-con-error").show();
        return;
    } else {
        $(".pw-con-error").hide();
    }
    if (!$("#rule")[0].checked) {
        layer.open({
            content: '请先阅读条款和条件',
            scrollbar: false
        });
        return;
    }

    $.ajax({
        "url": "http://h6.duchengjiu.top/shop/api_user.php",
        "type": "POST",
        "dataType": "json",
        "data": {
            "status": "register",
            "username": username,
            "password": pwd
        },
        "success": function (response) {
            console.log(response);

            if (response.code === 0) {
                layer.open({
                    content: `${response.message}`,
                    btn: ["立即登录"],
                    btn1: function () {
                        window.location.href = "login.html";
                    },
                    scrollbar: false
                });

            } else {
                layer.open({
                    content: `${response.message}`,
                    scrollbar: false
                });
                return false;
            }

        }
    })
}