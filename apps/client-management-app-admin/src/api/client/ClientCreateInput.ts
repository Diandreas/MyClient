import { BillingCreateNestedManyWithoutClientsInput } from "./BillingCreateNestedManyWithoutClientsInput";
import { InvoiceCreateNestedManyWithoutClientsInput } from "./InvoiceCreateNestedManyWithoutClientsInput";
import { NotificationCreateNestedManyWithoutClientsInput } from "./NotificationCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  address?: string | null;
  billings?: BillingCreateNestedManyWithoutClientsInput;
  birthday?: Date | null;
  email?: string | null;
  invoices?: InvoiceCreateNestedManyWithoutClientsInput;
  name?: string | null;
  notifications?: NotificationCreateNestedManyWithoutClientsInput;
  phoneNumber?: string | null;
};
