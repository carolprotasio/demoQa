/// <reference types="cypress" />

describe('Add Book Functionality', () => {
    let user;
    let token;
    let userId;
    const isbnToAdd = "9781449325862";

    beforeEach(() => {
        cy.getUserAndLogin().then(userData => {
            user = userData;
            token = userData.token;
            userId = userData.id;
        });
        cy.deleteUserBooks()
    });

    it('Successfully', () => {
        expect(user).to.have.property('userName');
        expect(user).to.have.property('password');
        expect(user).to.have.property('id');
        expect(token).to.exist;
        expect(userId).to.exist;



        cy.request({
            method: 'POST',
            url: 'https://demoqa.com/BookStore/v1/Books',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: {
                userId: userId,
                collectionOfIsbns: [
                    {
                      "isbn": "9781449325862"
                    }
                ]
            }
        }).then(response => {
            expect(response.status).to.equal(201);
        });
    });
});
