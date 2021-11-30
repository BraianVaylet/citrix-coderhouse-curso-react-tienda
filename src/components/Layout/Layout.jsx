import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'components/Navbar/Navbar';
import {Box} from 'grommet';
import CustomFooter from 'components/Footer/Footer';

const Layout = ({children}) => (
	<Box
		direction="column"
		align="start"
		justify="center"
		width="100%"
	>
		<Navbar />
		<Box className="App">
			{children}
		</Box>
		<CustomFooter />
	</Box>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
