# Morphform

Morphform is an app that you can use to create forms and send them to users respond.

This project is aimed to demonstrate the usage of technologies and organisation of state management logic that will mostly use Xstate.

## Features

* Users will be able to create an account using Github
* Users will be able to delete their account
  * When delete an account, all data related to that account should be deleted
* Logged users will be able to
  * Create a new form
  * Visualize all results
  * Delete a form
  * Update a form
  * List all forms
  * Send direct links to a person respond that form
* Not logged users will be able to
  * Log in
  * Create account
  * Respond a form

## Tech stack

- Next.js as the framework
- TypeScript as the programming language
- Xstate as the state management library
- NextAuth for authentication
- React Query as server state management library
- MongoDB Atlas as persistance layer
- yarn as dependencies manager and scripts runner
- jest as test runner
- testing-library as unit-testing framework
- Cypress (or Puppeteer) as end-to-end testing framework

## Directory structure

This project kinda follows the [Phoenix Contexts project structure](https://hexdocs.pm/phoenix/contexts.html). Where resouces will be organized into modules that represents a context.

```
config/
  All project configurations will be here
src/
  pages/
    All pages and API endpoints will be here
  modules/
    All modules such as accounts management and application domain will be here
```

## Building the project

Each task described in the next section will be a GitHub issue described as User Story.

The project will run as sprints. Each sprint will be 1 week long. Starting every **thursday** and ending at every **wednesday**.

## Tasks

This is the first draft of what I will need to do to implement this project.

* Create the project
  * Setup Next.js project using the TypeScript template
  * Setup Prettier, ESLint, Jest, Cypress
  * Install basic dependencies
  * Specify environment variables (`.env.local.example`)
  * Create the persistance layer
  * Create Github workflows to run tests in each PR
* Configure authentication
  * Create Github app
  * Integrate with NextAuth
  * Create `/login` page
  * Create `/create-account` page
  * Create basic admin page (only a h1)
  * Protect admin pages to be accesible only for logged users
* Create the form builder
  * Create a form
  * Update a form
  * Delete a form
* Create the "form responder" page
* Create analytics page
* Deploy the project
