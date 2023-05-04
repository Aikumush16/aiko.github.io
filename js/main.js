$(function () {

    $(".head_inner nav ul li.switch a").on("click", function (e) {
        $("body").toggleClass("switchMode");
        e.preventDefault();
    });

});