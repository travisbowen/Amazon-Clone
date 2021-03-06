import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../utils/StateProvider";

function Checkout() {
	const [{ cart, user }, dispatch] = useStateValue();

	return (
		<div className='checkout'>
			<div className='checkout__left'>
				<img
					className='checkout__ad'
					src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
					alt='amazon ad'
				/>

				<div className='checkout__title'>
					<h3>Hello, {user?.email}</h3>
					<h2>Your Shopping Cart</h2>
					{cart.map((item) => (
						<CheckoutProduct
							id={item.id}
							image={item.image}
							title={item.title}
							price={item.price}
							rating={item.rating}
						/>
					))}
				</div>
			</div>
			<div className='checkout__right'>
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
