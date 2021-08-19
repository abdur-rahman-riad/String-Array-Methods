const products = [
    'dcl 4GB 1TB Core i3 Laptop',
    'laptop acer 4GB 512GB core i5 laptoP',
    'redmi-6 32GB 16PX black Phone',
    'htc-728 8GB dual sim phone',
    'laptop mackbook-13 512SSD 8GB lapTop',
    'black phOne and silver laptop'
];

const searching = 'laptop';
// Using If Indexof
/* const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        output.push(product.toLowerCase());
    }
}
console.log(output); */

// Using If Includes
/* for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        console.log(product.toLowerCase());
    }
} */

// Using Startwith
/* for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        console.log(product.toLowerCase());
    }
} */

// Using Endwith
for (const product of products) {
    if (product.toLowerCase().endsWith(searching.toLowerCase())) {
        console.log(product.toLowerCase());
    }
}