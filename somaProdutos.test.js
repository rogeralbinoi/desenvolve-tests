const somaProdutos = require('./somaProdutos')

const productListWithGift = [
    {
        name: 'Banheirinha Transparente Nativa SPA',
        price: 20.90
    },
    {
        name: 'Creme para mãos',
        price: 40.00
    },
    {
        name: 'Brincos brilhantes', 
        price: 120.00,
        gift: true
    },
    {
        name: 'Máscara de Cílios', 
        price: 59.50
    }
]

const productListWithoutGift = [
    {
        name: 'Banheirinha Transparente Nativa SPA',
        price: 20.90
    },
    {
        name: 'Creme para mãos',
        price: 40.00
    },
    {
        name: 'Máscara de Cílios', 
        price: 59.50
    }
]

describe('somaProdutos', () => {
    it('deve retornar o total da soma dos produtos', () => {
        const resultado = somaProdutos(productListWithoutGift)
        expect(resultado).toBe(120.4)
    } )
    it('deve retornar o total da soma dos produtos sem somar o gift', () => {
        const resultado = somaProdutos(productListWithGift)
        expect(resultado).toBe(120.4)
    } )
} )