# Outils Clefs
| Domaine                     | Outils                                        |
| --------------------------- | --------------------------------------------- |
| CI/CD & Orchestration       | GitLab CI, Jenkins, GitHub Actions            |
| Tests automatisés           | Playwright, Cypress, Selenium Grid            |
| Monitoring QA               | Allure Report, TestRail, Grafana + Prometheus |
| Environnements & Conteneurs | Docker, Kubernetes, Terraform                 |

## 📊 Modèle de Maturité TestOps (3 niveaux)

| Dimension                       | 🟠 Débutant                                     | 🟡 Intermédiaire                                          | 🟢 Avancé                                                    |
|--------------------------------|------------------------------------------------|-----------------------------------------------------------|--------------------------------------------------------------|
| **Tests automatisés**          | Peu ou pas de tests automatisés                | Tests auto sur périmètres critiques                | Tests automatisés à tous les niveaux     |
| **Intégration CI/CD**          | Tests exécutés manuellement                    | Intégration stagging/nightly dans la CI         | Exécutés en CI/CD (à chaque push/MR)     |
| **Versionning des tests**      | Tests dispersés ou non versionnés              | Référentiel de test centralisé   | Tests traités comme du code  |
| **Collaboration QA/Dev/Ops**   | QA en silo                                     | Revue croisée Dev/QA, co-écriture de tests                | Qualité partagée, QA intégrés dans les squads   |
| **Observabilité des tests**    | Logs manuels / locaux                          | Rapports automatisés (HTML, CI logs)    | Dashboards partagés   |
| **Gestion des erreurs / flaky**| Non maîtrisée                                  | Triage manuel           | Tagging, quarantine automatisée              |
| **Quality Gates & KPI**        | Non définis                                    | Quelques seuils sur tests ou coverage                     | Quality Gates intégrés dans la CI/CD              |
| **Tests en production**        | Aucune observation post-déploiement            | Tests exploratoires à la main                             | Tests actifs, canary releases, testeurs inclus dans les feedback   |
