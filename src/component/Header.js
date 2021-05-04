import React from 'react';
import './styles/header.css';

function Header() {
	return (
		<header className={'header'}>
			<div className={'header-content'}>
				<div className={'container'}>
					<div className={'header-grid'}>
						<div className={'header-info'}>
							<h1 className={'header-heading'}>Juniors make IT work.</h1>
							<p className={'header-intro'}>Hire and invest in highly skilled juniors now.</p>
							<button className={'btn btn-primary'}>post offer now</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
