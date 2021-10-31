import React from 'react';
import PropTypes from 'prop-types';
import {Box, Text} from 'grommet';
import ItemCount from 'components/ItemCount/ItemCount';

const ItemListContainer = ({greeting}) => (
	<>
		<Text as="h1" color="brand" size="large">{greeting}</Text>
		<Box width="medium">
			<ItemCount stock={10} onAdd={value => console.log(`Se agregaron ${value} items 1 al carrito`)} />
			<ItemCount stock={5} onAdd={value => console.log(`Se agregaron ${value} items 2 al carrito`)} />
		</Box>
	</>
);

// Usando PropTypes defino de que la prop 'greeting' tiene que ser de tipo string y ademas tiene que ser obligatoria
ItemListContainer.propTypes = {
	greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;
