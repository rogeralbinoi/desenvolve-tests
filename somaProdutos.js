// Teremos uma lista de produtos que estão dentro de um carrinho
// Alguns desses produtos são brindes, e não entrará para a contagem
function totalProducts (products) {
    let total = 0
    products.forEach((product) => {
        if (!product.gift) {
            total = total + product.price
        }
    })
    return total
}
module.exports = totalProducts