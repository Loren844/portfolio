const userInput = document.getElementById('userInput');
const output = document.getElementById('output');
const closeButton = document.getElementById('closeButton');
const quitButton = document.getElementById('quitButton');
const expandButton = document.getElementById('expandButton');
const naviCursor = document.getElementById('naviCursor');

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
let barrelrollUnlocked = false;
let marioSadUnlocked = false;
let portalThemeUnlocked = false;
let naviUnlocked = false;
let naviActive = false;
let pointerX = 0;
let pointerY = 0;
let naviAnimationFrame = null;
let rainbowUnlocked = false;
let moneyRainUnlocked = false;

// Registre des succès (extensible : ajouter une entrée + son nom dans translations.achievements)
const ACHIEVEMENTS = [
    { id: 'hacker', unlocked: () => hackerUnlocked },
    { id: 'barrelroll', unlocked: () => barrelrollUnlocked },
    { id: 'marioSad', unlocked: () => marioSadUnlocked },
    { id: 'portal', unlocked: () => portalThemeUnlocked },
    { id: 'navi', unlocked: () => naviUnlocked },
    { id: 'moneyRain', unlocked: () => moneyRainUnlocked }
];

function anyAchievementUnlocked() {
    return ACHIEVEMENTS.some(a => a.unlocked());
}

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
    if (portalThemeUnlocked) {
        list.push({ command: '/portal', description: translations[lang].portalTheme });
    }
    if (naviUnlocked) {
        list.push({ command: '/navi', description: translations[lang].naviToggle });
    }
    if (barrelrollUnlocked) {
        list.push({ command: '/barrelroll', description: translations[lang].barrelroll });
    }
    if (rainbowUnlocked) {
        list.push({ command: '/rainbow', description: translations[lang].rainbowTheme });
    }
    if (anyAchievementUnlocked()) {
        list.push({ command: '/progress', description: translations[lang].progress });
    }
    return list;
}

let commands = getCommands(currentLang);

function showProgress() {
    const unlocked = ACHIEVEMENTS.filter(a => a.unlocked());
    const total = ACHIEVEMENTS.length;
    let html = `<div><strong>${translations[currentLang].progressTitle} (${unlocked.length}/${total})</strong></div><ul>`;
    unlocked.forEach(a => {
        html += `<li>${translations[currentLang].achievements[a.id]}</li>`;
    });
    html += '</ul>';
    const remaining = total - unlocked.length;
    html += `<div>${translations[currentLang].progressRemaining.replace('%n%', remaining)}</div>`;
    output.innerHTML = html;
}

function positionNavi(x, y, orbitX, orbitY) {
    const size = 68;
    const offset = 18;
    let left = x + offset + orbitX;
    let top = y + offset + orbitY;
    if (left + size > window.innerWidth) {
        left = x - size - offset + orbitX;
    }
    if (top + size > window.innerHeight) {
        top = y - size - offset + orbitY;
    }
    naviCursor.style.left = `${Math.max(0, Math.min(left, window.innerWidth - size))}px`;
    naviCursor.style.top = `${Math.max(0, Math.min(top, window.innerHeight - size))}px`;
}

function animateNavi() {
    if (!naviActive) {
        return;
    }
    const time = performance.now() / 1000;
    const orbitX = Math.cos(time * 3.1) * 16 + Math.sin(time * 5.3) * 5;
    const orbitY = Math.sin(time * 2.7) * 20 + Math.cos(time * 4.8) * 6;
    const rotation = Math.sin(time * 2.2) * 10 + Math.cos(time * 4.1) * 3;
    positionNavi(pointerX, pointerY, orbitX, orbitY);
    naviCursor.style.transform = `rotate(${rotation}deg)`;
    naviAnimationFrame = requestAnimationFrame(animateNavi);
}

document.addEventListener('mousemove', function (event) {
    pointerX = event.clientX;
    pointerY = event.clientY;
});

function activateNavi() {
    naviActive = true;
    naviCursor.hidden = false;
    if (naviAnimationFrame === null) {
        naviAnimationFrame = requestAnimationFrame(animateNavi);
    }
    if (!naviUnlocked) {
        naviUnlocked = true;
        showAchievement(translations[currentLang].naviUnlocked);
        checkAllAchievementsCompleted();
    }
    commands = getCommands(currentLang);
}

function deactivateNavi() {
    naviActive = false;
    cancelAnimationFrame(naviAnimationFrame);
    naviAnimationFrame = null;
    naviCursor.hidden = true;
    commands = getCommands(currentLang);
}

function toggleNavi() {
    if (naviActive) {
        deactivateNavi();
    } else {
        activateNavi();
    }
}

function startMoneyRain() {
    const container = document.createElement('div');
    container.className = 'money-rain';
    const symbols = ['€', '$', '£', '¥', '₿', '¢', '₹', '₩', '₽', '₺', '₴', '฿'];
    for (let i = 0; i < 400; i++) {
        const span = document.createElement('span');
        span.className = 'money-symbol';
        span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        span.style.left = Math.random() * 100 + 'vw';
        span.style.fontSize = (1 + Math.random() * 1.8) + 'rem';
        span.style.animationDuration = (0.7 + Math.random() * 0.9) + 's';
        span.style.animationDelay = (Math.random() * 1) + 's';
        container.appendChild(span);
    }
    document.body.appendChild(container);
    setTimeout(() => container.remove(), 3500);
}

function unlockMoneyRain() {
    startMoneyRain();
    if (moneyRainUnlocked) {
        return;
    }
    moneyRainUnlocked = true;
    commands = getCommands(currentLang);
    showAchievement(translations[currentLang].moneyRainUnlocked);
    checkAllAchievementsCompleted();
}

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
    body.classList.remove('theme-dark', 'theme-light', 'theme-hacker', 'theme-portal', 'theme-rainbow');
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
    showAchievement(translations[currentLang].hackerUnlocked);
    checkAllAchievementsCompleted();
}

function unlockPortalTheme() {
    setTheme('portal');
    if (portalThemeUnlocked) {
        return;
    }
    portalThemeUnlocked = true;
    commands = getCommands(currentLang);
    showAchievement(translations[currentLang].portalUnlocked);
    checkAllAchievementsCompleted();
}

function doBarrelRoll() {
    const terminal = document.getElementById('terminal');
    terminal.classList.add('barrel-roll');
    setTimeout(() => terminal.classList.remove('barrel-roll'), 1000);
    if (barrelrollUnlocked) {
        return;
    }
    barrelrollUnlocked = true;
    commands = getCommands(currentLang);
    showAchievement(translations[currentLang].barrelrollUnlocked);
    checkAllAchievementsCompleted();
}

function showAchievement(message) {
    const banner = document.createElement('div');
    banner.className = 'achievement';
    banner.innerHTML = `<span class="achievement-icon">&#127942;</span> ${message}`;
    document.body.appendChild(banner);
    setTimeout(() => banner.classList.add('achievement-hide'), 4000);
    setTimeout(() => banner.remove(), 4600);
}

// Récompense méta : débloquée une fois que tous les succès du registre sont validés
function checkAllAchievementsCompleted() {
    if (rainbowUnlocked || !ACHIEVEMENTS.every(a => a.unlocked())) {
        return;
    }
    rainbowUnlocked = true;
    setTheme('rainbow');
    commands = getCommands(currentLang);
    showCongrats(translations[currentLang].allAchievementsUnlocked);
}

function showCongrats(message) {
    const banner = document.createElement('div');
    banner.className = 'achievement achievement-grand';
    banner.innerHTML = `<span class="achievement-icon">&#127881;</span> ${message}`;
    document.body.appendChild(banner);
    setTimeout(() => banner.classList.add('achievement-hide'), 6000);
    setTimeout(() => banner.remove(), 6600);
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
    if (!marioSadUnlocked) {
        marioSadUnlocked = true;
        commands = getCommands(currentLang);
        showAchievement(translations[currentLang].marioSadUnlocked);
        checkAllAchievementsCompleted();
    }
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

document.getElementById('returnToTerminal').addEventListener('click', function () {
    document.getElementById('easter-egg').style.display = 'none';
    document.getElementById('terminal').style.display = 'block';
    userInput.focus();
});


userInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const inputText = userInput.value.toLowerCase();
        if (userInput.value === '') {
            return;
        }

        const inputArray = inputText.split(' ');
        const command = inputArray[0];
        output.innerHTML += `<div class="command">${inputText}</div>`;

        if (inputText === 'do a barrel roll') {
            doBarrelRoll();
            userInput.value = '';
            return;
        }
        if (inputText.trim() === 'the cake is a lie') {
            unlockPortalTheme();
            userInput.value = '';
            return;
        }
        if (inputText.trim() === 'hey listen') {
            activateNavi();
            userInput.value = '';
            return;
        }
        if (inputText.trim() === 'motherlode') {
            unlockMoneyRain();
            userInput.value = '';
            return;
        }

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
            case '/portal':
                if (portalThemeUnlocked) {
                    setTheme('portal');
                } else {
                    output.innerHTML += `<div>${translations[currentLang].unknownCmd}</div>`;
                }
                break;
            case '/navi':
                if (naviUnlocked) {
                    toggleNavi();
                } else {
                    output.innerHTML += `<div>${translations[currentLang].unknownCmd}</div>`;
                }
                break;
            case '/rainbow':
                if (rainbowUnlocked) {
                    setTheme('rainbow');
                } else {
                    output.innerHTML += `<div>${translations[currentLang].unknownCmd}</div>`;
                }
                break;
            case '/barrelroll':
                if (barrelrollUnlocked) {
                    doBarrelRoll();
                } else {
                    output.innerHTML += `<div>${translations[currentLang].unknownCmd}</div>`;
                }
                break;
            case '/progress':
                if (anyAchievementUnlocked()) {
                    showProgress();
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
