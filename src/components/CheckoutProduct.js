import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../utils/StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
	const [{ cart }, dispatch] = useStateValue();

	const removeFromCart = () => {
		dispatch({
			type: "REMOVE_FROM_CART",
			id: id,
		});
	};

	return (
		<div className='checkoutProduct'>
			<img
				className='checkoutProduct__image'
				src={image}
				alt='amazon product'
			/>

			<div className='checkoutProduct__info'>
				<p className='checkoutProduct__title'>{title}</p>
				<p className='checkoutProduct__price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='checkoutProduct__rating'>
					{Array(rating)
						.fill()
						.map((index) => (
							<p>⭐</p>
						))}
				</div>
				<button onClick={removeFromCart}>Remove from cart</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
