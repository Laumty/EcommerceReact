import { BsFillCartCheckFill } from "react-icons/bs";
import "./CartWidget.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {

  const {cart} = useContext ( CartContext )

  return (
    <Link to="/cart">
      <div className="container-cart">
        <BsFillCartCheckFill
          style={{
            fontSize: "2rem",
            color: "#e1d4c7",
          }}
        />
        <div className="bubble-counter">
          <span>{cart.length}</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;