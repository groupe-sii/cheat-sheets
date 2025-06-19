

# Bonnes pratiques
- Organiser les mots-clés en fichiers par fonctions et écrans:  
   - **Business Layer**: Favoriser la réutilisabilité avec des mots-clés fonctionnels métiers
   - **Technical Layer**: Favoriser la maintenabilité avec des mots-clés bas niveau rattachés aux interfaces/écrans
- Nommer les tests et étapes de façon métier-friendly
- **Versionner** les suites de tests comme du code (Git)
- Intégrer les projets Robotframework dans des pipelines CI/CD

# Keywords
**2 Approches pour écrire les Keywords:**  
- Keyword driven:
```robot
Un mot clef d'addition
    [Arguments]    ${a}    ${b}
    ${result}=     Evaluate    ${a} + ${b}
    [Return]       ${result}
```
- format 🐍python:
```python
from robot.api.deco import keyword
class CustomKeywords:

    @keyword("Un mot clef d'addition de ${a} et ${b}")
    def addition(self, a, b):
        return int(a) + int(b)
```
**3 Types d'appel de Keyword:**   

| Style        | Description                                          | Exemple                                             |
| ------------ | ---------------------------------------------------- | --------------------------------------------------- |
| **Standard** | Appel direct du nom du mot-clé                       | Un mot clef d'addition    ${a}    20            |
| **Embedded** | Arguments intégrés dans le nom du mot-clé            | Un mot clef d'addition de 15 et ${b} |
| **Gherkin**  | Style BDD avec les mots vides (Given / When / Then / And / But)    | Given un mot clef d'addition de 15 et ${b}      |

**Gestion d'échec des Keywords**  
```robot
Run Keyword And Ignore Error    Je log l'erreur et continue 
Run Keyword And Continue On Failure    J'ignore les erreurs sans trace
```
