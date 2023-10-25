
export const Products = ({ products }) => {


    return (
        <section  className="products">
            <ul >
                {
                    products.map((product) => {
                        
                        return(
                            <li key={product.id}>
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                />
                                <h3>{product.title}</h3>
                                <span>${product.price}</span>
                                <button style={{ color: 'white'}}>Add to Cart</button>
                            </li>
                        )

                    })
                }
            </ul>
        </section>
    )
}