
const translations = {
    fr: {
        title: "Portfolio de Lorenzo BALADIER",
        description: "Bienvenue dans mon portfolio! Tapez /help pour voir les commandes disponibles.",
        enter: "Entrer",
        input: "Veuillez saisir une commande...",
        help: "Afficher la liste des commandes disponibles",
        cv: "Télécharger mon CV",
        projects: "Afficher mes projets",
        contact: "Pour me contacter / Voir mes liens utiles",
        aboutme: "En savoir plus sur moi",
        education: "Afficher mon parcours scolaire",
        work: "Afficher mes expériences professionnelles",
        dark: "Passer au thème sombre",
        light: "Passer au thème clair",
        snake: "Jouer à un jeu snake codé par moi-même",
        echo: "Renvoie le message écrit par l'utilisateur",
        clear: "Effacer la console",
        contactMsg: `Vous pouvez me contacter par les moyens ci-dessous :<br><br>
            Mail : lobaladier@gmail.com <br>
            <a href="https://www.linkedin.com/in/lorenzo-baladier/" target="_blank">Voir mon LinkedIn</a><br>
            <a href="https://github.com/Loren844" target="_blank">Voir mon GitHub</a>`,
        aboutMsg: `<p>
                Je suis <strong>Lorenzo BALADIER</strong>, étudiant en informatique à Polytech Nice - Sophia Antipolis. Passionné par le développement logiciel et les nouvelles technologies, je maîtrise plusieurs langages de programmation tels que <strong>Rust, Python, Java</strong> et <strong>C/C++</strong>, et j’ai une expérience concrète dans la conception d’applications, l’automatisation de tests et le développement de solutions fiables et performantes.
            </p>
            <br>
            <p>
                Durant mes expériences précédentes, notamment chez <strong>Ampere Software Technology (Renault Group)</strong> et <strong>European Systems Integration</strong>, j’ai participé à des projets variés allant de l’automatisation de tests à la création d’outils logiciels intégrés dans des pipelines CI/CD, en utilisant Docker et des APIs (GraphQL, REST).
            </p>
            <br>
            <p>
                J’aime relever des défis techniques, explorer de nouvelles technologies et contribuer à des projets ambitieux.
            </p>`,
        educationMsg: `<ul>
            <li><b>Cycle d'ingénieur en informatique - 2024/2027</b><br>Polytech - Nice Sophia</li><br><br>
            <li><b>BUT Informatique en alternance - 2022/2024</b><br>IUT Nice Côte d’Azur - Site de Sophia Antipolis</li><br><br>
            <li><b>Baccalauréat Général, Section ESABAC, Mention Très Bien - 2019/2022</b><br>Lycée Pierre et Marie Curie - Menton</li><br><br>
        </ul>`,
        workMsg: `<ul>
            <li><b>Apprentissage – Ampere Software Technology (Groupe Renault) Septembre 2024 - présent</b>
                <ul>
                    <li>Développement d’outils logiciels pour l’automatisation et l’amélioration de la fiabilité des tests de véhicules définis par logiciel (SDV).</li>
                    <li>Conception d’une bibliothèque Python pour générer des jeux de données réalistes et d’une application Rust (RMES) utilisant l’API GraphQL pour extraire et structurer les messages, intégrée dans un pipeline CI/CD.</li>
                </ul>
            </li>
            <br>
            <li><b>Apprentissage – European Systems Integration Septembre 2022 - Juillet 2024</b>
                <ul>
                    <li>Développement d’une application Java pour l’exportation de données au format JSON depuis une base de données distante.</li>
                    <li>Développement de tests automatisés en Java avec Selenium et TestNG, puis migration vers TypeScript avec Cypress.</li>
                </ul>
            </li>
        </ul>
        `,
        unknownCmd: "Cette commande n'est pas reconnue. Tapez \"/help\" pour voir les commandes disponibles.",
        projectsMsg: `<p>Cliquez sur le projet qui vous intéresse:<br>
            <ol>
                <li><a href="https://github.com/Loren844/rust-chip-8" target="_blank">"Emulateur Chip-8 en Rust - 2025"</a></li>
                <li><a href="https://github.com/Loren844/blorenzo-portfolio" target="_blank">Portfolio personnel - 2023</a></li>
                <li><a href="https://github.com/Loren844/filrouge" target="_blank">Projet Application Mobile - Semestre 4 BUT Informatique</a></li>
                <li><a href="https://loren844.github.io/FISK/" target="_blank">Jeu "FISK" (java), variante de Risk - Semestre 2 BUT Informatique</a></li>
                <li><a href="https://github.com/Loren844/LOTO-SAE" target="_blank">Jeu de loto en C - Semestre 1 BUT Informatique</a></li>
            </ol>`,
        cv_link: "assets/CV_Lorenzo_BALADIER_fr.pdf",
        replay: "Rejouer",
        quit: "Quitter",
        langCmd: "Changer la langue : /lang fr, /lang en ou /lang it",
        langUsage: "Usage : /lang fr, /lang en ou /lang it",
        hacker: "Activer le thème hacker (débloqué)",
        hackerUnlocked: "Bravo ! Succès débloqué : thème Hacker"
    },
    en: {
        title: "Lorenzo BALADIER's Portfolio",
        description: "Welcome to my portfolio! Type /help to see the available commands.",
        enter: "Enter",
        input: "Please enter a command...",
        help: "Show the list of available commands",
        cv: "Download my resume",
        projects: "Show my projects",
        contact: "Contact me / See my useful links",
        aboutme: "Learn more about me",
        education: "Show my education",
        work: "Show my work experience",
        dark: "Switch to dark theme",
        light: "Switch to light theme",
        snake: "Play a snake game coded by myself",
        echo: "Returns the message written by the user",
        clear: "Clear the console",
        contactMsg: `You can contact me by the means below:<br><br>
            Email: lobaladier@gmail.com <br>
            <a href="https://www.linkedin.com/in/lorenzo-baladier/" target="_blank">See my LinkedIn</a><br>
            <a href="https://github.com/Loren844" target="_blank">See my GitHub</a>`,
        aboutMsg: `<p>
            I am <strong>Lorenzo BALADIER</strong>, a computer science student at Polytech Nice - Sophia Antipolis. Passionate about software development and new technologies, I am proficient in several programming languages such as <strong>Rust, Python, Java</strong>, and <strong>C/C++</strong>, with hands-on experience in application design, test automation, and developing reliable and high-performance solutions.
            </p>
            <br>
            <p>
            During my previous experiences, notably at <strong>Ampere Software Technology (Renault Group)</strong> and <strong>European Systems Integration</strong>, I participated in various projects ranging from test automation to the creation of software tools integrated into CI/CD pipelines, using Docker and APIs (GraphQL, REST).
            </p>
            <br>
            <p>
            I enjoy tackling technical challenges, exploring new technologies, and contributing to ambitious projects.
            </p>`,
        educationMsg: `<ul>
            <li><b>Engineering cycle in Computer Science - 2024/2027</b><br>Polytech - Nice Sophia</li><br><br>
            <li><b>Bachelor in Computer Science (apprenticeship) - 2022/2024</b><br>IUT Nice Côte d’Azur - Sophia Antipolis</li><br><br>
            <li><b>General Baccalaureate, ESABAC Section, Highest Honors - 2019/2022</b><br>Lycée Pierre et Marie Curie - Menton</li><br><br>
        </ul>`,
        workMsg: `<ul>
            <li><b>Apprenticeship - Ampere Software Technology (Renault Group) Sept 2024 - present</b>
                <ul>
                    <li>Development of software tools for the automation and reliability enhancement of software-defined vehicle (SDV) testing.</li>
                    <li>Design of a Python library to generate realistic datasets and a Rust application (RMES) leveraging the GraphQL API to extract and structure messages, integrated within a CI/CD pipeline.</li>
                </ul>
            </li>
            <br>
            <li><b>Apprenticeship - European Systems Integration Sept 2022 - Jul 2024</b>
                <ul>
                    <li>Java application development for exporting data in JSON format from a remote database.</li>
                    <li>Automated testing development in Java using Selenium and TestNG, followed by migration to TypeScript with Cypress.</li>
                </ul>
            </li>
        </ul>`,
        unknownCmd: "This command is not recognized. Type \"/help\" to see the available commands.",
        projectsMsg: `<p>Click on the project you are interested in:<br>
            <ol>
                <li><a href="https://github.com/Loren844/rust-chip-8" target="_blank">"Rust Chip-8" Emulator - 2025</a></li>
                <li><a href="https://github.com/Loren844/blorenzo-portfolio" target="_blank">Personal portfolio - 2023</a></li>
                <li><a href="https://github.com/Loren844/filrouge" target="_blank">Mobile Application Project - Semester 4 Computer Science Bachelor</a></li>
                <li><a href="https://loren844.github.io/FISK/" target="_blank">"FISK" game (java), Risk variant - Semester 2 Computer Science Bachelor</a></li>
                <li><a href="https://github.com/Loren844/LOTO-SAE" target="_blank">Loto game in C - Semester 1 Computer Science Bachelor</a></li>
            </ol>`,
        cv_link: "assets/CV_Lorenzo_BALADIER_en.pdf",
        replay: "Replay",
        quit: "Quit",
        langCmd: "Change the language: /lang fr, /lang en or /lang it",
        langUsage: "Usage: /lang fr, /lang en or /lang it",
        hacker: "Enable the hacker theme (unlocked)",
        hackerUnlocked: "Well done! Achievement unlocked: Hacker theme"
    },
    it: {
        title: "Portfolio di Lorenzo BALADIER",
        description: "Benvenuto nel mio portfolio! Digita /help per vedere i comandi disponibili.",
        enter: "Entra",
        input: "Inserisci un comando...",
        help: "Mostra l'elenco dei comandi disponibili",
        cv: "Scarica il mio CV",
        projects: "Mostra i miei progetti",
        contact: "Contattami / Vedi i miei link utili",
        aboutme: "Scopri di più su di me",
        education: "Mostra il mio percorso scolastico",
        work: "Mostra le mie esperienze professionali",
        dark: "Passa al tema scuro",
        light: "Passa al tema chiaro",
        snake: "Gioca a uno snake programmato da me",
        echo: "Restituisce il messaggio scritto dall'utente",
        clear: "Pulisci la console",
        contactMsg: `Puoi contattarmi tramite i mezzi qui sotto:<br><br>
            Email: lobaladier@gmail.com <br>
            <a href="https://www.linkedin.com/in/lorenzo-baladier/" target="_blank">Vedi il mio LinkedIn</a><br>
            <a href="https://github.com/Loren844" target="_blank">Vedi il mio GitHub</a>`,
        aboutMsg: `<p>
                Sono <strong>Lorenzo BALADIER</strong>, studente di informatica al Polytech Nice - Sophia Antipolis. Appassionato di sviluppo software e nuove tecnologie, padroneggio diversi linguaggi di programmazione come <strong>Rust, Python, Java</strong> e <strong>C/C++</strong>, e ho un'esperienza concreta nella progettazione di applicazioni, nell'automazione dei test e nello sviluppo di soluzioni affidabili e performanti.
            </p>
            <br>
            <p>
                Durante le mie esperienze precedenti, in particolare presso <strong>Ampere Software Technology (Gruppo Renault)</strong> e <strong>European Systems Integration</strong>, ho partecipato a progetti vari, dall'automazione dei test alla creazione di strumenti software integrati in pipeline CI/CD, utilizzando Docker e API (GraphQL, REST).
            </p>
            <br>
            <p>
                Mi piace affrontare sfide tecniche, esplorare nuove tecnologie e contribuire a progetti ambiziosi.
            </p>`,
        educationMsg: `<ul>
            <li><b>Ciclo di ingegneria informatica - 2024/2027</b><br>Polytech - Nice Sophia</li><br><br>
            <li><b>Laurea triennale in Informatica (apprendistato) - 2022/2024</b><br>IUT Nice Côte d’Azur - Sophia Antipolis</li><br><br>
            <li><b>Baccalaureato Generale, Sezione ESABAC, Lode - 2019/2022</b><br>Lycée Pierre et Marie Curie - Menton</li><br><br>
        </ul>`,
        workMsg: `<ul>
            <li><b>Apprendistato – Ampere Software Technology (Gruppo Renault) Settembre 2024 - presente</b>
                <ul>
                    <li>Sviluppo di strumenti software per l'automazione e il miglioramento dell'affidabilità dei test di veicoli definiti dal software (SDV).</li>
                    <li>Progettazione di una libreria Python per generare set di dati realistici e di un'applicazione Rust (RMES) che utilizza l'API GraphQL per estrarre e strutturare i messaggi, integrata in una pipeline CI/CD.</li>
                </ul>
            </li>
            <br>
            <li><b>Apprendistato – European Systems Integration Settembre 2022 - Luglio 2024</b>
                <ul>
                    <li>Sviluppo di un'applicazione Java per l'esportazione di dati in formato JSON da un database remoto.</li>
                    <li>Sviluppo di test automatizzati in Java con Selenium e TestNG, poi migrazione verso TypeScript con Cypress.</li>
                </ul>
            </li>
        </ul>`,
        unknownCmd: "Questo comando non è riconosciuto. Digita \"/help\" per vedere i comandi disponibili.",
        projectsMsg: `<p>Clicca sul progetto che ti interessa:<br>
            <ol>
                <li><a href="https://github.com/Loren844/rust-chip-8" target="_blank">"Emulatore Chip-8 in Rust - 2025"</a></li>
                <li><a href="https://github.com/Loren844/blorenzo-portfolio" target="_blank">Portfolio personale - 2023</a></li>
                <li><a href="https://github.com/Loren844/filrouge" target="_blank">Progetto Applicazione Mobile - Semestre 4 Laurea in Informatica</a></li>
                <li><a href="https://loren844.github.io/FISK/" target="_blank">Gioco "FISK" (java), variante di Risk - Semestre 2 Laurea in Informatica</a></li>
                <li><a href="https://github.com/Loren844/LOTO-SAE" target="_blank">Gioco del loto in C - Semestre 1 Laurea in Informatica</a></li>
            </ol>`,
        cv_link: "assets/CV_Lorenzo_BALADIER_en.pdf",
        replay: "Rigioca",
        quit: "Esci",
        langCmd: "Cambia la lingua: /lang fr, /lang en o /lang it",
        langUsage: "Uso: /lang fr, /lang en o /lang it",
        hacker: "Attiva il tema hacker (sbloccato)",
        hackerUnlocked: "Bravo! Obiettivo sbloccato: tema Hacker"
    }
};
