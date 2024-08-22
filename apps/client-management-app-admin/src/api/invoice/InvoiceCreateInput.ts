import { BillingCreateNestedManyWithoutInvoicesInput } from "./BillingCreateNestedManyWithoutInvoicesInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type InvoiceCreateInput = {
  amount?: number | null;
  billings?: BillingCreateNestedManyWithoutInvoicesInput;
  client?: ClientWhereUniqueInput | null;
  dueDate?: Date | null;
  issueDate?: Date | null;
};
