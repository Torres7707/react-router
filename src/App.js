import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Header = () => (
	<ul>
		<li>
			<Link to="/">Home</Link>
		</li>
		<li>
			<Link to="/about">About</Link>
		</li>
		<li>
			<Link to="/topics">Topics</Link>
		</li>
	</ul>
);

const Home = () => <h2>Home</h2>;
const About = (props) => {
	console.log(props);
	return <h2>About</h2>;
};
const Topic = (props) => {
	console.log('match11', props.match, props);
	return (
		<h3>
			Requested param:{props.match.params.id}
			{/* <Link to={`${match.url}/about`}>aaaabbbbooouuuttt</Link>
			<Route path={`${match.path}/:asdf`} component={About} /> */}
		</h3>
	);
};
const Topics = ({ match }) => {
	console.log('match', match);
	return (
		<div>
			<h2>Topics</h2>
			<ul>
				<li>
					<Link to={`${match.url}/components`}>components</Link>
				</li>
				<li>
					<Link to={`${match.url}/props-v-state`}>Props v. State</Link>
				</li>
			</ul>
			<Route
				exact
				path={match.path}
				render={() => <h3>Please select a topic.</h3>}
			/>
			<Route path={`${match.path}/:id`} component={Topic} />
		</div>
	);
};

const App = () => (
	<Router>
		<div>
			<Header />
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/topics" component={Topics} />
		</div>
	</Router>
);

export default App;
