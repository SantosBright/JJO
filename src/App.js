import Header from './component/Header';
import Companies from './component/Companies';
import JobOffers from './component/JobOffers';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<JobOffers />
			<Companies />
		</div>
	);
}

export default App;
