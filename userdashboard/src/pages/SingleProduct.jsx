import Typography from '@mui/material/Typography'
import { useParams } from 'react-router-dom'

const SingleProduct= () => {
  const {prodid} = useParams()

  return (
    <Typography variant="h3" color="initial">single Product Page For Product {prodid}</Typography>
  )
}

export default SingleProduct
