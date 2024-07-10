import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotificationListLoading from './notification-list-loading';

describe('App Component', () => {
	test('should render component properly', () => {
		render(<NotificationListLoading />);

		// Check for the text content
		expect(screen.getByText('Loading...')).toBeInTheDocument();
	});
});
