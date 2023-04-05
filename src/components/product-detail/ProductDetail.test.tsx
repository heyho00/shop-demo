import {screen} from '@testing-library/react'
import {render} from '../../test-helpers'

import fixtures from '../../../fixtures'
import { container } from 'tsyringe'
import ProductDetailStore from '../../stores/ProductDetailStore'
import ProductDetail from './ProductDetail'

const [product] = fixtures.products

const {options} = product

jest.mock('../../hooks/useProductDetailStore', () => () => [
    {product},
])

test('ProductDetail',async ()=>{
    const store = container.resolve(ProductDetailStore)
    
    await store.fetchProduct({productId : product.id})
    render(<ProductDetail />)

    screen.getByText(product.name)
})