

export function checkEleExist(ele) {
    return new Promise((resolve, reject) => {
        cy.get('body').find(ele).its('length').then(res => {
            if (res > 0) {
                cy.log("Element exist")
                resolve();
            } else {
                cy.log("Element not exist")
                reject();
            }
        });
    })
}

