/* Getting games array from storage */
var games = JSON.parse(window.localStorage.getItem('saved'));

/* Updating the object in storage */
save_new = function(){
    window.localStorage.setItem('saved',JSON.stringify(games));
}

/* Increment clicks function for frame pages */
increment_frames = function(arg){
    games[arg].clicks++;
    save_new();
    update();
}

/* Update imgs ranking function */
update = function(){
    var first_game = games.reduce((max,game) => max.clicks > game.clicks ? max:game);
    const firstimg = document.querySelector(".first_game img");
    firstimg.src = `../imgs/${first_game.name}.png`;

    update_second = function(){
        var second_game = games.reduce((max,game) => (max.clicks > game.clicks) && (max.clicks < first_game.clicks) && (game.clicks < first_game.clicks) ? max:game);
        const secondimg = document.querySelector(".second_game img");
        secondimg.src = `../imgs/${second_game.name}.png`;

        update_third = function(){
            var third_game = games.reduce((max,game) => (max.clicks > game.clicks) && (max.clicks < second_game.clicks) && (game.clicks < second_game.clicks) ? max:game);
            const thirdimg = document.querySelector(".third_game img");
            thirdimg.src = `../imgs/${third_game.name}.png`

            update_fourth = function(){
                var fourth_game = games.reduce((max,game) => (max.clicks > game.clicks) && (max.clicks < third_game.clicks) && (game.clicks < third_game.clicks) ? max:game);
                const fourthimg = document.querySelector(".fourth_game img");
                fourthimg.src = `../imgs/${fourth_game.name}.png`
            }
        }
        update_third();
    }
    update_second();
}