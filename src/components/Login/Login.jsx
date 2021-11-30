import React from 'react';
import {Github} from 'grommet-icons';
import {Box, Button, Layer, Text} from 'grommet';
import {FirebaseClient} from 'firebase/client';

const Login = () => {
	const firebase = new FirebaseClient();

	return (
		<Layer>
			<Box
				align="center"
				justify="center"
				gap="small"
				direction="column"
				alignSelf="center"
				pad="large"
			>
				<Text color="black" as="h2">👋 Bienvenido a Citrix</Text>
				<Button
					label={
						<Box
							align="center"
							justify="center"
							direction="row"
							alignSelf="center"
						>
							<Github color="black" />
							<Text
								margin={{left: 'small', right: 'none', top: 'none', bottom: 'none'}}
								color="black"
							>
                Ingresar
							</Text>
						</Box>
					}
					onClick={() => firebase.loginWithGithub()}
				/>
			</Box>
		</Layer>
	);
};

export default Login;
