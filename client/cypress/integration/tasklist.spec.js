require('dotenv').config();


describe('example to-do app', () => {
    beforeEach(() => {
    
      cy.visit('http://localhost:3000/#/')
    })
    it('renders the page', ()=>{
        cy.contains('Login')
    })
    it('correct login and logout', ()=>{
        cy.get('[placeholder="Email"]').first().type('facundovaena1@gmail.com')
        cy.get('[placeholder="Password"]').last().type('789456123A#a')
        cy.contains('Enter').click()
        cy.wait(3000)
        cy.contains("Welcome")
        cy.contains('Logout').click()
        cy.contains('Login')
    })
    it('create new task', ()=>{
        cy.get('[placeholder="Email"]').first().type('facundovaena1@gmail.com')
        cy.get('[placeholder="Password"]').last().type('789456123A#a')
        cy.contains('Enter').click()
        cy.wait(3000)
        cy.contains("Welcome")
        cy.get('input')
        .type('test task')
        .type('{enter}')
        cy.wait(4000)
        cy.contains('test task')
        cy.contains('Logout').click()
        cy.contains('Login')
    })
    it('wrong login', ()=>{
        cy.get('[placeholder="Email"]').first().type('wrongemail@gmail.com')
        cy.get('[placeholder="Password"]').last().type('wrong password')
        cy.contains('Enter').click()
        cy.wait(2000)
        cy.contains('Incorrect Email or Password')
    })
    

})