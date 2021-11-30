import React from 'react';
import Layout from 'components/Layout/Layout';
import ItemListContainer from 'components/ItemListContainer/ItemListContainer';
import CarouselBanner from 'components/Corousel/Carousel';
// Import Login from 'components/Login/Login';
// import useUser from 'hooks/useUser';

const Home = () => (
	// Const user = useUser();
	<Layout>
		{/* {!user && <Login />} */}
		<CarouselBanner />
		<ItemListContainer greeting="👋 Hello Citrix!" />
	</Layout>
);
export default Home;
