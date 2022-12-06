import React from 'react';
import './Header.css'
import {NavLink} from "react-router-dom";

const Header = () => {

	function navLinkStyles({isActive}) {
		return {
			fontWeight: isActive ? 'bolder' : '200'
		}
	}

	return (
		<header className={"header"}>
			<h1>HRnet</h1>
			<nav>
				<ul>
					<NavLink style={navLinkStyles} to={"/"} end>Home</NavLink>
					<NavLink style={navLinkStyles} to={"employee"}>Employees</NavLink>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
