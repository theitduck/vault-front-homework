import React from "react";
import NotificationItemTransaction from "./notification-item-transaction";
import NotificationItemAccountCreated from "./notification-item-account-created";
import {
  AccountCreatedNotificationItemProps,
  NotificationProps,
  NotificationTypes,
  TransactionNotificationItemProps,
} from "../../types";

type NotificationItemProps = {
  notification: NotificationProps
};

const NotificationItem = ({ notification }: NotificationItemProps) => {
  const { data, type, id } = notification;
  const isTransactionNotification = type === NotificationTypes.TRANSACTION_SENT || type === NotificationTypes.TRANSACTION_RECEIVED;
  const isAccountCreatedNotification = type === NotificationTypes.ACCOUNT_CREATED;
  return (
    <div className="flex border border-gray-200 rounded-lg shadow my-4">
      {isTransactionNotification  && <NotificationItemTransaction data={data as TransactionNotificationItemProps} type={type} id={id} />}
      {isAccountCreatedNotification && <NotificationItemAccountCreated data={data as AccountCreatedNotificationItemProps} />}
    </div>
  );
};

export default NotificationItem;