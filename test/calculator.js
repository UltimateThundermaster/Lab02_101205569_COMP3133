const chai = require('chai')
const expect = chai.expect

const calculator = require('../calculator')

describe('calculator', () => {
	describe('add', () => {
		it('add(5, 2) expected result 7', () => {
			expect(calculator.add(5, 2)).to.equal(7)
		})
		it('add(5,2) expected result 8', () => {
			expect(calculator.add(5, 2)).to.equal(8)
		})
	})

    describe('sub', () => {
		it('sub(5, 2) expected result 3', () => {
			expect(calculator.sub(5, 2)).to.equal(3)
		})
		it('sub(5, 2) expected result 3', () => {
			expect(calculator.sub(5, 2)).to.equal(5)
		})
	})

    describe('mul', () => {
		it('mul(5, 2) expected result 10', () => {
			expect(calculator.mul(5, 2)).to.equal(10)
		})
		it('mul(5, 2) expected result 12', () => {
			expect(calculator.mul(5, 2)).to.equal(12)
		})
	})

	describe('div', () => {
		it('div(10, 2) expected result 5', () => {
			expect(calculator.div(10, 2)).to.equal(5)
		})
		it('div(10, 2) expected result 5', () => {
			expect(calculator.div(10, 2)).to.equal(2)
		})
	})

})