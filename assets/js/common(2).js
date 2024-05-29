$(function(){
    common.srOnlyEvent();
    common.toggleEvent();
    common.dropEvent();

    fn_layout();   
});


/* 공통 */
const common = {
    // init: () => {
    //     common.toggleEvent();
    // },

    srOnlyEvent: () => {
        const srOnly = $('.sr-only').parent();
        srOnly.each(function(){
            $(this).on('click', function(){
                if(!$(this).hasClass('active')){
                    $(this).children().text('닫기');
                    $(this).addClass('active');
                }else{
                    $(this).children().text('열기');
                    $(this).removeClass('active');
                }
            });
        });
    },

    toggleEvent: () => {
        const toggleBtn = $('.toggle-btn');
        toggleBtn.each(function(){
            $(this).on('click', function(){
                const toggleHead = $('.toggle-head');
                const toggleBody = $('.toggle-body');
                const toggleBodyH = $('.toggle-body .inner').outerHeight();
                if(!toggleHead.hasClass('active')){
                    toggleHead.addClass('active');
                    toggleBody.height(toggleBodyH);
                }else{
                    toggleHead.removeClass('active');
                    toggleBody.height(0);
                }
            });
        });
    },

    dropEvent: () => {
        const dropBtn = $('.drop-btn');
        dropBtn.each(function(){
            $(this).on('click', function(){
                if($(this).siblings().css("display") !== "block"){
                    common.dropClose();
                    $(this).siblings().css({"display":"block"});
                }else{
                    common.dropClose();
                }
            });
        });

        $(document).on('click', function(e){
            if(!e.target.closest('.krds-drop-wrap')) common.dropClose();
        });
    },

    dropClose: () => {
        const dropBtn = $('.drop-btn');
        const dropMenu = $('.drop-menu');
        dropMenu.each(function(){
            $(this).css({"display":""});
        });
    },
}
function fn_resize(){
    let windowW = window.innerWidth;
    windowW < 1161 ? $('#header').addClass('mob') : $('#header').removeClass('mob');
}

/* 웹 : 전체메뉴 */ 
const fn_layout = () => {
    $(window).resize($.throttle(250, fn_resize));

    if(!$('#header').hasClass('mob')){
        const GNB_MENU = $('.head-gnb .gnb .mn');
        const GNB_MENU_ACT = $('.head-gnb .gnb .mn.active');
        const GNB_SUBMENU = $('.head-gnb .gnb .sm');
        const GNB_SUBMENU_ACT = $('.head-gnb .gnb .sm.active');
    
        $('body').append("<div class='w-gnb-dim'></div>");
        $('.w-gnb-dim').css({'display':'none'});
    
        GNB_MENU.each(function(){
            if(GNB_SUBMENU_ACT.length > 0){
                GNB_SUBMENU_ACT.each(function(){
                    const $id = $(this).attr('data-id');
                    const $smAct = $('#'+$id);
                    $smAct.addClass('active');
                });
            }
    
            $(this).on('click', function(){
                if($(this).hasClass('open')){
                    GNB_MENU.removeClass('open');
                    GNB_MENU.next().removeClass('is-open');
                    $('.w-gnb-dim').css({'display':'none'});
                    $('body').css({'overflow':'visible'});
                }else{
                    GNB_MENU.removeClass('open');
                    GNB_MENU.next().removeClass('is-open');
                    $('.w-gnb-dim').css({'display':'block'});
                    $(this).addClass('open');
                    $(this).next().addClass('is-open');
                    $('body').css({'overflow':'hidden'});
                }
    
                $(document).on('click', function(e){
                    if(e.target.closest('.w-gnb-dim')){
                        GNB_MENU.next().removeClass('is-open');
                        GNB_MENU.removeClass('active, open');
                        $('.w-gnb-dim').css({'display':'none'});
                        if(GNB_MENU.hasClass('active')){
                            GNB_MENU.find('.sr-only').text('열기');
                            GNB_MENU.removeClass('active');
                            $('body').css({'overflow':'visible'});
                        }
                    }
                });
            });
        });
    
        if(GNB_SUBMENU.length > 0){
            GNB_SUBMENU.each(function(){
                $(this).on('click', function(){
                    if(!$(this).hasClass('active')){
                        const $id = $(this).attr('data-id');
                        const $smAct = $('#'+$id);
                        const $sm = $(this).parent().siblings().children();
                        const $submenu = $(this).closest(".menu-wrap").siblings().children();
                        $sm.removeClass('active');
                        $submenu.removeClass('active');
                        $(this).addClass('active');
                        $smAct.addClass('active');
                    }
                });
            });
        }
    
        $(window).scroll(function(){
            let $lastScrollY = 0;
            const GWRAP = $('#g-wrap');
            const HEADER = $('#header');
            const $conOffsetTop = $('#container').offset().top;
            const $scrollY = $(window).scrollTop();
            const $scrollDown = $scrollY > $lastScrollY;
            const $scrollUp = $scrollY < $lastScrollY;
            if($scrollY > $conOffsetTop + 50 && $scrollDown){
                console.log("aaa")
                GWRAP.removeClass('scroll-up');
                GWRAP.addClass('scroll-down');
            }else if($scrollY > $conOffsetTop + 50 && $scrollUp){
                console.log("bbb")
                GWRAP.removeClass('scroll-down');
                GWRAP.addClass('scroll-up');
            }else{
                // GWRAP.removeClass('scroll-up, scroll-down');
            }
        });

    }

}



