function playGame(PlayerChoice){
    const choices = ['rock','paper','scissors'];
    const compChoice = choices[Math.floor(Math.random()*choices.length)];

    let result;

    if(PlayerChoice===compChoice){
        result='Its a tie!';
    } else if(
        (PlayerChoice==='rock'&&compChoice==='scissors') ||
        (PlayerChoice==='paper'&&compChoice==='rock')||
        (PlayerChoice==='scissors'&&compChoice==='paper')
    ){
        result='You Win!';
    }else{
        result='Computer Wins!';
    }

    document.getElementById('result').innerText= `Your choice: ${PlayerChoice} \n Computer choice: ${compChoice} \n result : ${result}`;

}