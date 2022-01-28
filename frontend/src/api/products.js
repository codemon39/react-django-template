import client from "./client";

export function getProducts(){
    return client.get('/products/');
}