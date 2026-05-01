# Functional Programming with TypeScript

This repository contains a hands-on TypeScript training project for learning functional programming from fundamentals to higher abstractions such as `Functor`, `Applicative`, and `Monad`.

The runnable code lives in `code/`. Inside that folder you will find lesson-by-lesson exercises, tests, sample data, and reference solutions built with TypeScript, Jest, `fp-ts`, `effect`, and `ts-pattern`.

## 3-Day Course Outline

### Day 1: FP Fundamentals

Build a strong foundation in FP thinking, expression-oriented code, and function-based design.

| Topic | Description |
| --- | --- |
| Introduction to Functional Programming | Programming paradigm, Lambda Calculus, declarative vs. imperative style |
| FP Syntax in TypeScript | Functions, generics, union types, readonly, immutability |
| Function | Pure functions, total functions, domain & co-domain, side effects |
| Function Composition | `compose`, `pipe`, `flow` — chaining transformations |
| Problem Solving | Breakdown with pure functions, function-level reasoning |
| Higher-Order Functions & Lambda Calculus | Functions as values, lambda abstraction, referential transparency |
| Currying | Partial application, converting binary to unary functions |
| Recursion | Recursive structures, `map`, `foldr`/`foldl`, linked list, tree, quicksort |

**Labs:** `00-TypeScript`, `01-Function&Compose`, `02-Problem-Solving`, `03-Currying`, `04-Recursion`

---

### Day 2: Modeling and Effects

Learn how to model business domains, handle absence and errors, manage side effects, and compose asynchronous workflows.

| Topic | Description |
| --- | --- |
| Types | Domain modeling with types, `NonEmptyArray`, compile-time guarantees |
| Option | `Some` / `None` — representing absence without `null` |
| Either | `Left` / `Right` — error-aware computations and Railway-Oriented Programming |
| ADT & Pattern Matching | Sum types, product types, exhaustive pattern matching with `ts-pattern` |
| Higher-Kinded Types | Kinds, type constructors, abstracting over `F<A>` |
| IO & IOEither | Modeling synchronous side effects as pure values |
| Task & TaskEither | Async side effects, composing `Promise`-based workflows |
| Put It All Together | End-to-end exercise: summarize employee work hours from CSV data |

**Labs:** `05-Types`, `06-Option`, `07-Either`, `08-PatternMatching`, `09-IO`, `10-Task`, `11-Exercise`

---

### Day 3: Type Classes and Abstractions

Understand the abstractions that make FP powerful, reusable, and composable — rooted in Category Theory.

| Topic | Description |
| --- | --- |
| Category Theory | Category, composition, identity, endofunctor, natural transformation, Kleisli |
| Type Class | Ad hoc polymorphism, parametric polymorphism, `Eq`, `Ord` |
| Magma, Semigroup, Monoid | Combining values with associativity and identity |
| Functor | `fmap` — mapping over contextual values; identity and composition laws |
| Applicative Functor | `pure` / `ap` — applying wrapped functions, independent validations |
| Monad | `flatMap` / `bind` — sequencing context-dependent computations |
**Labs:** `12-CategoryTheory`, `13-TypeClass`, `14-Monoid`, `15-Functor`, `16-Applicative`, `17-Monads`

---

## Project Layout

```text
.
├── README.md
├── FP-TypeScript Day1.pdf
├── FP-TypeScript Day2.pdf
├── FP-TypeScript Day3.pdf
└── code
    ├── package.json
    ├── src
    │   ├── 00-TypeScript
    │   ├── 01-Function&Compose
    │   ├── 02-Problem-Solving
    │   ├── 03-Currying
    │   ├── 04-Recursion
    │   ├── 05-Types
    │   ├── 06-Option
    │   ├── 07-Either
    │   ├── 08-PatternMatching
    │   ├── 09-IO
    │   ├── 10-Task
    │   ├── 11-Exercise
    │   ├── 12-CategoryTheory
    │   ├── 13-TypeClass
    │   ├── 14-Monoid
    │   ├── 15-Functor
    │   ├── 16-Applicative
    │   └── 17-Monads
    ├── jest.config.js
    └── tsconfig.json
```

## Getting Started

This project is managed from the `code/` directory.

```bash
cd code
npm install
```

Check that everything is working:

```bash
npm run dev
npm test
npm run test:watch
```

Build the project:

```bash
npm run build
```

## Requirements

- Node.js 18 or later
- npm 9 or later
- TypeScript 5.2.2 (project version)

## Lab Tools

- Visual Studio Code Family (Cursor, Agy, etc.) 
- Recommended VS Code Extensions (Cursor, Antigravity compatible):
  - [`ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for TypeScript lint feedback while doing Lab.
  - [`Jest`](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) for running Jest Unit Tests directly in the editor.
  - [`Test Coverage Gutters`](https://marketplace.visualstudio.com/items?itemName=ryanluker.vscode-coverage-gutters) for showing Jest test coverage in source files.

## Available Scripts

Run all commands from `code/`.

| Script | Description |
| --- | --- |
| `npm run dev` | Run `src/app.ts` with `ts-node` |
| `npm run watch` | Run `src/app.ts` with `nodemon` and reload on `.ts` changes |
| `npm test` | Run all Jest tests |
| `npm run test:spec` | Run tests with `jest-spec-reporter` |
| `npm run test:coverage` | Generate coverage report |
| `npm run test:watch` | Run Jest in watch mode |
| `npm run build` | Compile TypeScript to `dist/` |

## How the Lessons Are Organized

Most topics follow a practice-first structure:

- `begin/` contains the starter code for the lesson.
- `lab/` appears in some sections for a larger guided exercise.
- `solution/` contains a reference implementation.
- `*.test.ts` files describe the expected behavior and are intended to drive the exercises.

Recommended workflow:

1. Open the lesson under `code/src`.
2. Start from `begin/`.
3. Run the related test file or the whole test suite.
4. Implement the missing pieces until the tests pass.
5. Compare your result with `solution/`.

## Learning Modules

The `code/src` directory is organized as a sequence of lessons aligned with the 3-day agenda:

| Module | Day | Topic |
| --- | --- | --- |
| `00-TypeScript` | 1 | TypeScript warm-up: types, generics, readonly, union types |
| `01-Function&Compose` | 1 | Function composition — `compose`, `pipe`, `flow`, and effects |
| `02-Problem-Solving` | 1 | Problem breakdown and solving in a functional style |
| `03-Currying` | 1 | Currying and partial application |
| `04-Recursion` | 1 | Recursion, `foldr`/`foldl`, `map`, linked lists, trees, and quicksort |
| `05-Types` | 2 | Modeling with types — business domain, `NonEmptyArray`, type safety |
| `06-Option` | 2 | Optional values with `Some` / `None` — safe composition without `null` |
| `07-Either` | 2 | Error-aware computations with `Left` / `Right` |
| `08-PatternMatching` | 2 | ADT and exhaustive pattern matching with `ts-pattern` |
| `09-IO` | 2 | Modeling synchronous side effects with `IO` and `IOEither` |
| `10-Task` | 2 | Async functional effects with `TaskEither` and `effect` |
| `11-Exercise` | 2 | End-to-end exercise: summarize workdays from CSV data |
| `12-CategoryTheory` | 3 | Category theory concepts — composition, identity, endofunctor |
| `13-TypeClass` | 3 | Type classes — ad hoc polymorphism, `Eq`, parametric thinking |
| `14-Monoid` | 3 | Magma, Semigroup, and Monoid — combining values with identity |
| `15-Functor` | 3 | Functor — `fmap`, identity law, composition law |
| `16-Applicative` | 3 | Applicative Functor — `pure`, `ap`, independent validations |
| `17-Monads` | 3 | Monad — `flatMap`, sequencing context-dependent computations |

## Notable Practice Files

- `code/src/app.ts` is a simple runnable entry point for quick experiments.
- `code/src/11-Exercise` contains a larger CSV-based exercise with `begin`, `lab`, and `solution` flows.
- `code/src/10-Task/solution/jsonplaceholder.http` can be used to manually inspect the sample HTTP endpoint used in the async examples.

## Main Libraries Used

- `typescript` `5.2.2` for the language and compiler
- `jest` and `ts-jest` for automated tests
- `fp-ts` for functional programming primitives and combinators
- `effect` for modern effectful programming examples
- `ts-pattern` for pattern matching examples

## Generated Folders

Some folders are build or test artifacts and can be regenerated:

- `code/dist`
- `code/coverage`
- `code/test-results`

## License

This project is licensed under the MIT License. See `code/LICENSE`.
