autoPlayYouTubeModal();

//FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
function autoPlayYouTubeModal() {
    var trigger = $("body").find('[data-toggle="modal"]');
    trigger.click(function () {
        var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-theVideo"),
            videoSRCauto = videoSRC + "?autoplay=0";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function () {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });
}

var $item = $('.carousel .item');
 var $wHeight = $(window).height();
 $item.eq(0).addClass('active');
 $item.height($wHeight);
 $item.addClass('full-screen');

 $('.carousel img').each(function() {
     var $src = $(this).attr('src');
     var $color = $(this).attr('data-color');
     $(this).parent().css({
         'background-image' : 'url(' + $src + ')',
         'background-color' : $color
     });
     $(this).remove();
 });

 $(window).on('resize', function (){
     $wHeight = $(window).height();
     $item.height($wHeight);
 });

 $('.carousel').carousel({
     interval: 5000,
     pause: "false"
 });

 // LOAD MORE

 $(document).ready(function () {
     size_li = $(".field-content p").size();
     x=3;
     $('.field-content p:lt('+x+')').show();
     $('#loadMore').click(function () {
         x= (x+5 <= size_li) ? x+5 : size_li;
         $('.field-content p:lt('+x+')').show();
     });
     $('#showLess').click(function () {
         x=(x-5<0) ? 3 : x-5;
         $('#myList li').not(':lt('+x+')').hide();
     });
 });
