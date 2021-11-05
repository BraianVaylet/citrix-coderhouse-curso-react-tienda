import React, {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Box, Button, Image, Text} from 'grommet';
import {FormPrevious} from 'grommet-icons';
import useLogoCategory from 'hooks/useLogoCategory';
import {CartContext} from 'context/CartContext';
import ItemCount from 'components/ItemCount/ItemCount';
import styles from './ItemDetailStyles.module.css';

const ItemDetail = item => {
	const {id, title, description, category, img, price, stock} = item;
	const {addItem} = useContext(CartContext);
	const navigate = useNavigate();
	const [counter, setCounter] = useState(null);
	const logoCategory = useLogoCategory(category);
	const logoToken = useLogoCategory('token');

	// Agregar elementos al carrito
	const handleOnAdd = count => {
		setCounter(count);
		addItem(item, count);
	};

	return (
		<Box
			align="start"
			justify="start"
			pad="large"
		>
			{/* back */}
			<Box
				direction="row"
				align="start"
				justify="between"
			>
				<FormPrevious color="brand" />
				<Text
					color="brand"
					className={styles['link-back']}
					onClick={() => navigate(-1)}
				>
					Volver
				</Text>
			</Box>
			{/* product */}
			<Box
				direction="row"
				align="start"
				justify="between"
				pad="large"
				width="100%"
				data-id={id}
			>
				{/* img */}
				<Box width="50%">
					<Box
						height="large"
						width="large"
					>
						<Image
							className={styles['item-image']}
							src={img}
							alt={title}
							fit="contain"
							border="none"
						/>
					</Box>
				</Box>
				{/* content */}
				<Box width="25%">
					{/* title */}
					<Box
						direction="row"
						align="start"
						pad={{left: 'none', right: 'none', top: 'none', bottom: 'medium'}}
					>
						<Box height="25px" width="25px">
							<Image
								fit="cover"
								src={logoCategory.src}
								alt={logoCategory.alt}
							/>
						</Box>
						<Text
							size="large"
							className={styles['item-title']}
						>
							{title}
						</Text>
					</Box>
					{/* description */}
					<Box pad={{left: 'none', right: 'none', top: 'none', bottom: 'large'}}>
						<Text size="medium" >{description}</Text>
					</Box>
					{/* cost */}
					<Box
						direction="row"
						align="center"
						pad={{left: 'none', right: 'none', top: 'none', bottom: 'large'}}
					>
						<Text
							pad="small"
							size="large"
						>
						Costo por unidad {price}
						</Text>
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
						<Text
							pad="small"
							size="large"
						>
						CTX
						</Text>
					</Box>
					{/* counter */}
					{
						counter
							? (
								<Box
									align="center"
									pad="small"
								>
									<Button
										primary
										label="Ir al carrito"
										onClick={() => navigate('/cart')}
									/>
								</Box>
							) :	(
								<Box>
									<ItemCount
										stock={stock}
										onAdd={handleOnAdd}
									/>
								</Box>
							)
					}
				</Box>
			</Box>
		</Box>
	);
};

ItemDetail.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	img: PropTypes.node.isRequired,
	price: PropTypes.number.isRequired,
	stock: PropTypes.number.isRequired,
};

export default ItemDetail;
