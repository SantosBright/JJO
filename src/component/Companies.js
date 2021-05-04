import React from 'react';
import briefIcon from '../component/assets/icon/briefcase.svg';
import './styles/companies.css';

const data = ['GrandParade', 'Seargin', 'DEX Ventures', 'NBC', 'SVT SP Zoo', 'DG Tech', 'PickSaaS', 'BlackRose', 'FrontKom'];

function Companies() {
	return (
		<div className={'container'}>
			<h1 className={'companies-feature'}>Features Companies</h1>
			<div className={'companies'}>
				{data.map((str) => (
					<div className="company">
						<div className={'circle'}>
							<img src={briefIcon} alt={'briefcase'} />
						</div>
						<h5>{str}</h5>
					</div>
				))}
			</div>
		</div>
	);
}

export default Companies;
