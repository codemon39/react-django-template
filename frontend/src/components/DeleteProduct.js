import React, {useState} from "react";

import Button from "@material-ui/core/Button";
import {useProduct} from "../providers/ProductProvider";
import {deleteProduct} from "../api/product";


const DeleteProduct = ({ id }) => {
    const { products, setProducts, setError } = useProduct();

    const onClick = (e) => {
        e.preventDefault();

        deleteProduct(id)
        .then((response) => {
            setProducts([...products.filter(product => product.id !== id)])
        })
        .catch((error) => {
            console.log(`Error deleting product with id: ${id}`, error);
            setError(error)
        })
    }

    return (
        <Button size="medium" onClick={onClick}>Delete</Button>
    )
}

export default DeleteProduct;