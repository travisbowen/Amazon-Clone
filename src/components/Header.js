import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";

function Header() {
	return (
		<div className='header'>
			<img
				className='header__logo'
				alt='amazon logo'
				src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
			/>

			<div className='header__search'>
				<input className='header__searchInput' type='text' />
				<SearchIcon className='header__searchIcon' />
			</div>

			<div className='header__nav'>
				<div className='header__options'>
					<span className='header__optionLineOne'>Hello Guest</span>
				</div>
				<div className='header__options'>
					<span className='header__optionLineOne'>Return & Orders</span>
				</div>
				<div className='header__options'>
					<span className='header__optionLineOne'>Your Prime</span>
				</div>
			</div>
		</div>
	);
}

export default Header;
