# Morphform

Morphform is a whitelabel service that you can use to create forms and collect responses.

## Motivation

This project is aimed to demonstrate the usage of technologies and organisation of state management logic that will mostly use Xstate.

## Use cases

- Bloggers asking questions for readers
- Companies asking their employees about the company culture
- NPS research

## Features of the first MVP

* Users will be able to create an account using Github
* Users will be able to delete their account
  * When delete an account, all data related to that account should be deleted
* Logged users will be able to
  * Create a new form
  * Visualize all results of all forms (active and archived)
  * Delete a form
    * Once deleted, all form data and answers will be deleted forever
  * Update a form
    * Update questions only if no answer was received
    * Free to update the form style
  * Archive a form
    * Once archived, a form will not receive new answers
    * Archived forms can be activated again only if the user has a free form slot
  * Access direct links to a person respond that form
  * Access embedable script
* Not logged users will be able to
  * Log in
  * Create account
  * Respond a form
* Embed the form in other websites
* Forms will be customizable at font and color levels.
  * You will be able to choose one type of font (serif, sans, mono)
  * You will be able to customize colors

## Limitations of the first MVP

- Users will be limited to have 3 active forms

## Tech stack

- Next.js as the framework
- TypeScript as the programming language
- Xstate as the state management library
- NextAuth for authentication
- React Query as server state management library
- Chakra UI for view components
- MongoDB Atlas as persistance layer (free tier)
- yarn as dependencies manager and scripts runner
- jest as test runner
- testing-library as unit-testing framework
- Cypress (or Puppeteer) as end-to-end testing framework
- Vercel as hosting platform

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
  * Create homog environment
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
  * Server rendered to easily embed into another pages
* Create analytics page
* Go live
  * Create production environment
  * MongoDB cluster provision
    * Create indexes and search indexes
  * Deploy to production
