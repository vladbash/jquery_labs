$(document).ready(function() {
    $("#paragraph1").html(
        _.replace($("#paragraph1").text(), /(\w+){6}/g, function (word) {
        return "<span style='background-color: red; font-size: 30px;'>" + word + "</span>";
    }));

    $("#button1").click(function () {
        $("#paragraph2").css("background-color", "yellow");
        $("#paragraph2").css("font-size", "48px");
    });

    $("#button1").dblclick(function () {
        $("#paragraph2").removeAttr("style");
    });

    $("#orange-border-block").css("border", "4px solid orange");

    $("#link").hover(function () {
        $(this).css("color", "green");
    },function () {
        $(this).removeAttr("style");
    });

    $("#button2").click(function() {
        $("#paragraph3").css("font-family", "Geneva, Arial, Helvetica, sans-serif");
        $("#paragraph3").css("font-size", "24px");
        $("#paragraph4").css("font-weight", "bold");
        $("#paragraph4").css("border", "4px solid black");
    });

    $("#plain-block").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates unde ipsum sit necessitatibus doloribus fuga officia laudantium voluptatibus ea eius velit molestiae eaque fugit ex perspiciatis, earum quos itaque rem.");
});