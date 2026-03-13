# Bonnes pratiques
- Maintenir une pyramide de tests équilibrée
- Centraliser les résultats de test avec des dashboards lisibles
- Prioriser la résilience des tests automatisés (flaky test management)
- Définir des critères de qualité (Quality Gates) dans les pipelines
- Communiquer en continu sur la qualité via des alertes & rapports

# Métriques à surveiller en TESTOPS

| Métriques Fonctionnelles               | Description                                                   |
| ------------------------------------ | ------------------------------------------------------------- |
| 📈 Taux de succès des tests          | % de tests passés avec succès dans un pipeline                |
| 🧪 Taux de couverture de tests       | % du code couvert par les tests (unitaires, intégration, E2E) |
| 🔁 Taux de régressions               | Nombre de tests qui échouaient alors qu’ils passaient avant   |
| 🧼 Taux de flaky tests               | % de tests instables (échecs aléatoires ou intermittents)     |
| 🔍 Temps moyen d’exécution des tests | Performance globale du pipeline de test                       |

| Métriques Opérationnelles            | Description                                                   |
| ------------------------------------ | ------------------------------------------------------------- |
| 🕒 Lead Time for Changes          | Temps moyen entre un commit et un déploiement en production      |
| 📤 Taux d’échec en déploiement    | Proportion des livraisons annulées ou échouées à cause des tests |
| ⏱️ Temps de feedback QA           | Délai entre le push de code et l’obtention des résultats de test |
| 📊 Taux de réussite des pipelines | Nombre de pipelines CI/CD qui terminent sans erreur (dont QA)    |


