const userInput = document.getElementById('userInput');
const output = document.getElementById('output');

const commands = [
	{command: '/help', description: 'Afficher la liste des commandes disponibles'},
	{command: '/cv', description: 'T\u00E9l\u00E9charger mon CV'},
	{command: '/projects', description: 'Afficher mes projets'},
    {command: "/contact", description: "Pour me contacter"},
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
        window.open('CV_Lorenzo_BALADIER.pdf');
        clearConsole();
    }
    
    function displayProjects() {
        let projectList = '<p>Cliquez sur le projet qui vous intéresse:<br><ol>';
        projectList += '<li><a href="https://github.com/Loren844/LOTO-SAE" target="_blank">Jeu de loto en C</a></li>';
        projectList += '<li><a href="#">Jeu "FISK" (java), variante de Risk (en cours)</a></li>';
        projectList += '</ol>';
        output.innerHTML += projectList;
    }

    function clearConsole() {
        output.innerHTML = '';
    }

    // Script pour la fonction "contact"
    function contact() {
        var message = 'Vous pouvez me contacter par les moyens ci-dessous :<br><br>Mail : lobaladier@gmail.com <br>Tel : +33 7 62 07 67 65<br><a href="https://www.linkedin.com/in/lorenzo-baladier/" target="_blank">Voir mon LinkedIn</a>';
        output.innerHTML = message;
    }
    
    // Script pour la fonction "à propos"
    function about() {
        var message = "Jeune étudiant passionné d'informatique , je rêve de pouvoir vivre de cette passion. J'ai encore beaucoup à apprendre, c'est pourquoi je souhaite intégrer un parcours qui m'aidera à atteindre mon objectif ! ";
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