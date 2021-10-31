import React from 'react';
import {Cart} from 'grommet-icons';
import {Anchor, Box, Text} from 'grommet';
import styles from './CartWidgetStyles.module.css';

const CartWidget = () => (
	<Anchor href="/cart" label={
		<Box direction="row-responsive" align="center" className={styles['navbar-items']} height="xxsmall" width="xxsmall" pad="10px">
			<Cart color="plain" />
			<Text pad="0 10px">4</Text>
		</Box>
	} />
);

export default CartWidget;
