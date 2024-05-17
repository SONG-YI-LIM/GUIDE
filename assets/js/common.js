/* 공통 */
const common = {
    // init: ()=> {
    //     common.toggleEvent();
    // },
    toggleEvent: ()=> {
        const toggleBtn = $('.toggle-btn');
        toggleBtn.each(function(){
            $(this).on('click', function(){
                const srOnly = $('.sr-only');
                const toggleHead = $('.toggle-head');
                const toggleBody = $('.toggle-body');
                const toggleBodyH = $('.toggle-body .inner').outerHeight();
                console.log(toggleBodyH)
                if(!toggleHead.hasClass('active')){
                    srOnly.text('닫힘');
                    toggleHead.addClass('active');
                    toggleBody.height(toggleBodyH);
                }else{
                    srOnly.text('열림');
                    toggleHead.removeClass('active');
                    toggleBody.height(0);
                }
            });
        });
    }
}

$(function(){
    common.toggleEvent();
});