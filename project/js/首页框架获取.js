$(document).ready(function() {
        var heightWin = $(window).height();
        var widthWin = $(window).width();
        var widthTrue = (widthWin - 1160) / 2;
        var menuMove = widthWin / 2;
        var widthAD = widthWin * 0.6;
        var heightAD = heightWin * 0.6 * -1;
        var tabMove = (widthWin - 650) / 2;
        var heightLog = heightWin * 0.85 * -1;
        var widthLog = (widthWin - 700) / 2;

        $('#fullScreen').css({ 'height': heightWin + 'px' });
        $('#fullScreen').css({ 'width': widthWin + 'px' });
        $('.TheAD').css('width', widthAD + 'px');
        $('.TheAD').css({ 'margin-top': heightAD + 'px' });
        $('.login').css({ 'margin-top': heightLog + 'px' });
        $('.login').css({ 'margin-left': widthLog + 'px' });
        $('.btn').css({ 'height': heightWin + 'px' });
        $('#igs').css({ 'height': heightWin + 'px' });
        $('.screenPhoto').css({ 'height': heightWin + 'px' });
        $('.underWin').css({ 'margin-top': heightWin + 'px' });
        $('.discountOne').css({ 'margin-left': widthTrue + 'px' });
        $('#goodsOne').css({ 'margin-left': widthTrue + 'px' });
        $('#goodsSecond').css({ 'margin-left': widthTrue + 'px' });
        $('#selledOne').css({ 'margin-left': widthTrue + 'px' });
        $('.menuList').css('margin-left', menuMove + 'px');
        $('#tab1').css('margin-left', tabMove + 'px');


    })
    // 导航栏样式改变
$(document).scroll(function() {
    var menuStyle = window.pageYOffset;
    var heightWin = $(window).height();
    if (menuStyle > heightWin) {
        $('.menu').css('background', 'rgba(0, 0, 0, 1)');
    } else {
        $('.menu').css('background', 'rgba(0, 0, 0, 0)');
    }
})