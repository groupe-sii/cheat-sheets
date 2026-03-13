
# Test Cases
Les cas de test sont structurés comme sur l'exemple suivant:    
```robot
Nom du Test
[Documentation] Objectif du test
[Tags] Catégories du test pour filtrer les executions et les résultats
[Setup] Keyword de setup
[Timeout] #Timeout specifique au test ou NONE
#Séquence d'actions de test
...
[Teardown] Keyword de Teardown
```
# Variables par défauts
- ${TEMPDIR} : Répertoire local /tmp ou /Temp
- ${CURDIR} : Path du répertoire courant ou se trouve le fichier .robot
- ${EXECDIR} : Path du répertoire de lancement de l'exécution en cours
- ${/} : séparateur de dossier dans un PATH (/ ou \ suivant l'OS)
- ${:} : simple : dans un chemin ou une expression
- ${\n} : retour chariot quelque soit l'OS
- ${TRUE}/${FALSE} : Boolean Vrai/Faux quelque soit l'OS
- ${EMPTY} : Variable vide (Should be empty TRUE)
- ${SPACE} : Éviter d’écrire littéralement un espace interprétable dans les arguments
- ${null}/${None}  : Utilisé pour passer explicitement une valeur vide/null à un mot-clé


# Keyword classiques
- Assertion, Succès et Echec 
| Keyword    | Usage    |
|-------------|------------------------------|
| Should Be Equal   ${a}   ${b} |Test KO si a!=b|
| Should Contain   ${list}   value |Test KO si list ne contient pas value|
| Should Be True   ${condition} |Test KO si condition faux|
| Should Not Be Empty   ${var} |Test KO si var est vide|
| ${Res}= Evaluate   ${Python}  |Execute un contrôle en python et stock le résultat dans Res|
| Fail   ${Failmsg}   ${FailTags} |Test KO avec en option message Failmsg et un changement de catégorie FailTags|
| Fatal Error   ${Failmsg} |Interrompt l'exectution en cours et mets les tests restant KO|
| Pass Execution If   ${condition}   ${Passmsg}   ${PassTags} |Test Pass avec en option message Passmsg et un changement de catégorie PassTags|
| Skip if   ${Condition} |passe la suite du test si condition vrai|

