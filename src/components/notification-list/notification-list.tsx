import React from 'react';
import NotificationItem from '../notification-item/notification-item';
import { NotificationProps } from '../../types';

type NotificationListProps = {
	notifications: NotificationProps[];
};

const NotificationList = ({ notifications }: NotificationListProps) => {
	return (
		<>
			{notifications.map((notification) => (
				<NotificationItem key={notification.id.toString()} notification={notification} />
			))}
		</>
	);
};

export default NotificationList;
