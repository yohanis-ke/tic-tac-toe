window.addEventListener("DOMContentLoaded", function() {

  var activePlayer, gameStatus, counter;
  counter = 0; //counts how many cells filled, max 9
  activePlayer = 0;
  gameStatus = 1;
  // X's turn if activePlayer = 0
  // O's turn if activePlayer = 1
  // game on when status = 1
  // game off when status = 0

  // winning combination of cells
  winComb = [
    { a: '#one', b: '#two', c: '#three' },
    { a: '#four', b: '#five', c: '#six' },
    { a: '#seven', b: '#eight', c: '#nine' },
    { a: '#one', b: '#four', c: '#seven' },
    { a: '#two', b: '#five', c: '#eight' },
    { a: '#three', b: '#six', c: '#nine' },
    { a: '#one', b: '#five', c: '#nine' },
    { a: '#three', b: '#five', c: '#seven' },
  ]

  document.querySelector(".container").addEventListener("click", function(e) {

    if(gameStatus === 1){

      if(!e.target.classList.contains('filled')) {
        e.target.className = "cell filled";
        if(activePlayer === 0) {
          e.target.innerHTML = "X";
          activePlayer = 1;
          document.querySelector(".status").innerHTML = "O's turn"
          counter++

          winComb.forEach(function(comb) {
            if (document.querySelector(comb.a).innerHTML === document.querySelector(comb.b).innerHTML
            && document.querySelector(comb.b).innerHTML === document.querySelector(comb.c).innerHTML
            && document.querySelector(comb.b).innerHTML !== "")  {
              document.querySelector(".status").innerHTML = document.querySelector(comb.a).innerHTML + " won!"
              gameStatus = 0;
              counter = 0;
              document.querySelector("h2").classList.add("play-again");
            };
          });

        } else if (activePlayer == 1) {
          e.target.innerHTML = "O";
          activePlayer = 0;
          counter++
          document.querySelector(".status").innerHTML = "X's turn"
        };

        winComb.forEach(function(comb) {
          if (document.querySelector(comb.a).innerHTML === document.querySelector(comb.b).innerHTML
          && document.querySelector(comb.b).innerHTML === document.querySelector(comb.c).innerHTML
          && document.querySelector(comb.b).innerHTML !== "") {
            document.querySelector(".status").innerHTML = document.querySelector(comb.a).innerHTML + " won!"
            gameStatus = 0;
            counter = 0;
            document.querySelector("h2").classList.add("play-again");
          } ;
        });

      };

      // if every cell is filled but no win combination
      if (counter === 9 && gameStatus === 1) {
        document.querySelector(".status").innerHTML = "Draw!";
        gameStatus = 0;
        document.querySelector("h2").classList.add("play-again");
        counter = 0;
      };

    };
  });

  document.querySelector('body').addEventListener("keyup", function(e){
    if(e.keyCode == 32 && gameStatus === 0) {
      gameStatus = 1;

      document.querySelector("h2").classList.remove("play-again");
      document.querySelector(".status").innerHTML = "X's turn";
      document.querySelectorAll(".cell").forEach(function(cell) {
        cell.innerHTML = "";
        cell.className = "cell";
      });
    };
  });


});
