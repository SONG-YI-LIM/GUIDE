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
                console.log(toggleBodyH)
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
                    console.log("none");
                    // $(this).siblings().css({"display":"noe"});
                }
            });
        });

        // 여기부터 시작
        $(document).on('click', function(){

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

$(function(){
    common.srOnlyEvent();
    common.toggleEvent();
    common.dropEvent();
});