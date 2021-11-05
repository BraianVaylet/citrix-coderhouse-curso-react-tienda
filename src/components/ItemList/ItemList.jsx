import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/Item/Item';
import {Box} from 'grommet';

const ItemList = ({items}) => (
	<Box
		direction="row"
		align="start"
		wrap="true"
		justify="center"
	>
		{
			items.map((item, index) => (
				<Item
					key={'itemlistmap1' + index}
					{...item}
				/>
			))
		}
	</Box>
);

ItemList.propTypes = {
	items: PropTypes.arrayOf({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		category: PropTypes.string.isRequired,
		img: PropTypes.node.isRequired,
		price: PropTypes.number.isRequired,
		stock: PropTypes.number.isRequired,
	}),
};

export default ItemList;
