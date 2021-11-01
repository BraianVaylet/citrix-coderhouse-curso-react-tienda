import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Box, Text} from 'grommet';
import ItemList from 'components/ItemList/ItemList';
import SimpleSpinner from 'components/Spinner/Spinner';
import {ITEMS} from 'mocks/data';

const ItemListContainer = ({greeting}) => {
	const [items, setItems] = useState(null);

	useEffect(() => getItemsAsyncAwait(), []);

	const getItems = () => new Promise((resolve, reject) => {
		setTimeout(() => ITEMS
			? resolve(ITEMS)
			: reject(new Error('getItems Error'))
		, 2000);
	});

	const getItemsAsyncAwait = async () => {
		try {
			const products = await getItems();
			setItems(products);
		} catch (error) {
			console.log('ERROR', '🤦‍♂️ Algo malio sal', error);
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
			<Box>
				{items ? <ItemList items={items}/> : <SimpleSpinner />}
			</Box>
		</>
	);
};

ItemListContainer.propTypes = {
	greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;
