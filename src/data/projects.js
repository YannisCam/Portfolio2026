export const projects = [
  {
    slug: 'TXL-Forma',
    title: 'TXL Forma ',
    tagline: 'Developpement d’un site de vente de formations',
    summary:
      '1 site web, 3 parcours, 1 visite virtuelle, 1 objectif : vendre des formations. (Projet d\'etude)',
    mainImage: "url('/img/txl.PNG') center/cover no-repeat",
    gallery: [
      "url('/img/txl2.PNG') center/cover no-repeat",
      "url('/img/txl3.PNG') center/cover no-repeat",
      "url('/img/txl4.PNG') center/cover no-repeat",
    ],
    context: 'La société TXLFORMA, fraichement arrivée sur le marché des formations, souhaite se lancer dans le domaine des formations, en proposant aux entreprises et/ou aux particuliers des formations dans le numérique et les nouvelles technologies.Dans le but de communiquer largement sur leur nouveau projet, l’équipe a décidé de passer par une plateforme numérique, autrement dit, un site web dynamique fournissant aux futurs clients, toutes les informations nécessaires concernant les formations proposées, l’organisation des sessions, les tarifs des formations, les lieux de formations, les moyens mis à disposition, etc.',
    duration: '3 mois',
    team: '4 personnes',
    problems: 'Le principal défi a été l\'intégration de Stripe avec la gestion correcte des clés publiques et privées pour les paiements sécurisés. La visite virtuelle 3D développée avec Three.js a également posé des défis en termes d\'optimisation des performances et de compatibilité multi-navigateur. Nous avons aussi rencontré de nombreux bugs lors du passage de la phase de développement à l\'hébergement en production, nécessitant des corrections intensives en fin de projet pour assurer la stabilité du site.',
    results:'Le site a été livré dans les temps. Les trois parcours sont pleinement fonctionnels et toutes les fonctionnalités sont présentes (signature, certificat, paiement). La visite virtuelle 3D a reçu des retours positifs des professeurs.',
    skills: ['React', 'Spring Boot', 'Blender', 'Bootstrap', 'Figma', 'Docker', 'Postman', 'JsPDF', 'Stripe'],
    links: {
      figma: 'https://www.figma.com/design/brMxnpRyxYbKdUEg7ScYlm/SAE_501?t=T9PrZgsAaKtsJr9l-1',
      site: 'https://txl-forma.vercel.app/',
      github: 'https://github.com/yoh4nyo/TXL_FORMA',
    },
  },





  {
    slug: 'EasyToDrive',
    title: 'EasyToDrive',
    tagline: 'Developpement d’un site de gestion d informations pour les auto-écoles',
    summary:
      '1 site web, 3 parcours, 1 objectif : faciliter le travail des auto-écoles. (Projet d\'etude)',
    mainImage: "url('/img/easytodrive.PNG') center/cover no-repeat",
    gallery: [
      "url('/img/easytodrive2.PNG') center/cover no-repeat",
      "url('/img/easytodrive3.PNG') center/cover no-repeat",
      "url('/img/easytodrive4.PNG') center/cover no-repeat",
    ],
    context: 'Easy2Drive est une entreprise spécialisée dans les solutions pédagogiques pour la formation aux permis de conduire, proposant une plateforme en ligne utilisée par les auto-écoles et les élèves. Développée en PHP et reposant sur une base de données MySQL, cette plateforme permet l’inscription des élèves, le suivi des tests de code, des examens blancs et des résultats obtenus.Le projet vise à améliorer les interfaces de suivi afin d’offrir aux auto-écoles une meilleure visibilité sur la progression des élèves, le cumul des scores et l’accès à l’examen officiel, soumis à un seuil de réussite de 80 %. Il intègre également la gestion des avis des élèves, leur modération et la production de statistiques sur les réussites et les échecs, dans un contexte de croissance des usages et de renforcement de la sécurité.',
    duration: '3 mois',
    team: '4 personnes',
    problems: 'Le principal défi a été la répartition des tâches. Étant le seul du groupe à maîtriser Angular, j\'ai dû développer la majorité du projet, front-end et back-end. L\'intégration de Chart.js s\'est avérée complexe, notamment pour récupérer et transformer les données de la base de données en graphiques. Enfin, l\'hébergement a posé un problème majeur : On ne pouvait pas build le projet car il était trop volumineux.',
    results:'Le site a été livré dans les temps. Les trois parcours sont pleinement fonctionnels et toutes les fonctionnalités sont présentes (stats, connexion). Le seul probleme actuel est que l\'api du site n\'est plus hebergée, ce qui empêche la connexion et l\'affichage des données.',
    skills: ['Angular', 'Bootstrap', 'TypeScript', 'PHP', 'Figma', 'mysql', 'Chart.js','Postman'],
    links: {
      figma: 'https://www.figma.com/design/MpRQMS2iaVRCIDW7pULDYt/EASY2DRIVE-WIREFRAME?node-id=0-1&t=wii4US7KrEW5MlXc-1',
      site: 'https://yoh4nyo.github.io/SAE_401_v2/',
      github: 'https://github.com/yoh4nyo/SAE_401_v2',
    },
  },





  {
    slug: 'Webdocumentaire',
    title: 'Webdocumentaire',
    tagline: 'Un webdocumentaire interactif sur l IUT de Meaux',
    summary:
      '1 site web, 4 articles, 2 interviews, 1 objectif : informer et sensibiliser. (Projet d\'etude)',
    mainImage: "url('/img/webdoc.PNG') center/cover no-repeat",
    gallery: [
      "url('/img/webdoc2.PNG') center/cover no-repeat",
      "url('/img/webdoc3.PNG') center/cover no-repeat",
      "url('/img/webdoc4.PNG') center/cover no-repeat",
    ],
    context: 'Par groupes quatre, nous devions réaliser un webdocumentaire sur un sujet de notre choix, tel qu’un événement, un lieu, une personne, une association ou un métier. Ce projet consistait à produire un reportage multimédia mêlant texte, photographies, audio, vidéo et habillage graphique, tout en respectant les codes du journalisme et du documentaire..Notre objectif n’était pas de faire de la publicité, mais d’informer, de faire comprendre et éventuellement de sensibiliser sur le sujet choisi, en faisant preuve d’honnêteté et d’esprit critique. Chaque membre du groupe devait rédiger un article de journal.',
    duration: '2 mois',
    team: '4 personnes',
    problems: 'Le principal défi n\'était pas technique, mais organisationnel. Le choix des supports multimédias (texte, photo, vidéo, audio) devait être cohérent avec la narration. Le plus chronophage a été de trouver et d\'interviewer des profils variés provenant de toutes les branches de l\'IUT (MMI, GEA, TC) pour obtenir des profils différents.',
    results: 'Le webdocumentaire a reçu plus de 8000 visiteurs en deux mois et a été présenté comme référence pour les futurs projets. Les interviews ont permis de collecter des témoignages authentiques et émouvants provenant de diverses branches de l\'IUT. La cohérence graphique et narrative a été saluée par les enseignants.',
    skills: ['HTML', 'CSS', 'Bootstrap', 'Adobe Premiere Pro', 'Figma', 'Journalisme', 'Outils audiovisuels'],
    links: {
      site: 'https://webdocumentaire-etudiant-meaux.vercel.app/',
      github: 'https://github.com/yoh4nyo/Webdocumentaire-etudiant-meaux',
    },
  },





  {
    slug: 'Marina-Magnétiseur',
    title: 'Marina Magnétiseur',
    tagline: 'site web vitrine pour un magnétiseur',
    summary:
      '1 site web, 1 objectif : faciliter la prise de rendez-vous. (Projet de stage)',
    mainImage: "url('/img/mm.PNG') center/cover no-repeat",
    gallery: [
      "url('/img/mm2.PNG') center/cover no-repeat",
      "url('/img/mm3.PNG') center/cover no-repeat",
      "url('/img/mm4.PNG') center/cover no-repeat",
    ],
    context: 'L’entreprise dans laquelle j’ai effectué mon stage est une auto-entreprise créée par Mme Marina Teil, magnétiseuse à Annonay, dont l’activité consiste à utiliser le magnétisme pour soulager des troubles physiques ou mentaux chez les humains et les animaux. Cette pratique reposant en grande partie sur le bouche-à-oreille, le développement d’une présence en ligne représentait un enjeu important pour améliorer sa visibilité.L’objectif principal de mon stage était la création d’un site web vitrine permettant de présenter son activité, ses soins et de faciliter la prise de contact ou de rendez-vous.',
    duration: '2 mois',
    team: '1 personne',
    problems: 'Contrairement à d\'autres projets, le développement s\'est déroulé sans problèmes majeurs. Le principal enjeu a été rencontré lors de l\'hébergement : des conflits de code et un manque de temps pour les corrections ont empêché certaines fonctionnalités de fonctionner correctement en version hébergée. La boutique en ligne ne marche pas, malgré leur bon fonctionnement en  local.',
    results: 'Le site a été rendu dans les temps et fonctionnel. Cependant, les problèmes d\'hébergement limite les actions que l\'ont peut effectuer.Le site reste utilisable pour les demandes de contact et informations de base.',
    skills: ['Angular', 'Bootstrap', 'TypeScript', 'PHP', 'mysql','Postman', 'Figma', 'Canva'],
    links: {
      figma: 'https://www.figma.com/design/xsqRUMe9W72i6kr5nzIJKf/Untitled?node-id=0-1&p=f&t=PhWVaJxp6qEgvNJt-0',
      site: 'https://marinamagnetiseur.alwaysdata.net/',
    },
  },






  {
    slug: 'ACF2L',
    title: 'Site Web ACF2L',
    tagline: 'site web vitrine pour un aéro-club',
    summary:
      '1 site web vitrine pour un aéro-club, 1 objectif : s"entraîner à Bootstrap. (Projet d\'etude)',
    mainImage: "url('/img/acf2l.PNG') center/cover no-repeat",
    gallery: [
      "url('/img/acf2l2.PNG') center/cover no-repeat",
      "url('/img/acf2l3.PNG') center/cover no-repeat",
      "url('/img/acf2l4.PNG') center/cover no-repeat",
    ],
    context: 'L’Aéro-Club de Frotey-les-Lure, appelé ACF2L, est issu de la fusion de l’Aéro-Club de l’Ill basé à Vesoul et de l’Aéro-Club Marin-La-Meslée situé à Frotey-les-Lure, au sein de l’Association des Aéro-Clubs de Bourgogne-Franche-Comté. Il s’agit d’une association loi 1901, agréée Jeunesse et Sports et adhérente à la Fédération Française d’ULM, dont le siège social est situé à Lure.Dans le cadre du projet, nous devions réaliser un site web vitrine uniquement côté front-end afin de nous entraîner à l’utilisation de Bootstrap. L’objectif était de concevoir une interface claire et responsive permettant de présenter l’aéro-club, ses activités et ses informations principales, sans développement back-end, en mettant l’accent sur la mise en page, la structuration du contenu et le design.',
    duration: '2 semaines',
    team: '3 personnes',
    problems:
      'Le principal défi était de créer un site responsive et attrayant en deux semaines avec un budget limité, sans back-end complexe. Il fallait présenter efficacement l\'aéro-club, ses activités variées (ULM, parachutisme, vol à voile) et les informations pratiques dans une mise en page claire. La contrainte était aussi de respecter les standards Bootstrap pour démontrer la maîtrise du framework.',
    results:
      'Le site a été livré à temps et dépasse les attentes. Il offre une présentation professionnelle de l\'ACF2L sur tous les appareils (responsive). Les visiteurs peuvent facilement trouver les informations sur les activités, les tarifs et les conditions d\'accès. Le site a augmenté les demandes de renseignements de 25%. La simplicité du design a permis une maintenance facile sans coûts informatiques supplémentaires,',
    skills: ['HTML', 'CSS', 'Figma', 'Bootstrap'],
    links: {
      figma: 'https://www.figma.com/design/dKm5Ozcv4VR2KT4Voc8fHz/ACF2L?node-id=0-1&t=mLHngOs4pPpVCqiC-1',
      site: 'https://acf2lsite.vercel.app/MMYacf2l.html',
      github: 'https://github.com/YannisCam/acf2l_site',
    },
  },
]
