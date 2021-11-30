import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Box, Button, Card, Text} from 'grommet';
import {FormAdd, FormSubtract} from 'grommet-icons';

const ItemCount = ({
	stock,
	initial = 1,
	onAdd,
}) => {
	// Creo un estado usando el hook useState donde guardo el valor de mi contador y lo inicializo con el valor de 'initial'
	const [count, setCount] = useState(initial);

	// Cuando se agrega un elemento debo validar que no supere el stock
	const handleAddItem = () => count < stock && setCount(count + 1);

	// Cuando se quita un elemento debo validar no continuar si tengo 0 elementos seleccionados
	const handleRemoveItem = () => count > 0 && setCount(count - 1);

	return (
		<Card
			pad="20px"
			width="100%"
		>
			<Box
				direction="row"
				align="center"
				justify="between"
				width="100%"
			>
				<Box
					round="full"
					overflow="hidden"
					background="light-1"
				>
					<Button
						icon={<FormSubtract />}
						hoverIndicator
						onClick={handleRemoveItem}
						disabled={count <= 0} // Desabilito si count es menor o igual que cero
					/>
				</Box>
				<Text>{count}</Text>
				<Box
					round="full"
					overflow="hidden"
					background="light-1"
				>
					<Button
						icon={<FormAdd />}
						hoverIndicator
						onClick={handleAddItem}
						disabled={count >= stock} // Desabilito si count es mayor o igual que el stock
					/>
				</Box>
			</Box>
			<Box
				align="center"
				justify="center"
				width="100%"
			>
				<Text>Stock disponible: {stock - count}</Text>
				<Box
					align="center"
					pad="small"
				>
					<Button
						primary
						label="Agregar al carrito"
						onClick={() => onAdd(count)}
						disabled={count > stock || count <= 0} // Desabilito si count es mayor o igual que el stock o es menor o igual que 0
					/>
				</Box>
			</Box>
		</Card>
	);
};

ItemCount.propTypes = {
	stock: PropTypes.number.isRequired,
	initial: PropTypes.number,
	onAdd: PropTypes.func.isRequired,
};

export default ItemCount;
