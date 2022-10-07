/*
    1. На странице есть элементы с CSS классом userinput.
    Написать код на JQuery, который прикрепит обработчик onclick на все элементы.
    Функция обработки пустая.
 */
$('.userinput').on('click', function() {};

/*
    2. Найти все элементы на странице, которые вложены в элемент с
    id Block1 и имеют класс userinput.
 */
$(“#Block1”).children(‘.userinput’);

/*
    3.Показать элемент с Id PopupDIV плавно всплывающий(fade)
    по центру окна браузера.
 */
jQuery.fn.center = function () {
    this.css (“position”, “absolute”);
    this.css (“top”, Math.max(0, (($(window).height() –
     $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
    this.css ("left", Math.max(0, (($(window).width() –
     $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
    return this;
}

$(“#PopupDIV”).center();

$(document).ready (function(){
    $(".out").click (function(){
        $( "PopupDIV" ).fadeOut();
    });
    $(".in").click(function(){
        $("PopupDIV").fadeIn();
    });
});
