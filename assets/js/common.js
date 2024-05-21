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

/* 웹 : 전체메뉴 */ 
const fn_layout = () => {


    // resize evnet
    // $(window).resize($throttle(100, function () {
    //     console.log("hello");
        
    //     // let windowW = window.innerWidth;
    //     // windowW < 1161 ? $('#header').addClass('mob') : $('#header').removeClass('mob')
    // })().resize()

    const headGnb = $('.head-gnb');
    const depth01 = headGnb.find('.gnb > li > a');
    depth01.on('click', function(){
        if($(this).hasClass('open')){
            console.log("test01");
            depth01.removeClass('open');
            depth01.next().removeClass('is-open');
        }else{
            console.log("test02");
            depth01.removeClass('open');
            depth01.next().removeClass('is-open');
            $(this).addClass('open');
            $(this).next().addClass('is-open')
        }
    });
}



