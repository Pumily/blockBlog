// 最上方导航栏
function menuShow() {
    $('.xiaLaFirst').css('display', 'block')
}

function menuShowNext() {
    $('.xiaLa').css('display', 'block')
}


$(function() {
    $('.xiaLa').mouseover(function() {
        $(this).css('background', 'rgba(0, 0, 0, .4)')
    })
    $('.xiaLa').mouseleave(function() {
        $(this).css('background', 'rgba(0, 0, 0, .8)')
    })
    $('.headeack').mouseleave(function() {
        $('.xiaLa').css('display', 'none')
    })
    $('#findSth').click(function() {
        $('.serch').toggle();
    })
})

// 特殊商品打折图
$(function() {
    $('.discountChange').mouseover(function() {
        $(this).css('opacity', '0.7')
    })
    $('.discountChange').mouseleave(function() {
        $(this).css('opacity', '1')
    })

})

// 详细商品展示位区域
$(function() {
        $('#topOne').mouseover(function() {
            $('#appearOne').css('display', 'block')
        })
        $('#topOne').mouseleave(function() {
            $('#appearOne').css('display', 'none')
        })
        $('#topTwo').mouseover(function() {
            $('#appearTwo').css('display', 'block')
        })
        $('#topTwo').mouseleave(function() {
            $('#appearTwo').css('display', 'none')
        })
        $('#topThree').mouseover(function() {
            $('#appearThree').css('display', 'block')
        })
        $('#topThree').mouseleave(function() {
            $('#appearThree').css('display', 'none')
        })
        $('#topFour').mouseover(function() {
            $('#appearFour').css('display', 'block')
        })
        $('#topFour').mouseleave(function() {
            $('#appearFour').css('display', 'none')
        })
        $('#topFive').mouseover(function() {
            $('#appearFive').css('display', 'block')
        })
        $('#topFive').mouseleave(function() {
            $('#appearFive').css('display', 'none')
        })
        $('#topSix').mouseover(function() {
            $('#appearSix').css('display', 'block')
        })
        $('#topSix').mouseleave(function() {
            $('#appearSix').css('display', 'none')
        })
        $('#topSeven').mouseover(function() {
            $('#appearSeven').css('display', 'block')
        })
        $('#topSeven').mouseleave(function() {
            $('#appearSeven').css('display', 'none')
        })
        $('#topEight').mouseover(function() {
            $('#appearEight').css('display', 'block')
        })
        $('#topEight').mouseleave(function() {
            $('#appearEight').css('display', 'none')
        })
    })
    // 已售出的热销产品
$(function() {
    $('.goodsSelled').mouseover(function() {
        $(this).css('opacity', '1')
    })
    $('.goodsSelled').mouseleave(function() {
        $(this).css('opacity', '0.6')
    })

})

// 最下方选项卡功能
$(function() {
    $('#tab1').mouseover(function() {
        $('.tabTwo').css('display', 'none')
        $('.tabThree').css('display', 'none');
        $('.tabOne').css('display', 'block')
    })
    $('#tab2').mouseover(function() {
        $('.tabOne').css('display', 'none')
        $('.tabThree').css('display', 'none');
        $('.tabTwo').css('display', 'block')
    })
    $('#tab3').mouseover(function() {
        $('.tabOne').css('display', 'none')
        $('.tabTwo').css('display', 'none');
        $('.tabThree').css('display', 'block')
    })
})