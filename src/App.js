import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./utils/Firebase";
import { useStateValue } from "./utils/StateProvider";

function App() {
	const [{}, dispatch] = useStateValue();

	// Only gets triggered once
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log("User is ", authUser);
			if (authUser) {
				// User logged in
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				// User logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
		<Router>
			<div className='app'>
				<Switch>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/checkout'>
						<Header />
						<Checkout />
					</Route>
					<Route path='/'>
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
