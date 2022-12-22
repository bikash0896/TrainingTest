let blogtext:string;
describe('Test',()=>{
    
    it('Test Case 1',()=>{
        cy.visit('https://www.cypress.io/blog/')
        cy.wait(2000)
        cy.get("h1[class='blogtitle_purus']").then(function(e){            
            blogtext=e.text()
            cy.log(blogtext)
        })
    })

    it('Test Case 2',()=>{          
        cy.log(blogtext)
    })
})