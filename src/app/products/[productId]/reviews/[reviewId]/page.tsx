import { notFound } from 'next/navigation'

const ReviewDetails = ({ params }: {
  params: {
    productId: string,
    reviewId: string
  }
}) => {

  if (parseInt(params.reviewId) > 1000) {
    notFound()
  }

  return (
    <h1>Review by {params.reviewId} of {params.productId}</h1>
  )
}

export default ReviewDetails