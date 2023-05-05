import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { singleProduct } from "../../features/slices/ProductSlice";

const ProductItem = ({ id, name, img, price, color, size, product }) => {
  const { type } = useParams();
  const dispatch = useDispatch();
  // const [pathFill, setpathFill] = useState("white");

  // const products = useSelector((state) => state.wishCart.products);
  // const wishCart = useSelector((state) => state.wishCart.wishCart);

  //console.log(wishCart,"wishcart");
  // const wishQuantity = useSelector((state) => state.wishCart.wishQuantity);

  // const onWishListHandleRemove = (e, id) => {
  //   e.preventDefault();
  //  // setFlag(false);
  //   dispatch(removeFromWishlist(product.id));
  // };

  // const onWishListHandle = (e, id, product) => {
  //   e.preventDefault();

  //   //console.log(product.id,"productId")

  //   let dataList = [...products];
  //   dataList.map((item, i) => {
  //     if (item.id === product.id) {
  //       dataList = { ...item, isWishlisted: true, wishQuantity: 1 };
  //       setFlag(true);
  //       dispatch(addToWishlist(dataList));

  //      // e.target.textContent = 'wishlisted'
  //     }
  //   });

  // if(e.target.id === "wish"+product.id ){
  //   if(pathFill === "white"){
  //   setpathFill("red");
  //   e.target.parentElement.classList.add("wish"+product.id)
  //   dispatch(addToWishlist({
  //     id:product.id,
  //     name:product.name,
  //     img:product.img,
  //     text:product.text,
  //     size:size,
  //     color:color,
  //     price:product.price,
  //     wishQuantity:1,
  //     totalPrice:product.price
  //   }))
  // }
  // else{
  //   setpathFill("white");
  //   dispatch(removeFromWishlist(product.id))
  // }
  //};
  // const buttonWishlist = (product) => {

  // if (flag === true ) {
  //   return (
  //     <Typography>
  //       <button onClick={(e) => onWishListHandleRemove(e, product.id)}>
  //         wishlisted
  //       </button>
  //     </Typography>
  //   );
  // } else {
  //   return (
  //     <Typography>
  //       <button
  //         id={"wish" + product.id}
  //         onClick={(e) => onWishListHandle(e, id, product, setFlag)}
  //       >
  //         Add to wishlist
  //       </button>
  //     </Typography>
  //   );
  // }
  // };
  return (
    <Link to={`/filteredProducts/${type}/` + id} className={product.type}>
      <Card className=" m-2 gap-4" onClick={() => dispatch(singleProduct(id))}>
        <CardHeader className="relative" floated={false}>
          <img src={img} alt="img-blur-shadow" className="h-60" />
        </CardHeader>
        <CardBody className="text-center p-4">
          <Typography variant="h5" className="mb-2">
            {name}
          </Typography>

          <Typography className="mb-2">
            Size:
            {size ? size.join(",") : "NA"}
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="flex gap-1 text-center w-24  m-auto"
          >
            {color?.map((color, index) => {
              return (
                <i
                  key={index}
                  className="fas fa-map-marker-alt fa-sm mt-[3px] rounded-full p-2 mr-4"
                  style={{ backgroundColor: color }}
                />
              );
            })}
          </Typography>
        </CardBody>
        <CardFooter
          divider
          className="flex items-center justify-between gap-3 py-3"
        >
          {/* { 
              wishCart.map((item, i) => { 
              if(product.id === item.id && item.isWishlisted === true){
                
              return  <Typography  >
              <button  className="text-red-700" onClick={(e) => onWishListHandleRemove(e, product.id)}>
                wishlisted
              </button> 
            </Typography> 
            }  
            
           })  
           
             
            }  */}

          {/* {   flag === false  &&
            <Typography>
          <button
            id={"wish" + product.id}
            onClick={(e) => onWishListHandle(e, id, product, setFlag)}
         >
           Add to Wishlist
          </button>
        </Typography>
          }
  */}

          {/* <svg 
              xmlns="http://www.w3.org/2000/svg"
              fill={pathFill}
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="w-6 h-6"  
            >
              <path id={"wish"+product.id}
              onClick={(e)=>onWishListHandle(e,id,product)}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg> */}
          {/* </Typography> */}
          <Typography variant="small">
            <span className="font-bold">${price}</span>
          </Typography>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductItem;
