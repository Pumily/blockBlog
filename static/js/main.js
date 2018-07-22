;
$(function() {
    'use strict'

    let slideBar = $(".slideBar"),
        mask = $(".mask"),
        slideBarBtn = $(".slideBar-btn"),
        showSlideBar = $(".showSlideBar"),
        backToTop = $(".back-to-top"),
        aboutThisWeb = $(".about-web"),
        describeThisWeb = $(".describe-web"),
        toSaySometing = $(".say-someting")

    function showBar() {
        mask.fadeIn(); //显示遮罩区
        slideBar.css('right', 0);
    }

    function hideBar() {
        mask.fadeOut();
        slideBar.css('right', -slideBar.width())
    }

    function backTop() {
        $('html,body').animate({
            scrollTop: 0
        }, 800);
    }

    function aboutWeb() {
        $('html,body').animate({
            scrollTop: 800
        }, 800)
    }

    function describeWeb() {
        $('html,body').animate({
            scrollTop: 1600
        }, 800)
    }

    function saySomething() {
        $('html,body').animate({
            scrollTop: 2000
        }, 800)
    }


    $(window).on('scroll', function() {
        if ($(window).scrollTop() > $(window).height())
            backToTop.fadeIn();
        else
            backToTop.fadeOut();
    });
    //模拟页面滚动事件
    $(window).trigger('scroll');

    showSlideBar.on('click', showBar); //点击更多显示slide
    mask.on('click', hideBar); //点击遮罩层隐藏slide
    slideBarBtn.on('click', hideBar); //点击菜单选项时隐藏slide
    backToTop.on('click', backTop); //返回顶部事件
    aboutThisWeb.on('click', aboutWeb); //点击前往近期动向
    describeThisWeb.on('click', describeWeb); //点击前往网站定位
    toSaySometing.on('click', saySomething);
});