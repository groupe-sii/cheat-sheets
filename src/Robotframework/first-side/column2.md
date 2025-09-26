# Outils complémentaires
- **Rebot**: Gestions de logs, rejeux et fusion de rapport
```
#Etape 1 - Exécuter tous les tests 
> robot --output original.xml tests 
#Etape 2 - Re-executer les tests en échecs 
> robot --rerunfailed original.xml --output rerun.xml tests  
#Etape 3 - Fusion des résultats des 2 runs
> rebot --merge original.xml rerun.xml  
```
- **Pabot**: Gestion d'exécutions en parallèle
   - `pabot tests : Lancer les suites de test en parallèle mais leur test en séquentiel`
   - `pabot --testlevelspli tests : Lancer les tests en parallèle`
   - `pabot --processes <X> tests : Lancer les tests en parallèle sur <X> Thread`
- **LibDoc/TestDoc**: Génération de documentation pour les keywords et les suites de test
- **VSCode/RobotCode**: IDE de développement supportant la syntaxe Robotframework
- **AllureReport**: Génération de rapport avancé avec regroupement des erreurs, historique d'exécution.
 
  # Sections
Les fichiers tests Robots sont structurés par des sections : 

| Section     | Utilisation|
|-------------|------------------------------------------------------------------------------------------|
| **Settings**  | Import de librairies de tests, de fichiers de ressources, de fichiers de variables, metadata pour les suites de tests et les cas de tests |
| **Variables** | Déclaration de variables                                                               |
| **Test Cases**| Création de cas de tests à partir de mots-clés                                         |
| **Tasks**     | Création de tâches à partir de mots-clés pour du RPA. **Interdit lorsque l'on utilise une section test** |
| **Keywords**  | Création de mots-clés utilisateurs basés sur des mots-clés existants de bas niveau     |
| **Comments**  | Commentaires ignorés par Robot Framework                                               |
