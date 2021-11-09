import React, {useContext} from 'react';
import {Box, Button, Footer, Text} from 'grommet';
import {PowerReset} from 'grommet-icons';
import {ProductContext} from 'context/ProductContext';
import {FirebaseClient} from 'firebase/client';

const CustomFooter = () => {
	const firebase = new FirebaseClient();
	const {setLoad} = useContext(ProductContext);

	const updateStock = async () => {
		try {
			setLoad(true);
			await firebase.updateProductsStock();
			setLoad(false);
		} catch (error) {
			console.error('components/CartContainer/getProductFromDbById', error);
		}
	};

	return (
		<Footer
			background="brand"
			pad="small"
			width="100%"
		>
			<Text>Copyright ©2021 - [Tutor] Braian D. Vaylet </Text>
			<Button
				primary
				color="dark-1"
				onClick={() => updateStock()}
				label={
					<Box
						align="center"
						justify="center"
						direction="row"
					>
						<PowerReset
							size="medium"
							color="white"
						/>
						<Text
							color="white"
							margin={{left: 'small', right: 'none', top: 'none', bottom: 'none'}}
						>
							Restart Stock
						</Text>
					</Box>
				}
			/>
		</Footer>
	);
};

export default CustomFooter;
