import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotificationList from './notification-list';
import { NotificationTypes } from '../../types';

describe('NotificationList Component', () => {
	test('should render component correctly', () => {
		const mockData = [
			{
				id: 1,
				type: NotificationTypes.TRANSACTION_RECEIVED,
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
				type: NotificationTypes.ACCOUNT_CREATED,
				data: {
					id: 2,
					name: 'Big BTC account',
					currency: 'bitcoin',
				},
			},
			{
				id: 3,
				type: NotificationTypes.TRANSACTION_SENT,
				data: {
					id: 3,
					amount: 1246,
					unit: 'XTZ',
					to: 'tz1aiA3JtWw1hPTmmc9uyXK4boY2EjbRCPQ6',
					from: 'tz1gE2Re6TdVLRPh2ZqxZnGkE5WPWEQHHkfS',
				},
			},
		];
		render(<NotificationList notifications={mockData} />);

		// Check for the text content
		expect(screen.getByText(`Big BTC account`)).toBeInTheDocument();
		expect(screen.getByText('from 0xe5e428cbb93a218dad2c908f2f3e2f46575d91a5')).toBeInTheDocument();
		expect(screen.getByText('to tz1aiA3JtWw1hPTmmc9uyXK4boY2EjbRCPQ6')).toBeInTheDocument();
	});
});
