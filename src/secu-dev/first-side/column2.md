# Grands principes à suivre

## Défense en profondeur
Plusieurs modes de sécurisations pour un même risque

*Ex : ORM + compte lecture seule + validation des entrées*

## Le front-end n'est pas sûr
Le serveur sécurise tout ce qui entre :
* Valide le type, le format et la taille des données
* Vérifie les droits d’accès à chaque requête
* Valide les chemins d'accès aux ressources
* Utilise un ORM ou des requêtes SQL paramétrées

Le front-end n'a pas accès aux jeton d'authentification
* Cookies http-only et secure

## Les données peuvent être corrompues
Le front-end sécurise la page affichée :
* Encode tous les caractères HTML

## Bannir la sécu « maison »
Utiliser des librairies reconnues pour :
* Les fonctions d'authentification
* La gestion de sessions
* Le chiffrement (mot de passes et autres données)

## Se tenir à jour
Mettre à jour fréquemment les Frameworks et bibliothèques utilisées

Pour savoir si cela est nécessaire, vérifier les vulnérabilités connues avec des outils dédiés
   * Checkmarx
   * Plugin owasp
   * npm audit

