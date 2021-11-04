import React from 'react';
import Layout from 'components/Layout/Layout';
import ItemListContainer from 'components/ItemListContainer/ItemListContainer';

const Home = () => (
	<Layout>
		<ItemListContainer greeting="👋 Hello Citrix!" />
	</Layout>
);

export default Home;
