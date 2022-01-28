import client from "./client";

export function deleteProduct(id){
    return client.delete(`/products/${id}`);
}