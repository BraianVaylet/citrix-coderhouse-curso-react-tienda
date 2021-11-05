import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import ItemDetail from 'components/ItemDetail/ItemDetail';
import SimpleSpinner from 'components/Spinner/Spinner';
import {Box} from 'grommet';
import {ITEMS} from 'mocks/data';

const ItemDetailContainer = () => {
	const {id: idItem} = useParams();
	const navigate = useNavigate();
	const [item, setItem] = useState(null);

	useEffect(() => getItemAsyncAwait(), []);

	const getItem = () => new Promise((resolve, reject) => {
		setTimeout(() => ITEMS
			? resolve(ITEMS)
			: reject(new Error('getItems Error'))
		, 1000);
	});

	const getItemAsyncAwait = async () => {
		try {
			const product = await getItem();
			handleFilterData(product);
		} catch (error) {
			console.log('ERROR', '🤦‍♂️ Algo malio sal', error);
		}
	};

	const handleFilterData = data => {
		if (idItem && data) {
			const _item = data.filter(item => item.id === idItem);
			if (_item.length === 1) {
				setItem(_item[0]);
			} else {
				navigate('/');
			}
		} else {
			navigate('/');
		}
	};

	return (
		<Box pad="large">
			{item ? <ItemDetail {...item} /> : <SimpleSpinner />}
		</Box>
	);
};

export default ItemDetailContainer;
