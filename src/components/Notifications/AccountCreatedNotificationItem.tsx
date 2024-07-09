import React from "react";
import { AccountCreatedNotificationItemProps } from "../../types";

const AccountCreatedNotificationItem = ({ data }: { data: AccountCreatedNotificationItemProps }) => {
  const { currency, name } = data;
  return (
    <div className="flex py-3 px-2">
      <div className="h-4 w-4 bg-yellow-400 rotate-45 transform self-center shadow"></div>
      <div className="pl-2 uppercase">{currency}</div>
      <div className="pl-2">
        Account <span className="text-zinc-700 italic">{name}</span> created
      </div>
    </div>
  );
};

export default AccountCreatedNotificationItem;
