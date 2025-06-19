# Quality Gates Recommandés
| Gate                                   | Seuil conseillé         | Outils                             |
| -------------------------------------- | ----------------------- | ---------------------------------- |
| ✅ Taux de succès des tests automatisés | ≥ 95 %                  | Jenkins, GitLab CI, GitHub Actions |
| ✅ Taux de couverture de code           | ≥ 80 % (unitaires)      | SonarQube, Jacoco, Istanbul        |
| ❌ Aucune erreur critique Sonar         | 0 code smell bloquant   | SonarQube                          |
| ❌ Taux de flaky tests                  | ≤ 5 %                   | Flaky Test Tracker, custom scripts |
| ✅ Temps de test acceptable             | ≤ 10 min de pipeline QA | Allure, CI tools                   |

## Quality Gates complémentaires
- 🔒 Aucune régression non justifiée détectée
- ⛔ Aucun test "skipped" ou ignoré dans le pipeline
- 🧪 Tous les tests critiques "must-pass" validés
- 📎 Respect de la stratégie de test par sprint ou release