describe('first Test suite',function(){
    it('first test',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        
        cy.get('.product:visible').should('have.length',4)
        //by parent child chain
        cy.get('.products').find('.product').should('have.length',4)
        //To click add to cart for second product
        console.log('Asynchronous')
        //handling console.log with promise then to execute synchronous
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click().then(function(){
            console.log('synchronous') 
        })
        // click add to cart by checking product name using Each command
        cy.get('.products').find('.product').each(($el,index,$list)=>{
            const productName=$el.find('.product-name').text();
            if(productName.includes('Capsicum')){
                
              cy.wrap($el).find('button').click()
            }
            
        })
        cy.get('.brand.greenLogo').then(function(ele){
            const logoName=ele.text()
        cy.log(logoName)
        })
        // to verify logo text
        cy.get('.brand.greenLogo').should('have.text','GREENKART')
        cy.get('img[alt="Cart"]').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        

    })
})