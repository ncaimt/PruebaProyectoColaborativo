let userScore = 0;
let computerScore = 0;
const userScores_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");		  //querySelector se usa para las classes
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

//en la notacion anterior, se disitiguen entre variable de js y las variable del DOM, ademas se indica a que bloque perteneces por ejemplo div, span
// ademas de que por eficiencia se obtienen variables del dom y se almancena de una vez, en vez de llamarlas cada momento

function getComputerChoice() {
	const choices = ["r","p","s"];
	const randomNumber = Math.floor(Math.random()*3);
	return choices[randomNumber];
}

function convertToWord(letter){
 if (letter === "r") return "Rock";
 if (letter === "p") return "Paper";
 else return "Scissors";

}


function win(user,computer){
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(user);
	userScore++;
	userScores_span.innerHTML= userScore;
	computerScore_span.innerHTML = computerScore;
	
	//result_p.innerHTML = convertToWord(user) + " beats " + convertToWord(computer) + ". You win!   :)";  ES5
	result_p.innerHTML = `${convertToWord(user)} ${smallUserWord} beats ${convertToWord(computer)} ${smallCompWord} . You win!     :)`;   // ES6 es mas readable  `  back tick ctrl+shift+}
	userChoice_div.classList.add("green-glow");
	//setTimeout(function(){userChoice_div.classList.remove("green-glow")},1000);  //es5
	setTimeout(()=> userChoice_div.classList.remove("green-glow"), 500);  //es6 arrow function, como solo hay una linea de codigo entonces se quitan los {}
}

function lose(user,computer){
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(user);
	computerScore++;
	computerScore_span.innerHTML=computerScore;
	result_p.innerHTML = `${convertToWord(user)} ${smallUserWord} loses to ${convertToWord(computer)} ${smallCompWord} . You lost!     :(`; 
	userChoice_div.classList.add("red-glow");
	setTimeout(()=> userChoice_div.classList.remove("red-glow"),500);
}

function draw(user,computer){
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(user);
	result_p.innerHTML = `${convertToWord(user)} ${smallUserWord} equals ${convertToWord(computer)} ${smallCompWord} . It's a draw!     :|`; 
	userChoice_div.classList.add("gray-glow");
	setTimeout(() => userChoice_div.classList.remove("gray-glow"),500);
	}




function game(userChoice){
	const computerChoice = getComputerChoice();
	switch (userChoice+computerChoice){

		case "rs":
		case "pr":
		case "sp":
			win(userChoice,computerChoice);
			break;
		case "rp":
		case "sr":
		case "ps":
		 	lose(userChoice,computerChoice);
			break;
		case "rr":
		case "ss":
		case "pp":	
			draw(userChoice,computerChoice);
			break;
	}
}















function main(){
	/*rock_div.addEventListener("click", function() {  //ES5
		game("r");	
	})   */
    rock_div.addEventListener("click", ()=> game("r"));
    paper_div.addEventListener("click", () => game("p"));
    scissor_div.addEventListener("click", () => game("s"));
}


main();


//console.log("testing texts");
// https://youtu.be/jaVNP3nIAv0?list=PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V&t=2045
// lunes 12 de agosto 2019