import React from 'react';

function Navigation(props) {
	return (
		<nav className="navbar navbar-dark bg-dark sticky-top">
			<a className="text-white" href="/">Tasks</a>
			<a className="text-white" href="/signIn">Log in</a>
		</nav>
	)
}
export default Navigation;
