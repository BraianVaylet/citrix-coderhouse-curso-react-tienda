import React from 'react';
import PropTypes from 'prop-types';
import {Box, Image, Text} from 'grommet';
import useLogoCategory from 'hooks/useLogoCategory';
import styles from './ItemDetailStyles.module.css';
import ItemCount from 'components/ItemCount/ItemCount';

const ItemDetail = ({id, title, description, category, img, price, stock}) => {
	const logoCategory = useLogoCategory(category);
	const logoToken = useLogoCategory('token');

	return (
		<Box
			direction="row"
			align="start"
			justify="between"
			pad="small"
			margin="small"
			width="100%"
			border data-id={id}
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
			<Box
				pad="large"
				width="50%"
			>
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
				<Box>
					<ItemCount
						stock={stock}
						onAdd={value => console.log(`Se agregaron ${value} items 1 al carrito`)}
					/>
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