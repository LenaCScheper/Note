import 'App.css';
import { SideBar } from './components/SideBar/SideBar';
import 'index.css';


function App() {
	return (
		<div className='App'>
			<SideBar />
			<ListItem />
			<Workspace />
			<SearchBox />
		</div>
	);
}

function ListItem() {
	return <div></div>;
}

function Workspace() {
	return <div></div>;
}

function SearchBox() {
	return <div></div>;
}

export default App;
