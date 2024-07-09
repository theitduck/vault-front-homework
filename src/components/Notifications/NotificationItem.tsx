import React from "react";
import TransactionNotificationItem from "./TransactionNotificationItem";
import AccountCreatedNotificationItem from "./AccountCreatedNotificationItem";
import {
  AccountCreatedNotificationItemProps,
  NotificationItemProps,
  NotificationTypes,
  TransactionNotificationItemProps,
} from "../../types";

const NotificationItem = ({ item }: { item: NotificationItemProps }) => {
  const { data, type, id } = item;
  const isTransactionNotification = type === NotificationTypes.TRANSACTION_SENT || type === NotificationTypes.TRANSACTION_RECEIVED;
  const isAccountCreatedNotification = type === NotificationTypes.ACCOUNT_CREATED;
  return (
    <div className="flex border border-gray-200 rounded-lg shadow my-4">
      {isTransactionNotification  && <TransactionNotificationItem data={data as TransactionNotificationItemProps} type={type} id={id} />}
      {isAccountCreatedNotification && <AccountCreatedNotificationItem data={data as AccountCreatedNotificationItemProps} />}
    </div>
  );
};

export default NotificationItem;