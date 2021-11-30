import React from 'react';
import PropTypes from 'prop-types';
import {Box, Card, Image, Text} from 'grommet';
import useLogoCategory from 'hooks/useLogoCategory';
import styles from './ItemStyles.module.css';
import {useNavigate} from 'react-router-dom';

const Item = ({
	id,
	title,
	category,
	img,
	price,
	stock,
}) => {
	const navigate = useNavigate();
	const logo = useLogoCategory(category);
	const logoToken = useLogoCategory('token');

	return (
		<Card
			pad="small"
			margin="small"
			data-id={id}
			onClick={() => stock > 0 && navigate(`/item/${id}`)}
			className={styles.card}
		>
			<Box
				direction="row"
				align="center"
				justify="between"
				width="100%"
			>
				<Box
					height="25px"
					width="25px"
				>
					<Image
						fit="cover"
						src={logo.src}
						alt={logo.alt}
						className={`${stock === 0 && styles['item-no-stock']}`}
					/>
				</Box>
				{stock === 0 && <Text>Sin Stock</Text>}
			</Box>
			<Box
				height="small"
				width="small"
			>
				<Image
					className={`${styles['item-image']} ${stock === 0 && styles['item-no-stock']}`}
					src={img}
					alt={title}
					fit="contain"
					border="none"
				/>
			</Box>
			<Text
				size="medium"
				className={styles['item-title']}
			>
				{title}
			</Text>
			<Box
				direction="row"
				align="center"
			>
				<Text pad="xxsmall">{price}</Text>
				<Box
					height="25px"
					width="25px"
					pad="xxsmall"
				>
					<Image
						fit="cover"
						src={logoToken.src}
						alt={logoToken.alt}
						className={`${stock === 0 && styles['item-no-stock']}`}
					/>
				</Box>
			</Box>
		</Card>
	);
};

Item.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	img: PropTypes.node.isRequired,
	price: PropTypes.number.isRequired,
	stock: PropTypes.number.isRequired,
};

export default Item;
