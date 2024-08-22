import { BillingUpdateManyWithoutInvoicesInput } from "./BillingUpdateManyWithoutInvoicesInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type InvoiceUpdateInput = {
  amount?: number | null;
  billings?: BillingUpdateManyWithoutInvoicesInput;
  client?: ClientWhereUniqueInput | null;
  dueDate?: Date | null;
  issueDate?: Date | null;
};
