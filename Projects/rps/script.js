game = function(){
    var pscore = 0;
    var cscore = 0;

    start = function(){
        const playbtn = document.querySelector(".intro button");
        const intro = document.querySelector(".intro");
        const gameplay = document.querySelector(".game");
        //fading the intro game
        playbtn.addEventListener("click", ()=>{
            intro.classList.add("fadeOut");
            gameplay.classList.add("fadeIn");
        });
    };

    ingame = function(){
        const options = document.querySelectorAll(".options button");
        const playerhand = document.querySelector(".playerhand");
        const computerhand = document.querySelector(".computerhand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand =>{
            hand.addEventListener("animationend", function(){
                this.style.animation = "";
            });
        });
        //computer options string array
        const coptions = ["rock", "paper", "scissors"];

        options.forEach(option =>{
            option.addEventListener("click", function(){
                //randomizing computer choice
                rng = Math.floor(Math.random() * 3);
                cchoice = coptions[rng];
                //reseting imgs to rock after animation ends
                playerhand.src = `./imgs/rock.png`;
                computerhand.src = `./imgs/rock.png`;

                //waiting till the animation end to execute functions
                setTimeout(() => {
                    //calling compare function
                    compare(this.textContent, cchoice);

                    //calling update score function
                    update(cscore, pscore);

                    //updating imgs
                    playerhand.src = `./imgs/${this.textContent}.png`;
                    computerhand.src = `./imgs/${cchoice}.png`;
                },2000);

                //animating both hands
                playerhand.style.animation = "animateplayer 2s ease";
                computerhand.style.animation = "animatecomp 2s ease";
            });
        });
    };
    //updating scores
    function update(cscore, pscore){
        const compscore = document.querySelector(".compscore p");
        const plscore = document.querySelector(".playerscore p");
        compscore.textContent = cscore;
        plscore.textContent = pscore;
    }
    //deciding winner
    function compare(pchoice , cchoice){
        const winner = document.querySelector(".results");
        if(pchoice === cchoice){
            winner.textContent = "Tie!";
            return;
        }
        if(pchoice === "rock"){
            if(cchoice === "scissors"){
                winner.textContent = "Player wins!";
                pscore++;
                return;
            }else{
                winner.textContent = "Computer wins!";
                cscore++;
                return;
            }
        }
        if(pchoice === "paper"){
            if(cchoice === "rock"){
                winner.textContent = "Player wins!";
                pscore++;
                return;
            }else{
                winner.textContent = "Computer wins!";
                cscore++;
                return;
            }
        }
        if(pchoice === "scissors"){
            if(cchoice === "paper"){
                winner.textContent = "Player wins!";
                pscore++;
                return;
            }else{
                winner.textContent = "Computer wins!";
                cscore++;
                return;
            }
        }
    };

    start();
    ingame();
};
game();