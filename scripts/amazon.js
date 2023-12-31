// Data Structure for list of products
// const products=[{
//     image:'images/products/athletic-cotton-socks-6-pairs.jpg',
//     name:'Black and Gray Athletic Cotton Socks - 6 Pairs',
//     rating:{
//         stars:4.5,
//         count:87
//     },
//     priceCents:1090
// },{
//     image:'images/products/intermediate-composite-basketball.jpg',
//     name:'Intermediate Size Basketball',
//     rating:{
//         stars:4,
//         count:127
//     },
//     priceCents:2095
// },{
//     image:'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//     name:'Adults Plain Cotton T-Shirt - 2 Pack',
//     rating:{
//         stars:4.5,
//         count:56
//     },
//     priceCents:799
// },{
//     image:'images/products/knit-athletic-sneakers-gray.jpg',
//     name:'Waterproof Knit Athletic Sneakers - Gray',
//     rating:{
//         stars:4,
//         count:89
//     },
//     priceCents:3390
// },{
//     image:'images/products/cotton-bath-towels-teal.webp',
//     name:'100% Cotton Bath Towels - 2 Pack, Light Teal',
//     rating:{
//         stars:4.5,
//         count:93
//     },
//     priceCents:2110
// },{
//     image:'images/products/men-navigator-sunglasses-brown.jpg',
//     name:'Men\'s Navigator Sunglasses Pilot',
//     rating:{
//         stars:3.5,
//         count:42
//     },
//     priceCents:1690
// },{
//     image:'images/products/knit-athletic-sneakers-pink.webp',
//     name:'Waterproof Knit Athletic Sneakers - Pink',
//     rating:{
//         stars:4,
//         count:89
//     },
//     priceCents:3390
// },{
//     image:'images/products/men-cozy-fleece-zip-up-hoodie-red.jpg',
//     name:'Men\'s Full-Zip Hooded Fleece Sweater',
//     rating:{
//         stars:4.5,
//         count:3157
//     },
//     priceCents:2400
// }];

let productHTML='';
products.forEach((product)=>{
        productHTML +=`
        <div class="product-container">
        <div class="product-image-container">
        <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
       ${product.name}
        </div>

        <div class="product-rating-container">
        <img class="product-rating-stars"
            src="images/ratings/rating-${product.rating.stars*10}.png">
        <div class="product-rating-count link-primary">
            ${product.rating.count}
        </div>
        </div>

        <div class="product-price">
        $${product.priceCents/100}
        </div>

        <div class="product-quantity-container">
        <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
        </div>

        <button class="add-to-cart-button button-primary">
        Add to Cart
        </button>
        </div> 
    `;
})
 // now to insert html into  webpage we use DOM

 document.querySelector('.js-product-grid').innerHTML=productHTML;
