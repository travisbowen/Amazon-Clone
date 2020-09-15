import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../utils/Firebase";

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = (event) => {
		event.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) {
					history.push("/");
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const register = (event) => {
		event.preventDefault();

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) {
					history.push("/");
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<div className='login'>
			<Link to='/'>
				<img
					className='login__logo'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
					alt='amazon logo'
				/>
			</Link>

			<div className='login__container'>
				<h1>Sign-In</h1>
				<form>
					<h5>E-mail</h5>
					<input
						type='text'
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>

					<h5>Password</h5>
					<input
						type='password'
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>

					<button
						className='login__signInButton'
						type='submit'
						onClick={signIn}>
						Sign In
					</button>

					<p>
						By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
						Sale. Please see or Privacy Notice, our Cookies Notice and our
						Interest-Based ads Notice.
					</p>

					<button className='login__registerButton' onClick={register}>
						Create your Amazon Account
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
