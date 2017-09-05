console.log('here')
$

var capybaraIMG = $("<img src= 'capybara.jpg' alt=''>")
var quokkaIMG = $("<img src= 'quokka.png' alt=''>")
var squares = document.querySelectorAll('.square')

function randomInt (n) {
        return Math.floor(math.random()*n)
    }
function checkBox () {
    if (this.innerHTML === capybaraIMG )
        console.log('CAPPY')
    if (this.innerHTML === quokkaIMG)
        console.log ("QUOKKA")
}

squares[0].addEventListener('click', checkBox)