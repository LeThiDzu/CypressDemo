import { fakerVI as faker } from '@faker-js/faker';

export default class Helpers {
    static caseInsensitive(str) {
        // escape special characters
        this.input = str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        return new RegExp(`${this.input}`, 'i');
    }
    
    static generateRandomValue(valueType) {
        if (valueType == "Job") {
            return faker.person.jobTitle();
        }
        else if (valueType == "First name") {
            return faker.person.firstName();
        }
        else if (valueType == "Last name") {
            return faker.person.lastName();
        }
        else if (valueType == "Phone") {
            return faker.phone.number()
        }
        else if (valueType == "Country") {
            return faker.location.country()
        }
        else if (valueType == "City") {
            return faker.location.city()
        }
        else if (valueType == "Address") {
            return faker.location.streetAddress()
        }
        else if (valueType == "Zipcode") {
            return faker.location.zipCode()
        }
    }

    static verifyElementExist(element) {
        cy.get('body').then(($body) => {
            if ($body.find(element).length > 0) {
                return true
            }
            else{
                return false
            }
        })
    }
}

