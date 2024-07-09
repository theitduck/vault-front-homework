import React from "react";
import NotificationItem from "./NotificationItem";
import { NotificationItemProps } from "../../types";

const NotificationList = ({ notifications }: { notifications: NotificationItemProps[]; }) => {
  return (
    <>
      {notifications.map((notification) => <NotificationItem key={notification.id.toString()} item={notification} />)}
    </>
  );
};

export default NotificationList;