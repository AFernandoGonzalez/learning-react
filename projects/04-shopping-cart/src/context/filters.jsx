import { createContext, useState } from "react";

// what we have to consume
export const FiltersContext = createContext()


// what we need to get the data from
export const FilteredProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        category: "all",
        minPrice: 0
    })
    return (
        <FiltersContext.Provider
            value={{
                filters,
                setFilters
            }}
        >
            {children}
        </FiltersContext.Provider>
    )
}