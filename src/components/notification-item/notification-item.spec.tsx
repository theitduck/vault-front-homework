import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotificationItem from './notification-item';
import { NotificationTypes } from '../../types';

describe('NotificationItem Component', () => {
	test('should render NotificationItemTransaction component when type NotificationTypes.TRANSACTION_RECEIVED passed', () => {
		const mockData = {
			id: 1,
			type: NotificationTypes.TRANSACTION_RECEIVED,
			data: {
				id: 1,
				amount: 4,
				unit: 'ETH',
				from: '0xe5e428cbb93a218dad2c908f2f3e2f46575d91a5',
				to: '0x5ed8cee6b63b1c6afce3ad7c92f4fd7e1b8fad9f',
			},
		};
		render(<NotificationItem notification={mockData} />);

		// Check for the text content
		expect(screen.getByText('Received 4 ETH')).toBeInTheDocument();
		expect(screen.getByText('from 0xe5e428cbb93a218dad2c908f2f3e2f46575d91a5')).toBeInTheDocument();
	});

	test('should render NotificationItemTransaction component when type NotificationTypes.TRANSACTION_SENT passed', () => {
		const mockData = {
			id: 1,
			type: NotificationTypes.TRANSACTION_SENT,
			data: {
				id: 1,
				amount: 4,
				unit: 'ETH',
				from: '0xe5e428cbb93a218dad2c908f2f3e2f46575d91a5',
				to: '0x5ed8cee6b63b1c6afce3ad7c92f4fd7e1b8fad9f',
			},
		};
		render(<NotificationItem notification={mockData} />);

		// Check for the text content
		expect(screen.getByText('Sent 4 ETH')).toBeInTheDocument();
		expect(screen.getByText('to 0x5ed8cee6b63b1c6afce3ad7c92f4fd7e1b8fad9f')).toBeInTheDocument();
	});

	test('should render NotificationItemAccountCreated component when type NotificationTypes.ACCOUNT_CREATED passed', () => {
		const mockData = {
			id: 1,
			type: NotificationTypes.ACCOUNT_CREATED,
			data: {
				id: 2,
				name: 'Big BTC account',
				currency: 'bitcoin',
			},
		};
		render(<NotificationItem notification={mockData} />);

		// Check for the text content
		expect(screen.getByText('bitcoin')).toBeInTheDocument();
		expect(screen.getByText(`Big BTC account`)).toBeInTheDocument();
	});
});
