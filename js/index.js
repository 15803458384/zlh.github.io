$(function () {

    $(".car_color>li").click(function () {
        var $lis = $(this).index();
        $(".zyx_car>li").eq($lis).show().siblings().hide();
    })
    $(".znz_color>li").click(function () {
        var $lis = $(this).index();
        $(".znz_car>li").eq($lis).show().siblings().hide();
    })
    $(".zyg_color>li").click(function () {
        var $lis = $(this).index();
        $(".zyg_car>li").eq($lis).show().siblings().hide();
    })
    $(".qnj_color>li").click(function () {
        var $lis = $(this).index();
        $(".qnj_car>li").eq($lis).show().siblings().hide();
    })
})