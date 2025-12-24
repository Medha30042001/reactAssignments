import { useCallback, useMemo, useState } from "react";
import ProductList from "./ProductList";

const Home = () => {

    const products = [
        { id: 1, name: "Phone", price: 500 },
        { id: 2, name: "Laptop", price: 1500 },
        { id: 3, name: "Headphones", price: 200 },
        { id: 4, name: "Keyboard", price: 120 },
        { id: 5, name: "Mouse", price: 80 },
        { id: 6, name: "Phone", price: 500 },
        { id: 7, name: "Laptop", price: 1500 },
        { id: 8, name: "Headphones", price: 200 },
        { id: 9, name: "Keyboard", price: 120 },
        { id: 10, name: "Mouse", price: 80 },
        { id: 11, name: "Phone", price: 500 },
        { id: 12, name: "Laptop", price: 1500 },
        { id: 13, name: "Headphones", price: 200 },
        { id: 14, name: "Keyboard", price: 120 },
        { id: 15, name: "Mouse", price: 80 },
        { id: 16, name: "Phone", price: 500 },
        { id: 17, name: "Laptop", price: 1500 },
        { id: 18, name: "Headphones", price: 200 },
        { id: 19, name: "Keyboard", price: 120 },
        { id: 20, name: "Mouse", price: 80 },
        { id: 21, name: "Phone", price: 500 },
        { id: 22, name: "Laptop", price: 1500 },
        { id: 23, name: "Headphones", price: 200 },
        { id: 24, name: "Keyboard", price: 120 },
        { id: 25, name: "Mouse", price: 80 },
        
    ]
    
    const [count, setCount] = useState(0);
    
    const handleCount = () => {
        setCount(prev => prev + 1);
    }

    const totalPrice = useMemo(() => {
        return products.reduce((sum, product) => (sum + product.price), 0);
    }, [products]);

    const handleProductSelect = useCallback((product) =>{
        console.log("Selected product : ", product)
    })

  return (
    <>
        <h3>Total Price : {totalPrice}</h3>
        
        <br /><br />
        <button onClick={handleCount}>Increase Count</button>
        <h3>{count}</h3>
        <ProductList allProducts = {products}
        onProductSelect={handleProductSelect}/>
    </>
  )
}

export default Home