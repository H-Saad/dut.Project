/* Temporary variable that sets browser storage default game object*/
var temp = [
    {id: 0, name: "Snake", clicks: 0},
    {id: 1, name: "Rock Paper Scissors", clicks: 0},
    {id: 2, name: "Tetris", clicks: 0},
    {id: 3, name: "Flappy Bird", clicks: 0},
    {id: 4, name: "Tic Tac Toe", clicks: 0},
    {id: 5, name: "Space Invader", clicks: 0},
    {id: 6, name: "Ping Pong", clicks: 0}
]
/* Saving new object in storage */
save_temp = function(){
    window.localStorage.setItem('saved',JSON.stringify(temp));}

/* Checks if object is already saved or not and saves it if not saved*/
if(window.localStorage.getItem('saved') === null){
    save_temp();
}

/* Getting games array from storage */
var games = JSON.parse(window.localStorage.getItem('saved'));

/* Updating the object in storage */
save_new = function(){
    window.localStorage.setItem('saved',JSON.stringify(games));
}

/* Increment clicks function for main page */
increment_main = function(arg){
    games[arg].clicks++;
    save_new();
}
save_new();