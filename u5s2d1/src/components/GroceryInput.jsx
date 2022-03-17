import React from "react";
const GroceryInput = ({ handleClick }) => {
	const [value, setValue] = React.useState("");

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = () => {
		if (value.length > 0) {
			handleClick(value);
		} else {
			alert("Please enter a grocery item!");
		}
		setValue("");
	};
	return (
		<>
			<input
				type="text"
				name=""
				id=""
				onChange={handleChange}
				value={value}
				placeholder="Type Grocery Item"
			/>
			<button onClick={handleSubmit}>Add</button>
		</>
	);
};

export default GroceryInput;
