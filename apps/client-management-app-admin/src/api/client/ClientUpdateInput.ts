import { BillingUpdateManyWithoutClientsInput } from "./BillingUpdateManyWithoutClientsInput";
import { InvoiceUpdateManyWithoutClientsInput } from "./InvoiceUpdateManyWithoutClientsInput";
import { NotificationUpdateManyWithoutClientsInput } from "./NotificationUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  address?: string | null;
  billings?: BillingUpdateManyWithoutClientsInput;
  birthday?: Date | null;
  email?: string | null;
  invoices?: InvoiceUpdateManyWithoutClientsInput;
  name?: string | null;
  notifications?: NotificationUpdateManyWithoutClientsInput;
  phoneNumber?: string | null;
};
