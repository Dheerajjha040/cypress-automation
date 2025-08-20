import {faker} from '@faker-js/faker'

export const user = {

    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    ssn: faker.string.numeric(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipcode: faker.location.zipCode(),
    phone: faker.phone.number('##########'),
    username: faker.internet.username(),
    password: faker.internet.password(10)


}

