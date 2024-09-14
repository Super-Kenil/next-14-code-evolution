
const ProductDetailsPage = ({ params }: { params: { productId: string } }) => {
  return (
    <h1> Details about {params.productId} </h1>
  )
}

export default ProductDetailsPage