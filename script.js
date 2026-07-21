const icons = [

"🐶","🐶",
"🐱","🐱",
"🐼","🐼",
"🐸","🐸"

];


let gameBoard = document.getElementById("gameBoard");


let firstCard = null;

let secondCard = null;

let lock = false;


let moves = 0;

let score = 0;




function shuffle(array){


    return array.sort(()=>Math.random()-0.5);


}




function createGame(){


    gameBoard.innerHTML="";


    shuffle(icons);



    icons.forEach(icon=>{


        let card = document.createElement("div");


        card.classList.add("card");


        card.dataset.icon = icon;



        card.innerHTML = `


        <div class="inner">


            <div class="front">
                ?
            </div>


            <div class="back">
                ${icon}
            </div>


        </div>


        `;



        card.onclick = flipCard;



        gameBoard.appendChild(card);



    });



}






function flipCard(){


    if(lock)
        return;


    if(this === firstCard)
        return;



    this.classList.add("flip");



    if(!firstCard){


        firstCard=this;

        return;


    }



    secondCard=this;


    moves++;


    document.getElementById("moves").innerHTML=moves;



    checkMatch();



}







function checkMatch(){



    let match = firstCard.dataset.icon === secondCard.dataset.icon;




    if(match){


        score++;


        firstCard=null;

        secondCard=null;



        if(score===4){


            setTimeout(()=>{


                alert("🎉 Chúc mừng! Bạn đã thắng game");


            },500);


        }



    }


    else{


        lock=true;



        setTimeout(()=>{


            firstCard.classList.remove("flip");

            secondCard.classList.remove("flip");



            firstCard=null;

            secondCard=null;


            lock=false;



        },800);



    }



}





function resetGame(){


    moves=0;

    score=0;


    document.getElementById("moves").innerHTML=0;


    firstCard=null;

    secondCard=null;


    createGame();



}





createGame();