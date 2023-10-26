import { useState } from 'react'
import { products as initialProducts } from './mock/products.json'

import './shopping-cart.css'

export const ShoppingCart = () => {

    const [products, setProducts] = useState(initialProducts)


    const toggleBtn = () => {
        console.log('hi');
    }

    return (
        <section className='shopping-cart-section'>
            <div className='shopping-container'>
                <ul>
                    {products.map((product) => {
                        return (
                            <li
                                className='product-card'
                                key={product.id}>
                                <img
                                    className='productImage'
                                    src={product.image}
                                    alt={product.title}
                                />
                                <div>
                                    <h3
                                        style={{ fontSize: "12px" }}
                                    >{product.title}</h3>
                                   
                                    <span>${product.price}</span>
                                </div>
                                <button
                                    style={{
                                        color: "white"
                                    }}
                                >Add to Cart</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div
                onClick={toggleBtn}
            >
                Cart
            </div>
            <aside className='hidden'>
                <p>Cart</p>
            </aside>
        </section>
    )
}