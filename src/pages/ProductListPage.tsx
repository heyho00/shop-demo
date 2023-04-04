import Products from '../components/product-list/Products'
import useFetchProducts from '../hooks/useFetchProducts'

export default function ProductListpage() {
  const {products} = useFetchProducts()

  return (
   <div>
    <h2>Products</h2>
    <Products products={products} />
   </div>
  );
}
