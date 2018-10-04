var $boxes = $(".images"),
    $slides = $('#slides'),
    pos = 0;

$("#next").click(function () {
    var $nextBox = $boxes.first();

    $boxes.length > ++pos ? $nextBox = $($boxes[pos]) : pos = 0;

    $slides.animate({
        scrollLeft: $nextBox.offset().left + $slides.scrollLeft()
    }, 500);
    echo("next")
});

$("#prev").click(function () {
    var $nextBox = $boxes.last();

    ($boxes.length > --pos && pos > -1) ? $nextBox = $($boxes[pos]) : pos = $boxes.length - 1;

    $slides.animate({
        scrollLeft: $nextBox.offset().left + $slides.scrollLeft()
    }, 500);
});