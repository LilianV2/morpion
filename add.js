let player1 = true
let player2 = false
let box = document.querySelectorAll('div')

// --- boolean ---

for(let i = 0; i < box.length; i++){
    box[i].addEventListener('click', function () {
        if (box[i].innerHTML === "X" || box[i].innerHTML === "O") {
            alert('box is already filled')
        }
        else{
            if (player1 === true){
                box[i].innerHTML = "X";
                player2 = true;
                player1 = false;
            }
            else if(player2 === true){
                box[i].innerHTML = "O";
                player1 = true
                player2 = false
            }
        }
        win()
    })
}

// --- conditions de victoire ---

function winCondition(icon){
    if (
        box[0].innerHTML === icon && box[1].innerHTML === icon && box[2].innerHTML === icon
        || box[3].innerHTML === icon && box[4].innerHTML === icon && box[5].innerHTML === icon
        || box[6].innerHTML === icon && box[7].innerHTML === icon && box[8].innerHTML === icon
        || box[0].innerHTML === icon && box[3].innerHTML === icon && box[6].innerHTML === icon
        || box[1].innerHTML === icon && box[4].innerHTML === icon && box[7].innerHTML === icon
        || box[2].innerHTML === icon && box[5].innerHTML === icon && box[8].innerHTML === icon
        || box[0].innerHTML === icon && box[4].innerHTML === icon && box[8].innerHTML === icon
        || box[2].innerHTML === icon && box[4].innerHTML === icon && box[6].innerHTML === icon
    ) {
        alert(icon + ' has won the game !')
        return true;
    }
}

function win() {
    winCondition("X")
    winCondition("O")
}
