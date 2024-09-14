
const ReviewDetails = ({ params }: {
  params: {
    productId: string,
    reviewId: string
  }
}) => {
  return (
    <h1>Review by {params.reviewId} of {params.productId}</h1>
  )
}

export default ReviewDetails