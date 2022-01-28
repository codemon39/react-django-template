import React, {createContext, useEffect, useState} from 'react';

import {getProducts} from "../api/products";

const ProductContext = createContext(undefined);

export function useProduct() {
    const context = React.useContext(ProductContext);
    if (context === undefined) {
        throw new Error('useProduct must be used within a ProductProvider');
    }
    return context;
}

export default function ProductProvider(props) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            await getProducts()
                .then((response) => {
                    setLoading(false);
                    setProducts(response.data)
                })
                .catch((error) => {
                    setLoading(false);
                    console.log("Error fetching data: ", error);
                    setError(error);
                })
        }

        fetchProducts();
    }, []);

    const context = {
        products,
        setProducts,
        loading,
        setLoading,
        error,
        setError,
    };

    return (
        <ProductContext.Provider value={context}>
            {props.children}
        </ProductContext.Provider>
    );
}