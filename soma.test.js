const soma = require('./soma')

describe('soma', () => {
    it('soma deve retornar 4 quando a = 2 e b = 2', () => {
        const resultado = soma(2,2)
        expect(resultado).toBe(4)
    })
    it('soma deve retornar 5 quando a = 2 e b = 3', () => {
        const resultado = soma(2,3)
        expect(resultado).toBe(5)
    })
    it('soma deve retornar 11 quando a = 1 e b = 10', () => {
        const resultado = soma(1,10)
        expect(resultado).toBe(11)
    })
    it('soma deve retornar 15 quando a = 10 e b = 5', () => {
        const resultado = soma(10,5)
        expect(resultado).toBe(15)
    })
});