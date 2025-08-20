
    describe('ReadSuite', () => {

        it('ReadTest', () => {

            cy.task("readExcelData",{filepath: "cypress/fixtures/data.xlsx", sheetName: "Sheet1"}).then((users) =>
            {
                users.forEach((element) => 
                {
                    console.log(element.user)
                    console.log(element.password)
                })
            })
            
        });
        
    });
