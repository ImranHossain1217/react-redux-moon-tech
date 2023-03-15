import React from "react";
import { BiListPlus, BiTrashAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../redux/actionTypes/actionTypes";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  return (
    <div className="shadow-lg rounded-3xl border relative  p-3 flex flex-col text-indigo-900">
    {pathname.includes('cart') && <div className="bg-indigo-500 grid place-items-center absolute h-8 rounded-full p-1 text-white top-2 right-2">
        <p>{product.quantity}</p>
    </div>}
      <div className="h-52 w-52 mx-auto">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {product.keyFeature.map((feature) => {
            return (
              <li key={feature} className="text-sm ">
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-2 mt-5">
        {pathname.includes("cart") && (
          <button
            onClick={() => dispatch({ type: REMOVE_FROM_CART, payload: product })}
            className="bg-red-500 flex justify-between items-center rounded-full py-1 px-2 flex-1 text-white text-bold"
          >
            REMOVE <BiTrashAlt />
          </button>
        )}
        {!pathname.includes("cart") && (
          <button
            onClick={() => dispatch({ type: ADD_TO_CART, payload: product })}
            className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
          >
            Add To Cart
          </button>
        )}
        {!pathname.includes("cart") && (
          <button
            title="Add to wishlist"
            className="bg-indigo-500  py-1 px-2 rounded-full"
          >
            <BiListPlus className="text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
