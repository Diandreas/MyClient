import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";

export type BillingWhereInput = {
  amountDue?: FloatNullableFilter;
  billingDate?: DateTimeNullableFilter;
  client?: ClientWhereUniqueInput;
  id?: StringFilter;
  invoice?: InvoiceWhereUniqueInput;
};
