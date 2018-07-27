function creatyzm() {
    var yzm = '';
    var yzmlength = 4;
    var yzmcj = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n');
    for (var i = 1; i <= yzmlength; i++) {
        var num = Math.floor(Math.random() * 24 + 0);
        yzm += yzmcj[num];
    }
    document.getElementById('yzm2').value = yzm;
}

function checkUserName(obj) {
    var username = obj;
    var checkUserNameResult = document.getElementById("checkUserNameResult");
    if (username.trim().length == 0) {
        checkUserNameResult.innerHTML = "!!用户名不能为空";
        obj.focus();
    } else {
        checkUserNameResult.innerHTML = "";
    }
    if (username.trim().length < 6 || username.trim().length > 20) {
        checkUserNameResult.innerHTML = "!!用户名长度应为6到20个字符长度之间";
        obj.focus();
    } else {
        checkUserNameResult.innerHTML = "";
    }
}

function checkPassword(obj) {
    var password = obj;
    var checkPasswordResult = document.getElementById("checkPasswordResult");
    if (password.trim().length == 0) {
        checkPasswordResult.innerHTML = "!!密码不能为空";
        obj.focus();
    } else {
        checkPasswordResult.innerHTML = "";
    }
}

function passwordlength(obj) {
    var password = obj;
    var passwordlengthResult = document.getElementById("checkPasswordResult");
    if (password.trim().length < 6) {
        checkPasswordResult.innerHTML = "!!密码长度需为6-24个数字或字母组成";
        obj.focus();
    } else {
        checkPasswordResult.innerHTML = "";
    }
}

function isUserName(s) {
    var s = document.getElementById("username").value;
    var patrn = /^[a-zA-Z]\S+$/;
    var checkUserNameResult = document.getElementById("checkUserNameResult");
    if (!patrn.exec(s)) {
        checkUserNameResult.innerHTML = "!!账号格式不正确应以字母开头";
    } else {
        checkUserNameResult.innerHTML = "";
    }
}

function come() {
    var mask = document.getElementById('mask');
    var login = document.getElementById('login');
    var close = document.getElementById('close');
    var stone = document.getElementById('stone');
    mask.style.display = 'block'
    login.style.display = 'block'
}

function go() {
    var mask = document.getElementById('mask');
    var login = document.getElementById('login');
    var close = document.getElementById('close');
    var stone = document.getElementById('stone');
    mask.style.display = 'none'
    login.style.display = 'none'
}

function zhuCe() {
    window.location.href = '注册页面.html';
}