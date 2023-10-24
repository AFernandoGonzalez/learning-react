
export const Products = ({ products }) => {

    console.log(products);

    return (
        <section>
            <ul >
                {
                    products.map((product) => {
                        
                        return(
                            <li key={product.id}>
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                />
                                <li>{product.title}</li>
                                <li>${product.price}</li>
                                <button>Add to Cart</button>
                            </li>
                        )

                    })
                }
            </ul>
        </section>
    )
}