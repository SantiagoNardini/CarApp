import { FaCartShopping } from "react-icons/fa6";
import "./CartWidget.scss";

const CartWidget = () => {
    return (
        <div className="cartWidget">
            <FaCartShopping className="cart-icon" />
            <span>0</span>
        </div>
    );
}


export default CartWidget