$(document).ready(function() {
    $("#paragraph1").html(
        _.replace($("#paragraph1").text(), /(\w+){6}/g, function (word) {
        return "<span style='background-color: red; font-size: 30px;'>" + word + "</span>";
    }));
});