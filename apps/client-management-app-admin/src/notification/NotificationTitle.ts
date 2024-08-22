import { Notification as TNotification } from "../api/notification/Notification";

export const NOTIFICATION_TITLE_FIELD = "notificationType";

export const NotificationTitle = (record: TNotification): string => {
  return record.notificationType?.toString() || String(record.id);
};
