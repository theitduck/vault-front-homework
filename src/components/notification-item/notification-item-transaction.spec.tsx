import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotificationItemTransaction from './notification-item-transaction';
import { NotificationTypes } from '../../types';

describe('NotificationItemTransaction Component', () => {
	test('should render NotificationItemTransaction component when type NotificationTypes.TRANSACTION_RECEIVED passed', () => {
		const mockData = {
			id: 3,
			amount: 1246,
			unit: 'XTZ',
			to: 'tz1aiA3JtWw1hPTmmc9uyXK4boY2EjbRCPQ6',
			from: 'tz1gE2Re6TdVLRPh2ZqxZnGkE5WPWEQHHkfS',
		};
		render(<NotificationItemTransaction id={mockData.id} data={mockData} type={NotificationTypes.TRANSACTION_RECEIVED} />);

		// Check for the text content
		expect(screen.getByText('Received 1246 XTZ')).toBeInTheDocument();
		expect(screen.getByText('from tz1gE2Re6TdVLRPh2ZqxZnGkE5WPWEQHHkfS')).toBeInTheDocument();
	});

	test('should render NotificationItemTransaction component when type NotificationTypes.TRANSACTION_SENT passed', () => {
		const mockData = {
			id: 3,
			amount: 1246,
			unit: 'XTZ',
			to: 'tz1aiA3JtWw1hPTmmc9uyXK4boY2EjbRCPQ6',
			from: 'tz1gE2Re6TdVLRPh2ZqxZnGkE5WPWEQHHkfS',
		};
		render(<NotificationItemTransaction id={mockData.id} data={mockData} type={NotificationTypes.TRANSACTION_SENT} />);

		// Check for the text content
		expect(screen.getByText('Sent 1246 XTZ')).toBeInTheDocument();
		expect(screen.getByText('to tz1aiA3JtWw1hPTmmc9uyXK4boY2EjbRCPQ6')).toBeInTheDocument();
	});

	test('should render null when wrong type props passed', () => {
		const mockData = {
			id: 3,
			amount: 1246,
			unit: 'XTZ',
			to: 'tz1aiA3JtWw1hPTmmc9uyXK4boY2EjbRCPQ6',
			from: 'tz1gE2Re6TdVLRPh2ZqxZnGkE5WPWEQHHkfS',
		};
		render(<NotificationItemTransaction id={mockData.id} data={mockData} type={NotificationTypes.ACCOUNT_CREATED} />);

		// Check for the text content
		expect(screen.queryByText('Sent 1246 XTZ')).not.toBeInTheDocument();
		expect(screen.queryByText('Received 1246 XTZ')).not.toBeInTheDocument();
	});
});
