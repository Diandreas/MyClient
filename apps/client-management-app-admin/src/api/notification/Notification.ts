import { Client } from "../client/Client";

export type Notification = {
  client?: Client | null;
  createdAt: Date;
  id: string;
  message: string | null;
  notificationType: string | null;
  sentAt: Date | null;
  updatedAt: Date;
};
