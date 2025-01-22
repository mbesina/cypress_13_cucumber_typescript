# **Cypress Automation Framework**

Welcome to the **Cypress Automation Framework** repository! This framework is built for end-to-end testing using **Cypress 13**, **TypeScript**, and **Cucumber**. It follows the **Page Object Model (POM)** pattern and incorporates tools like **ESLint**, **Prettier**.

Repository URL: [Cypress Automation Framework](https://github.com/mbesina/cypress_13_cucumber_typescript)

---

## **Key Features**

- **Cypress 13**: Modern, fast, and reliable end-to-end testing framework.
- **TypeScript**: Strongly-typed support for maintainable and error-free code.
- **Cucumber**: Write human-readable test cases in Gherkin syntax.
- **Page Object Model (POM)**: Modular and reusable structure for managing page elements.
- **ESLint & Prettier**: Linting and code formatting for a consistent codebase.
- **Chance Library**: Generate data for test.
- **GitHub Actions**: Implemented workflows for
  - CI Test on push to master
  - Linting on pull requests
- **Mocha Reports** (Planned): Generate detailed execution reports for easy analysis.
- **Gmail Tester** (Planned): Automate email validations, including:
  - Checking email content, "To" and "From" values.
  - Refreshing Gmail API tokens.

---

## **Folder Structure**

```
project-root/
├── .github/  
│   ├── workflows/           # CI workflows
├── cypress/                 # Cypress test suite folder
│   ├── e2e/
│   │   ├── features/        # Gherkin feature files
│   ├── step_definitions/    # Cucumber step definitions
│   ├── pages/               # Page Object classes
│   ├── support/
│   │   ├── commands.ts      # Custom Cypress commands
│   │   ├── utils/           # Utility functions
│   │   ├── enums/           # Enum definitions
│   │   ├── types/           # TypeScript custom types
│   │   ├── constants/       # Constants
│   ├── fixtures/            # Test data in JSON format
│   ├──reports/             # Test execution reports (Planned)
|   └── tsconfig.json            # TypeScript configuration
├── cypress.config.ts        # Cypress configuration file
├── package.json             # Project dependencies
├── .eslintrc.json          # ESLint configuration
├── .prettierrc              # Prettier configuration
```

---

## **Installation and Setup**

### Prerequisites

- Node.js (v18 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mbesina/cypress_13_cucumber_typescript.git
   cd cypress_13_cucumber_typescript
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

1. **Cypress Config**: Update `cypress.config.ts` to match your baseURL and cpnfiguration settings.

---

## **Running Tests**

### Run Tests with Specific Tags @Login

```bash
npm run test:Login
```

### Open Cypress Test Runner

```bash
npm run cy:open | npx cypress open
```

### Run test through terminal

```bash
npm run cy:run | npx cypress run
```

---

## **Acknowledgments**

- [Cypress Documentation](https://docs.cypress.io/)
- [Cucumber Preprocessor for Cypress](https://github.com/badeball/cypress-cucumber-preprocessor)
- [Cypress-esbuild-preprocessor](@bahmutov/cypress-esbuild-preprocessor)

---

## **Planned Features**

- Mocha Reports with custom configurations for HTML and JSON formats.
- Gmail Tester to access emails and confirm values.
