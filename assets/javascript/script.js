$(document).ready(function() {
    //loads the brandstatement
    $('.linkdetails[data-link=0]').show();

    // changes the "view" on the page
    $(".link").on("click", function() {

        $('.linkdetails').hide();
        $('.linkdetails[data-link=' + $(this).data('link') + ']').fadeIn({
            width: '200px'
        }, 300);
        event.preventDefault();


    })

    //changes page styling

    $("#theme_1").click(function() {
        var newClass = $(this).val();
        $('#look').attr('class', newClass);
        $('body').css("background-color", "#232B2B");
        $('body').css("color", "#E3AE57");
        $('hr').css("border-color", "#DC3D24");
        $('.title').css("color", "#DC3D24");
        $('.linkdetails').css("color", "#DC3D24");
        $('.thumbnail_container').css("border", "5px solid #E3AE57");
        $('.footer').css("background-color", "#232B2B");
        $('.navbar').css("background-color", "#232B2B");
        $('.maintext').css("color", "#E3AE57");
        $('.visible-link').css("color", "#ffffff");
    });


    $("#theme_2").click(function() {
        var newClass = $(this).val();
        $('#look').attr('class', newClass);
        $('body').css("background-color", "#8A0651");
        $('body').css("color", "#000000");
        $('hr').css("border-color", "#ffffff");
        $('.title').css("color", "#ffffff");
        $('.linkdetails').css("color", "#ffffff");
        $('.thumbnail_container').css("border", "5px solid #000000");
        $('.footer').css("background-color", "#8A0651");
        $('.navbar').css("background-color", "#8A0651");
        $('.maintext').css("color", "#000000");
        $('.visible-link').css("color", "#424242");
    });

    $("#theme_3").click(function() {
        var newClass = $(this).val();
        $('#look').attr('class', newClass);
        $('body').css("background-color", "#E4DBBF");
        $('body').css("color", "#383127");
        $('hr').css("border-color", "#DC5B21");
        $('.title').css("color", "#DC5B21");
        $('.linkdetails').css("color", "#DC5B21");
        $('.thumbnail_container').css("border", "5px solid #383127");
        $('.footer').css("background-color", "#E4DBBF");
        $('.navbar').css("background-color", "#E4DBBF");
        $('.maintext').css("color", "#383127");
        $('.visible-link').css("color", "#70AB8F");
    });

    $("#theme_4").click(function() {
        var newClass = $(this).val();
        $('#look').attr('class', newClass);
        $('body').css("background-color", "#191919");
        $('body').css("color", "#DFE2DB");
        $('hr').css("border-color", "#ffffff");
        $('.title').css("color", "ffffff");
        $('.linkdetails').css("color", "#ffffff");
        $('.thumbnail_container').css("border", "5px solid #ffffff");
        $('.footer').css("background-color", "#191919");
        $('.navbar').css("background-color", "#191919");
        $('.maintext').css("color", "#DFE2DB");
        $('.visible-link').css("color", "#FFF056");
    });

})