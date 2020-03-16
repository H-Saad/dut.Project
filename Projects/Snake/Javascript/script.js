canvas = document.querySelector(".canvas");
ctx = canvas.getContext("2d");
const scale = 10;
var lastdirect = "Right";
var scorei = document.getElementsByClassName("value");
var score = 0;
var scor = document.querySelector(".scor");
//snake function
function Snake(){
    this.x = 0;
    this.y = 0;
    this.xspeed = scale;
    this.yspeed = 0;
    this.tail = [];//snake tail growth array
    this.score = 0;
    //drawing the snake on canvas
    this.draw = function(){
        ctx.fillStyle = "Green";
        ctx.strokeStyle = "Black";
        ctx.fillRect(this.x, this.y, scale, scale);
        ctx.strokeRect(this.x, this.y, scale, scale);
        //drawing the tail
        for(let i = 0; i<this.tail.length; i++){
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
            ctx.strokeRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }
    }
    //moving the snake
    this.move = function(){
        //moving the stored tail location in the array to make new entries
        for(let i = 0; i < this.tail.length - 1 ; i++){
            this.tail[i] = this.tail[i+1];
        }
        //storing tail coordinates in the array
        this.tail[score - 1]={x:this.x, y:this.y};

        this.x += this.xspeed;
        this.y += this.yspeed;
        //snake loop back when it hits corners
        if(snake.x > canvas.width) snake.x = 10;
        if(snake.x < 0) snake.x = canvas.width - 10;
        if(snake.y > canvas.height) snake.y = 10;
        if(snake.y < 0)snake.y = canvas.height - 10;
    }
    this.direct = function(keydown){
            switch(keydown){
                case "Up":
                if(this.tail.length < 1 || lastdirect != "Down"){
                this.xspeed = 0;
                this.yspeed = -scale;
                }
                break;
            case "Down":
                if(this.tail.length < 1 || lastdirect != "Up"){
                this.xspeed = 0;
                this.yspeed = scale;
                }
                break;
            case "Left":
                if(this.tail.length < 1 || lastdirect != "Right"){
                this.xspeed = -scale;
                this.yspeed = 0;
                }
                break;
            case "Right":
                if(this.tail.length < 1 || lastdirect != "Left"){
                this.xspeed = scale;
                this.yspeed = 0;
                }
                break;
        }
    }
    //snake eats the fruit if it passes throught it
    this.eat = function(Fruit){
        if(this.x === fruit.x && this.y === fruit.y){
            score ++;
            scor.textContent = score;
            return true;
        }
    }
    //snake dies when it hits itself
    this.die = function(){
        for(let i = 0; i < this.tail.length; i++){
            if(this.x === this.tail[i].x && this.y === this.tail[i].y){
                this.x = 0;
                this.y = 0;
                score = 0;
                this.tail = [];
                scor.textContent = score;
                return true;
            }
        }
    }
}

//fruit function
function Fruit(){
    this.x;
    this.y;
    //Drawin fruit on canvas
    this.draw = function(){
        ctx.fillStyle = "Orange";
        ctx.strokeStyle = "Black";
        ctx.fillRect(this.x, this.y, scale, scale);
        ctx.strokeRect(this.x, this.y, scale, scale);
    }
    //Picking random spawning location for the fruit
    this.random = function(){
        this.x = Math.floor(Math.random()*canvas.width/scale)*scale;
        this.y = Math.floor(Math.random()*canvas.height/scale)*scale;
    }
}

//game function
function game(){
    snake = new Snake();
    fruit = new Fruit();
    fruit.random();
    //refreshing the canvas to redraw the snake in movement
    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);//erasing the canvas to redraw new location
        snake.draw();
        snake.move();
        fruit.draw();
        //checking if the snake ate the fruit
        if(snake.eat(fruit)){
            fruit.random();
        }
        if(snake.die()){
            fruit.random();
        }
    }, 100);
}
window.addEventListener("keydown", (evt) => {
    var keydown = evt.key.replace("Arrow", "");
    snake.direct(keydown);
    if(keydown == "Right" && lastdirect !="Left"){
		lastdirect = keydown;
	}
	if(keydown == "Left" && lastdirect != "Right"){
		lastdirect = keydown;
	}
	if(keydown == "Up" && lastdirect != "Down"){
		lastdirect = keydown;
	}
	if(keydown == "Down" && lastdirect != "Up"){
		lastdirect = keydown;
	}

})
//score writing function
writescore = function(){

}
//calling game function
game();