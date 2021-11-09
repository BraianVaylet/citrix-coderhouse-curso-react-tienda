import React from 'react';
import Layout from 'components/Layout/Layout';
import ItemListContainer from 'components/ItemListContainer/ItemListContainer';
import CarouselBanner from 'components/Corousel/Carousel';

const Home = () => (
	<Layout>
		<CarouselBanner />
		<ItemListContainer greeting="👋 Hello Citrix!" />
	</Layout>
);

export default Home;
