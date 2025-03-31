/* 1° */

let nameUser = "Christopher";

let ageUser = 28;

let villeUser = "Chambery";

console.log(
  `Bonjour, je m'appelle ${nameUser} et j'ai ${ageUser} ans, je vis aussi à ${villeUser}.`
);

/* 2° */

villeUser = "Grenoble";

console.log(villeUser);

/* 3° */

let objet = {
  name: nameUser,
  age: ageUser,
  ville: villeUser,
};

console.log(objet);

/* 4° */

let utilisateur = {
  nameUser: nameUser,
  ageUser: ageUser,
  villeUser: villeUser,
};

utilisateur.villeUser = "Chambéry";

console.log(utilisateur);

/* 5° */

utilisateur.emailUser = "christopher@exemple.com";

console.log(utilisateur.emailUser);

/* 6° */

utilisateur.amis = ["Quentin", "Mathis", "Azriel", "Antoine", "Guy"];

console.log(utilisateur.amis);

/* 7° */

const amis = ["Quentin", "Mathis", "Azriel", "Antoine", "Guy"];
amis.splice(4, 1);

console.log(amis);

amis.push("Florent");

console.log(amis);

amis.splice(3, 1, "Quentin2");

console.log(amis);

/* 8° */

for (let i = 0; i < amis.length; i++) {
  console.log(amis[i]);
}

/* 9° */

if (ageUser < 18) {
  console.log("Vous êtes mineur, revenez dans quelques années :p");
} else if (ageUser >= 18 && ageUser <= 25) {
  console.log("Vous êtes entre les deux");
} else {
  console.log("Vous êtes encore jeune ça va");
}

/* 10° */

/* a */
function saluerUtilisateur(nameUser) {
  console.log("Bienvenu à toi petit scarabée" + " " + nameUser);
}

saluerUtilisateur("Mathis");

/* b */
function calculerAnneeNaissance(ageUser) {
  return 2025 - ageUser;
}

console.log("Vous êtes né en " + calculerAnneeNaissance(ageUser));

/* c */
function verifierMajorite(ageUser) {
  return ageUser >= 18;
}

console.log("Êtes-vous majeur ? " + verifierMajorite(ageUser));

/* d  */
function afficherProfil(utilisateur) {
  console.log("Profil de l'utilisateur :");
  for (let cle in utilisateur) {
    console.log(cle + " : " + utilisateur[cle]);
  }
}
afficherProfil(utilisateur);

/* e */
function ajouterAmi(utilisateur, prenom) {
  if (!utilisateur.amis) {
    utilisateur.amis = [];
  }
  utilisateur.amis.push(prenom);
}

ajouterAmi(utilisateur, "Nicolas");
console.log(utilisateur.amis);

function supprimerAmi(utilisateur, prenom) {
  if (utilisateur.amis) {
    const index = utilisateur.amis.indexOf(prenom);
    if (index !== -1) {
      utilisateur.amis.splice(index, 1);
    }
  }
}

supprimerAmi(utilisateur, "Guy");
console.log(utilisateur.amis);

/* Script.js */
