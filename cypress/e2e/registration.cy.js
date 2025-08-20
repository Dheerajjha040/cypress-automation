/// <reference types="cypress" />
import { registrationPage } from '../pages/registrationPage.js';
import {user} from '../support/fakerdataUtil.js'

let rp = new registrationPage()

describe('RegistrationSuite', () => {

    before(() => {
        cy.visit('/index.htm')
    });

    it('Registration testcase', () => {

        cy.contains('Register', {timeout:3000}).should('be.visible').click()
        rp.enter_firstname(user.firstname)
        rp.enter_lastname(user.lastname)
        rp.enter_address(user.address)
        rp.enter_city(user.city)
        rp.enter_ssn(user.ssn)
        rp.enter_phone(user.phone)
        rp.enter_state(user.state)
        rp.enter_zipcode(user.zipcode)
        rp.enter_username(user.username)
        rp.enter_password(user.password)
        rp.enter_repeatpassword(user.password)
        rp.click_register_button() 

        cy.writeFile('cypress/fixtures/storecredentials.json',{
            username: user.username,
            password: user.password
        })
        
    });

});