import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

const mockData = [
	{
		id: 1,
		type: 'TRANSACTION_RECEIVED',
		data: {
			id: 1,
			amount: 4,
			unit: 'ETH',
			from: '0xe5e428cbb93a218dad2c908f2f3e2f46575d91a5',
			to: '0x5ed8cee6b63b1c6afce3ad7c92f4fd7e1b8fad9f',
		},
	},
	{
		id: 2,
		type: 'ACCOUNT_CREATED',
		data: {
			id: 2,
			name: 'Big BTC account',
			currency: 'bitcoin',
		},
	},
	{
		id: 3,
		type: 'TRANSACTION_SENT',
		data: {
			id: 3,
			amount: 1246,
			unit: 'XTZ',
			to: 'tz1aiA3JtWw1hPTmmc9uyXK4boY2EjbRCPQ6',
			from: 'tz1gE2Re6TdVLRPh2ZqxZnGkE5WPWEQHHkfS',
		},
	},
];

window.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => mockData,
	})
) as jest.Mock;

describe('App Component', () => {
	beforeEach(() => {
		(fetch as jest.Mock).mockClear();
	});

	test('renders the App component', async () => {
		render(<App />);
		expect(screen.getByPlaceholderText('Type to filter events')).toBeInTheDocument();
	});

	test('shows loading indicator when fetching data', async () => {
		render(<App />);

		await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());
		fireEvent.change(screen.getByPlaceholderText('Type to filter events'), {
			target: { value: 'test' },
		});
		expect(screen.getByText('Loading...')).toBeInTheDocument();
	});

	test('shows results when data is fetched', async () => {
		render(<App />);

		await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());

		expect(screen.getByText('from 0xe5e428cbb93a218dad2c908f2f3e2f46575d91a5')).toBeInTheDocument();
		expect(screen.getByText('Big BTC account')).toBeInTheDocument();
		expect(screen.getByText('to tz1aiA3JtWw1hPTmmc9uyXK4boY2EjbRCPQ6')).toBeInTheDocument();
	});

	test('should render empty list component when no results found', async () => {
		(fetch as jest.Mock).mockImplementationOnce(() => Promise.resolve({ json: () => [] }));

		render(<App />);

		await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());
		expect(screen.getByText('No results found...')).toBeInTheDocument();
	});

	test('should render empty list component when fetch get errors', async () => {
		(fetch as jest.Mock).mockImplementationOnce(() => Promise.reject('API is down'));

		render(<App />);

		await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());
		expect(screen.getByText('No results found...')).toBeInTheDocument();
	});
});
