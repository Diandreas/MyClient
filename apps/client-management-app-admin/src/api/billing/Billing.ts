import { Client } from "../client/Client";
import { Invoice } from "../invoice/Invoice";

export type Billing = {
  amountDue: number | null;
  billingDate: Date | null;
  client?: Client | null;
  createdAt: Date;
  id: string;
  invoice?: Invoice | null;
  updatedAt: Date;
};
