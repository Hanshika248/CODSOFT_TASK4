
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="w-[500px]">

      <div className="flex w-[500px] mt-6 items-center gap-3">

        <div>
          <img src={item.image} />
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold mt-5">{item.title}</h1>
          <h1 className="mt-8">{item.description}</h1>
          <div className="flex flex-row justify-between mt-7">
            <p className="text-green-800 font-bold">${item.price}</p>
            <div className="cursor-pointer"
              onClick={removeFromCart}>
              <AiFillDelete />
            </div>
          </div>

        </div>
        <div className="border-black w-8">
          <hr />
        </div>


      </div>

    </div>
  );
};

export default CartItem;
