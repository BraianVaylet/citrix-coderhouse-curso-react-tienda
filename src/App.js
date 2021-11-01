import React from 'react';
import {Box} from 'grommet';
import Navbar from 'components/Navbar/Navbar';
import ItemListContainer from 'components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from 'components/ItemDetailContainer/ItemDetailContainer';

function App() {
	return (
		<Box className="App">
			<Navbar />
			<ItemListContainer greeting="👋 Hello Citrix!" />
			<ItemDetailContainer />
		</Box>
	);
}

export default App;
