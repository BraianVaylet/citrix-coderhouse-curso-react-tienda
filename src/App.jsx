import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Product from 'pages/Product/Product';
import Home from 'pages/Home/Home';
import Cart from 'pages/Cart/Cart';
import NotFound from 'components/404/404';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/category/:id" element={<Home />} />
			<Route path="/item/:id" element={<Product />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
