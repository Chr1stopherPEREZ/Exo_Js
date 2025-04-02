# Profil Utilisateur en JavaScript

Ce projet consiste à créer et manipuler un profil utilisateur en JavaScript. L'objectif est de travailler sur la gestion des variables, des objets et des tableaux, ainsi que sur l'utilisation des boucles, des conditions et des fonctions, à travers une série d'exercices progressifs.

Projet développé par [Christopher PEREZ](https://github.com/Chr1stopherPerez), en réponse à un brief proposé durant ma formation [SIMPLON](https://www.simplon.co/).

## But du Projet

- Créer un profil utilisateur regroupant des informations de base : nom, âge, ville.
- Ajouter et manipuler une liste d'amis.
- Mettre en pratique différentes opérations en JavaScript, telles que :
  - La déclaration et la réaffectation de variables.
  - La création et la modification d’un objet.
  - La manipulation d’un tableau.
  - L’utilisation de boucles et de conditions.
  - L’implémentation de fonctions (simples, avec retour, et conditionnelles).

## Fonctionnalités

- **Déclaration de Variables**  
  Création de variables pour le nom, l'âge et la ville.

- **Réaffectation de Valeur**  
  Modification de la variable `ville` pour simuler un changement de résidence.

- **Création d’un Objet**  
  Regroupement des informations dans un objet `utilisateur`.

- **Modification et Ajout de Propriétés**

  - Changement de la propriété `ville` dans l’objet.
  - Ajout d’une propriété `email`.

- **Gestion d’un Tableau**  
  Ajout d'une propriété `amis` contenant une liste de prénoms.

- **Manipulation du Tableau**

  - Suppression d’un ami de la liste.
  - Ajout d’un nouvel ami.
  - Remplacement d’un ami par un autre.

- **Parcours du Tableau**  
  Utilisation d’une boucle pour afficher chaque ami dans la console.

- **Conditions**  
  Affichage de messages spécifiques selon l’âge de l’utilisateur :

  - "Mineur" si l’utilisateur a moins de 18 ans.
  - "Jeune adulte" si l’âge est compris entre 18 et 25 ans.
  - "Adulte" dans les autres cas.

- **Fonctions**
  - `saluerUtilisateur` : Affiche un message de bienvenue pour un prénom donné.
  - `calculerAnneeNaissance` : Retourne l’année de naissance en fonction de l’âge (pour 2025).
  - `verifierMajorite` : Vérifie si l’utilisateur est majeur.
  - `afficherProfil` : Affiche l’ensemble des informations de l’objet `utilisateur`.
- **Bonus**
  - `ajouterAmi` : Ajoute un prénom dans le tableau `amis`.
  - `supprimerAmi` : Supprime un prénom du tableau s’il existe.

## Technologies Utilisées

![My Skills](https://skillicons.dev/icons?i=html,css,js)

## Structure du Projet

- **`script.js`** : Fichier contenant l'ensemble du code JavaScript.
- **`index.html`** : Fichier pour lancer et tester le script dans un navigateur.
- **`README.md`** : Documentation du projet.

## Installation

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/Chr1stopherPEREZ/Exo_Js.git
   cd Exo_Js
   ```

2. **Exécuter le projet**

Ouvrir index.html dans votre navigateur pour tester le profil utilisateur.
