import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotificationListEmpty from './notification-list-empty';

describe('App Component', () => {
	test('should render component properly', () => {
		render(<NotificationListEmpty />);

		// Check for the text content
		expect(screen.getByText('No results found...')).toBeInTheDocument();
	});
});
