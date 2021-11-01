import React from 'react';
import {Box, Spinner, Text} from 'grommet';

const SimpleSpinner = () => (
	<Box
		justify="center"
		align="center"
		direction="row"
		gap="small"
		pad="small"
		width="100%"
	>
		<Spinner />
		<Text>Cargando...</Text>
	</Box>
);

export default SimpleSpinner;
