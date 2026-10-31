
const translations = {
    fr: {
        title: "Portfolio de Lorenzo BALADIER",
        description: "Bienvenue dans mon portfolio! Tapez /help pour voir les commandes disponibles.",
        enter: "Entrer",
        input: "Veuillez saisir une commande...",
        help: "Afficher la liste des commandes disponibles",
        cv: "Ouvrir mon CV",
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
            Mail : <a href="mailto:contact@lorenzo-baladier.fr">contact@lorenzo-baladier.fr</a><br>
            <a href="https://www.linkedin.com/in/lorenzo-baladier/" target="_blank">Voir mon LinkedIn</a><br>
            <a href="https://github.com/Loren844" target="_blank">Voir mon GitHub</a><br>
            <a href="https://lorenzo-baladier.fr" target="_blank">Voir mon site</a>`,
        aboutMsg: `<p>
                Je suis <strong>Lorenzo BALADIER</strong>, élève ingénieur en dernière année à <strong>Polytech Nice Sophia</strong> (parcours IoT &amp; CPS) et apprenti ingénieur logiciel <strong>embarqué &amp; SDV</strong> chez <strong>Ampere Software Technology (Groupe Renault)</strong>.
            </p>
            <br>
            <p>
                Je travaille sur le véhicule défini par logiciel : bring-up sur <strong>Raspberry Pi</strong> et <strong>Cuttlefish</strong>, communication orientée services (<strong>SOME/IP</strong>, <strong>Protobuf</strong>), CI/CD et outillage en <strong>Rust</strong>. Lors d'un stage au Vietnam (DNIIT), j'ai réalisé l'asservissement visuel d'un bras robotique SCARA avec <strong>ROS 2</strong>, <strong>MoveIt 2</strong> et <strong>YOLO</strong>.
            </p>
            <br>
            <p>
                Langages : <strong>Rust, C, C++, Python, Java</strong>. Je recherche un <strong>CDI à Paris à partir de septembre 2027</strong> dans l'embarqué, l'automobile ou la robotique.
            </p>`,
        educationMsg: `<ul>
            <li><b>Diplôme d'ingénieur en informatique, parcours IoT &amp; CPS, en apprentissage - 2024/2027</b><br>Polytech Nice Sophia - Université Côte d'Azur</li><br><br>
            <li><b>DUT Informatique en alternance - 2022/2024</b><br>IUT Nice Côte d'Azur - Sophia Antipolis</li><br><br>
            <li><b>Baccalauréat Général, Section EsaBac (double diplôme franco-italien), Mention Très Bien - 2019/2022</b><br>Lycée Pierre et Marie Curie - Menton</li><br><br>
        </ul>`,
        workMsg: `<ul>
            <li><b>Ingénieur logiciel embarqué &amp; SDV (apprentissage) – Ampere Software Technology (Groupe Renault) – Septembre 2024 - présent</b>
                <ul>
                    <li>Conception et benchmark de <b>CarOS</b>, une plateforme de développement automobile basée sur l'environnement <b>Software-Defined Vehicle</b> de Google.</li>
                    <li>Bring-up de la plateforme sur <b>Raspberry Pi</b> et sur appareils virtuels <b>Cuttlefish</b>, mise en place des pipelines <b>CI/CD</b>.</li>
                    <li>Réalisation de cas d'usage de bout en bout : communication orientée services, diagnostic véhicule et traitement de données.</li>
                    <li>Réécriture d'un prototype Python en un outil CLI/TUI modulaire en <b>Rust</b> générant des commandes de test <b>SOME/IP</b>, <b>Protobuf</b> et GraphQL, testé avec des mocks et intégré à <b>GitLab CI</b>.</li>
                </ul>
            </li>
            <br>
            <li><b>Stage robotique &amp; vision par ordinateur – DNIIT (Da Nang, Vietnam) – Mai 2026 - Août 2026</b>
                <ul>
                    <li>Asservissement visuel en boucle fermée d'un bras industriel <b>SCARA</b> pour du pick-and-place de cibles en mouvement.</li>
                    <li>Détection d'objets et estimation de pose en temps réel avec <b>YOLO</b>, intégrées à <b>ROS 2</b> et <b>MoveIt 2</b>.</li>
                    <li>Validation de la cinématique et de la commande PID sous <b>MATLAB</b> et <b>Gazebo</b> avant déploiement sur le robot réel.</li>
                </ul>
            </li>
            <br>
            <li><b>Développeur logiciel (apprentissage) – European Systems Integration – Septembre 2022 - Juillet 2024</b>
                <ul>
                    <li>Développement d'une application <b>Java</b> d'export JSON de données depuis une base distante.</li>
                    <li>Automatisation des tests de bout en bout avec Selenium/TestNG, puis migration vers <b>TypeScript/Cypress</b>.</li>
                </ul>
            </li>
        </ul>`,
        unknownCmd: "Cette commande n'est pas reconnue. Tapez \"/help\" pour voir les commandes disponibles.",
        projectsMsg: `<p>Cliquez sur le projet qui vous intéresse :<br>
            <ol>
                <li><a href="https://github.com/Loren844/scara-visual-servoing" target="_blank">Asservissement visuel d'un robot SCARA (ROS 2, YOLO, MoveIt 2) - Stage DNIIT 2026</a></li>
                <li><a href="https://github.com/Loren844/rust-chip-8" target="_blank">Émulateur CHIP-8 en Rust (SDL2) - 2025</a></li>
                <li><a href="https://github.com/Loren844/MotiOS" target="_blank">MotiOS : assistant iOS pour Pokémon GO (OCR, calcul d'IV)</a></li>
                <li><a href="https://github.com/Loren844/portfolio" target="_blank">Ce portfolio interactif (FR/EN/IT)</a></li>
                <li><a href="https://github.com/Loren844/filrouge" target="_blank">Application mobile Android (Java) - BUT Informatique S4</a></li>
                <li><a href="https://loren844.github.io/FISK/" target="_blank">Jeu "FISK" (Java), variante de Risk - BUT Informatique S2</a></li>
                <li><a href="https://github.com/Loren844/LOTO-SAE" target="_blank">Jeu de loto en C - BUT Informatique S1</a></li>
            </ol>`,
        cv_link: "https://loren844.github.io/cv/fr.pdf",
        replay: "Rejouer",
        quit: "Quitter",
        langCmd: "Changer la langue : /lang fr, /lang en ou /lang it",
        langUsage: "Usage : /lang fr, /lang en ou /lang it",
        hacker: "Activer le thème hacker (débloqué)",
        hackerUnlocked: "Bravo ! Succès débloqué : Code Konami (Hacker)",
        portalTheme: "Activer le thème Portal (débloqué)",
        portalUnlocked: "Bravo ! Succès débloqué : The cake is a lie (thème Portal)",
        naviOff: "Désactiver Navi",
        naviToggle: "Activer/désactiver Navi",
        naviUnlocked: "Bravo ! Succès débloqué : Hey, écoute Navi !",
        barrelroll: "Faire faire un tonneau au terminal (débloqué)",
        barrelrollUnlocked: "Bravo ! Succès débloqué : Barrel Roll",
        progress: "Voir les succès débloqués (débloqué)",
        progressTitle: "Succès débloqués",
        progressRemaining: "Encore à trouver : %n%",
        achievements: {
            hacker: "Code Konami (Hacker)",
            barrelroll: "Barrel Roll",
            marioSad: "Mario est triste, aide-le à retrouver ses succès",
            portal: "The cake is a lie (thème Portal)",
            navi: "Hey, écoute Navi !",
            moneyRain: "Motherlode ! Pluie de billets"
        },
        marioSadUnlocked: "Bravo ! Succès débloqué : Mario est triste, aide-le à retrouver ses succès",
        rainbowTheme: "Activer le thème Rainbow RGB (débloqué)",
        allAchievementsUnlocked: "🎉 Félicitations ! Tous les succès sont débloqués ! Thème Rainbow RGB débloqué.",
        moneyRainUnlocked: "Bravo ! Succès débloqué : Motherlode ! Pluie de billets"
    },
    en: {
        title: "Lorenzo BALADIER's Portfolio",
        description: "Welcome to my portfolio! Type /help to see the available commands.",
        enter: "Enter",
        input: "Please enter a command...",
        help: "Show the list of available commands",
        cv: "Open my resume",
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
            Email : <a href="mailto:contact@lorenzo-baladier.fr">contact@lorenzo-baladier.fr</a><br>
            <a href="https://www.linkedin.com/in/lorenzo-baladier/" target="_blank">See my LinkedIn</a><br>
            <a href="https://github.com/Loren844" target="_blank">See my GitHub</a><br>
            <a href="https://lorenzo-baladier.fr" target="_blank">See my website</a>`,
        aboutMsg: `<p>
            I am <strong>Lorenzo BALADIER</strong>, a final-year engineering student at <strong>Polytech Nice Sophia</strong> (IoT &amp; CPS track) and an <strong>embedded &amp; SDV software engineering apprentice</strong> at <strong>Ampere Software Technology (Renault Group)</strong>.
            </p>
            <br>
            <p>
            I work on the software-defined vehicle: bring-up on <strong>Raspberry Pi</strong> and <strong>Cuttlefish</strong>, service-oriented communication (<strong>SOME/IP</strong>, <strong>Protobuf</strong>), CI/CD and <strong>Rust</strong> tooling. During an internship in Vietnam (DNIIT), I built visual servoing for a SCARA robot arm with <strong>ROS 2</strong>, <strong>MoveIt 2</strong> and <strong>YOLO</strong>.
            </p>
            <br>
            <p>
            Languages: <strong>Rust, C, C++, Python, Java</strong>. I am looking for a <strong>full-time role in Paris from September 2027</strong> in embedded systems, automotive or robotics.
            </p>`,
        educationMsg: `<ul>
            <li><b>MSc-level Engineering Degree in Computer Science, IoT &amp; CPS, apprenticeship - 2024/2027</b><br>Polytech Nice Sophia - Université Côte d'Azur</li><br><br>
            <li><b>University Diploma in Computer Science (DUT), apprenticeship - 2022/2024</b><br>IUT Nice Côte d'Azur - Sophia Antipolis</li><br><br>
            <li><b>French Baccalaureate, EsaBac (French-Italian dual diploma), Highest Honors - 2019/2022</b><br>Lycée Pierre et Marie Curie - Menton</li><br><br>
        </ul>`,
        workMsg: `<ul>
            <li><b>Embedded &amp; SDV Software Engineer (apprentice) – Ampere Software Technology (Renault Group) – Sept 2024 - present</b>
                <ul>
                    <li>Designed and benchmarked <b>CarOS</b>, an automotive development platform built on Google's <b>Software-Defined Vehicle</b> environment.</li>
                    <li>Brought the platform up on <b>Raspberry Pi</b> hardware and on <b>Cuttlefish</b> virtual devices; set up the <b>CI/CD</b> pipelines.</li>
                    <li>Built end-to-end use cases covering service-oriented communication, vehicle diagnostics and data processing.</li>
                    <li>Rewrote a Python prototype into a modular <b>Rust</b> CLI/TUI tool generating <b>SOME/IP</b>, <b>Protobuf</b> and GraphQL test commands, unit-tested with mocks and integrated into <b>GitLab CI</b>.</li>
                </ul>
            </li>
            <br>
            <li><b>Robotics &amp; Computer Vision Intern – DNIIT (Da Nang, Vietnam) – May 2026 - Aug 2026</b>
                <ul>
                    <li>Implemented closed-loop <b>visual servoing</b> of an industrial <b>SCARA</b> arm for dynamic pick-and-place of moving targets.</li>
                    <li>Integrated real-time <b>YOLO</b> object detection and pose estimation with <b>ROS 2</b> and <b>MoveIt 2</b>.</li>
                    <li>Validated kinematics and PID control in <b>MATLAB</b> and <b>Gazebo</b> before deploying on the physical robot.</li>
                </ul>
            </li>
            <br>
            <li><b>Software Developer (apprentice) – European Systems Integration – Sept 2022 - Jul 2024</b>
                <ul>
                    <li>Developed a <b>Java</b> application exporting data from a remote database to JSON.</li>
                    <li>Automated end-to-end tests with Selenium/TestNG, then led their migration to <b>TypeScript/Cypress</b>.</li>
                </ul>
            </li>
        </ul>`,
        unknownCmd: "This command is not recognized. Type \"/help\" to see the available commands.",
        projectsMsg: `<p>Click on the project you are interested in:<br>
            <ol>
                <li><a href="https://github.com/Loren844/scara-visual-servoing" target="_blank">SCARA robot visual servoing (ROS 2, YOLO, MoveIt 2) - DNIIT internship 2026</a></li>
                <li><a href="https://github.com/Loren844/rust-chip-8" target="_blank">CHIP-8 emulator in Rust (SDL2) - 2025</a></li>
                <li><a href="https://github.com/Loren844/MotiOS" target="_blank">MotiOS: iOS assistant for Pokémon GO (OCR, IV computation)</a></li>
                <li><a href="https://github.com/Loren844/portfolio" target="_blank">This interactive portfolio (FR/EN/IT)</a></li>
                <li><a href="https://github.com/Loren844/filrouge" target="_blank">Android mobile app (Java) - CS Bachelor, semester 4</a></li>
                <li><a href="https://loren844.github.io/FISK/" target="_blank">"FISK" game (Java), Risk variant - CS Bachelor, semester 2</a></li>
                <li><a href="https://github.com/Loren844/LOTO-SAE" target="_blank">Bingo game in C - CS Bachelor, semester 1</a></li>
            </ol>`,
        cv_link: "https://loren844.github.io/cv/en.pdf",
        replay: "Replay",
        quit: "Quit",
        langCmd: "Change the language: /lang fr, /lang en or /lang it",
        langUsage: "Usage: /lang fr, /lang en or /lang it",
        hacker: "Enable the hacker theme (unlocked)",
        hackerUnlocked: "Well done! Achievement unlocked: Konami Code (Hacker)",
        portalTheme: "Enable the Portal theme (unlocked)",
        portalUnlocked: "Well done! Achievement unlocked: The cake is a lie (Portal theme)",
        naviOff: "Turn Navi off",
        naviToggle: "Toggle Navi on/off",
        naviUnlocked: "Well done! Achievement unlocked: Hey, listen!",
        barrelroll: "Make the terminal do a barrel roll (unlocked)",
        barrelrollUnlocked: "Well done! Achievement unlocked: Barrel Roll",
        progress: "View unlocked achievements (unlocked)",
        progressTitle: "Unlocked achievements",
        progressRemaining: "Still to find: %n%",
        achievements: {
            hacker: "Konami Code (Hacker)",
            barrelroll: "Barrel Roll",
            marioSad: "Mario is sad, help him find his achievements",
            portal: "The cake is a lie (Portal theme)",
            navi: "Hey, listen!",
            moneyRain: "Motherlode! Money rain"
        },
        marioSadUnlocked: "Well done! Achievement unlocked: Mario is sad, help him find his achievements",
        rainbowTheme: "Enable the Rainbow RGB theme (unlocked)",
        allAchievementsUnlocked: "🎉 Congratulations! All achievements unlocked! Rainbow RGB theme unlocked.",
        moneyRainUnlocked: "Well done! Achievement unlocked: Motherlode! Money rain"
    },
    it: {
        title: "Portfolio di Lorenzo BALADIER",
        description: "Benvenuto nel mio portfolio! Digita /help per vedere i comandi disponibili.",
        enter: "Entra",
        input: "Inserisci un comando...",
        help: "Mostra l'elenco dei comandi disponibili",
        cv: "Apri il mio CV",
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
            Email : <a href="mailto:contact@lorenzo-baladier.fr">contact@lorenzo-baladier.fr</a><br>
            <a href="https://www.linkedin.com/in/lorenzo-baladier/" target="_blank">Vedi il mio LinkedIn</a><br>
            <a href="https://github.com/Loren844" target="_blank">Vedi il mio GitHub</a><br>
            <a href="https://lorenzo-baladier.fr" target="_blank">Vedi il mio sito</a>`,
        aboutMsg: `<p>
                Sono <strong>Lorenzo BALADIER</strong>, studente di ingegneria all'ultimo anno al <strong>Polytech Nice Sophia</strong> (indirizzo IoT &amp; CPS) e ingegnere software <strong>embedded &amp; SDV</strong> in apprendistato presso <strong>Ampere Software Technology (Gruppo Renault)</strong>.
            </p>
            <br>
            <p>
                Lavoro sul veicolo definito dal software: bring-up su <strong>Raspberry Pi</strong> e <strong>Cuttlefish</strong>, comunicazione orientata ai servizi (<strong>SOME/IP</strong>, <strong>Protobuf</strong>), CI/CD e strumenti in <strong>Rust</strong>. Durante un tirocinio in Vietnam (DNIIT), ho realizzato il visual servoing di un braccio robotico SCARA con <strong>ROS 2</strong>, <strong>MoveIt 2</strong> e <strong>YOLO</strong>.
            </p>
            <br>
            <p>
                Linguaggi: <strong>Rust, C, C++, Python, Java</strong>. Cerco un <strong>contratto a tempo indeterminato a Parigi da settembre 2027</strong> nei sistemi embedded, nell'automotive o nella robotica.
            </p>`,
        educationMsg: `<ul>
            <li><b>Laurea in Ingegneria Informatica (livello magistrale), IoT &amp; CPS, in apprendistato - 2024/2027</b><br>Polytech Nice Sophia - Université Côte d'Azur</li><br><br>
            <li><b>Diploma universitario in Informatica (DUT), in apprendistato - 2022/2024</b><br>IUT Nice Côte d'Azur - Sophia Antipolis</li><br><br>
            <li><b>Baccalaureato francese, EsaBac (doppio diploma italo-francese), Lode - 2019/2022</b><br>Lycée Pierre et Marie Curie - Menton</li><br><br>
        </ul>`,
        workMsg: `<ul>
            <li><b>Ingegnere software embedded &amp; SDV (apprendistato) – Ampere Software Technology (Gruppo Renault) – Settembre 2024 - presente</b>
                <ul>
                    <li>Progettazione e benchmark di <b>CarOS</b>, una piattaforma di sviluppo automotive basata sull'ambiente <b>Software-Defined Vehicle</b> di Google.</li>
                    <li>Bring-up della piattaforma su <b>Raspberry Pi</b> e su dispositivi virtuali <b>Cuttlefish</b>; realizzazione delle pipeline <b>CI/CD</b>.</li>
                    <li>Sviluppo di casi d'uso end-to-end: comunicazione orientata ai servizi, diagnostica del veicolo ed elaborazione dei dati.</li>
                    <li>Riscrittura di un prototipo Python in uno strumento CLI/TUI modulare in <b>Rust</b> che genera comandi di test <b>SOME/IP</b>, <b>Protobuf</b> e GraphQL, testato con mock e integrato in <b>GitLab CI</b>.</li>
                </ul>
            </li>
            <br>
            <li><b>Tirocinio robotica e visione artificiale – DNIIT (Da Nang, Vietnam) – Maggio 2026 - Agosto 2026</b>
                <ul>
                    <li>Visual servoing ad anello chiuso di un braccio industriale <b>SCARA</b> per il pick-and-place di bersagli in movimento.</li>
                    <li>Rilevamento oggetti e stima della posa in tempo reale con <b>YOLO</b>, integrati con <b>ROS 2</b> e <b>MoveIt 2</b>.</li>
                    <li>Validazione della cinematica e del controllo PID in <b>MATLAB</b> e <b>Gazebo</b> prima del deploy sul robot reale.</li>
                </ul>
            </li>
            <br>
            <li><b>Sviluppatore software (apprendistato) – European Systems Integration – Settembre 2022 - Luglio 2024</b>
                <ul>
                    <li>Sviluppo di un'applicazione <b>Java</b> per l'esportazione in JSON di dati da un database remoto.</li>
                    <li>Automazione dei test end-to-end con Selenium/TestNG, poi migrazione verso <b>TypeScript/Cypress</b>.</li>
                </ul>
            </li>
        </ul>`,
        unknownCmd: "Questo comando non è riconosciuto. Digita \"/help\" per vedere i comandi disponibili.",
        projectsMsg: `<p>Clicca sul progetto che ti interessa:<br>
            <ol>
                <li><a href="https://github.com/Loren844/scara-visual-servoing" target="_blank">Visual servoing di un robot SCARA (ROS 2, YOLO, MoveIt 2) - Tirocinio DNIIT 2026</a></li>
                <li><a href="https://github.com/Loren844/rust-chip-8" target="_blank">Emulatore CHIP-8 in Rust (SDL2) - 2025</a></li>
                <li><a href="https://github.com/Loren844/MotiOS" target="_blank">MotiOS: assistente iOS per Pokémon GO (OCR, calcolo IV)</a></li>
                <li><a href="https://github.com/Loren844/portfolio" target="_blank">Questo portfolio interattivo (FR/EN/IT)</a></li>
                <li><a href="https://github.com/Loren844/filrouge" target="_blank">Applicazione mobile Android (Java) - Laurea in Informatica, semestre 4</a></li>
                <li><a href="https://loren844.github.io/FISK/" target="_blank">Gioco "FISK" (Java), variante di Risk - Laurea in Informatica, semestre 2</a></li>
                <li><a href="https://github.com/Loren844/LOTO-SAE" target="_blank">Gioco del loto in C - Laurea in Informatica, semestre 1</a></li>
            </ol>`,
        cv_link: "https://loren844.github.io/cv/it.pdf",
        replay: "Rigioca",
        quit: "Esci",
        langCmd: "Cambia la lingua: /lang fr, /lang en o /lang it",
        langUsage: "Uso: /lang fr, /lang en o /lang it",
        hacker: "Attiva il tema hacker (sbloccato)",
        hackerUnlocked: "Bravo! Obiettivo sbloccato: Codice Konami (Hacker)",
        portalTheme: "Attiva il tema Portal (sbloccato)",
        portalUnlocked: "Bravo! Obiettivo sbloccato: The cake is a lie (tema Portal)",
        naviOff: "Disattiva Navi",
        naviToggle: "Attiva/disattiva Navi",
        naviUnlocked: "Bravo! Obiettivo sbloccato: Ehi, ascolta Navi!",
        barrelroll: "Fai fare un tonneau al terminale (sbloccato)",
        barrelrollUnlocked: "Bravo! Obiettivo sbloccato: Barrel Roll",
        progress: "Vedi gli obiettivi sbloccati (sbloccato)",
        progressTitle: "Obiettivi sbloccati",
        progressRemaining: "Ancora da trovare: %n%",
        achievements: {
            hacker: "Codice Konami (Hacker)",
            barrelroll: "Barrel Roll",
            marioSad: "Mario è triste, aiutalo a ritrovare i suoi obiettivi",
            portal: "The cake is a lie (tema Portal)",
            navi: "Ehi, ascolta Navi!",
            moneyRain: "Motherlode! Pioggia di soldi"
        },
        marioSadUnlocked: "Bravo! Obiettivo sbloccato: Mario è triste, aiutalo a ritrovare i suoi obiettivi",
        rainbowTheme: "Attiva il tema Rainbow RGB (sbloccato)",
        allAchievementsUnlocked: "🎉 Complimenti! Tutti gli obiettivi sono stati sbloccati! Tema Rainbow RGB sbloccato.",
        moneyRainUnlocked: "Bravo! Obiettivo sbloccato: Motherlode! Pioggia di soldi"
    }
};
