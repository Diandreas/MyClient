import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type NotificationCreateInput = {
  client?: ClientWhereUniqueInput | null;
  message?: string | null;
  notificationType?: string | null;
  sentAt?: Date | null;
};