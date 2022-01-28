import React from 'react';
import ProductProvider from "./providers/ProductProvider";
import ProductList from "./pages/ProductList";

const App = () => {
    return (
        <ProductProvider>
            <ProductList />
        </ProductProvider>
    )
}

export default App;
