# Grands principes à suivre

## Défense en profondeur
Plusieurs modes de sécurisation pour un même risque

*Ex : ORM + compte lecture seule + valider les entrées*

## Le front-end n'est pas sûr
Le serveur sécurise tout ce qui entre :
* Valider le type, le format et la taille des données
* Vérifier les droits d’accès à chaque requête
* Valider les chemins d'accès aux ressources
* Utiliser un ORM ou des requêtes SQL paramétrées

Le front-end n'a pas accès aux jetons d'authentification
* Cookies http-only et secure

## Les données peuvent être corrompues
Le front-end sécurise la page affichée :
* Encoder tous les caractères HTML

## Bannir la sécu « maison »
Utiliser des librairies reconnues pour :
* Les fonctions d'authentification
* La gestion de sessions
* Le chiffrement (mots de passe et autres données)

Pour hasher vos mots de passe, choisissez parmi Argon2, PBKDF2, Scrypt et Bcrypt

## Se tenir à jour
Mettre à jour fréquemment les frameworks et bibliothèques utilisés

Pour savoir si cela est nécessaire, vérifier les vulnérabilités connues avec des outils dédiés
   * Checkmarx
   * Owasp Dependency Check (Maven)
   * Npm audit (JS)
   * Security Checker (PHP)

