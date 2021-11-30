import React, {useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Box, Text} from 'grommet';
import {ProductContext} from 'context/ProductContext';
import ItemList from 'components/ItemList/ItemList';
import SimpleSpinner from 'components/Spinner/Spinner';
import {FirebaseClient} from 'firebase/client';

const ItemListContainer = ({greeting}) => {
	const {products, setProducts, load, setLoad} = useContext(ProductContext);
	const {id: idCategory} = useParams();
	const firebase = new FirebaseClient();

	useEffect(() => {
		getProductsFromDb();
	}, [idCategory]);

	const getProductsFromDb = async () => {
		try {
			setLoad(true);
			const value = (idCategory)
				? await firebase.getProductsByCategory(idCategory)
				: await firebase.getProducts();
			setProducts(value);
			setLoad(false);
		} catch (error) {
			console.error('components/ItemListContainer/getProductsFromDb', error);
		}
	};

	return (
		<>
			<Text
				as="h1"
				color="brand"
				size="large"
			>
				{greeting}
			</Text>
			<Box pad="large" width="100%">
				{load ? <SimpleSpinner /> : <ItemList items={products}/>}
			</Box>
		</>
	);
};

ItemListContainer.propTypes = {
	greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;
