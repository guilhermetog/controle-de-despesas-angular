# Reorganização de pastas e arquivos

* src/
  * app/
    * components/
      * expense-list/
        * expense-list.component.ts
        * expense-list.component.html
    * models/
      * expense.model.ts
    * services/
      * expense.service.ts
      * expense.service.spec.ts
    * app.config.ts
    * app.css
    * app.html
    * app.routes.ts
    * app.spec.ts
    * app.ts
  * main.ts
  * styles.css
  * index.html

**Motivação:**

* Separar componentes, modelos e serviços em subpastas específicas facilita a manutenção, escalabilidade e entendimento do projeto.
* Cada componente fica em sua própria pasta, junto com seu HTML e estilos (se houver).
* Modelos e serviços ficam agrupados em suas respectivas pastas.

**Próximos passos:**

* Mover os arquivos conforme o novo padrão.
* Ajustar os imports nos arquivos para refletir os novos caminhos.


