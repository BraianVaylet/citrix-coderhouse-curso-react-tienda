import React from 'react';
import PropTypes from 'prop-types';
import {Box, Image, Text} from 'grommet';
import styles from './ItemStyles.module.css';
import {LOGOS} from 'utils/images';

const handleIconByCategory = category => {
	if (category === 'naranja') {
		return LOGOS.orangeLogo;
	}

	if (category === 'pomelo') {
		return LOGOS.grapefruitLogo;
	}

	if (category === 'limon') {
		return LOGOS.lemonlogo;
	}

	if (category === 'mandarina') {
		return LOGOS.mandarineLogo;
	}

	return null;
};

const Item = ({
	id,
	title,
	category,
	img,
	price,
}) => (
	<Box pad="small" margin="small" border data-id={id}>
		<Box direction="row" align="center">
			<Box height="25px" width="25px">
				<Image
					fit="cover"
					src={handleIconByCategory(category).src}
					alt={handleIconByCategory(category).alt}
				/>
			</Box>
		</Box>
		<Box height="small" width="small">
			<Image className={styles['item-image']} src={img} alt={title} fit="contain" border="none" />
		</Box>
		<Text size="medium" className={styles['item-title']}>{title}</Text>
		<Box direction="row" align="center">
			<Text pad="xxsmall">{price}</Text>
			<Box height="25px" width="25px" pad="xxsmall">
				<Image
					fit="cover"
					src={LOGOS.ctxCoinLogo.src}
					alt={LOGOS.ctxCoinLogo.alt}
				/>
			</Box>
		</Box>
	</Box>
);

Item.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	img: PropTypes.node.isRequired,
	price: PropTypes.number.isRequired,
};

export default Item;
