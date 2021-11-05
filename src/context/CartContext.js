import React, {useState, createContext, useEffect} from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext({});

export const CartContextProvider = ({children}) => {
	const [cartItems, setCartItems] = useState([]);
	const [total, setTotal] = useState(0);
	const [price, setPrice] = useState(0);

	useEffect(() => {
		setTotal(handleTotal());
		setPrice(handleTotalPrice());
	}, [cartItems]);

	// * Agrego un item al carrito.
	const addItem = (item, count) => {
		// 1. Guardo mi producto en un objeto
		let cartElement = {item, count};
		// 2. Creo un carrito auxiliar
		let cartAux = [];
		// Consulto si el producto esta en el carrito.
		if (isInCart(item)) {
			console.log('Esta en el 🛒');
			// 1. Busco el producto por el id.
			cartElement = cartItems.find(element => element.item.id === item.id);
			// 2. Actualizo el contador del item filtrado.
			cartElement.count += count;
			// 3. retorno el carrito tal como estaba.
			cartAux = [...cartItems];
		} else {
			console.log('NO esta en el 🛒');
			// 1. Agrego el item al carrito
			cartAux = [cartElement, ...cartItems];
		}

		setCartItems(cartAux);
	};

	// * Quito el elemento del carrito
	const removeItem = item => {
		if (isInCart(item)) {
			// 1. FILTRO mi carrito para obtener el resto de los items.
			const cartElements = cartItems.filter(element => element.item.id !== item.id) || [];
			// 2. actualizo el carrito, si solo tenia un elemento lo inicializo como []
			setCartItems([...cartElements]);
		}
	};

	// * Limpio el carrito
	// Inicializo el carrito como un array vacio
	const clear = () => setCartItems([]);

	// * Reviso si el item esta en el carrito.
	// BUSCO si encuentro al menos 1 elemento que cumpla con la condicion.
	const isInCart = item => cartItems && cartItems.some(element => element.item.id === item.id);

	// * BONUS: Quito solo 1 elemento del carrito
	const removeOneItem = item => {
		if (isInCart(item)) {
			// 1. BUSCO el producto por el id.
			const cartElement = cartItems.find(element => element.item.id === item.id);
			if (cartElement.count === 1) {
				// 1.a. Si solo tengo un elemento lo remuevo con la funcion removeItem()
				removeItem(item);
			} else {
				// 1.a. Creo una copia de mi carrito
				const cart = cartItems;
				// 1.b. Mapeo el carrito
				cart.map(element => {
					// 1.c. Resto 1 al contador
					if (element.item.id === item.id) {
						element.count -= 1;
					}

					return element;
				});
				// 1.d. actualizo el carrito.
				setCartItems([...cart]);
			}
		}
	};

	// * BONUS: Mapeo carrito obtengo precio total
	const handleTotalPriceByItem = () => {
		// 1. Creo una copia del carrito donde trabajar
		const newCartItems = cartItems;
		// 2. Mapeo mi array y lo actualizo
		return newCartItems.map(element =>
		// 3. Retorno un objeto con el elemento + el total de ese producto
			({
				...element,
				price: element.item.price * element.count,
			}),
		);
	};

	// * BONUS: Obtengo el total de elementos del carrito
	const handleTotal = () => {
		// 1. Inicializo el reduce
		const initialValue = 0;
		return (
			cartItems
      // 2. Acumulo el total
      && cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.count, initialValue)
		);
	};

	// * BONUS: Obtengo el precio total del carrito
	const handleTotalPrice = () => {
		// 1. Creo un carrito auxiliar con el precio total por producto.
		const cartAux = handleTotalPriceByItem();
		// 2. Inicializo el reduce
		const initialValue = 0;
		return (
			cartAux
      // 3. Acumulo el total
      && cartAux.reduce((accumulator, currentValue) => accumulator + currentValue.price, initialValue)
		);
	};

	return (
		<CartContext.Provider
			value={{
				addItem,
				removeItem,
				removeOneItem,
				clear,
				isInCart,
				cartItems,
				total,
				price,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

CartContextProvider.propTypes = {
	children: PropTypes.any.isRequired,
};
