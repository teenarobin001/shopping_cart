import { Button } from "@material-tailwind/react";
import React from "react";
import { filterProducts } from "../../features/slices/ProductSlice";
import { useDispatch } from "react-redux";
import {  NavLink } from "react-router-dom";
import "../Main/main.css";

const NavigateButtons = () => {
  const navButtons = [
    "men's",
    "women's",
    "jewellery",
    "perfume",
    "electronics",
  ];

  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex items-center justify-center py-8">
        {navButtons.map((button, index) => {
          return (
            <div key={index} className="mr-4">
              <NavLink
                to={"/filteredProducts/" + button}
                style={({ isActive }) => ({
                  color: isActive ? "#fff !important" : "gray",
                })}
              >
                <Button
                  color="gray"
                  variant="outlined"
                  className="navbar-button"
                  onClick={() => dispatch(filterProducts(button))}
                >
                  {button}
                </Button>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavigateButtons;
