$(document).ready(() => {
    
    window.scrollTo(0,0);

    //underline while mouse is hovering button
    const $children = $('.nav-buttons').children();
    $children.on('mouseenter', event =>{
        if ($(event.currentTarget).hasClass('underline') === false) {
            $(event.currentTarget).addClass('underline');
        }
    }).on('mouseleave', event =>{
        if ($(event.currentTarget).hasClass('underline')) {
            $(event.currentTarget).removeClass('underline');
        }
    });

    //bold active nav button
    /*
    $children.on('click', event =>{
        $children.removeClass('active');
        $(event.currentTarget).addClass('active');
    });
    */
    
    //smooth scrolling to anchors
    $('.anchor').on('click', function(e){
        e.preventDefault();

        var target = $($(this).attr('href')),
            p = $(target).offset().top,
            offset = 60;
        
        $('body, html').animate({ 'scrollTop': p - offset}, 250);
    });


    //change header according to viewport
    var welcome = $('#welcome').offset();
    var about = $('#about').offset();
    var projects = $('#projects').offset();
    var contacts = $('#contacts').offset();

    var $window = $(window);

    $window.scroll(function() {
        if($window.scrollTop() >= welcome.top - 100){

            $children.removeClass('active');
            $('#btn1').addClass('active');
            
            if ($('.small-nav').css('display') !== 'none') {
                if ($('#smlbtn1').parent().parent().hasClass('active')===false) {
                    $('#smlbtn1').parent().parent().siblings().removeClass('active');
                    $('#smlbtn1').parent().parent().siblings().find('img').attr('src', 'resources/inactive.png');

                    $('#smlbtn1').parent().parent().addClass('active');
                    $('#smlbtn1').attr('src', 'resources/active.png');
                }
            }
        }
        if($window.scrollTop() >= about.top - 100){

            $children.removeClass('active');
            $('#btn2').addClass('active');
            
            if ($('.small-nav').css('display') !== 'none') {
                if ($('#smlbtn2').parent().parent().hasClass('active')===false) {
                    $('#smlbtn2').parent().parent().siblings().removeClass('active');
                    $('#smlbtn2').parent().parent().siblings().find('img').attr('src', 'resources/inactive.png');

                    $('#smlbtn2').parent().parent().addClass('active');
                    $('#smlbtn2').attr('src', 'resources/active.png');
                }
            }
        }
        if($window.scrollTop() >= projects.top - 150){

            $children.removeClass('active');
            $('#btn3').addClass('active');

            if ($('.small-nav').css('display') !== 'none') {
                if ($('#smlbtn3').parent().parent().hasClass('active')===false) {
                    $('#smlbtn3').parent().parent().siblings().removeClass('active');
                    $('#smlbtn3').parent().parent().siblings().find('img').attr('src', 'resources/inactive.png');

                    $('#smlbtn3').parent().parent().addClass('active');
                    $('#smlbtn3').attr('src', 'resources/active.png');
                }
            }
        }
        if($window.scrollTop() + $(window).height() >= $(document).height()-100) {

            $children.removeClass('active');
            $('#btn4').addClass('active');
        }
    });
});