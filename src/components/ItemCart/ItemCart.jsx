import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Anchor, Box, Button, Card, Image, Text} from 'grommet';
import useLogoCategory from 'hooks/useLogoCategory';
import styles from './ItemCartStyles.module.css';
import {Link, useNavigate} from 'react-router-dom';
import {CartContext} from 'context/CartContext';

const ItemCart = product => {
	const {removeItem, removeOneItem} = useContext(CartContext);
	const {item, count} = product;
	const {id, title, category,	img, price} = item;
	const navigate = useNavigate();
	const logoToken = useLogoCategory('token');

	return (
		<Card
			direction="row"
			pad="small"
			margin="small"
			justify="between"
			align="center"
		>
			<Box
				direction="row"
				pad="small"
				margin="small"
				data-id={id}
				onClick={() => navigate(`/item/${id}`)}
			>
				{/* image */}
				<Box
					height="xsmall"
					width="xsmall"
					pad="small"
				>
					<Image
						className={styles['item-image']}
						src={img}
						alt={title}
						fit="contain"
						border="none"
					/>
				</Box>
				{/* content */}
				<Box
					direction="row"
					align="center"
					justify="start"
				>
					<Box
						direction="row"
						align="center"
						justify="start"
					>
						<Text
							size="medium"
							className={styles['item-title']}
						>
							{`${title} x${count}`}
						</Text>
						<Anchor
							as={Link}
							to={'/category/' + category}
							size="small"
							color="brand"
						>
						[{category}]
						</Anchor>
					</Box>
					<Box
						direction="row"
						align="center"
						pad="small"
					>
						<Text pad="xxsmall">{count * price}</Text>
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
			</Box>
			{/* actions */}
			<Box
				direction="row"
				align="center"
				justify="end"
			>
				<Button
					pad="small"
					margin="small"
					color="dark-1"
					primary
					onClick={() => removeOneItem(item)}
					label={<Text color="white">Quitar 1</Text>}
				/>
				<Button
					pad="small"
					margin="small"
					primary
					onClick={() => removeItem(item)}
					label={<Text>Quitar todos</Text>}
				/>
			</Box>
		</Card>
	);
};

ItemCart.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	img: PropTypes.node.isRequired,
	price: PropTypes.number.isRequired,
};

export default ItemCart;
