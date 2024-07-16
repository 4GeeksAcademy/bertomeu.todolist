import React from "react";

//include images into your bundle
import TodoList from "./TodoList";
import Navbar from "./Navbar";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<TodoList />

		
		</div>
	);
};

export default Home;
