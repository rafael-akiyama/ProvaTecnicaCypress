import { Before, After, AfterStep } from "@badeball/cypress-cucumber-preprocessor";

Before(({ pickle }) => {
  cy.task("startApp");
  cy.task("log", `\n📘 Cenário: ${pickle.name}`);
});

After(() => {
  cy.task("stopApp");
});

AfterStep(({ pickleStep }) => {
  const state = cy.state("runnable")?.state;
  const icon = state === "failed" ? "❌" : "✅";
  cy.task("log", `${icon} ${pickleStep.text}`);
});
