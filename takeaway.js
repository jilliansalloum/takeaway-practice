const playGame = (stones) => {
  let total;
  const moveset = {
      3: ((total = stones), (total -= 5), console.log(total)),
      2: ((total = stones), (total -= 3), console.log(total)),
      1: ((total = stones), (total -= 2), console.log(total)),
  };
  evaluateWin(input){
    if (input > 2) return true
  }
  for (let ea in moveset) {
      if (total == 2) {return true}
      if (total == 0) {return false}
      if (total <= 0) {return true}
      if (total >= 0) {return false}
    //   else return console.log("player2 wins");
    }
};

playGame(10);

const canWin = (stones) => {
  // let playerOne = false
  // while (stones > 1 ) {
  //     // remove 2
  //     // remove 3
  //     // remove 5
  //     if(stones>6){
  //         console.log(`player one takes players two's stones`)
  //         stones -= 2
  //     }
  // }
  const player1wins = console.log("player1 wins");
  const player2wins = console.log("player2 wins");
  if (stones === 1) return player2wins;
  if (stones === 2) return player1wins;
  if (stones === 3) return player1wins;
  if (stones === 4) return player1wins;
  if (stones === 5) return player1wins;
  if (stones === 6) return player1wins;
  if (stones === 7) return player2wins;
  if (stones === 8) return player2wins;
  if (stones === 9) return player1wins;
  if (stones === 10) return player1wins;
};

// canWin(1);
// canWin(2);
// canWin(3);
// canWin(4);
// canWin(5);
// canWin(6);
// canWin(7);
// canWin(8);
// canWin(9);
// canWin(10);


/*

1 Player #1 cannot move, so player #2 win

2 Player #1 takes 2 stones, and player #2 cannot move

3 Player #1 takes either 2 or 3 stones; either way, player #2 cannot move

4 Player #1 has two choices, one of which wins:
she takes 2 stones, leaving 2 (a win for player #2)
she takes 3 stones, leaving 1 (a win for player #1)

5 Player #1 has three choices, one of which wins:
she takes 2 stones, leaving 3 (a win for player #2)
she takes 3 stones, leaving 2 (a win for player #2)
she takes 5 stones, leaving 0 (a win for player #1)

6 Player #1 has three choices, one of which wins;
she takes 2 stones, leaving 4 (a win for player #2)
she takes 3 stones, leaving 3 (a win for player #2)
she takes 5 stones, leaving 1 (a win for player #1)

7 Player #1 has three choices, but none will win:
she takes 2 stones, leaving 5 (a win for player #2)
she takes 3 stones, leaving 4 (a win for player #2)
she takes 5 stones, leaving 2 (a win for player #2)

8 Player #1 has three choices, but none will win:
she takes 2 stones, leaving 6 (a win for player #2)
she takes 3 stones, leaving 5 (a win for player #2)
she takes 5 stones, leaving 3 (a win for player #2)

9 Player #1 has three choices, with one being a win:
she takes 2 stones, leaving 7 (a win for player #1)
she takes 3 stones, leaving 6 (a win for player #2)
she takes 5 stones, leaving 4 (a win for player #2)

10 Player #1 has three choices, with two being wins:
she takes 2 stones, leaving 8 (a win for player #1)
she takes 3 stones, leaving 7 (a win for player #1)
she takes 5 stones, leaving 5 (a win for player #2)

*/
