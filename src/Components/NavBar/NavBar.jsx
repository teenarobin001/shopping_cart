import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { searchProductsFilter } from "../../features/slices/ProductSlice";
import { logout } from "../../features/slices/UserSlice";
import { Tooltip } from "@material-tailwind/react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  // const [openWish,setOpenWish] = useState(false);

  const user = useSelector((state) => state.auth.user);
  const { name } = user;
  console.log(user, "user");

  const handleModal = () => {
    setOpen(true);
  };

  // const handleModalWish = () => {
  //   setOpenWish(true)
  // }
  const onSearchHandle = (e) => {
    setValue(e.target.value);
    if (e.key === "Enter") {
      dispatch(searchProductsFilter(value));
      navigate(`/searchFilter/${value}`);
    }
  };

  const clearSearch = () => {
    setValue("");
  };
  return (
    <div className=" ">
      <div className="flex border  p-3 items-center content-center">
        <div className="flex-auto w-1/4">
          <Link to={"/"} onClick={clearSearch}>
            Store
          </Link>
        </div>
        <div className="flex-auto w-2/4 ...">
          <div className="text-center">
            <div className="relative">
              <input
                className="w-full border p-2 rounded"
                placeholder="Enter your Product to search "
                value={value}
                onChange={onSearchHandle}
                onKeyDown={onSearchHandle}
              />
              <Link to={"/searchFilter/" + value}>
                <div
                  className="absolute right-5 bottom-2"
                  onClick={() => dispatch(searchProductsFilter(value))}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-auto w-1/4 ">
          <div className="justify-end flex">
            <Tooltip content="Log Out" placement="bottom">
              <div onClick={() => dispatch(logout(navigate))}>
                Welcome {name.substring(0, name.indexOf("@"))}
              </div>
            </Tooltip>

            {/* <div className="pr-2 cursor-pointer relative	">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 relative"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              
            </div>

            <div className="pr-2 cursor-pointer relative	" onClick={handleModalWish}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <span className="rounded-full absolute top-4 right-2 bg-gray-300 px-2 font-inter text-sm mr-1">
                {wishQuantity}
              </span>

              {openWish && 
<WishList openWishModal={openWish}   setOpenWish={setOpenWish}/>

}
            </div> */}

            <div className="pr-2 cursor-pointer relative" onClick={handleModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>

              <span className="rounded-full absolute top-4 right-1 bg-gray-300 px-2 font-inter text-sm mr-1">
                {totalQuantity}
              </span>

              {open && <Cart openModal={open} setOpen={setOpen} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
