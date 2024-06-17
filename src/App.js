import logo from './logo.svg';
import './App.css';

export const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>{new Date().getFullYear()}</p>
			</header>
		</div>
	);
};

// На мой взгляд, здесь всё относится к декларативному стилю,
// может быть только за исключением конкретного текста на 10 и 18 строке,
// где мы императивно его указываем.
// Но этот момент тоже можно свести к декларативности, если допустим текс приходит с сервера,
// и мы его вставляем через какой-то функционал.
