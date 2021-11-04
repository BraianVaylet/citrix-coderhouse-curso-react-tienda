import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Box, Text} from 'grommet';
import ItemList from 'components/ItemList/ItemList';
import SimpleSpinner from 'components/Spinner/Spinner';
import {ITEMS} from 'mocks/data';

const ItemListContainer = ({greeting}) => {
	const {id: idCategory} = useParams();
	const [items, setItems] = useState(null);

	useEffect(() => getItemsAsyncAwait(), [idCategory]);

	const getItems = () => new Promise((resolve, reject) => {
		setTimeout(() => ITEMS
			? resolve(ITEMS)
			: reject(new Error('getItems Error'))
		, 1000);
	});

	const getItemsAsyncAwait = async () => {
		try {
			const products = await getItems();
			setItems(handleFilterData(products));
		} catch (error) {
			console.error('ERROR', '🤦‍♂️ Algo malio sal', error);
		}
	};

	const handleFilterData = data => (idCategory && data)
		? data.filter(item => item.category === idCategory)
		: data;

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
