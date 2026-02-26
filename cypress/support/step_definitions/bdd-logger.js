import { Before, AfterStep } from "@badeball/cypress-cucumber-preprocessor";

Before(({ pickle }) => {
  cy.task("log", `\n📘 Cenário: ${pickle.name}`);
});

AfterStep(({ pickleStep }) => {
  const state = cy.state("runnable")?.state;
  const icon = state === "failed" ? "❌" : "✅";
  cy.task("log", `${icon} ${pickleStep.text}`);
});
