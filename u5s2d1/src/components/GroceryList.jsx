import React from "react";
const GroceryList = ({ groceries, deleteItem }) => {
	return (
		<div>
			<h2>Grocery List</h2>

			<ol>
				{groceries.map(({ id, listTitle }) => {
					return (
						<div key={id}>
							<li>{listTitle}</li>
							<button
								onClick={() => {
									deleteItem(id);
								}}
							>
								Delete
							</button>
						</div>
					);
				})}
			</ol>
		</div>
	);
};

export default GroceryList;
