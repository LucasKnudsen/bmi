describe('User can check their Bmi', () => {
	it('user can enter weight and height', () => {
		cy.visit('http://localhost:4000')
		cy.contains('BMI Calculator')
	})
})