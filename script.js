const userInput = document.getElementById('userInput');
const output = document.getElementById('output');
const closeButton = document.getElementById('closeButton');
const quitButton = document.getElementById('quitButton');
const expandButton = document.getElementById('expandButton');

var isExpanded = false;

const commands = [
	{command: '/help', description: 'Afficher la liste des commandes disponibles'},
	{command: '/cv', description: 'T\u00E9l\u00E9charger mon CV'},
	{command: '/projects', description: 'Afficher mes projets'},
    {command: "/contact", description: "Pour me contacter / Voir mes liens utiles"},
    {command: "/aboutme", description: "En savoir plus sur moi"},
    {command: "/skills", description:"Découvrir mes compétences"},
    {command: "/education", description: "Afficher mon parcours scolaire"},
    {command: "/work", description: "Afficher mes expériences professionnelles"},
    {command: "/dark", description: "Passer au th&egrave;me sombre"},
    {command: "/light", description: "Passer au th&egrave;me clair"},
    {command: "/snake", description: "Jouer à un jeu snake codé par moi-même"},
    {command: "echo", description: "Renvoie le message écrit par l'utilisateur"},
    {command: 'clear', description: 'Effacer la console'}]

    const commandsText = ['/help', '/cv', '/projects', '/contact', '/aboutme', '/skills', '/education', '/work', '/dark', '/light', '/snake', 'echo', 'clear'];

    document.getElementById('enterButton').addEventListener('click', function() {
        document.getElementById('curtain').style.transform = 'translateY(-100%)';
      });

    //ajouter listeners pour la touche tab pour imiter un terminal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            e.preventDefault();
            let input = userInput.value;
            if(input === '') {
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
        window.open('CV_Lorenzo_BALADIER.pdf', '_blank').focus();
        clearConsole();
    }
    
    function displayProjects() {
        let projectList = '<p>Cliquez sur le projet qui vous int&eacute;resse:<br><ol>';
        projectList += '<li><a href="https://github.com/Loren844/LOTO-SAE" target="_blank">Jeu de loto en C - Semestre 1 BUT Informatique</a></li>';
        projectList += '<li><a href="https://loren844.github.io/FISK/" target="_blank">Jeu "FISK" (java), variante de Risk - Semestre 2 BUT Informatique</a></li>';
        projectList += '<li><a href="https://github.com/Loren844/filrouge" target="_blank">Projet Application Mobile - Semestre 4 BUT Informatique</a></li>';
        projectList += '<li><a href="https://github.com/Loren844/blorenzo-portfolio" target="_blank">Portfolio personnel</a></li>';
        projectList += '</ol>';
        output.innerHTML += projectList;
    }

    function clearConsole() {
        output.innerHTML = '';
    }

    // Script pour la fonction "contact"
    function contact() {
        var message = 'Vous pouvez me contacter par les moyens ci-dessous :' +
        '<br><br>Mail : lorenzo.baladier@etu.unice.fr <br>' + 
        '<a href="https://www.linkedin.com/in/lorenzo-baladier/" target="_blank">Voir mon LinkedIn</a><br>' +
        '<a href="https://github.com/Loren844" target="_blank">Voir mon GitHub</a>';
        output.innerHTML = message;
    }
    
    // Script pour la fonction "à propos"
    function about() {
        var message = "Je suis actuellement étudiant en BUT Informatique en alternance depuis deux ans. Cette formation m'a permis de combiner des connaissances théoriques solides avec une expérience pratique en entreprise, ce qui m'a donné une compréhension approfondie des enjeux et des technologies du secteur informatique.<br><br>" +
        "En septembre, je vais débuter un cycle d'ingénieur en informatique à Polytech Nice Sophia, également en alternance. Cette nouvelle étape représente une formidable opportunité pour approfondir mes compétences techniques et renforcer mon expertise, tout en continuant à appliquer ces connaissances dans un cadre professionnel.<br><br>" + 
        "Passionné par le développement de solutions innovantes et l'optimisation des systèmes informatiques, je suis déterminé à contribuer de manière significative aux projets auxquels je participe. Mon parcours en alternance m'a inculqué des valeurs de rigueur, d'adaptabilité et de travail en équipe, des atouts que je compte bien mettre à profit dans mes futures missions.";
        output.innerHTML = message;
    }

    // Script pour la fonction "skills"
    function skills() {
        var message =
        "<pre>├── hard-skills<br>" +
        "│   ├── programming-languages<br>" +
        "│   │   ├── Java                [<span style=\"color: green;\">██████████████████</span>..] 90%<br>" +
        "│   │   ├── Python              [<span style=\"color: green;\">████████████████</span>....] 80%<br>" +
        "│   │   ├── C/C++               [<span style=\"color: green;\">█████████████</span>.......] 65%<br>" +
        "│   │   ├── JavaScript/TS       [<span style=\"color: green;\">████████████</span>........] 60%<br>" +
        "│   │   ├── SQL                 [<span style=\"color: green;\">████████████</span>........] 60%<br>" +
        "│   │   └── PHP                 [<span style=\"color: orange;\">██████████</span>..........] 50%<br>" +
        "│   ├── web-development<br>" +
        "│   │   ├── HTML                [<span style=\"color: green;\">██████████████</span>......] 70%<br>" +
        "│   │   ├── CSS                 [<span style=\"color: green;\">████████████</span>........] 60%<br>" +
        "│   │   ├── NodeJS              [<span style=\"color: green;\">████████████</span>........] 60%<br>" +
        "│   │   ├── Bootstrap           [<span style=\"color: green;\">████████████</span>........] 50%<br>" +
        "│   │   ├── Angular             [<span style=\"color: orange;\">██████████</span>..........] 50%<br>" +
        "│   │   ├── TailWind            [<span style=\"color: orange;\">████████</span>............] 40%<br>" +
        "│   │   └── ViteJS              [<span style=\"color: red;\">██████</span>..............] 30%<br>" +
        "│   ├── tools-and-frameworks<br>" +
        "│   │   ├── Git                 [<span style=\"color: green;\">██████████████</span>......] 70%<br>" +
        "│   │   ├── Maven               [<span style=\"color: orange;\">██████████</span>..........] 50%<br>" +
        "│   │   ├── Bash                [<span style=\"color: orange;\">████████</span>............] 40%<br>" +
        "│   │   ├── Spring              [<span style=\"color: red;\">██████</span>..............] 30%<br>" +
        "│   │   └── Docker              [<span style=\"color: red;\">████</span>................] 20%<br>" +
        "│<br>" +
        "└── soft-skills<br>" +
        "    ├── Autonomie<br>" +
        "    ├── Gestion du stress<br>" +
        "    ├── Travail en équipe<br>" +
        "    └── Adaptabilité<pre>";
        output.innerHTML = message;
    }
    
    function education() {
        var message = "<ul>" +
                      "<li><b>Cycle d'ingénieur en informatique - 2024/2027</b><br>" +
                      "Polytech - Nice Sophia</li><br><br>" +
                      "<li><b>BUT Informatique en alternance - 2022/2024</b><br>" +
                      "IUT Nice Côte d’Azur - Site de Sophia Antipolis</li><br><br>" +
                      "<li><b>Baccalauréat Général, Section ESABAC, Mention Très Bien - 2019/2022</b><br>" +
                      "Lycée Pierre et Marie Curie - Menton</li><br><br>" +
                      "</ul>";
        output.innerHTML = message;
    }

    function workexperience() {
        var message = "<ul>" +
                        /*
                        "<li><b>Alternant Ingénieur développement logiciel - 2024/2027</b><br>" +
                        "Ampere Software Technology (Renault Group) - Valbonne<br>" +
                        "<ul>" +
                            "<li>Analyses de performances</li>" +
                            "<li>Développement C++ / Rust</li>" +
                        "</ul>" +
                        "</li><br>" +
                         */
                        "<li><b>Alternant Développeur - 2022/2024</b><br>" +
                        "ESI - Le Cannet<br>" +
                        "<ul>" +
                            "<li>Développement d'un éditeur de bannières (Drag & Drop) en TypeScript avec Angular</li>" +
                            "<li>Développement d’une application JAVA d’export de données au format JSON depuis une base de données distante</li>" +
                            "<li>Développement de tests automatisés en Java grâce à Selenium et TestNG puis basculement sur du TypeScript avec Cypress</li>" +
                        "</ul>" +
                        "</li>" +
                        "</ul>";
        output.innerHTML = message;
    }

    function toggleLightTheme() {
        const body = document.querySelector('body');
        body.classList.replace('theme-dark', 'theme-light');
     }
  
     function toggleDarkTheme() {
        const body = document.querySelector('body');
        body.classList.replace('theme-light', 'theme-dark');

     }

     function snakeGame(){
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

    function quitTerminal(){
        document.getElementById('terminal').style.display = 'none';
        document.getElementById('easter-egg').style.display = 'block';
    }

    function expandTerminal() {
        if(isExpanded) {
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


    userInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const inputText = userInput.value.toLowerCase();
            if(userInput.value === '') {
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
                case '/skills':
                    clearConsole();
                    skills();
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
                    output.innerHTML += `<div>Cette commande n'est pas reconnue. Tapez "/help" pour voir les commandes disponibles.</div>`;
            }
            userInput.value = '';
        }
    })
