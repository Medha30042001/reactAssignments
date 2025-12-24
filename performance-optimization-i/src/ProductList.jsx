
const ProductList = ({allProducts, onProductSelect}) => {
  return (
    <>
        {allProducts.map(product => (
            <div key={product.id}>
                {product.name} - ${product.price}
                <button onClick={() => onProductSelect(product)}
                >Select</button>
            </div>
        ))}
    </>
  )
}

export default ProductList