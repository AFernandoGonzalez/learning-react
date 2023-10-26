import { useState } from 'react'
import { products as initialProducts } from '../../mock/products.json'

import './shopping-cart.css'

export const ShoppingCart = () => {

    const [products, setProducts] = useState(initialProducts)

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
                                    <h3>{product.title}</h3>
                                    {/* <span>{product.description}</span> */}
                                    <span>${product.price}</span>
                                </div>
                                <button>Add to Cart</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}