import React from "react";
import "./Product.css";
import { useStateValue } from "../utils/StateProvider";

function Product({ id, title, price, rating, image }) {
	const [{ cart }, dispatch] = useStateValue();

	console.log("cart", cart);

	const addToCart = () => {
		// Dispatch the item into the data layer
		dispatch({
			type: "ADD_TO_CART",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};

	return (
		<div className='product'>
			<div className='product__info'>
				<p>{title}</p>
				<p className='product__price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='product__rating'>
					{Array(rating)
						.fill()
						.map((index) => (
							<p>⭐</p>
						))}
				</div>
			</div>
			<img className='product__image' src={image} alt='product' />
			<button className='product__button' onClick={addToCart}>
				Add to Cart
			</button>
		</div>
	);
}

export default Product;
