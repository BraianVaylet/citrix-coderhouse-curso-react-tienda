import React, {useEffect, useState, useContext} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import ItemDetail from 'components/ItemDetail/ItemDetail';
import SimpleSpinner from 'components/Spinner/Spinner';
import {Box} from 'grommet';
import {FirebaseClient} from 'firebase/client';
import {ProductContext} from 'context/ProductContext';

const ItemDetailContainer = () => {
	const {id: idItem} = useParams();
	const navigate = useNavigate();
	const [item, setItem] = useState(null);
	const {setLoad} = useContext(ProductContext);
	const firebase = new FirebaseClient();

	useEffect(() => getProductFromDbById(), []);

	const getProductFromDbById = async () => {
		try {
			setLoad(true);
			const value = await firebase.getProduct(idItem);
			setLoad(false);
			if (value) {
				setItem(value);
			} else {
				navigate('/');
			}
		} catch (error) {
			navigate('/');
			console.error('components/ItemDetailContainer/getProductFromDbById', error);
		}
	};

	return (
		<Box pad="large">
			{item ? <ItemDetail {...item} /> : <SimpleSpinner />}
		</Box>
	);
};

export default ItemDetailContainer;
