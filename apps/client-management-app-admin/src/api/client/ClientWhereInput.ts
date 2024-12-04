import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BillingListRelationFilter } from "../billing/BillingListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";

export type ClientWhereInput = {
  address?: StringNullableFilter;
  billings?: BillingListRelationFilter;
  birthday?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  invoices?: InvoiceListRelationFilter;
  name?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  phoneNumber?: StringNullableFilter;
};
