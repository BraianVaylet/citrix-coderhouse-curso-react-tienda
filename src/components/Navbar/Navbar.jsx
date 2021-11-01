import React from 'react';
import {Anchor, Box, Button, Header, Image, Nav, Text} from 'grommet';
import {LOGOS} from 'utils/images';
import {items} from './Navbar.mock';
import styles from './NavbarStyles.module.css';
import CartWidget from 'components/CartWidget/CartWidget';

const Navbar = () => (
	<Header pad="medium">
		<Box direction="row" align="center" gap="small">
			<Box height="xxsmall" width="xxsmall">
				<Image
					fit="cover"
					src={LOGOS.logo.src}
					alt={LOGOS.logo.alt}
				/>
			</Box>
			<Text size="large" className={styles['brand-title']}>Citrix</Text>
		</Box>
		<Nav direction="row">
			{items && items.map((item, index) => (
				<Anchor key={'navbarmap1' + index} href={item.href} label={
					<Box direction="row-responsive" align="center" className={styles['navbar-items']}>
						<Box height="xxsmall" width="xxsmall" pad="10px">
							<Image
								fit="cover"
								src={item.icon.src}
								alt={item.icon.alt}
							/>
						</Box>
						<Text>{item.label}</Text>
					</Box>
				} />
			))}
			<CartWidget />

			<Box align="center" pad="xxsmall">
				<Button primary label={
					<Box direction="row" align="center">
						<Box height="25px" width="25px" pad="xxsmall">
							<Image
								fit="cover"
								src={LOGOS.ctxCoinLogo.src}
								alt={LOGOS.ctxCoinLogo.alt}
							/>
						</Box>
						<Text pad="xxsmall" size="small">1 CTX = $0,25 ARG</Text>
					</Box>
				}/>
			</Box>
		</Nav>
	</Header>
);

export default Navbar;
