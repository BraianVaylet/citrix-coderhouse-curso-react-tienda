import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {Cart} from 'grommet-icons';
import {Anchor, Box, Text} from 'grommet';
import {CartContext} from 'context/CartContext';
import styles from './CartWidgetStyles.module.css';

const CartWidget = () => {
	const {total} = useContext(CartContext);

	return total !== 0 && (
		<Anchor
			as={Link}
			to="/cart"
			label={
				<Box
					direction="row-responsive"
					align="center"
					className={styles['navbar-items']}
					height="xxsmall"
					width="xxsmall"
					pad="10px"
				>
					<Cart color="plain" />
					<Text>
						({total})
					</Text>
				</Box>
			}
		/>
	);
};

export default CartWidget;
