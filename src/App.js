import React from 'react';
import Navbar from 'components/Navbar/Navbar';
import ItemListContainer from 'components/ItemListContainer/ItemListContainer';
import {Box} from 'grommet';

function App() {
	return (
		<Box className="App">
			<Navbar />
			<ItemListContainer greeting="👋 Hello Citrix!" />
		</Box>
	);
}

export default App;
