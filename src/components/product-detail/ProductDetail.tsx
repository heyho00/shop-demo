import useProductDetailStore from "../../hooks/useProductDetailStore"

export default function ProductDetail(){
    const [{product}] = useProductDetailStore()
    
    return (
        <p>{product.name}</p>
    )
}