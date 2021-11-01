import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Box, Text} from 'grommet';
import ItemCount from 'components/ItemCount/ItemCount';
import ItemList from 'components/ItemList/ItemList';
import {ITEMS} from 'mocks/data';

const ItemListContainer = ({greeting}) => {
	const [items, setItems] = useState(null);

	useEffect(() => getItemsAsyncAwait(), []);

	const getItems = () => new Promise((resolve, reject) => {
		setTimeout(() => ITEMS
			? resolve(ITEMS)
			: reject(new Error('getItems Error'))
		, 1000);
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
			<Text as="h1" color="brand" size="large">{greeting}</Text>
			<Box width="medium">
				<ItemCount stock={10} onAdd={value => console.log(`Se agregaron ${value} items 1 al carrito`)} />
			</Box>
			<Box>
				{items ? <ItemList items={items}/> : <Text>Cargando...</Text>}
			</Box>
		</>
	);
};

// Usando PropTypes defino de que la prop 'greeting' tiene que ser de tipo string y ademas tiene que ser obligatoria
ItemListContainer.propTypes = {
	greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;
