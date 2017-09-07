var capybaraIMG = $("<img src= 'images/capybara.jpg' alt=''>")
var quokkaIMG = $("<img src= 'images/quokka.png' alt=''>")
var $squares = $('.square')
var $capybaras = $('img.capybara')
var $quokkas = $('img.quokka')
var $allImgs = $('img.piece')
var randomMoveInterval = null 
var startBtn = $('#startBtn')
var $resetBtn = $('#resetBtn')
var timer = $('#timer')
var currentPlayerScore = 0
var whichPlayer = 1 
var $player1Score = $('#player1Score')
var $player2Score = $('#player2Score')
var p1 = 0
var p2 = 0 
var clickSound = new Audio('sounds/capybaraClickSound.mp3')
var backgroundMusic = new Audio('sounds/calliope.mp3')
var squeakSound = new Audio('sounds/squeak.mp3')

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
    $('.overlay').hide()
    backgroundMusic.play()
    $('#remainingTime').html(counter)
    countdownTimer = setInterval(countdown, 1000)
    randomMoveInterval = setInterval(function(){
        $allImgs.each(function(index, $el) {
            $randomUnpopulatedSquare().append($el)
        })
    }, 1500)
})

var resetInt
var counter = 30

function countdown(){
    if (counter === 0){
        clearInterval(countdownTimer)
        $('#remainingTime').html(counter)
        clearInterval(randomMoveInterval)
        endOfGame()
        setScore()
        $('.overlay').show()
        if (whichPlayer === 1 ){
            alert('Player 2"s Turn, click "START" to begin.')
         }
        whichPlayer = 2
        counter = 30
        currentPlayerScore = 0

         }
      else {
        counter = counter - 1
        $('#remainingTime').html(counter)
    }
}

function setScore() {
    if (whichPlayer === 1) {
        $player1Score.text(currentPlayerScore) 
        p1 = currentPlayerScore 
    }
    else {
        $player2Score.text(currentPlayerScore)
        p2 = currentPlayerScore
    }
    
}
function checkScore() {
    
    
    if (p2 > p1) {
        alert("Player 2 Wins!")
    }
    else if (p2 === p1) {
        alert("It's a Tie!")
    }
    else (
        alert("Player 1 Wins!")
    )
}
function endOfGame() {
    if (whichPlayer === 2 && counter === 0) {
        checkScore() }
    
}

$capybaras.on('click', function() {
    clickSound.play()
    currentPlayerScore += 75
    setScore()
})
    
$quokkas.on('click', function() {
    squeakSound.play()
    currentPlayerScore -= 150
    setScore()

})
 
$resetBtn.on('click', function() {
    location.reload()
})

endOfGame()
