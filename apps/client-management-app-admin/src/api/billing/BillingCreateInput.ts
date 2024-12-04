import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";

export type BillingCreateInput = {
  amountDue?: number | null;
  billingDate?: Date | null;
  client?: ClientWhereUniqueInput | null;
  invoice?: InvoiceWhereUniqueInput | null;
};
