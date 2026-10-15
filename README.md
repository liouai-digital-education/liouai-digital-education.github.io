# Liouaï Digital Education

**Learn It Yourself!**

Ce dépôt contient la page de présentation de Liouaï Digital Education. Liouaï conçoit des manuels, des parcours et des supports d'apprentissage en mathématiques appliquées, en science des données et en informatique. Ils s'adressent aux adultes en reconversion, aux étudiants et aux professionnels.

🔗 **Site :** https://liouai-digital-education.github.io
💼 **Contact :** [LinkedIn](https://www.linkedin.com/in/cedricbohnert/)

---

## La démarche

Pour comprendre un modèle, survoler une formule ou faire confiance à une boîte noire ne suffit pas. Chaque contenu suit la même progression :

1. **Intuition** : une image claire avant toute formule.
2. **Démonstration** : un raisonnement pas à pas, sans affirmation gratuite.
3. **Pratique outillée** : Python (pandas, NetworkX, NumPy, SciPy), simulations et tableurs transparents.
4. **Mesure** : le modèle est confronté aux données réelles.

## Projet à la une

**Algèbre linéaire : penser, calculer, interpréter. Un parcours Computer-Based Maths avec Python.**
Un cours en ligne gratuit où Python fait le calcul et où l'apprenant fait tout le reste : formuler le problème, choisir les outils, critiquer et expliquer le résultat. Neuf modules, de NumPy à la décomposition en valeurs singulières, et trois projets intégrateurs (recommandation de films, influence dans un réseau, reconnaissance de chiffres manuscrits), en 52 notebooks Jupyter.
🔗 https://liouai-digital-education.github.io/algebre-lineaire-cbm/ · code source : https://github.com/liouai-digital-education/algebre-lineaire-cbm

**Aussi en cours :** *Les mathématiques de LinkedIn. Mesurer avant d'agir : un manuel pour stratèges* (version de test).

---

## Structure du dépôt

```
├── index.html          La page : mise en page, styles et illustrations
├── contenu/
│   ├── projets.js      La liste des projets (à modifier pour en ajouter un)
│   └── textes.js       Les textes de la page en français et en anglais, le lien LinkedIn et l'e-mail
├── LISEZMOI.md         Le guide détaillé pour modifier le site
└── README.md           Ce fichier
```

Le site est une page unique en HTML, CSS et JavaScript. Il ne demande ni dépendance ni étape de compilation. Il est bilingue (FR/EN) et s'adapte aux mobiles comme au thème clair ou sombre.

## Ajouter un projet

1. Ouvrez `contenu/projets.js`.
2. Copiez le bloc **MODÈLE À COPIER** situé en haut du fichier.
3. Collez-le dans la liste `LIOUAI_PROJETS`, puis remplissez la partie `fr` et la partie `en`.
4. Validez la modification (*commit*). Le site se met à jour en une à deux minutes.

Le détail de chaque champ est expliqué dans [LISEZMOI.md](LISEZMOI.md).

## Voir le site en local

Téléchargez le dépôt, puis double-cliquez sur `index.html`. Aucune installation n'est nécessaire.

## Publication

Le site est publié avec **GitHub Pages**, depuis la branche `main` (dossier racine).

---

© 2026 Liouaï Digital Education. Tous droits réservés.
