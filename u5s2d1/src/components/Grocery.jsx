import React from "react";
import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList";
import { v4 as uuid } from "uuid";

const Grocery = () => {
	const [groceries, setGroceries] = React.useState([]);
	const handleClick = (listTitle) => {
		const newItem = {
			id: uuid(),
			listTitle,
		};
		setGroceries([...groceries, newItem]);
	};

	const deleteItem = (id) => {
		const newGroceries = groceries.filter((grocery) => grocery.id !== id);
		setGroceries(newGroceries);
	};

	return (
		<>
			<GroceryInput handleClick={handleClick} />
			<GroceryList groceries={groceries} deleteItem={deleteItem} />
		</>
	);
};

export default Grocery;
