
var fa = {
    //login.html   的登入
    denglu: function (user_name, password) {
        return $.post(APIURL.deng_lu, {
            'user_name': user_name,
            'password': password
        })
    },
    //index.html信息获取
    xinxi: function () {
        return $.get(APIURL.xin_xi)
    },
    //index.html退出
    tuichu: function () {
        return $.post(APIURL.tui_chu).then(function (res) {

            // console.log(res);
            if (res.code == 200) {
                alert(res.msg)
                window.location.href = "login.html"
            } else {
                alert("退出失败")
            }
        })
    }
}




