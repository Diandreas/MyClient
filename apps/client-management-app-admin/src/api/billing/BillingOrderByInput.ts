import { SortOrder } from "../../util/SortOrder";

export type BillingOrderByInput = {
  amountDue?: SortOrder;
  billingDate?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  invoiceId?: SortOrder;
  updatedAt?: SortOrder;
};
