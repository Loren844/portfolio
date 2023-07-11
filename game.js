let canvas = document.getElementById('gameCanvas')
const ctx = canvas.getContext('2d')
const final = document.getElementById('gameOver')
const score = document.getElementById('score')
const replay = document.getElementById('replay')
const quit = document.getElementById('quit')

// Variables
let snake = []
let food = {}
let bomb = {}
let goldFood = {}
let rottenFood = {}
let poisonnedFood = {}

let direction = 'up'
let isListening = true
let itemCount = 0
let scoreCount = 1
let randomItem = Math.floor(Math.random()*11)

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

// Items
function createFood(){
    let x = Math.floor(Math.random()*canvas.width/10)*10
    let y = Math.floor(Math.random()*canvas.height/10)*10
    for(let i = 0; i < snake.length; i++){
        while(x === snake[i].x && y === snake[i].y){
            x = Math.floor(Math.random()*canvas.width/10)*10
            y = Math.floor(Math.random()*canvas.height/10)*10
        }
    }

    let food = {
        x: x,
        y: y
    }
    return food
}

function drawFood(food){
    ctx.fillStyle = 'red'
    ctx.fillRect(food.x, food.y, 10, 10)
}

function createBomb(){
    let x = Math.floor(Math.random()*canvas.width/10)*10
    let y = Math.floor(Math.random()*canvas.height/10)*10
    for(let i = 0; i < snake.length; i++){
        while(x === snake[i].x && y === snake[i].y){
            x = Math.floor(Math.random()*canvas.width/10)*10
            y = Math.floor(Math.random()*canvas.height/10)*10
        }
    }

    let bomb = {
        x: x,
        y: y
    }
    return bomb
}

function drawBomb(bomb){
    ctx.fillStyle = 'grey'
    ctx.fillRect(bomb.x, bomb.y, 10, 10)
}

function createGoldFood(){
    let x = Math.floor(Math.random()*canvas.width/10)*10
    let y = Math.floor(Math.random()*canvas.height/10)*10
    for(let i = 0; i < snake.length; i++){
        while(x === snake[i].x && y === snake[i].y){
            x = Math.floor(Math.random()*canvas.width/10)*10
            y = Math.floor(Math.random()*canvas.height/10)*10
        }
    }

    let goldFood = {
        x: x,
        y: y
    }
    return goldFood
}

function drawGoldFood(goldFood){
    ctx.fillStyle = 'yellow'
    ctx.fillRect(goldFood.x, goldFood.y, 10, 10)
}

function createRottenFood(){
    let x = Math.floor(Math.random()*canvas.width/10)*10
    let y = Math.floor(Math.random()*canvas.height/10)*10
    for(let i = 0; i < snake.length; i++){
        while(x === snake[i].x && y === snake[i].y){
            x = Math.floor(Math.random()*canvas.width/10)*10
            y = Math.floor(Math.random()*canvas.height/10)*10
        }
    }

    let rottenFood = {
        x: x,
        y: y
    }
    return rottenFood
}

function drawRottenFood(rottenFood){
    ctx.fillStyle = '#717744'
    ctx.fillRect(rottenFood.x, rottenFood.y, 10, 10)
}

function createPoisonnedFood(){
    let x = Math.floor(Math.random()*canvas.width/10)*10
    let y = Math.floor(Math.random()*canvas.height/10)*10
    for(let i = 0; i < snake.length; i++){
        while(x === snake[i].x && y === snake[i].y){
            x = Math.floor(Math.random()*canvas.width/10)*10
            y = Math.floor(Math.random()*canvas.height/10)*10
        }
    }

    let poisonnedFood = {
        x: x,
        y:y
    }
    return poisonnedFood
}

function drawPoisonnedFood(poisonnedFood){
    ctx.fillStyle = '#8367c7'
    ctx.fillRect(poisonnedFood.x, poisonnedFood.y, 10, 10)
}


// Collisions
function checkCollision(){
    if(snake[0].x < 0 || snake[0].x > canvas.width-10 || snake[0].y < 0 || snake[0].y > canvas.height - 10){
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
        scoreCount++
        score.innerHTML = scoreCount
    }
}

function checkBombCollision(){
    if(Object.keys(bomb).length !== 0){
        if(snake[0].x === bomb.x && snake[0].y === bomb.y){
            canvas.style.display = 'none'
            final.style.display = 'block'
            quit.style.display = 'block'
            replay.style.display = 'block'
            score.innerHTML = scoreCount
            console.log('game over')
        }
    }
}

function checkGoldFoodCollision(){
    if(Object.keys(goldFood).length !== 0){
        if(snake[0].x === goldFood.x && snake[0].y === goldFood.y){
            snake[snake.length] = {
                x: snake[snake.length-1].x,
                y: snake[snake.length-1].y
            }
            ctx.clearRect(goldFood.x, goldFood.y, 10, 10)
            goldFood = {}
            scoreCount += 3
            score.innerHTML = scoreCount
        }
    }
}

function checkRottenFoodCollision(){
    if(Object.keys(rottenFood).length !== 0){
        if(snake[0].x === rottenFood.x && snake[0].y === rottenFood.y){
            for(let i = 0; i < 3; i++){
                snake[snake.length] = {
                    x: snake[snake.length-1].x,
                    y: snake[snake.length-1].y
                }
            }
            ctx.clearRect(rottenFood.x, rottenFood.y, 10, 10)
            rottenFood = {}
            scoreCount += 1
            score.innerHTML = scoreCount
        }
    }
}

function checkPoisonnedFoodCollision(){
    if(Object.keys(poisonnedFood).length !== 0){
        if(snake[0].x === poisonnedFood.x && snake[0].y === poisonnedFood.y){
            snake.pop()
            ctx.clearRect(poisonnedFood.x, poisonnedFood.y, 10, 10)
            poisonnedFood = {}
            scoreCount -= 1
            score.innerHTML = scoreCount
        }
    }
}


// Game
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
        checkBombCollision()
        checkGoldFoodCollision()
        checkRottenFoodCollision()
        checkPoisonnedFoodCollision()
        drawSnake(snake)

        console.log(randomItem)

        if(Object.keys(bomb).length === 0 && Object.keys(goldFood).length === 0 && Object.keys(rottenFood).length === 0 && Object.keys(poisonnedFood).length === 0){ 
            if(scoreCount > 4 && randomItem === 1 || randomItem === 2){
                bomb = createBomb()
                itemCount = 0
                randomItem = Math.floor(Math.random() * 11)
            }
    
            else if(scoreCount > 4 && randomItem === 3){
                goldFood = createGoldFood()
                itemCount = 0
                randomItem = Math.floor(Math.random() * 11)
            }
    
            else if(scoreCount > 4 && randomItem === 4 || randomItem === 5 || randomItem === 6 || randomItem === 7){
                rottenFood = createRottenFood()
                itemCount = 0
                randomItem = Math.floor(Math.random() * 11)
            }
    
            else if(scoreCount > 4 &&  randomItem === 8 || randomItem === 9 || randomItem === 10){
                poisonnedFood = createPoisonnedFood()
                itemCount = 0
                randomItem = Math.floor(Math.random() * 11)
            }
            else if(randomItem === 0){
                itemCount = 0
                randomItem = Math.floor(Math.random() * 11)
            }
        }

        if(Object.keys(bomb).length !== 0 && itemCount > 80){
            ctx.clearRect(bomb.x, bomb.y, 10, 10)
            bomb = {}
            itemCount = 0
        }

        else if(Object.keys(goldFood).length !== 0 && itemCount > 40){
            ctx.clearRect(goldFood.x, goldFood.y, 10, 10)
            goldFood = {}
            itemCount = 0
        }

        else if(Object.keys(rottenFood).length !== 0 && itemCount > 120){
            ctx.clearRect(rottenFood.x, rottenFood.y, 10, 10)
            rottenFood = {}
            itemCount = 0
        }

        else if(Object.keys(poisonnedFood).length !== 0 && itemCount > 100){
            ctx.clearRect(poisonnedFood.x, poisonnedFood.y, 10, 10)
            poisonnedFood = {}
            itemCount = 0
        }

        else if(Object.keys(bomb).length === 0 && Object.keys(goldFood).length === 0 && Object.keys(rottenFood).length === 0 && Object.keys(poisonnedFood).length === 0 && itemCount > 100){
            itemCount = 0
        }
        
        drawFood(food)
        if(scoreCount > 4){
            itemCount++
            drawBomb(bomb)
            drawGoldFood(goldFood)
            drawRottenFood(rottenFood)
            drawPoisonnedFood(poisonnedFood)
        }
        setTimeout(updateGame, 100)
    }
    else{
        canvas.style.display = 'none'
        final.style.display = 'block'
        quit.style.display = 'block'
        replay.style.display = 'block'
        score.innerHTML = scoreCount
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

function resetGame(){
    scoreCount = 1
    itemCount = 0
    randomItem = Math.floor(Math.random() * 11)
    snake = []
    food = {}
    bomb = {}
    goldFood = {}
    rottenFood = {}
    poisonnedFood = {}
    direction = 'up'
}

// Listeners
function setTimeoutKey(){
    isListening = false
    setTimeout(() => {
        isListening = true
    }, 70)
}


document.addEventListener('keydown', function(event){
    if(!isListening){
        return
    }

    if(event.key === 'ArrowLeft' && direction != 'right'){
        event.preventDefault()
        direction = 'left'
        setTimeoutKey()
    }
    else if(event.key === 'ArrowUp' && direction != 'down'){
        event.preventDefault()
        direction = 'up'
        setTimeoutKey()
    }
    else if(event.key === 'ArrowRight' && direction != 'left'){
        event.preventDefault()
        direction = 'right'
        setTimeoutKey()
    }
    else if(event.key === 'ArrowDown' && direction != 'up'){
        event.preventDefault()
        direction = 'down'
        setTimeoutKey()
    }
})


quit.addEventListener('click', function(){
    resetGame()
    clearConsole()
    document.getElementById('snakeGame').style.display = 'none'
    userInput.disabled = false
})

replay.addEventListener('click', function(){
    resetGame()
    canvas.style.display = 'block'
    final.style.display = 'none'
    score.innerHTML = scoreCount
    quit.style.display = 'none'
    replay.style.display = 'none'
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    main()
})