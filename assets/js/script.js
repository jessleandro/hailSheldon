const game = () => {
	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;

	
const playGame = () => {
    const rockBtn = document.querySelector('.rock');
	const paperBtn = document.querySelector('.paper');
	const scissorBtn = document.querySelector('.scissors');
	const lizardBtn = document.querySelector('.lizard');
	const spockBtn = document.querySelector('.spock');
	const playerOptions = [rockBtn,paperBtn,scissorBtn, lizardBtn, spockBtn];
	const computerOptions = ['rock','paper','scissors','lizard','spock']
		
		
playerOptions.forEach(option => {
    option.addEventListener('click',function(){
        const gamesLeft = document.querySelector('.gamesleft');
		moves++;
		gamesLeft.innerText = `Games Left: ${15-moves}`;
        const choiceNumber = Math.floor(Math.random()*5);
		const computerChoice = computerOptions[choiceNumber];
		console.log(computerChoice);
        winner(this.innerText,computerChoice)
				
	if(moves == 15){
		gameOver(playerOptions,gamesLeft);
		}
	})
 })
		
}

const winner = (player,computer) => {
    const result = document.querySelector('.result');
    const playerScoreNumber = document.querySelector('.p-score');
    const computerScoreNumber = document.querySelector('.c-score');
    player = player.toLowerCase();
    computer = computer.toLowerCase();
	
    if(player === computer){
        result.textContent = "It's a Tie"
		}

	else if (player == "rock") {
		if (computer == "paper") {
			result.textContent = "Computer chooses paper. Paper covers rock. You lose!";
			computerScore++;
			computerScoreNumber.textContent = computerScore;
			} 
	else if (computer == "scissors") {
			result.textContent = "Computer chooses scissors. Rock crushes scissors. You win!";
			playerScore++;
			playerScoreNumber.textContent = playerScore;	
			} 
	else if (computer == "lizard") {
			result.textContent = "Computer chooses lizard. Rock crushes lizard. You win!";
			playerScore++;
		    playerScoreNumber.textContent = playerScore;
			} 
	else if (computer == "spock") {
			result.textContent = "Computer chooses spock. Spock vaporizes rock. You lose!";
			computerScore++;
			computerScoreNumber.textContent = computerScore;
			}
		}

	else if (player == "paper") {
		if (computer == "rock") {
			result.textContent = "Computer chooses rock. Paper covers rock. You win!";
			playerScore++;
			playerScoreNumber.textContent = playerScore;
			} 
	else if (computer == "scissors") {
			result.textContent = "Computer chooses scissors. Scissors cuts paper. You lose!";
			computerScore++;
			computerScoreNumber.textContent = computerScore;
			}
	else if (computer == "lizard") {
			result.textContent = "Computer chooses lizard. Lizard eats paper. You lose!";
			computerScore++;
			computerScoreNumber.textContent = computerScore;
			}
	else if (computer == "spock") {
			result.textContent = "Computer chooses spock. Paper disproves Spock. You win!";
			playerScore++;
			playerScoreNumber.textContent = playerScore;
			}
		}
		  
	else if (player == "scissors") {
        if (computer == "paper") {
            result.textContent = "Computer chooses paper. Scissors cuts paper. You win!";
			playerScore++;
			playerScoreNumber.textContent = playerScore;
			}
    else if (computer == "rock") {
        result.textContent = "Computer chooses rock. Rock crushes scissors. You lose!";
        computerScore++;
		computerScoreNumber.textContent = computerScore;
		}
	else if (computer == "lizard") {
        result.textContent = "Computer chooses lizard. Scissors decapitates lizard. You win!";
		playerScore++;
		playerScoreNumber.textContent = playerScore;
		}
	else if (computer == "spock") {
		result.textContent = "Computer chooses spock. Spock smashes scissors. You lose!";
		computerScore++;
		computerScoreNumber.textContent = computerScore;
		}
	}
		  
	else if (player == "lizard") {
        if (computer == "rock") {
			result.textContent = "Computer chooses rock. Rock crushes lizard. You lose!";
			computerScore++;
			computerScoreNumber.textContent = computerScore;
			}
	else if (computer == "paper") {
        result.textContent = "Computer chooses paper. Lizard eats paper. You win!";
		playerScore++;
		playerScoreNumber.textContent = playerScore;
		}
	else if (computer == "scissors") {
		result.textContent = "Computer chooses scissors. Scissors decapitates lizard. You lose!";
		computerScore++;
		computerScoreNumber.textContent = computerScore;
		}
	else if (computer == "spock") {
		result.textContent = "Computer chooses spock. Lizard poisons Spock. You win!";
		playerScore++;
		playerScoreNumber.textContent = playerScore;
		}
	}
		  
	else if (player == "spock") {
		if (computer == "paper") {
			result.textContent = "Computer chooses paper. Paper disproves Spock. You lose!";
			computerScore++;
			computerScoreNumber.textContent = computerScore;
			}
	else if (computer == "rock") {
		result.textContent = "Computer chooses rock. Spock vaporizes rock. You win!";
		playerScore++;
		playerScoreNumber.textContent = playerScore;
        }
	else if (computer == "scissors") {
		result.textContent = "Computer chooses scissors. Spock smashes scissors. You win!";
		playerScore++;
		playerScoreNumber.textContent = playerScore;
		}
	else if (computer == "lizard") {
		result.textContent = "Computer chooses lizard. Lizard poisons Spock. You lose!";
		computerScore++;
		computerScoreNumber.textContent = computerScore;
		}
	}
	}

	const gameOver = (playerOptions,movesLeft) => {
        const chooseMove = document.querySelector('.move');
		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');
        
    playerOptions.forEach(option => {
		option.style.display = 'none';
		})

	chooseMove.innerText = 'Game Over!!'
	movesLeft.style.display = 'none';

	if(playerScore > computerScore){
		result.style.fontSize = '3rem';
		result.innerText = 'You Won The Game'
		result.style.color = '#308D46';
	}
	else if(playerScore < computerScore){
		result.style.fontSize = '3rem';
		result.innerText = 'You Lost The Game';
		result.style.color = 'red';
	} else {
        result.style.fontSize = '3rem';
		result.innerText = 'Tie';
		result.style.color = 'grey'
		}
		
        reloadBtn.style.display = 'flex'
		reloadBtn.addEventListener('click',() => {
		window.location.reload();
		})
	}
	
	return playGame()
	
}

game();