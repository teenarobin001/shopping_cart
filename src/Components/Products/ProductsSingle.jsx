import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Button,
  } from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/slices/CartSlice';

const ProductsSingle = ({product}) => {

    const dispatch = useDispatch(); 
  return (
    <Card className="w-96 text-center">
      <CardHeader floated={false} className="h-60 m-auto">
        <img src={product.img} alt={product.name} />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {product.name}
        </Typography> 


        <div className="flex justify-between items-center pt-4">
        {product.size?( 
        <Typography color="red" className="font-medium" textGradient>
              Size :{" "}
              <span className="text-gray-400 text-base font-extralight">
                {product.size? product.size[0]:"NA"}
              </span>
            </Typography>): ""}
 
        <Typography color="gray" className="font-medium" textGradient>
              Price :{" "}
              <span className="text-red-400 bold text-base font-bold">
                ${ product.price}
              </span>
            </Typography> 


            {product.color?(
            <Typography color="gray" className="font-medium" textGradient>
              Color:{" "}
              <span
                className="px-2 rounded-full ml-2"
                style={{ backgroundColor: `${product.color? product.color[0] : "white"}` }}
              ></span>
</Typography>
            ): "" }
</div>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
      <Tooltip content="Add to Cart" placement="bottom">
            <Button onClick={()=>dispatch(addToCart({
                
                id:product.id,
                name:product.name,
                img:product.img,
                text:product.text, 
                price:product.price,
                size:product.size? product.size[0]:"NA",
                color:product.color? product.color[0]:"NA",
                quantity:1,
                totalPrice:product.price
            
            }))}
              
              size="lg"
              color="gray"
              variant="outlined"
              ripple={true}
            >
              Add to Cart
            </Button>
          </Tooltip>
      </CardFooter>
    </Card>
  )
}

export default ProductsSingle
