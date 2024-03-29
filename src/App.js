import "./App.css";
import Header from "./Header.js";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
	return (
		// BEM class naming convention
		<div className="app">
			<Header></Header>
			<TinderCards></TinderCards>
			<SwipeButtons></SwipeButtons>
		</div>
	);
}

export default App;
