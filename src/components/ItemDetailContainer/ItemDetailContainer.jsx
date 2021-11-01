import ItemDetail from 'components/ItemDetail/ItemDetail';
import SimpleSpinner from 'components/Spinner/Spinner';
import {Box} from 'grommet';
import {ITEMS} from 'mocks/data';
import React, {useEffect, useState} from 'react';

const ItemDetailContainer = () => {
	const [item, setItem] = useState(null);

	useEffect(() => getItemAsyncAwait(), []);

	const getItem = () => new Promise((resolve, reject) => {
		setTimeout(() => ITEMS[0]
			? resolve(ITEMS[0])
			: reject(new Error('getItems Error'))
		, 2000);
	});

	const getItemAsyncAwait = async () => {
		try {
			const product = await getItem();
			setItem(product);
		} catch (error) {
			console.log('ERROR', '🤦‍♂️ Algo malio sal', error);
		}
	};

	return (
		<Box>
			{item ? <ItemDetail {...item} /> : <SimpleSpinner />}
		</Box>
	);
};

export default ItemDetailContainer;
