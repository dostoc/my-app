
/*
export async function obtenerProductos(){ // observar el await ....
    const response = await fetch('linklink de api') // es asincronica tiene demora
    const data = await response.json() // es una promesa tiene demora  convierte en json 
    return data;
}
*/

export async function obtenerProductos() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
}