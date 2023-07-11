const userInput = document.getElementById('userInput');
const output = document.getElementById('output');

const commands = [
	{command: '/help', description: 'Afficher la liste des commandes disponibles'},
	{command: '/cv', description: 'T\u00E9l\u00E9charger mon CV'},
	{command: '/projects', description: 'Afficher mes projets'},
    {command: "/contact", description: "Pour me contacter / Voir mes liens utiles"},
    {command: "/lorenzo", description: "En savoir plus sur moi"},
    {command: "/softskills", description:"Découvrir les softs skills que j'ai acquis"},
    {command: "/education", description: "Voir mon parcours scolaire et professionnel"},
    {command: "/languages", description: "Voir les langages/frameworks que je connais"},
    {command: "/dark", description: "Passer au th&egrave;me sombre"},
    {command: "/light", description: "Passer au th&egrave;me clair"},
    {command: "/snake", description: "Jouer à un snake codé par moi-même"},
    {command: 'clear', description: 'Effacer la console'}]
    //rajouter les softs skills, presentation entreprise

    const commandsText = ['/help', '/cv', '/projects', '/contact', '/lorenzo', '/softskills', '/education', '/languages', '/dark', '/light', '/snake', 'clear'];

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
        projectList += '<li><a href="https://github.com/Loren844/LOTO-SAE" target="_blank">Jeu de loto en C - Semestre 1</a></li>';
        projectList += '<li><a href="https://loren844.github.io/FISK/" target="_blank">Jeu "FISK" (java), variante de Risk - Semestre 2</a></li>';
        projectList += '<li><a href="https://github.com/Loren844/blorenzo-portfolio" target="_blank">Portfolio personnel</a></li>';
        projectList += '</ol>';
        output.innerHTML += projectList;
    }

    function clearConsole() {
        output.innerHTML = '';
    }

    // Script pour la fonction "contact"
    function contact() {
        var message = 'Vous pouvez me contacter par les moyens ci-dessous :<br><br>Mail : lobaladier@gmail.com <br>Tel : +33 7 62 07 67 65<br><a href="https://www.linkedin.com/in/lorenzo-baladier/" target="_blank">Voir mon LinkedIn</a><br><a href="https://github.com/Loren844" target="_blank">Voir mon GitHub</a>';
        output.innerHTML = message;
    }
    
    // Script pour la fonction "à propos"
    function about() {
        var message = "Ma passion pour le code me vient d'une passion encore plus forte : celle des jeux vidéo. J'ai commencé à coder en 2019, lorsque j'avais 14 ans en ayant comme projet de créer un jeu. <br><br>Après avoir un peu codé en <u>Python</u>, j'ai rapidement su que c'était fait pour moi. C'est pourquoi j'ai choisi la spécialité NSI au lycée, grâce à laquelle j'ai pu consolider mes bases de <u>Python</u> ainsi que de commencer le <u>SQL</u>, le <u>HTML</u> ainsi que le <u>CSS</u>. <br><br>Après l'obtention de mon baccalauréat, il m'est paru naturel de continuer dans une filière d'informatique. Grâce au BUT Informatique, j'ai pu apprendre <u>le C</u>, et je commence <u>le C++</u>. Lors de mes semaines en entreprise j'ai du me former au <u>Java</u> ainsi qu'au <u>TypeScript</u>, car j'ai pour projet d'automatiser un site web (au début en <u>Selenium</u> puis basculement sur du <u>Cypress</u>). <br><br>J'ai aussi l'occasion d'apprendre le <u>Bash</u> et de m'améliorer en <u>SQL</u>. J'ai également des cours de développement Web qui me permettent d'approfondir mes connaissances en <u>HTML</u> et <u>CSS</u> ainsi que de découvrir le <u>JavaScript</u>.";
        output.innerHTML = message;
    }

    function softskills(){
        let softskillsList = '<p>Voici mes diff&eacute;rents Softs Skills :<br><ol>';
        softskillsList += '<li><p><b>Curieux</b> : Lorsqu’un sujet me passionne, je suis très curieux d’en apprendre plus et très enthousiaste de sortir des sentiers battus. Évidemment comme tout le monde j’ai des préférences, mais découvrir un nouvel aspect d’un sujet n’est jamais une perte de temps pour moi.</li><br>'
        softskillsList += '<li><p><b>Réaliste</b> mais ambitieux : Bien que je sois très réaliste et rationnel sur mon travail, je suis quelqu’un qui voit les choses en grand et qui ne les fait que très rarement à moitié (lorsque le temps nous manque). Je ne recule pas devant le moindre obstacle et je peux persévérer des heures même si je n’en vois pas le bout.</li><br>'
        softskillsList += '<li><p><b>Travail en équipe</b> : Je suis quelqu’un de plutôt calme, ce qui me permet d’écouter mes coéquipiers sans vouloir en faire qu’à ma tête.</li><br>'
        softskillsList += '<li><p><b>Indépendance</b> : J’aime me retrouver seul pour me ressourcer et travailler de manière indépendante me fait du bien. J’arrive à me gérer sans avoir besoin d\'une supervision constante. Le fait d’être seul me permet de me concentrer davantage.</li><br>'
        softskillsList += '<li><p><b>Adaptabilité</b> : Mon calme fait que je ne suis que très peu affecté par mes émotions, ce qui me permet de travailler sous pression efficacement. Bien que j’ai des préférences, je peux m’adapter à tout. Que cela soit en termes de coéquipiers, de tâches…</li>'
        output.innerHTML += softskillsList;
    }

    function languages() {
        var message =
        "<span style=\"color: cyan;\">Langages</span><br>" +
        "├── <span style=\"color: red;\">Back end</span><br>"+
        "│   ├── <span style=\"color: blue;\">Orienté objet</span><br>" + 
        "│   │   ├── Java ****<br>" +
        "│   │   └── C++ **<br>"+
        "│   ├── Python ****<br>"+
        "│   ├── C ***<br>"+
        "│   ├── SQL **<br>"+
        "│   └── Bash *<br>"+
        "├── <span style=\"color: green;\">Front end</span><br>"+
        "│   ├── HTML ***<br>"+
        "│   ├── CSS ***<br>"+
        "│   ├── JavaScript **<br>"+
        "│   └── TypeScript **<br>"+
        "└── <span style=\"color: magenta;\">Frameworks</span><br>"+
        "    ├── Cypress ***<br>"+
        "    ├── Selenium ***<br>"+
        "    └── TestNG ***<br></pre>";
        output.innerHTML = message;
    }
    
    function education() {
        var message = "Je suis actuellement &eacute;tudiant &agrave; l'IUT Nice C&ocirc;te d'Azur, sur le p&ocirc;le de Sophia-Antipolis, afin de poursuivre une formation en 3 ans intitul&eacute;e BUT Informatique. Je poursuis cette formation en alternance, dans l'entreprise ESI (le Cannet), ce qui me permet de me familiariser avec le monde du travail. <br><br>J'ai intégré cette entreprise en tant qu'alternant tests et validation, ma mission principale chez ESI est de mettre en place un processus d'automatisation des tests des logiciels développés afin de réduire la charge de travail des QA Testers. <br><br> J'ai commencé par coder les tests en Java avec Selenium, cependant nous nous sommes rendus compte que pour la mise en place d'une chaîne d'intégration complète cette solution n'était pas la plus viable. C'est pourquoi nous avons choisi d'utiliser Cypress avec TypeScript.";
        output.innerHTML = message;
    }

     function toggleLightTheme() {
        const body = document.querySelector('body');
        body.classList.replace('theme-dark', 'theme-light');
        clearConsole();
     }
  
     function toggleDarkTheme() {
        const body = document.querySelector('body');
        body.classList.replace('theme-light', 'theme-dark');
        clearConsole();
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
                case '/lorenzo':
                    clearConsole();
                    about();
                    break;
                case '/softskills':
                    clearConsole();
                    softskills();
                    break;
                case '/education':
                    clearConsole();
                    education();
                    break;
                case '/languages':
                    clearConsole();
                    languages();
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
                default:
                    output.innerHTML += `<div>Cette commande n'est pas reconnue. Tapez "/help" pour voir les commandes disponibles.</div>`;
            }
            userInput.value = '';
        }
    })