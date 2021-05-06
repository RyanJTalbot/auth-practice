import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PrivatePage from './pages/private/Dashboard';
import PublicPage from './pages/public/Landing';
import PrivateRouter from './components/private/PrivateRouter';
import PublicRouter from './components/public/PublicRouter';
import './App.css';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<PrivateRouter path='/private' component={PrivatePage} />
				<PublicRouter path='/' component={PublicPage} />
			</BrowserRouter>
		</div>
	);
}

export default App;
