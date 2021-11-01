import React from 'react';
import PropTypes from 'prop-types';
import {Box, Image, Text} from 'grommet';
import useLogoCategory from 'hooks/useLogoCategory';
import styles from './ItemStyles.module.css';

const Item = ({
	id,
	title,
	category,
	img,
	price,
}) => {
	const logo = useLogoCategory(category);
	const logoToken = useLogoCategory('token');

	return (
		<Box
			pad="small"
			margin="small"
			border data-id={id}
		>
			<Box
				direction="row"
				align="center"
			>
				<Box
					height="25px"
					width="25px"
				>
					<Image
						fit="cover"
						src={logo.src}
						alt={logo.alt}
					/>
				</Box>
			</Box>
			<Box
				height="small"
				width="small"
			>
				<Image
					className={styles['item-image']}
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
					/>
				</Box>
			</Box>
		</Box>
	);
};

Item.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	img: PropTypes.node.isRequired,
	price: PropTypes.number.isRequired,
};

export default Item;
