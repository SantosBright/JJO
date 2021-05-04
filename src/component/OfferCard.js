import React from 'react';

function OfferCard({ className, jobOffer }) {
	return (
		<>
			<div className={`offers-grids ${className}`}>
				<div className={'offer-intro flex'}>
					<h4 className={'offer-title'}>{jobOffer.title}</h4>

					<h6 className={'offer-time'}>2 hours ago</h6>
				</div>
				<div className={'offer-country'}>
					<h4>
						{jobOffer.country} <span className={'offer-city'}>{jobOffer.city}</span>{' '}
					</h4>
				</div>
				<div className={'offer-description'}>
					<p>{jobOffer.description}</p>
				</div>
				<div className={'offer-description flex'}>
					{jobOffer.amount ? <p>$ up to PLN {jobOffer.amount} net / MD B2B</p> : <p />}
					<button className={'btn btn-primary'}>&gt;</button>
				</div>
			</div>
		</>
	);
}

export default OfferCard;
