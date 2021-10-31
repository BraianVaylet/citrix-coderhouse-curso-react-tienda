import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'grommet';

const ItemListContainer = ({greeting}) => (
	<Text as="h1" color="brand" size="large">{greeting}</Text>
);

// Usando PropTypes defino de que la prop 'greeting' tiene que ser de tipo string y ademas tiene que ser obligatoria
ItemListContainer.propTypes = {
	greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;
