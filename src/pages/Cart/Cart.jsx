import React, {useContext} from 'react';
import {Anchor, Box, Button, Image, Text} from 'grommet';
import Layout from 'components/Layout/Layout';
import {CartContext} from 'context/CartContext';
import ItemCart from 'components/ItemCart/ItemCart';
import useLogoCategory from 'hooks/useLogoCategory';
import {Link} from 'react-router-dom';

const Cart = () => {
	const {cartItems, clear, price, total} = useContext(CartContext);
	const logoToken = useLogoCategory('token');

	return (
		<Layout>
			<Box pad="large">
				{
					cartItems.length === 0 ? (
						<Box
							align="center"
							justify="center"
						>
							<Anchor
								as={Link}
								to={'/'}
								color="brand"
								size="large"
							>
								<Text>Seguir comprando 😎</Text>
							</Anchor>
						</Box>
					) : (
						<Box
							direction="row"
							align="start"
							justify="between"
						>
							<Box
								width="50%"
							>
								{cartItems && cartItems.map((item, index) => (
									<ItemCart key={'cartpagemap' + index} {...item} />
								))}
							</Box>
							<Box
								width="25%"
								align="center"
								justify="center"
								pad="large"
								border
							>
								{/* info */}
								<Box
									align="center"
								>
									<Text size="large">🛒 Carrito ({total} items)</Text>
									<Box
										direction="row"
										align="center"
									>
										<Text size="large">Total: {price}</Text>
										<Box
											height="25px"
											width="25px"
											pad="xxsmall"
										>
											<Image
												fit="cover"
												src={logoToken.src}
												alt={logoToken.alt}
											/>
										</Box>
									</Box>
								</Box>
								{/* actions */}
								<Box margin="large">
									<Button
										pad="small"
										margin="small"
										primary
										onClick={() => {}}
										label={<Text>Comprar</Text>}
									/>
									<Button
										pad="small"
										margin="small"
										primary
										onClick={() => clear()}
										label={<Text>Limpiar carrito</Text>}
									/>
								</Box>
							</Box>
						</Box>
					)}
			</Box>
		</Layout>
	);
};

export default Cart;
