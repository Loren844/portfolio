const userInput = document.getElementById('userInput');
const output = document.getElementById('output');
const closeButton = document.getElementById('closeButton');
const quitButton = document.getElementById('quitButton');
const expandButton = document.getElementById('expandButton');

// Gestion de la langue
function setLanguage(lang) {
    document.querySelector('#content h1').textContent = translations[lang].title;
    document.querySelector('#terminal .terminal-header span').textContent = translations[lang].title;
    document.querySelector('#terminal .terminal-body p').textContent = translations[lang].description;
    document.querySelector('#userInput').setAttribute('placeholder', translations[lang].input);
    document.querySelector('#enterButton .front').textContent = translations[lang].enter;
    document.querySelector('#replay').textContent = translations[lang].replay;
    document.querySelector('#quit').textContent = translations[lang].quit;
    document.querySelector('#language-label').textContent = translations[lang].language;
}

const langSelect = document.getElementById('language');
if (langSelect) {
    langSelect.addEventListener('change', function () {
        setLanguage(this.value);
        clearConsole();
    });
    // Initialisation à la langue par défaut
    setLanguage(langSelect.value);
}

var isExpanded = false;

function getCommands(lang) {
    return [
        { command: '/help', description: translations[lang].help },
        { command: '/cv', description: translations[lang].cv },
        { command: '/projects', description: translations[lang].projects },
        { command: '/contact', description: translations[lang].contact },
        { command: '/aboutme', description: translations[lang].aboutme },
        { command: '/education', description: translations[lang].education },
        { command: '/work', description: translations[lang].work },
        { command: '/dark', description: translations[lang].dark },
        { command: '/light', description: translations[lang].light },
        { command: '/snake', description: translations[lang].snake },
        { command: 'echo', description: translations[lang].echo },
        { command: 'clear', description: translations[lang].clear }
    ];
}

let commands = getCommands(langSelect ? langSelect.value : 'fr');
const commandsText = commands.map(cmd => cmd.command);

langSelect.addEventListener('change', function () {
    setLanguage(this.value);
    commands = getCommands(this.value);
});
setLanguage(langSelect.value);
commands = getCommands(langSelect.value);

//ajouter listeners pour la touche tab pour imiter un terminal
document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
        e.preventDefault();
        let input = userInput.value;
        if (input === '') {
            userInput.value = '/help';
        }
        else {
            let commands = [];
            for (let i = 0; i < commandsText.length; i++) {
                if (commandsText[i].startsWith(input)) {
                    commands.push(commandsText[i]);
                }
            }
            if (commands.length === 1) {
                userInput.value = commands[0];
            }
            else if (commands.length > 1) {
                //afficher les commandes possibles en dessous
                let commandList = ""
                for (let i = 0; i < commands.length; i++) {
                    commandList += commands[i] + "  "
                }
                clearConsole();
                output.innerHTML = commandList;
            }
        }
    }
})


function displayCommands() {
    let commandList = '<ul>';
    for (let i = 0; i < commands.length; i++) {
        commandList += `<li><span>${commands[i].command}</span> - ${commands[i].description}</li>`;
    }
    commandList += '</ul>';
    output.innerHTML += commandList;
}

function downloadCV() {
    window.open(translations[langSelect.value].cv_link, '_blank').focus();
    clearConsole();
}

function displayProjects() {
    output.innerHTML += translations[langSelect.value].projectsMsg;
}

function contact() {
    output.innerHTML = translations[langSelect.value].contactMsg;
}

function about() {
    output.innerHTML = translations[langSelect.value].aboutMsg;
}

function education() {
    output.innerHTML = translations[langSelect.value].educationMsg;
}

function workexperience() {
    output.innerHTML = translations[langSelect.value].workMsg;
}

function clearConsole() {
    output.innerHTML = '';
}

function toggleLightTheme() {
    const body = document.querySelector('body');
    body.classList.replace('theme-dark', 'theme-light');
}

function toggleDarkTheme() {
    const body = document.querySelector('body');
    body.classList.replace('theme-light', 'theme-dark');

}

function snakeGame() {
    clearConsole()
    document.getElementById('snakeGame').style.display = 'grid'

    userInput.disabled = true
    canvas.style.display = 'block'
    final.style.display = 'none'
    quit.style.display = 'none'
    replay.style.display = 'none'
    score.innerHTML = 1

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    snake = [];
    food = {};
    direction = 'up';
    main()
}

function closeterminal() {
    document.getElementById('curtain').style.transform = 'translateY(0)';
}

function quitTerminal() {
    document.getElementById('terminal').style.display = 'none';
    document.getElementById('easter-egg').style.display = 'block';
}

function expandTerminal() {
    if (isExpanded) {
        document.getElementById('terminal').style.width = '90%';
        document.getElementById('terminal').style.height = '70%';
        document.getElementById('terminal').style.maxWidth = '60vw';
        document.getElementById('terminal').style.maxHeight = '60vh';
        isExpanded = false;
    }
    else {
        document.getElementById('terminal').style.width = '100%';
        document.getElementById('terminal').style.height = '100%';
        document.getElementById('terminal').style.maxWidth = '100%';
        document.getElementById('terminal').style.maxHeight = '100%';
        isExpanded = true;
    }
}

closeButton.addEventListener('click', closeterminal);

quitButton.addEventListener('click', quitTerminal);

expandButton.addEventListener('click', expandTerminal);


userInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const inputText = userInput.value.toLowerCase();
        if (userInput.value === '') {
            return;
        }

        const inputArray = inputText.split(' ');
        const command = inputArray[0];
        output.innerHTML += `<div class="command">${inputText}</div>`;
        switch (command) {
            case '/help':
                displayCommands();
                break;
            case '/cv':
                downloadCV();
                break;
            case '/projects':
                clearConsole();
                displayProjects();
                break;
            case 'clear':
                clearConsole();
                break;
            case '/contact':
                clearConsole();
                contact();
                break;
            case '/aboutme':
                clearConsole();
                about();
                break;
            case '/education':
                clearConsole();
                education();
                break;
            case '/work':
                clearConsole();
                workexperience();
                break;
            case '/light':
                toggleLightTheme();
                break;
            case '/dark':
                toggleDarkTheme();
                break;
            case '/snake':
                snakeGame();
                break;
            case 'echo':
                const message = inputArray.slice(1).join(' ');
                output.innerHTML = `<div>${message}</div>`;
                break;
            default:
                output.innerHTML += `<div>${translations[langSelect.value].unknownCmd}</div>`;
        }
        userInput.value = '';
    }
})

document.addEventListener('DOMContentLoaded', function () {
    var enterBtn = document.getElementById('enterButton');
    if (enterBtn) {
        enterBtn.addEventListener('click', function () {
            document.getElementById('curtain').style.transform = 'translateY(-100%)';
        });
    }
});
