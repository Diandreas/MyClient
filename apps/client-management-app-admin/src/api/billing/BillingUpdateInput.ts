import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";

export type BillingUpdateInput = {
  amountDue?: number | null;
  billingDate?: Date | null;
  client?: ClientWhereUniqueInput | null;
  invoice?: InvoiceWhereUniqueInput | null;
};
