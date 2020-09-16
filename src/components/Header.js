import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../utils/StateProvider";
import { auth } from "../utils/Firebase";

function Header() {
	const [{ cart, user }, dispatch] = useStateValue();

	const handleAuth = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<div className='header'>
			<Link to='/'>
				<img
					className='header__logo'
					alt='amazon logo'
					src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
				/>
			</Link>

			<div className='header__search'>
				<input className='header__searchInput' type='text' />
				<SearchIcon className='header__searchIcon' />
			</div>

			<div className='header__nav'>
				<Link to={!user && "/login"}>
					<div onClick={handleAuth} className='header__options'>
						<span className='header__optionLineOne'>Hello Guest</span>
						<span className='header__optionLineTwo'>
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>
				<div className='header__options'>
					<span className='header__optionLineOne'>Returns </span>
					<span className='header__optionLineTwo'>& Orders</span>
				</div>
				<div className='header__options'>
					<span className='header__optionLineOne'>Your</span>
					<span className='header__optionLineTwo'>Prime</span>
				</div>

				<Link to='/checkout'>
					<div className='header__optionCart'>
						<ShoppingBasketIcon />
						<span className='header__optionLineTwo header__cartCount'>
							{cart?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
