describe('order test',function(){
    it('E2E', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('beet');
        cy.contains('ADD TO CART').click();
        cy.get('.cart-icon').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();
        cy.get('select').select('India');
        cy.get('.chkAgree').click();
        cy.contains('Proceed').click();
        
    })
})