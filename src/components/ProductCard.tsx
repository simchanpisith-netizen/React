import { Card , CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

interface ProductCardProps {
    productName: string;
    productPrice: number;
    qty: number;
    imageUrl: string;
}

const ProductCard = ({ productName, productPrice, qty, imageUrl }: ProductCardProps) => {
      return (
    <Card className="w-[300px] rounded-2xl shadow-md ">
      <CardHeader>
        <img 
        src={imageUrl}
        alt="Book Cover"
        className=""
      />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-xl font-semibold">{productName}</CardTitle>
        <CardDescription>
          an electronic device that takes raw data as input and produces useful results as output.
        </CardDescription>
        <CardTitle className='mt-4 p-1.5 text-3xl font-semibold '>${productPrice}</CardTitle>
        
        
        
      </CardContent>
      <CardFooter className="flex gap-3">
        <Button className="flex-1">Add to Cart</Button>
        <Button variant="outline" className="flex-1">
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}


export default ProductCard