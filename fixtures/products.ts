import { ProductDetail } from "../src/types";

const products: ProductDetail[] = [
    {
       id: 'product-01',
       category: {
        id: 'category-01',
        name: 'Top'
       },
       images: [
        {url:'http://example.com/01.jpg'},
       ],
       name: 'Product #1',
       price: 128_000,
       options: [
        {
            id:'option-01',
            name: 'Color',
            items: [
                {id:'option-item-01', name: 'Black'},
                {id:'option-item-02', name: 'White'},
            ]
        }
       ],
       description: 'fsfds'
    }
]

export default products