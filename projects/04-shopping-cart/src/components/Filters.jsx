import { useState } from "react"
import { useFilters } from "../hooks/useFilters"


export const Filters = () => {
    const {filters, setFilters} = useFilters()
    
    // const [minPrice, setMinPrice] = useState(0)
    const handleChangeMinPrice = (e) => {
        setFilters( prevState => ({
            ...prevState,
            minPrice : e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <section>
            <div>
                <label htmlFor="price">Price</label>
                <input
                    type="range"
                    id="price"
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                />
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label>Categories </label>
                <select id="category" onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>
        </section>
    )
}