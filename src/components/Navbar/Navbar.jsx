import React from 'react';
import {Anchor, Box, Header, Image, Nav, Text} from 'grommet';
import {LOGOS} from 'utils/images';
import {items} from './Navbar.mock';
import styles from './NavbarStyles.module.css';

const Navbar = () => (
	<Header pad="small">
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
		</Nav>
	</Header>
);

export default Navbar;
