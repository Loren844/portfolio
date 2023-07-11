let canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const final = document.getElementById('gameOver');
const score = document.getElementById('score');
const replay = document.getElementById('replay');
const quit = document.getElementById('quit');

// Variables
let snake = []
let food = {}
let direction = 'up'

function initSnake(){
    snake[0] = {
        x:canvas.width/2,
        y:canvas.height/2
    }
    snake[1] = {
        x:canvas.width/2,
        y:canvas.height/2
    }
    return snake;
}

function updateSnake(){
    for(let i = snake.length - 1; i > 0; i--){
        snake[i].x = snake[i-1].x
        snake[i].y = snake[i-1].y
    }
}

function drawSnake(snake){
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for(let i = 0; i < snake.length; i++){
        ctx.fillStyle = 'green';
        ctx.fillRect(snake[i].x, snake[i].y, 10, 10);
    }
}

function createFood(){
    let food = {
        x: Math.floor(Math.random()*canvas.width/10)*10,
        y: Math.floor(Math.random()*canvas.height/10)*10
    }
    return food
}

function drawFood(food){
    ctx.fillStyle = 'red'
    ctx.fillRect(food.x, food.y, 10, 10)
}

function checkCollision(){
    if(snake[0].x < 0 || snake[0].x > canvas.width || snake[0].y < 0 || snake[0].y > canvas.height){
        console.log('collision murale')
        return true
    }

    else if(snake.length > 4){
        for(let i = 4; i < snake.length; i++){
            if(snake[0].x === snake[i].x && snake[0].y === snake[i].y){
                console.log('collision queue')
                return true
            }
        }
    }

    else{
        return false
    }
}

function checkFoodCollision(){
    if(snake[0].x === food.x && snake[0].y === food.y){
        snake[snake.length] = {
            x: snake[snake.length-1].x,
            y: snake[snake.length-1].y
        }
        ctx.clearRect(food.x, food.y, 10, 10)
        food = createFood()
        score.innerHTML = snake.length - 1
    }
}

function updateGame(){
    if(!checkCollision()){
        if(direction === 'left'){
            snake[0].x -= 10
        }
        else if(direction === 'up'){
            snake[0].y -= 10
        }
        else if(direction === 'right'){
            snake[0].x += 10
        }
        else if(direction === 'down'){
            snake[0].y += 10
        }
        updateSnake()
        checkFoodCollision()
        drawSnake(snake)
        drawFood(food)
        setTimeout(updateGame, 100)
    }
    else{
        canvas.style.display = 'none'
        final.style.display = 'block'
        quit.style.display = 'block'
        replay.style.display = 'block'
        score.innerHTML = snake.length - 1
        console.log('game over')
    }
}

function main(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    snake = initSnake()
    food = createFood()

    drawSnake(snake)
    drawFood(food)

    updateGame()
}

document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowLeft' && direction != 'right'){
        event.preventDefault()
        direction = 'left'
    }
    else if(event.key === 'ArrowUp' && direction != 'down'){
        event.preventDefault()
        direction = 'up'
    }
    else if(event.key === 'ArrowRight' && direction != 'left'){
        event.preventDefault()
        direction = 'right'
    }
    else if(event.key === 'ArrowDown' && direction != 'up'){
        event.preventDefault()
        direction = 'down'
    }
})

quit.addEventListener('click', function(){
    clearConsole()
    document.getElementById('snakeGame').style.display = 'none'
    userInput.disabled = false
})

replay.addEventListener('click', function(){
    canvas.style.display = 'block'
    final.style.display = 'none'
    score.innerHTML = 1
    quit.style.display = 'none'
    replay.style.display = 'none'

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    snake = [];
    food = {};
    direction = 'up';
    main()
})