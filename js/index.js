/**
 * Created by Administrator on 2016/3/11.
 */
$(function(){
    //开关音乐
    $(".btn_music").click(function () {
        if ($(this).hasClass('rotate')){
            $(this).find("audio").get(0).pause();
            $(this).removeClass("rotate");
            //$('#mc_play').attr('class','stop');
        }else{
            $(this).find("audio").get(0).play();
            $(this).addClass("rotate");
            //$('#mc_play').attr('class','on');
        }

    });
    //开始游戏按钮
    $(".btn_wyqxf").click(function(){
        $(".index_box").fadeOut(300);
        $(".active_page").fadeIn(300);
    });
    //游戏详情按钮
    $(".btn_yxxq").click(function(){
        $(".active_page").fadeOut(300);
        $(".details_page").fadeIn(300);
    });
    //返回游戏按钮
    $(".btn_backgame").click(function(){
        $(".details_page").fadeOut(300);
        $(".active_page").fadeIn(300);
    });
    //我要选妃按钮
    $(".btn_wyxx").click(function(){
        $(".active_page").fadeOut(300);
        $(".gameover_page").fadeIn(300);

    });
    //再抽一次按钮
    $(".btn_zsyc").click(function(){
        $(".gameover_page").fadeOut(300);
        $(".active_page").fadeIn(300);

    });
    //抽奖赢豪礼按钮
    $(".btn_cjyhl").click(function(){
        $(".gameover_page").fadeOut(300);
        $(".gj_page").fadeIn(300).css("z-index","0");

    });
    //确认编辑头像按钮
    $(".btn_tx02").click(function(){
        var aCanvas=$("#img_tx_box");
        if(aCanvas.find("canvas").length=="0"){
            return;
        }
        if(aCanvas.css("z-index")=="10"){
            aCanvas.css("z-index","1");
        $(this).html('编<br>辑<br>美<br>照');
        }else{
            aCanvas.css("z-index","10");
            $(this).html('确<br>认<br>美<br>照');
        }
    });

});