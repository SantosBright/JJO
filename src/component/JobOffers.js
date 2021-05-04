import React from 'react';
import OfferCard from './OfferCard';
import './styles/jobOffers.css';

const data = [
	{
		title: 'Junior Java Developer',
		time: '2 hours ago',
		country: 'PickSaaS',
		city: 'Wrclaw, Polska',
		description: 'I am currently looking for a Java Developer. Project for Public Sector Location: Wrocław (during the pandemic remote work)',
		amount: 550,
	},
	{
		title: 'Junior Project Manager',
		time: '3 hours ago',
		country: 'Frontkom',
		city: 'Lublin, Polska',
		description:
			'Join us in the Lublin office to build innovative long-term projects. Exciting international clients and partners and a work environment focused on learning and growth awaits you!',
	},
	{
		title: 'Junior Project Manager',
		time: '1 day ago',
		country: 'Frontkom',
		city: 'Lublin, Polska',
		description: 'I am currently looking for a Java Developer. Project for Public Sector Location: Wrocław (during the pandemic remote work)',
		amount: 550,
	},
];

function JobOffers() {
	return (
		<div className={'offers'}>
			<div className={'container'}>
				<div className={'offers-more'}>
					<h1>Newest job offers</h1>
					<a href="#">
						<h6>View all job offers &rarr;</h6>
					</a>
				</div>
				<div className={'offers-grid'}>
					{data.map((jobOffer, i) => (
						<OfferCard jobOffer={jobOffer} className={i !== 2 && 'offer-item'} />
					))}
				</div>
			</div>
		</div>
	);
}

export default JobOffers;
