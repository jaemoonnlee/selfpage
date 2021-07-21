window.onload = function () {
    let src00;
    jQuery.get('../../../src/res/kb/p00/src00.txt', function (data) {
        src00 = data;
    });
    $("#srcCode").html(src00);
}