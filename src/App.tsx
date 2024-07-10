import React, { useEffect, useState } from 'react';
import { NotificationProps } from './types';
import TextInput from './components/text-input';
import NotificationList from './components/notification-list/notification-list';
import NotificationListLoading from './components/notification-list/notification-list-loading';
import NotificationListEmpty from './components/notification-list/notification-list-empty';

const API = 'http://localhost:5001';

const App = () => {
	const [searchText, setSearchText] = useState('');
	const [isLoading, setLoading] = useState(false);
	const [results, setResults] = useState<null | NotificationProps[]>(null);

	useEffect(() => {
		const effect = async () => {
			try {
				setLoading(true);
				const res = await fetch(`${API}/search?q=${searchText}`);
				const data = await res.json();
				setResults(data);
				setLoading(false);
			} catch (e) {
				setLoading(false);
				console.log(e);
			}
		};
		effect();
	}, [searchText, setLoading, setResults]);

	const hasResults = results && results.length > 0;

	return (
		<div className="container mx-auto sm:px-4 md:px-16">
			<div className="pb-4">
				<TextInput value={searchText} onChange={setSearchText} placeholder="Type to filter events" />
			</div>
			{isLoading && <NotificationListLoading />}
			{!isLoading && !hasResults && <NotificationListEmpty />}
			{!isLoading && hasResults && <NotificationList notifications={results} />}
		</div>
	);
};

export default App;
