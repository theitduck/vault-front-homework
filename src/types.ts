export type TransactionNotificationItemProps = {
  id: number;
  amount: number;
  unit: string;
  from: string;
  to: string;
};

export type AccountCreatedNotificationItemProps = {
  id: number;
  name: string;
  currency: string;
};

export enum NotificationTypes {
  TRANSACTION_RECEIVED = "TRANSACTION_RECEIVED",
  ACCOUNT_CREATED = "ACCOUNT_CREATED",
  TRANSACTION_SENT = "TRANSACTION_SENT"
}

export type NotificationItemProps = {
  id: number;
  type: NotificationTypes;
  data: TransactionNotificationItemProps | AccountCreatedNotificationItemProps;
};