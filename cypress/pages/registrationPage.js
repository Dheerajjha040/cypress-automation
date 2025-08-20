export class registrationPage {

    webLocators = {

        input_firstname_css: 'input[name="customer.firstName"]',
        input_lastname_css: 'input[name="customer.lastName"]',
        input_ssn_css: 'input[name="customer.ssn"]',
        input_address_css: 'input[name="customer.address.street"]',
        input_city_css: 'input[name="customer.address.city"]',
        input_zipcode_css: 'input[name="customer.address.zipCode"]',
        input_state_css: 'input[name="customer.address.state"]',
        input_phone_css: 'input[name="customer.phoneNumber"]',
        input_username_css: 'input[name="customer.username"]',
        input_password_css: 'input[name="customer.password"]',
        input_repeat_password_css: 'input[name="repeatedPassword"]',
        button_register_css: 'input[type="submit"]'

    }

    enter_firstname(fname)
    {
        cy.get(this.webLocators.input_firstname_css).should('be.visible').type(fname)
    }
    enter_lastname(lname)
    {
        cy.get(this.webLocators.input_lastname_css).should('be.visible').type(lname)
    }
    enter_ssn(ssn)
    {
        cy.get(this.webLocators.input_ssn_css).should('be.visible').type(ssn)
    }
    enter_address(address)
    {
        cy.get(this.webLocators.input_address_css).should('be.visible').type(address)
    }
    enter_city(city)
    {
        cy.get(this.webLocators.input_city_css).should('be.visible').type(city)
    }

    enter_state(state)
    {
        cy.get(this.webLocators.input_state_css).should('be.visible').type(state)
    }

    enter_zipcode(zipcode)
    {
        cy.get(this.webLocators.input_zipcode_css).should('be.visible').type(zipcode)
    }

    enter_phone(phone)
    {
        cy.get(this.webLocators.input_phone_css).should('be.visible').type(phone)
    }

    enter_username(username)
    {
        cy.get(this.webLocators.input_username_css).should('be.visible').type(username)
    }

    enter_password(password)
    {
        cy.get(this.webLocators.input_password_css).should('be.visible').type(password)
    }

    enter_repeatpassword(repeatpassword)
    {
        cy.get(this.webLocators.input_repeat_password_css).should('be.visible').type(repeatpassword)
    }

    click_register_button()
    {
        cy.get('#rightPanel').find(this.webLocators.button_register_css).should('be.visible').click({force:true})
    }


} 