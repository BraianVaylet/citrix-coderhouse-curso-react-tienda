import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'components/Navbar/Navbar';
import {Box} from 'grommet';

const Layout = ({children}) => (
	<Box className="App">
		<Navbar />
		{children}
	</Box>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
