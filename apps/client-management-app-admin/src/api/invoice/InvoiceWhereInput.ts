import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BillingListRelationFilter } from "../billing/BillingListRelationFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type InvoiceWhereInput = {
  amount?: FloatNullableFilter;
  billings?: BillingListRelationFilter;
  client?: ClientWhereUniqueInput;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  issueDate?: DateTimeNullableFilter;
};
