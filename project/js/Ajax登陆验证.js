function dl() {
    var jsonz = new XMLHttpRequest();
    var use = document.getElementById('username').value
    var pass = document.getElementById('passkey').value
    var aaa = document.getElementById('yzm2').value
    var ym = document.getElementById('yzmsr').value
    jsonz.open('post', 'Data.json', true)
    jsonz.send(null);
    jsonz.onreadystatechange = function() {
        if (jsonz.readyState == 4 && jsonz.status == 200) {
            var jstext = jsonz.responseText;
            var jssj = JSON.parse(jstext);
            if (use == jssj.usname && pass == jssj.password) {
                if (ym == aaa) {
                    var mask = document.getElementById('mask');
                    var login = document.getElementById('login');
                    var newId = document.getElementById('useId');
                    mask.style.display = 'none';
                    login.style.display = 'none';
                    alert('欢迎您，小可爱哆哆！')
                    newId.innerText = '用户：小可爱哆哆'
                } else {
                    alert('好像是验证码错了哦~')
                }
            } else {
                if (use !== jssj.usname) {
                    alert('快看看，你的账号是不是错误了喵~')
                } else {
                    alert('嗨呀~好气哦，密码错了')
                }
            }
        }

    }
}