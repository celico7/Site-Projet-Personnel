function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
};

    
    
    
    var slider = document.getElementById("myRange");
    var dateDisplay = document.getElementById("dateDisplay");
    var eventDisplay = document.getElementById("eventDisplay");

    // Tableau des dates et événements
    var events = {
        1: {date : "19-10-2021", event : "Célia décide de bloquer Horyzon car il a fait fuir un fan de NCIS" },
    2: {date : "01-12-2021", event : "La chaîne du salon #counting a été brisée. Cette chaîne débutée le 10 juillet 2020, elle avait atteint le nombre record de 18 725." },
    3: {date : "01-01-2022", event : "Cryptaux s'inscrit maintenant dans l'Histoire pour s'être mangé le premier warn de 2022" },
    4: {date : "08-01-2022", event : "Safire, ancienne modératrice et candidate aux élections de modérateurs, dit espérer être élue et ne pas être remplacée par Appellez moi Who " },
    5: {date : "14-01-2022", event : "Dracorty est le premier candidat à avoir annoncé sa candidature aux élections de modo d'avril 2022" },
    6: {date : "25-01-2022", event : "Dracorty vient de mettre au défi Mikado de débattre avec lui sur un sujet de son choix " },
    7: {date : "10-02-2022", event : "Réorganisation des salons critiques. Depuis hier soir, ces salons sont désormais classés en fonction de la date de leur dernière publication" },
    8: {date : "19-02-2022", event : "La modératrice Célia prononcera son discours en vocal lors de la cérémonie du 5ème anniversaire du serveur qui commencera à 18h00 " },
    9: {date : "03-03-2022", event : "Le procès de Daz a lieu" },
    10: {date : "18-03-2022", event : "Le Mounir, actuel modérateur, a quitté le serveur" },
    11: {date : "23-03-2022", event : "Daz et MARIO ont fait leur grand retour ainsi que Mounir sans son rôle modérateur ayant été déstitué" },
    12: {date: "09-04-2022", event: "19 candidats pour les élections de modérateurs d'Avril 2022 : Osa - Brick_Fury - Le Seigneur Timeo - Miokarotte - Dracorty - Appelez moi Who - Dogtor - MrAnderson - Loup fou - Akurø - Ryan Smith - Horyzon - Graco Erso - Cryptaux - Sirius - lalagshs - The Machine - Axo - 74656 dernière année (?)" },
    13: {date: "10-04-2022", event: "16 membres du serveur ont voté pour les présidentielles 2022 !" },
    14: {date: "13-04-2022", event: "Pour des raisons encore obscures, Mikado a décidé de mentionner tous les membres actifs du serveur dans le salon bot" },
    15: {date: "21-04-2022", event: "Le salon #News-pt est qualifié pour la finale du tournoi-salons!!!" },
    16: {date: "25-04-2022", event: "Le salon #News-p est le salon préféré des Petit Tardisiens ! " },
    17: {date: "06-05-2022", event: "Après 7 mois de ban, Larsé est de retour" },
    18: {date: "18-05-2022", event: "Dogtor, actuel modérateur, vient de quitter le serveur. Les raisons de ce départ aussi soudain que mystérieux sont pour l'instant inconnues" },
    19: {date: "25-05-2022", event: "Appellez moi Who a traité Mangouste de débile. Est-ce la discorde dans le staff de ce serveur discord ?" },
    20: {date: "31-05-2022", event: "Aujourd'hui, ça fait 5 ans que @illumina est sur Le Petit TARDIS ! Et 2 ans pour @Porky !" },
    21: {date: "06-06-2022", event: "Un membre du PT nous quitte définitivement. Dan a supprimé son compte il y a quelques jours. Selon les dernières analyses, cela entraînera une division par deux du nombre total de messages publiés tous les mois sur le PT " },
    22: {date: "08-06-2022", event: "@Potaloups a cassé la chaine dans #counting pour la deuxième fois!" },
    23: {date: "12-06-2022", event: "Le cours de 'musulman' de Doctorwho55 a viré au drame après des propos islamophobes de la part de plusieurs membres. Face à cette catastrophe, Mikado a assuré que Doctorwho55 n'organiserait plus jamais de cours de ce genre" },
    24: {date: "13-06-2022", event: "Brick Fury, élu chômeur de l'année" },
    25: {date: "14-06-2022", event: "@Appelez moi Who n'est plus modérateur. la tribu a décidé d'éliminer Appellez moi Who, et la sentence est irrévocable. Ils sont désormais 3 modos, mais à la fin, il n'en restera qu'un" },
    26: {date: "17-06-2022", event: "Nouvelle bannière temporaire à l'occasion du 40ème anniversaire de Jodie Whittaker " },
    27: {date: "20-06-2022", event: "Aujourd'hui, ça fait 2 ans que @Cryptaux est sur Le Petit TARDIS !" },
    28: {date: "22-06-2022", event: "Un procès aura lieu pour juger les faits présumés de racisme commis par Dan à l'encontre de Sirius. La présence de Dan à ce procès n'est pas garantie" },
    29: {date: "26-06-2022", event: "Aujourd'hui, ça fait 2 ans que @MrZ est sur Le Petit TARDIS !" },
    30: {date: "28-06-2022", event: "Akuro, Dogtor, Dranem ont pris la décision de quitter définitivement le staff actuel, Mikado a pris la décision de dissoudre prématurément la modération, Une première depuis le 12 avril 2018, il y a plus de 4 ans. Il n'y a aura aucun modérateur jusqu'au 9 juillet prochain " },
    31: {date: "29-04-2022", event: "Après les troubles du 28 juin dernier, Dranem et Akuro sont finalement redevenus modérateur. La modération maintenant composée de 2 membres" },
    32: {date: "03-07-2022", event: "Il y a 1 an, le 3 juillet 2021 : @Potaloups , @Célia , @The Mangouste et @MrAnderson étaient élus modérateurs lors des élections de modérateurs de juillet 2021 !" },
    33: {date: "04-07-2022", event: "Aujourd'hui, ça fait 1 an que @AlphaO est admin !! " },
    34: {date: "09-07-2022", event: "Horyzon a prédit 4 jours en avance l'élection de Brick Fury à la modération" },
    35: {date: "18-07-2022", event: "Aujourd'hui, ça fait 1 an que @Battle France 🇫🇷 a rejoint Le Petit TARDIS !" },
    36: {date: "31-07-2022", event: "Cela fait désormais 4 ans que @Dracorty a rejoint Le Petit TARDIS !" },
    37: {date: "11-08-2022", event: "Il y a 2 ans, le 11 août 2020, le PT attaquait le serveur homophobe !" },
    38: {date: "27-08-2022", event: "Après 49 jours de mandat, Qventus a finalement décidé de démissionner de son poste de modérateur." },
    39: {date: "28-08-2022", event: "Après 50 jours de mandat, Brick Fury a été démis de ses fonctions de modérateur. Les remplaçants de Brick Fury et Qventus récupéreront leurs postes dès demain soir" },
    40: {date: "04-09-2022", event: "Aujourd'hui, ça fait 1 an que @Parzi_Val a rejoint Le Petit TARDIS !" },
    41: {date: "07-09-2022", event: "À l'occasion de la sortie du film Le Visiteur du Futur au cinéma, le serveur a été temporairement renommé 'Le Petit Castabot'" },
    42: {date: "10-09-2022", event: "Aujourd'hui, ça fait 5 ans que @Valsept a rejoint Le Petit TARDIS !!" },
    43: {date: "16-09-2022", event: "Aujourd'hui, ça fait 2 ans que @Onyx Amer a rejoint Le Petit TARDIS !" },
    44: {date: "19-09-2022", event: "Aujourd'hui, ça fait 5 ans que @AlphaO a rejoint Le Petit TARDIS !! " },
    45: {date: "08-10-2022", event: "Doctor Mangouste démissionne de ses fonctions d'admin. Doctor Mangouste était dans le staff depuis 1 an et 3 mois. Le 8 octobrus de l'anus 2022, le PT s'est romanisé" },
    46: {date: "09-10-2022", event: "Il y a 1 an, le 9 octobre 2021 : @The Mangouste (réélection), @ceci n'est pas un pseudo , @Safire et @AXO remportaient les élections de modérateurs !" },
    47: {date: "10-10-2022", event: "Au sujet des élections bravo à tous les candidats et surtout bravo aux 4 modérateurs : @Akuro @Appelez moi Who @Célia et @TimeLord. Aujourd'hui, il y a 1 an, @! E.T² et @ness  rejoignaient le Petit Tardis" },
    48: {date: "14-10-2022", event: "Aujourd'hui, ça fait 1 an que @Romyna a rejoint Le Petit TARDIS !" },
    49: {date: "16-10-2022", event: "Il y a 1 an, le 16 octobre 2021, 15 députés étaient élus lors des seules élections législatives de l'histoire du serveur. Mais l'assemblée ne fut pas un succès et elle est finalement dissoute le 9 novembre 2021." },
    50: {date: "17-10-2022", event: "Aujourd'hui, ça fait 1 an que @TimeLord a rejoint Le Petit TARDIS !  Il y a 4 ans, le 17 octobre 2018 : @Valsept, @lalagshs et @malikay remportaient les élections de modérateurs !  " },
    51: {date: "18-10-2022", event: "Hier, il y a 1 an, le 16 octobre 2021, ce salon #news-pt fut ouvert pour la première fois !" },
    52: {date: "19-10-2022", event: "Aujourd'hui, ça fait 2 ans que @Brick_Fury a rejoint Le Petit TARDIS !" },
    53: {date: "22-10-2022", event: "Le staff a voté l'ajout des phrases 'Le serveur est un et indivisible' et 'Tous les membres font partie de la communauté dans un esprit de solidarité et de vivre-ensemble'" },
    54: {date: "02-11-2022", event: "Nous avons désormais un papa parmi les citoyens du PT : la fille de @Coltran est née cette nuit ! Félicitations à lui et à la maman " },
    55: {date: "03-11-2022", event: "Aujourd'hui, ça fait 2 ans que @Dogtor a rejoint Le Petit TARDIS et 1 ans pour Plume!" },
    56: {date: "07-11-2022", event: "Aujourd'hui, ça fait 1 an que @Ryan Smith a rejoint Le Petit TARDIS !" },
    57: {date: "09-11-2022", event: "Aujourd'hui, ça fait 5 ans que @doot et @Axo ont rejoint Le Petit TARDIS !!" },
    58: {date: "09-12-2022", event: "Aujourd'hui, ça fait 4 ans que @Célia a rejoint Le Petit TARDIS !" },
    59: {date: "17-12-2022", event: "Aujourd'hui, ça fait 2 ans que @Mioka🌲 a rejoint Le Petit TARDIS !" },
    60: {date: "01-01-2023", event: "Félicitations à @MewN qui a publié le tout premier message de l'année 2023 ! Célia St James est officiellement candidate au poste d'administratrice" },
    61: {date: "08-01-2023", event: "Mise à jour du Staff : AlphaO, Célia, Mikado et Potaloups sont admins tandis que Appelez moi Who, Dracorty, The Machine et TimeLord sont modos" },
    62: {date: "09-01-2023", event: "Il y a 2 ans, le 9 janvier 2021 : @The Machine, @AlphaO, Hylerios et @AXO remportaient les élections de modérateurs !" },
    63: {date: "12-01-2023", event: "Il y a 4 ans, le 12 janvier 2019 : @AXO, @Valsept et @lalagshs remportaient les élections de modérateurs ! " },
    64: {date: "16-02-2023", event: "Il y a 1 an, le 16 février 2022, c'était la sortie de l'Album du PT ! 11 morceaux (+2 bonus) sortaient pour fêter les 5 ans du serveur" },
    65: {date: "27-02-2023", event: "Aujourd'hui, cela fait 2 ans que @Potaloups a rejoint Le Petit TARDIS !" },
    66: {date: "28-02-2023", event: "Aujourd'hui, cela fait 2 ans que @Appelez moi Who a rejoint Le Petit TARDIS ! " },
    67: {date: "11-03-2023", event: "Un nouvel article a été ajouté au règlement suite à une suggestion. Le but est de réglementer l'utilisation de ChatGPT qui a été parfois abusive ces derniers temps dans le général" },
    68: {date: "16-03-2023", event: "Il y a un an, jour pour jour, le 16 Mars 2022, Potaloups assistait au concert de Genesis à Paris, où il a pu rencontrer son idole Phil Collins en personne" },
    69: {date: "26-03-2023", event: "AlphaO, admin depuis le 3 juillet 2021, annonce son départ de l'Administration du Petit TARDIS après 1 an et 9 mois de mandat, elle faisait partie du Staff depuis 2ans et 3mois!" },
    70: {date: "29-03-2023", event: "La candidature d'Appelez moi Who au poste d'administrateur sera soumise au vote du vendredi 31 mars au dimanche 2 avril par le biais du compte Sondages Petit TARDIS" },
    71: {date: "30-03-2023", event: "Aujourd'hui, cela fait 1 an que @MewN a rejoint Le Petit TARDIS !" },
    72: {date: "09-04-2023", event: "Il y a 1 an, le 9 avril 2022 : @Appelez moi Who, Akuro, @Dranem et Dogtor remportaient les élections de modérateurs ! AlphaO a côtoyé un total de 21 modérateurs !" },
    73: {date: "10-04-2023", event: "Il y a 2 ans, le 10 avril 2021 : OsaProd, @AlphaO, Tempo et @Potaloups remportaient les élections de modérateurs !" },
    74: {date: "11-04-2023", event: "Il y a 3 ans, le 11 avril 2020 : @Célia, @Absobel et Tempo remportaient les élections de modérateurs ! " },
    75: {date: "13-04-2023", event: "Il y a 4 ans, le 13 avril 2019 : @AXO, Nex et Pingoléon1er remportaient les élections de modérateurs ! " },
    76: {date: "16-04-2023", event: "Dracorty est suspendu de la modération jusqu'au mardi 18 avril à 11h30 pour 'un mauvais comportement en interne'" },
    77: {date: "18-04-2023", event: "Aujourd'hui, cela fait 1 an que Mikado publie tous les lundis le classement des membres les plus actifs de la semaine" },
    78: {date: "03-05-2023", event: "Brick_Fury, qui a atteint la limite des 275 warns, est banni temporairement jusqu'au 3 juin 2023 à 00h00" },
    79: {date: "04-05-2023", event: "Aujourd'hui, cela fait 1 an que @Skrall a rejoint Le Petit TARDIS !" },
    80: {date: "06-05-2023", event: "Hylerios et Daz sont bannis temporairement jusqu'au 6 juin 2023 à 00h30 suite à des propos discriminatoires visant les personnes chauves" },
    81: {date: "17-05-2023", event: "Aujourd'hui, cela fait 2 ans que @The Mangouste a rejoint Le Petit TARDIS !" },
    82: {date: "31-05-2023", event: "Aujourd'hui, cela fait 6 ans que @illumina a rejoint Le Petit TARDIS !" },
    83: {date: "06-06-2023", event: "Tempo est revenue sur le PT après plus de 2 ans de ban !" },
    84: {date: "18-06-2023", event: "Le Staff du Petit TARDIS a décidé de bannir définitivement Goldenlib pour son mauvais comportement" },
    85: {date: "20-06-2023", event: "Aujourd'hui, cela fait 3 ans que @Cryptaux a rejoint Le Petit TARDIS !" },
    86: {date: "26-06-2023", event: "Aujourd'hui, cela fait 3 ans que @MrZ a rejoint Le Petit TARDIS !" },
    87: {date: "30-06-2023", event: "Aujourd'hui, cela fait 1 an que @Historix a rejoint Le Petit TARDIS !" },
    88: {date: "05-07-2023", event: "Aujourd'hui, cela fait 1 an que @Pingouin a rejoint Le Petit TARDIS !" },
    89: {date: "11-07-2023", event: "Aujourd'hui, cela fait 3 ans que @Hylerios a rejoint Le Petit TARDIS !" },
    90: {date: "17-07-2023", event: "Il y a 1 an, le 17 juillet 2022, des membres du Petit TARDIS se réunissaient dans le parc Montsouris à Paris pour la première grande IRL du serveur !" },
    91: {date: "23-07-2023", event: "Célia reprend sa place de 2ème dans le classement MEE6 que Dracorty lui avait volé alors qu'elle l'avait depuis bien longtemps avant lui" },
    92: {date: "27-07-2023", event: "Aujourd'hui, cela fait 6 ans que @Gwên a rejoint Le Petit TARDIS !" },
    93: {date: "31-07-2023", event: "Cela fait 5 ans que Dracorty a rejoint Le Petit TARDIS !" },
    94: {date: "10-09-2023", event: "Aujourd'hui, cela fait 6 ans que @Valsept a rejoint Le Petit TARDIS !" },
    95: {date: "16-09-2023", event: "Aujourd'hui, cela fait 3 ans que @Onyx Amer a rejoint Le Petit TARDIS !" },
    96: {date: "19-09-2023", event: "Aujourd'hui, cela fait 6 ans que @AlphaO a rejoint Le Petit TARDIS " },
    97: {date: "07-12-2023", event: "Aujourd'hui, cela fait 5 ans que @Dranem a rejoint Le Petit TARDIS !" },
    98: {date: "08-10-2023", event: "Il y a 1 an, le 8 octobre 2022 : @Appelez moi Who, Akuro, @TimeLord et @Célia remportaient les élections de modérateurs !" },
    99: {date: "09-10-2023", event: "Il y a 2 ans, le 9 octobre 2021 : @The Mangouste, Horyzon, @Safire et @AXO remportaient les élections de modérateurs !" },
    101: {date : "10-10-2023", event : "Il y a 3 ans, le 10 octobre 2020 : Le Mounir, Gwên, @The Machine et @Béné remportaient les élections de modérateurs ! Aujourd'hui, cela fait 2 ans que @! E.T² a rejoint Le Petit TARDIS !" },
    102: {date : "13-10-2023", event : "Il y a 5 ans, le 13 octobre 2018 : @Turpin, Aurore et @malikay remportaient les élections de modérateurs ! Ces élections furent annulées quelques jours plus tard suite à des irrégularités survenues lors du vote." },
    103: {date : "14-10-2023", event : "Aujourd'hui, cela fait 2 ans que @Romyna a rejoint Le Petit TARDIS !" },
    104: {date : "17-10-2023", event : "Il y a 5 ans, le 17 octobre 2018 : @Valsept, lalagshs et @malikay remportaient les élections de modérateurs, soit 4 jours après les élctions annulées du 13!" },
    105: {date : "03-11-2023", event : "Aujourd'hui, cela fait 3 ans que @Dogtor a rejoint Le Petit TARDIS !" },
    106: {date : "16-11-2023", event : "La chaîne Counting est cassée. Le dernier nombre s'est arrêté à 12 701. La chaîne repart à 1" },
    107: {date : "01-01-2024", event : "Bonne année 2024 !!!" },
    108: {date : "08-01-2024", event : "Il y a 2 ans, le 8 janvier 2022 : @Appelez moi Who, @Célia, Horyzon et Le Mounir remportaient les élections de modérateurs !" },
    109: {date : "11-01-2024", event : "Il y a 4 ans, le 11 janvier 2020 : Nex, Docteur Basket de Plages et @Aurore remportaient les élections de modérateurs ! " },
    110: {date : "13-01-2024", event : "Il y a 3 ans, le 13 janvier 2021 : pour protester contre l'interdiction de memes discriminatoires, TheDoctor0596 entraîne l'interdiction (éphémère) de tous les memes" },
    111: {date : "22-01-2024", event : "Le rôle Muted a été supprimé. Ce rôle enquiquinait @Aurore depuis longtemps puisqu'elle le subissait automatiquement à chaque retour sur le serveur" },
    112: {date : "24-01-2024", event : "Une audience est en cours devant le Tribunal Disciplinaire de la Modération concernant TEPTIS" },
    113: {date : "05-02-2024", event : "Nouvelle bannière temporaire pour les 10 ans de Biscotte !!" },
    114: {date : "10-02-2024", event : "Il y a 6 ans, le 10 février 2018 : @AlphaO, @AXO et Okarin remportaient les élections de modérateurs avec chacun le même nombre de voix !" },
    115: {date : "20-02-2024", event : "Le Petit TARDIS fête ses 7 ans et la fête continue jusqu'à la fin du mois ! Des choses ont changé sur le serveur à cette occasion, cela concerne la législation" },
    116: {date : "25-02-2024", event : "Il y a 3 ans, le 25 février 2021 : le rôle Citoyenneté ainsi que l'actuel système de suggestions faisaient leur apparition sur Le Petit TARDIS !" },
    117: {date : "20-03-2024", event : "En application d'une suggestion de @☆ Gingembre ★, plusieurs salons ont été renommés provisoirement à l'occasion de la Journée de la Francophonie ! " },
    118: {date : "09-04-2024", event : "Il y a 1 an, le 8 avril 2023 : Dracorty, @The Machine, @Dranem et @! E.T² remportaient les élections de modérateurs !" },
    119: {date : "18-04-2024", event : "Il y a 2 ans, le 18 avril 2022 : début des classements hebdomadaires des membres les plus actifs !" },
    120: {date : "25-04-2024", event : "Aujourd'hui, cela fait 4 ans que @Sirius a rejoint Le Petit TARDIS !!" },
    121: {date : "02-05-2024", event : "Aujourd'hui, cela fait 4 ans que @The Machine a rejoint Le Petit TARDIS !!" },
    122: {date : "15-05-2024", event : "Aujourd'hui, cela fait 4 ans que @Béné a rejoint Le Petit TARDS !!" },
    123: {date : "16-05-2024", event : "Aujourd'hui, cela fait 1 an que @Chimmy_neew a rejoint Le Petit TARDIS !" },
    124: {date : "25-06-2024", event : "Aujourd'hui, cela fait 4 ans que @VladekLeDalek a rejoint Le Petit TARDIS !" },
    125: {date : "27-07-2024", event : "Aujourd'hui, cela fait 7 ans que @Gwên a rejoint Le Petit TARDIS !" },
    126: {date : "27-08-2024", event : " Mikado et Romy ont fait la paix en message privé et Romy est débannie du Petit TARDIS" },
    };

    slider.oninput = function() {
        var value = this.value;
    var event = events[value];
    if (event) {
        dateDisplay.innerHTML = "Date: " + event.date;
    eventDisplay.innerHTML = "Event: " + event.event;
        } else {
        dateDisplay.innerHTML = "Date: N/A";
    eventDisplay.innerHTML = "Event: N/A";
        }
    };

    function getRandomEvent() {
        const keys = Object.keys(events);
    const randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
    }

    document.getElementById("generateButton").onclick = function() {
        const randomIndex = getRandomEvent();
    const randomEvent = events[randomIndex];

    // Mets à jour le slider pour correspondre à l'événement généré
    slider.value = randomIndex;

    // Mets à jour l'affichage de la date et de l'événement
    dateDisplay.innerHTML = `Date: ${randomEvent.date}`;
    eventDisplay.innerHTML = `Event: ${randomEvent.event}`;
    };
