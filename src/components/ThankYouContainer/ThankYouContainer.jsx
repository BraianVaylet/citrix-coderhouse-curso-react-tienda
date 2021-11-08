import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {Anchor, Box, Image, Text} from 'grommet';
import useLogoCategory from 'hooks/useLogoCategory';
import styles from './ThankYouStyles.module.css';

const ThankYouContainer = () => {
	const {id: idOrder} = useParams();
	const logo = useLogoCategory('logo');
	return (
		<Box
			align="center"
			justify="center"
			width="100%"
			pad="large"
		>
			<Box
				direction="column"
				align="center"
				justify="center"
			>
				<Text	size="xxlarge">Gracias por comprar tus Cítricos en</Text>
				<Box
					direction="column"
					align="center"
					gap="medium"
					margin="xlarge"
				>
					<Box
						height="small"
						width="small"
					>
						<Image
							fit="cover"
							src={logo.src}
							alt={logo.alt}
						/>
					</Box>
					<Text	className={styles['brand-title']}>Citrix</Text>
				</Box>
				<Text
					size="large"
					margin="medium"
				>
          Su compra fue registrada con exito
				</Text>
				<Text size="medium">Su numero de orden es: <b>{idOrder}</b></Text>
			</Box>
			<Anchor
				as={Link}
				to="/"
				margin="large"
				size="large"
			>
        Seguir comprando 😁
			</Anchor>
		</Box>
	);
};

export default ThankYouContainer;
