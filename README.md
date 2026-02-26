# QA-Commerce

### Loja virtual Geek para simulação de testes 

## Clonando e executando em sua máquina

### Pré-requisito:

-Node.js - Você encontra em: https://nodejs.org/en/
-Visual Studio Code ( ou editor de sua prefrência) - você encontra em: https://code.visualstudio.com/download
-Git: você encontra em: https://git-scm.com/downloads

Via terminal, rode os seguintes comandos:
```  
git clone https://github.com/fabioaraujoqa/qa-commerce.git
```
```
cd qa-commerce
```

#### Para instalar as dependencias:
```
npm install 
```

#### Para subir o servidor e o banco:
```
npm start
```

No console vai aparecer os endereços do site e do banco. 
O site você acessaem: http://localhost:3000/

A documentação funciona em: http://localhost:3000/api-docs/

*Parceria: Fábio Araújo, Bruna Emerich e Tamara Fontanella

## Relatório BDD completo (Cenários + Passos)

Este projeto está configurado para gerar relatório BDD detalhado ao executar os testes.

### Como gerar o relatório

```
npm run test:bdd
```

### Arquivos gerados

- `cypress/reports/bdd/cucumber-report.html` (relatório visual completo)
- `cypress/reports/bdd/cucumber-report.json` (resultado estruturado)
- `cypress/reports/bdd/cucumber-messages.ndjson` (mensagens detalhadas do Cucumber)

### Como abrir o relatório HTML

```
npm run report:bdd:open
```
