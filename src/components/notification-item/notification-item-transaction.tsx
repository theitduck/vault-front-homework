import React from 'react';
import { NotificationProps, NotificationTypes, TransactionNotificationItemProps } from '../../types';

const NotificationItemTransaction = ({ data, type }: NotificationProps) => {
	const { amount, to, from, unit } = data as TransactionNotificationItemProps;
	if (type === NotificationTypes.TRANSACTION_RECEIVED) {
		return (
			<div className="flex py-3 px-2 w-full">
				<div className="flex-none rounded-full w-4 h-4 bg-green-400 self-center shadow"></div>
				<div className="flex-none pl-2">
					Received {amount} {unit}
				</div>
				<div className="grow pl-2 truncate max-w-fit">from {from}</div>
			</div>
		);
	}

	if (type === NotificationTypes.TRANSACTION_SENT) {
		return (
			<div className="flex py-3 px-2 w-full">
				<div className="flex-none rounded-full w-4 h-4 bg-red-400 self-center shadow"></div>
				<div className="flex-none pl-2">
					Sent {amount} {unit}
				</div>
				<div className="grow pl-2 truncate max-w-fit">to {to}</div>
			</div>
		);
	}

	return null;
};

export default NotificationItemTransaction;
