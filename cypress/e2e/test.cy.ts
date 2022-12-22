describe('Test',()=>{
    
    it('Test Caes',()=>{
        cy.visit('https://www.cypress.io/blog/')
        cy.wait(2000)
        cy.get("h1[class='blogtitle_purus']").then(function(e){
            cy.log(e.text())
        })
    })

    it('Test Case',()=>{
        cy.log('g')
    })
})