const userInput = document.getElementById('userInput');
const output = document.getElementById('output');
const closeButton = document.getElementById('closeButton');
const quitButton = document.getElementById('quitButton');
const expandButton = document.getElementById('expandButton');

// Gestion de la langue
function setLanguage(lang) {
    document.querySelector('#terminal .terminal-header span').textContent = translations[lang].title;
    document.querySelector('#terminal .terminal-body p').textContent = translations[lang].description;
    document.querySelector('#userInput').setAttribute('placeholder', translations[lang].input);
    document.querySelector('#enterButton .front').textContent = translations[lang].enter;
    document.querySelector('#replay').textContent = translations[lang].replay;
    document.querySelector('#quit').textContent = translations[lang].quit;
}

let currentLang = 'fr';

let isExpanded = false;
let hackerUnlocked = false;

function getCommands(lang) {
    const list = [
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
        { command: '/lang', description: translations[lang].langCmd },
        { command: 'echo', description: translations[lang].echo },
        { command: 'clear', description: translations[lang].clear }
    ];
    if (hackerUnlocked) {
        list.push({ command: '/hacker', description: translations[lang].hacker });
    }
    return list;
}

let commands = getCommands(currentLang);

function changeLanguage(lang) {
    if (!translations[lang]) {
        output.innerHTML += `<div>${translations[currentLang].langUsage}</div>`;
        return;
    }
    currentLang = lang;
    setLanguage(currentLang);
    commands = getCommands(currentLang);
    clearConsole();
}

setLanguage(currentLang);

// Touche Tab pour imiter l'autocomplétion d'un terminal
document.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab') {
        return;
    }
    e.preventDefault();
    const input = userInput.value;
    if (input === '') {
        userInput.value = '/help';
        return;
    }
    const matches = commands.map(cmd => cmd.command).filter(cmd => cmd.startsWith(input));
    if (matches.length === 1) {
        userInput.value = matches[0];
    }
    else if (matches.length > 1) {
        clearConsole();
        output.innerHTML = matches.join('  ');
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
    window.open(translations[currentLang].cv_link, '_blank').focus();
    clearConsole();
}

function displayProjects() {
    output.innerHTML += translations[currentLang].projectsMsg;
}

function contact() {
    output.innerHTML = translations[currentLang].contactMsg;
}

function about() {
    output.innerHTML = translations[currentLang].aboutMsg;
}

function education() {
    output.innerHTML = translations[currentLang].educationMsg;
}

function workexperience() {
    output.innerHTML = translations[currentLang].workMsg;
}

function clearConsole() {
    output.innerHTML = '';
}

function setTheme(theme) {
    const body = document.querySelector('body');
    body.classList.remove('theme-dark', 'theme-light', 'theme-hacker');
    body.classList.add('theme-' + theme);
}

function toggleLightTheme() {
    setTheme('light');
}

function toggleDarkTheme() {
    setTheme('dark');
}

// Konami code : succès secret + thème hacker
const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', function (e) {
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if (key === KONAMI_CODE[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === KONAMI_CODE.length) {
            konamiIndex = 0;
            unlockHacker();
        }
    } else {
        konamiIndex = key === KONAMI_CODE[0] ? 1 : 0;
    }
});

function unlockHacker() {
    setTheme('hacker');
    if (hackerUnlocked) {
        return;
    }
    hackerUnlocked = true;
    commands = getCommands(currentLang);
    showAchievement();
}

function showAchievement() {
    const banner = document.createElement('div');
    banner.className = 'achievement';
    banner.innerHTML = `<span class="achievement-icon">&#127942;</span> ${translations[currentLang].hackerUnlocked}`;
    document.body.appendChild(banner);
    setTimeout(() => banner.classList.add('achievement-hide'), 4000);
    setTimeout(() => banner.remove(), 4600);
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
            case '/hacker':
                if (hackerUnlocked) {
                    setTheme('hacker');
                } else {
                    output.innerHTML += `<div>${translations[currentLang].unknownCmd}</div>`;
                }
                break;
            case '/lang':
                changeLanguage(inputArray[1]);
                break;
            case 'echo':
                const message = inputArray.slice(1).join(' ');
                output.innerHTML = `<div>${message}</div>`;
                break;
            default:
                output.innerHTML += `<div>${translations[currentLang].unknownCmd}</div>`;
        }
        userInput.value = '';
    }
})

document.addEventListener('DOMContentLoaded', function () {
    userInput.focus();

    const enterBtn = document.getElementById('enterButton');
    if (enterBtn) {
        enterBtn.addEventListener('click', function () {
            document.getElementById('curtain').style.transform = 'translateY(-100%)';
        });
    }
});
