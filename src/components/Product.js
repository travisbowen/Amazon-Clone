import React from "react";
import "./Product.css";

function Product({ title, price, stars, image }) {
	return (
		<div className='product'>
			<div className='product__info'>
				<p>{title}</p>
				<p className='product__price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='product__rating'>
					<p>⭐</p>
					<p>⭐</p>
					<p>⭐</p>
					<p>⭐</p>
				</div>
				<img
					src='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
					alt='product'
				/>
				<button>Add to Basket</button>
			</div>
		</div>
	);
}

export default Product;
