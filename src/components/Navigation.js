import React, { Component } from 'react';

class Navigation extends Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-dark">
				<a className="text-white" href="/#">
					{this.props.titulo} -

					<span className="badge badge-pill badge-light ml-2">
						4
						{/* {this.props.contadorTareas} */}
					</span>
				</a>
			</nav>
		);
	}
}
export default Navigation;
