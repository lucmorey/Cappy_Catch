console.log('here')
$

var capybaraIMG = $("<img src= 'capybara.jpg' alt=''>")
var quokkaIMG = $("<img src= 'quokka.png' alt=''>")
var $squares = $('.square')
var $capybaras = $('img.capybara')
var $quokkas = $('img.quokka')
var $allImgs = $('img.piece')
var randomMoveInterval = null

function randomInt (n) {
        return Math.floor(Math.random()*n)
}
function $randomUnpopulatedSquare() {
    var $randomSquare = $squares.eq(randomInt($squares.length))
    if($randomSquare.html()){
        return $randomUnpopulatedSquare()
    } else {
        return $randomSquare
    }
}

$allImgs.on('click', function() {
    $randomUnpopulatedSquare().append($(this))
})
$('#startBtn').on('click', function() {
 randomMoveInterval = setInterval(function(){
    $allImgs.each(function(index, $el) {
        $randomUnpopulatedSquare().append($el)
    })
}, 1500)
})
