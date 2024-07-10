import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotificationItemAccountCreated from './notification-item-account-created';

describe('NotificationItemAccountCreated Component', () => {
	test('should render component correctly', () => {
		const mockData = {
			id: 2,
			name: 'Big BTC account',
			currency: 'bitcoin',
		};
		render(<NotificationItemAccountCreated data={mockData} />);

		// Check for the text content
		expect(screen.getByText('bitcoin')).toBeInTheDocument();
		expect(screen.getByText(`Big BTC account`)).toBeInTheDocument();
	});
});
