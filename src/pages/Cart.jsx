import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {

  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div >
      {
        cart.length > 0 ?
          (<div className=" flex justify-between max-w-4xl mx-auto ">


            <div>
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>

            <div className="flex flex-col mt-12">

              <div>
                <div className="font-bold">Your Cart</div>
                <div className="text-green-900 text-5xl font-bold">Summary</div>
                <p className="font-bold mt-9">
                  <span>Total Items: {cart.length}</span>
                </p>
              </div>

              <div className="mt-72">
                <p className="font-bold text-xl">Total Amount: ${totalAmount}</p>
                <button class=" mt-6 w-[300px] cursor-pointer transition-all bg-green-500 text-white px-6 py-2 rounded-lg
border-darkgreen-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                  Checkout Now
                </button>
              </div>

            </div>


          </div>) :
          (<div className="flex flex-col justify-center items-center mt-64">
            <h1 className=" font-bold text-2xl">Cart Empty</h1>
            <Link to={"/"}>
              <button class="mt-4 cursor-pointer inline-flex items-center rounded-full px-9 py-3 text-xl font-mono font-semibold text-green-600 hover:text-white border-2 border-green-600
hover:bg-grren-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-green-600 duration-300  focus:bg-transparent">
                Shop Now
              </button>
            </Link>
          </div>)
      }
    </div>
  );
};

export default Cart;


