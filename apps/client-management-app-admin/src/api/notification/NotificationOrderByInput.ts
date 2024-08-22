import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  notificationType?: SortOrder;
  sentAt?: SortOrder;
  updatedAt?: SortOrder;
};
