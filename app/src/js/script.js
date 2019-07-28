$(function () {
    /* 視差滾動 */
    $('.parallax-window01').parallax({
        imageSrc: 'images/bg-1.jpg'
    });
    $('.parallax-window02').parallax({
        imageSrc: 'images/bg-2.jpg'
    });
    $('.parallax-window03').parallax({
        imageSrc: 'images/bg-1.jpg'
    });

    /* 導覽選單 */
    $('.showmenu').on('click', function (e) {
        e.preventDefault();
        $('.indexmenu').toggleClass('menu-show');
    });
});
