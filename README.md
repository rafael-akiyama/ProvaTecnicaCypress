# Prova Técnica Cypress - QA Commerce

Projeto de automação de testes funcionais e de API, implementado com Cypress + Cucumber (BDD), cobrindo cenários da prova técnica com escrita em Gherkin e execução automatizada local e em CI (GitHub Actions).

## Objetivo da implementação

- Criação de cenários BDD claros e declarativos em Gherkin.
- Automação de fluxos web (E2E).
- Automação de testes de API com validações de status code e regra de negócio.
- Estrutura organizada (Page Objects, Step Definitions, Hooks, configuração centralizada).
- Execução autônoma sem erros e com relatório de evidências.
- Pipeline CI no GitHub para execução automática dos testes.

## Tecnologias e plugins utilizados

### Stack principal

- Cypress `^13.0.0`
- Cucumber preprocessor para Cypress `@badeball/cypress-cucumber-preprocessor` `^24.0.1`
- Esbuild preprocessor para Cypress `@bahmutov/cypress-esbuild-preprocessor` `^2.2.8`
- Esbuild `^0.27.3`
- Cucumber (dependência auxiliar) `^6.0.7`

### Reporter e suporte

- cypress-mochawesome-reporter `^4.0.2`
- Geração de relatório BDD (HTML, JSON e NDJSON) via configuração `cypress-cucumber-preprocessor` no `package.json`

### Backend da aplicação de teste

- Node.js
- Express `^4.21.2`
- SQLite3 `^5.0.2`
- Swagger UI Express `^5.0.1`

## Estrutura dos testes automatizados

- Testes E2E (web): `cypress/e2e/feature/compra.feature`
- Testes API: `cypress/e2e/api/carrinhoApi.feature`
- Step Definitions web: `cypress/support/step_definitions/CompraSteps.js`
- Step Definitions API: `cypress/support/step_definitions/api/CarrinhoApiSteps.js`
- Page Objects web: `cypress/pages/*`
- Page Object API: `cypress/pages/api/CarrinhoApiPage.js`

## O que as automações fazem

### E2E - Fluxos web cobertos

1. Adicionar primeiro produto ao carrinho.
2. Finalizar checkout com sucesso.
3. Validar mensagens de erro de campos obrigatórios no checkout.

### API - Fluxos cobertos

1. POST `/api/carrinho`:
	- valida status code `200` ou `201`
	- valida mensagem de sucesso de negócio.
2. GET `/api/carrinho/{userId}`:
	- valida status code `200`
	- valida presença de campos no retorno (ex.: `name`).

## Sessão por cenário (início e término)

O projeto está configurado para inicializar e finalizar sessão a cada cenário executado:

- No `Before`, é executado `cy.task("startApp")`.
- No `After`, é executado `cy.task("stopApp")`.
- No log de execução, cada cenário é exibido com seus passos (`AfterStep`).

Implementação em:

- `cypress/support/step_definitions/bdd-logger.js`
- `cypress.config.js` (tasks `startApp` e `stopApp`)

Também há proteção para evitar conflito de porta `3000` na esteira (CI), aguardando liberação da porta entre cenários.

## Pré-requisitos

- Node.js (recomendado Node 22, mesma versão usada no CI)
- Git
- VS Code (ou editor de sua preferência)

## Como baixar e rodar o projeto localmente

### 1) Clonar o repositório

```bash
git clone https://github.com/rafael-akiyama/ProvaTecnicaCypress.git
cd ProvaTecnicaCypress
```

### 2) Instalar dependências

```bash
npm install
```

### 3) Subir aplicação

```bash
npm start
```

Endpoints:

- Site: http://localhost:3000
- API Docs (Swagger): http://localhost:3000/api-docs

## Como executar os testes

### Executar toda a suíte BDD

```bash
npm run test:bdd
```

### Executar somente um spec

```bash
npx cypress run --spec "cypress/e2e/feature/compra.feature"
```

## Relatórios e evidências

Ao executar os testes, são gerados relatórios BDD:

- `cypress/reports/bdd/cucumber-report.html`
- `cypress/reports/bdd/cucumber-report.json`
- `cypress/reports/bdd/cucumber-messages.ndjson`

Abrir relatório HTML localmente:

```bash
npm run report:bdd:open
```

## CI no GitHub (execução automática)

O projeto está implementado com GitHub Actions:

- Workflow: `.github/workflows/ci.yml`
- Disparo automático em:
  - `push` na `main`
  - `pull_request`

### O que o CI executa

1. Checkout do código.
2. Setup do Node.js (v22).
3. Instalação com `npm ci`.
4. Inicialização do banco (`npm run db`).
5. Execução dos testes Cypress em modo headless.
6. Upload dos artefatos (`cypress-artifacts`) com relatórios/evidências.

### Como ver o CI rodando

1. Abra o repositório no GitHub.
2. Vá em **Actions**.
3. Selecione o workflow **CI**.
4. Abra uma execução para acompanhar os passos e logs.

### Como baixar artefatos (relatórios)

1. Na execução do workflow, role até a seção **Artifacts**.
2. Clique em **cypress-artifacts** para baixar o `.zip`.
3. Extraia o `.zip` e abra os arquivos da pasta `cypress/reports/bdd`.

## Observações importantes

- O banco `src/qa_commerce.db` está versionado para garantir disponibilidade nos testes.
- Artefatos gerados de execução (`cypress/screenshots`, `cypress/videos`, `cypress/reports/bdd`) são ignorados no repositório e disponibilizados via CI artifacts.
