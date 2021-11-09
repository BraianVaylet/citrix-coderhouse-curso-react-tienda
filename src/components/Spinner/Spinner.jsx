import React from 'react';
import {Box, Spinner, Text} from 'grommet';

const SimpleSpinner = () => (
	<Box
		justify="center"
		align="start"
		direction="row"
		gap="small"
		pad="small"
		width="100%"
		height="80vh"
	>
		<Spinner />
		<Text>Cargando...</Text>
	</Box>
);

export default SimpleSpinner;
