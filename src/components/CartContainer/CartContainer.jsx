import React, {useContext, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Anchor, Box, Button, Card, Form, FormField, Image, Text, TextInput} from 'grommet';
import {CartContext} from 'context/CartContext';
import useLogoCategory from 'hooks/useLogoCategory';
import ItemCart from 'components/ItemCart/ItemCart';
import {ProductContext} from 'context/ProductContext';
import {FirebaseClient} from 'firebase/client';
import SimpleSpinner from 'components/Spinner/Spinner';

const CartContainer = () => {
	const {cartItems, clear, price, total} = useContext(CartContext);
	const [user, setUser] = useState({});
	const navigate = useNavigate();
	const logoToken = useLogoCategory('token');
	const {load, setLoad} = useContext(ProductContext);
	const firebase = new FirebaseClient();

	const addOrderDb = async () => {
		if (user) {
			try {
				setLoad(true);
				const idOrder = await firebase.addOrder(cartItems, user, price, total);
				navigate(`/thank-you/${idOrder}`);
				setLoad(false);
			} catch (error) {
				console.error('components/CartContainer/getProductFromDbById', error);
			}
		}

		return null;
	};

	return (
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
						direction="column"
						align="center"
						justify="flex-start"
					>
						<Box>
							{cartItems && cartItems.map((item, index) => (
								<ItemCart key={'cartpagemap' + index} {...item} />
							))}
						</Box>
						<Card
							align="center"
							justify="center"
							pad="large"
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
								{/* forms */}
								<Box pad="large">
									<Form
										value={user}
										onChange={nextValue => setUser(nextValue)}
										onReset={() => setUser({})}
										onSubmit={() => addOrderDb()}
									>
										<FormField
											name="name"
											htmlFor="text-input-name"
											label="Name"
										>
											<TextInput
												id="text-input-name"
												name="name"
											/>
										</FormField>
										<FormField
											name="email"
											htmlFor="text-input-email"
											label="Email"
										>
											<TextInput
												id="text-input-email"
												name="email"
											/>
										</FormField>
										{!load && <Box
											direction="row"
											gap="medium"
										>
											<Button
												type="submit"
												label={<Text color="white">Comprar</Text>}
												primary
											/>
											<Button
												type="reset"
												color="dark-1"
												primary
												label={<Text color="white">Limpiar</Text>}
											/>
										</Box>}
									</Form>
								</Box>
								{load
									? <SimpleSpinner />
									: <Button
										pad="small"
										margin="small"
										primary
										onClick={() => clear()}
										label={<Text>Limpiar carrito</Text>}
									/>
								}
							</Box>
						</Card>
					</Box>
				)}
		</Box>
	);
};

export default CartContainer;
