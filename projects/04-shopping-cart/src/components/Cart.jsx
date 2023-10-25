import { useId } from "react"
import './Cart.css'

export const Cart = () => {

    const cartCheckboxId = useId()
    return(
        <section className="cart-section">
            <label className="cart-button" htmlFor={cartCheckboxId}>Cart</label>
            <input id={cartCheckboxId} type="checkbox" hidden/>

            <aside className="cart">
                <ul>
                    <li>
                        <img 
                        className=""
                            src="https://i.dummyjson.com/data/products/30/thumbnail.jpg"
                            alt="keys"
                        />
                        <div>
                            Iphone
                        </div>
                        <footer>
                            <small>
                                QTY: 1
                            </small>
                            <button>+</button>
                        </footer>
                    </li>
                </ul>

                <button style={{ color: 'white'}}>
                    clear cart
                </button>
            </aside>
        </section>
    )
}