const userInput = document.getElementById('userInput');
const output = document.getElementById('output');

const commands = [
	{command: '/help', description: 'Afficher la liste des commandes disponibles'},
	{command: '/cv', description: 'T\u00E9l\u00E9charger mon CV'},
	{command: '/projects', description: 'Afficher mes projets'},
    {command: "/contact", description: "Pour me contacter / Voir mes liens utiles"},
    {command: "/lorenzo", description: "En savoir plus sur moi"},
    {command: "/education", description: "Voir mon parcours scolaire et professionnel"},
    {command: "/dark", description: "Passer au th&egrave;me sombre"},
    {command: "/light", description: "Passer au th&egrave;me clair"},
    {command: 'clear', description: 'Effacer la console'}]

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
        let projectList = '<p>Cliquez sur le projet qui vous intéresse:<br><ol>';
        projectList += '<li><a href="https://github.com/Loren844/LOTO-SAE" target="_blank">Jeu de loto en C - Projet à 4</a></li>';
        projectList += '<li><a href="https://github.com/Loren844/FISK">Jeu "FISK" (java), variante de Risk (en cours) - Projet à 2</a></li>';
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
        var message = "Ma passion pour le code me vient d'une passion encore plus forte : celle des jeux vidéo. J'ai commencé à coder en 2019, lorsque j'avais 14 ans en ayant comme projet de créer un jeu. <br><br>Après avoir un peu codé en <u>Python</u>, j'ai rapidement su que c'était fait pour moi. C'est pourquoi j'ai choisi la spécialité NSI au lycée, grâce à laquelle j'ai pu consolider mes bases de <u>Python</u> ainsi que de commencer le <u>SQL</u>, le <u>HTML</u> ainsi que le <u>CSS</u>. <br><br>Après l'obtention de mon baccalauréat, il m'est paru naturel de continuer dans une filière d'informatique. Grâce au BUT Informatique, j'ai pu apprendre <u>le C</u>, et je commence <u>le C++</u>, lors de mes semaines en entreprise j'ai du me former au <u>Java</u> ainsi qu'aux frameworks <u>Selenium</u> pour l'automatisation de tests et <u>TestNG</u> pour la gestion des tests. <br><br>J'ai aussi l'occasion d'apprendre le <u>Bash</u> et de m'améliorer en <u>SQL</u>. J'ai également des cours de développement Web qui me permettent d'approfondir mes connaissances en <u>HTML</u> et <u>CSS</u> ainsi que de découvrir le <u>JavaScript</u>.";
        output.innerHTML = message;
    }
    
    // Script pour la fonction "formation"
    function education() {
        var message = "Je suis actuellement &eacute;tudiant &agrave; l'IUT Nice C&ocirc;te d'Azur, sur le p&ocirc;le de Sophia-Antipolis, afin de poursuivre une formation en 3 ans intitul&eacute;e BUT Informatique. Je poursuis cette formation en alternance, dans l'entreprise ESI (le Cannet), ce qui me permet de me familiariser avec le monde du travail.";
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

    userInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const inputText = userInput.value.toLowerCase();
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
                case '/education':
                    clearConsole();
                    education();
                    break;
                case '/light':
                    toggleLightTheme();
                    break;
                case '/dark':
                    toggleDarkTheme();
                    break;    
                default:
                    output.innerHTML += `<div>Cette commande n'est pas reconnue. Tapez "/help" pour voir les commandes disponibles.</div>`;
            }
            userInput.value = '';
        }
    });
