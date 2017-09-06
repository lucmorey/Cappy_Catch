console.log('here')


var capybaraIMG = $("<img src= 'capybara.jpg' alt=''>")
var quokkaIMG = $("<img src= 'quokka.png' alt=''>")
var $squares = $('.square')
var $capybaras = $('img.capybara')
var $quokkas = $('img.quokka')
var $allImgs = $('img.piece')
var randomMoveInterval = null 
var startBtn = $('#startBtn')
var timer = $('#timer')
var currentPlayerScore = 0

var whichPlayer = 1 // ====

var $player1Score = $('#player1Score')
var $player2Score = $('#player2Score')


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
    $('#remainingTime').html(counter)
    countdownTimer = setInterval(countdown, 1000)
    randomMoveInterval = setInterval(function(){
        $allImgs.each(function(index, $el) {
            $randomUnpopulatedSquare().append($el)
        })
    }, 1500)
})

//timers here

var resetInt
var counter = 30


function countdown(){
    if (counter === 0){
        clearInterval(countdownTimer)
        $('#remainingTime').html(counter)
        clearInterval(randomMoveInterval)

        //========
        whichPlayer = 2
        counter = 30
        currentPlayerScore = 0
    } else {
        counter = counter - 1
        $('#remainingTime').html(counter)
    }
}

//track scores here

function setScore() {
    if (whichPlayer === 1) {
    $player1Score.text(currentPlayerScore) 
}
    else {
        $player2Score.text(currentPlayerScore)
    }

}


$capybaras.on('click', function() {
    currentPlayerScore += 75
    setScore()
})
    
$quokkas.on('click', function() {
    currentPlayerScore -= 150
    setScore()

})
  


//







//function switch player turn + compare scores + anounce winner


