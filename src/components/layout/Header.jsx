import React from 'react'
import './Header.css'
import {NavLink} from 'react-router-dom'

const Header = () => {
	function navLinkStyles({isActive}) {
		return {
			fontWeight: isActive ? 'bolder' : '200',
		}
	}

	return (
		<header data-testid={'header'} className={'header'}>
			<h1>HRnet</h1>
			<nav>
				<ul>
					<li><NavLink style={navLinkStyles} to={'/'} end>
						Home
					</NavLink></li>
					<li><NavLink style={navLinkStyles} to={'employee'}>
						Employees
					</NavLink></li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
