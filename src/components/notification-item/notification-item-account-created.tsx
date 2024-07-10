import React from 'react';
import { AccountCreatedNotificationItemProps } from '../../types';

const NotificationItemAccountCreated = ({ data }: { data: AccountCreatedNotificationItemProps }) => {
	const { currency, name } = data;
	return (
		<div className="flex py-3 px-2 w-full">
			<div className="flex-none h-4 w-4 bg-yellow-400 rotate-45 transform self-center shadow"></div>
			<div className="flex-none pl-2 uppercase">{currency}</div>
			<div className="grow pl-2 truncate max-w-fit">
				Account <span className="italic font-medium">{name}</span> created
			</div>
		</div>
	);
};

export default NotificationItemAccountCreated;
