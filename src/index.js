import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Grommet} from 'grommet';
import reportWebVitals from './reportWebVitals';
import citrixTheme from 'utils/theme';
import {CartContextProvider} from 'context/CartContext';
import App from './App';
import './index.css';
import {ProductContextProvider} from 'context/ProductContext';

ReactDOM.render(
	<React.StrictMode>
		{/* context */}
		<ProductContextProvider>
			<CartContextProvider>
				{/* ui */}
				<Grommet theme={citrixTheme}>
					{/* routes */}
					<BrowserRouter>
						{/* my app */}
						<App />
					</BrowserRouter>
				</Grommet>
			</CartContextProvider>
		</ProductContextProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
