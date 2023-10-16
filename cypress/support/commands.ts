// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
// declare namespace Cypress {
//   interface Chainable<Subject = any> {
//     customCommand(param: any): typeof customCommand;
//   }
// }
//
// function customCommand(param: any): void {
//   console.warn(param);
// }
//
// NOTE: You can use it like so:
// Cypress.Commands.add('customCommand', customCommand);
//
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Cypress.Commands.add('loginByGoogleApi',() => {
//   cy.log('Logging in to Google')
//   console.log('refresh token vallue ', Cypress.env('GOOGLE_REFRESH_TOKEN'))
//   cy.request({
//     method: 'POST',
//     url: 'https://www.googleapis.com/oauth2/v4/token',
//     body: {
//       "grant_type": "refresh_token",
//       "client_id": Cypress.env('GOOGLE_CLIENTID'),
//       "client_secret": Cypress.env('GOOGLE_CLIENT_SECRET'),
//       "refresh_token": Cypress.env('GOOGLE_REFRESH_TOKEN'),
//     },
//   }).then(({ body }) => {
//     const { access_token, id_token } = body
//     cy.request({
//       method: 'GET',
//       url: 'https://www.googleapis.com/userinfo/v2/me',
//       headers: { Authorization: `Bearer ${access_token}` },
//     }).then(({ body }) => {
//       cy.log(body)
//       const userItem = {
//         token: id_token,
//         user: {
//           googleId: body.sub,
//           email: body.email,
//           givenName: body.given_name,
//           familyName: body.family_name,
//           imageUrl: body.picture,
//         },
//       }
//       window.localStorage.setItem('googleCypress', JSON.stringify(userItem))
//       cy.visit('/')
//     })
//   })
// })
