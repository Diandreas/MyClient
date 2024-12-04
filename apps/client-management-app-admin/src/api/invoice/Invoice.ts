import { Billing } from "../billing/Billing";
import { Client } from "../client/Client";

export type Invoice = {
  amount: number | null;
  billings?: Array<Billing>;
  client?: Client | null;
  createdAt: Date;
  dueDate: Date | null;
  id: string;
  issueDate: Date | null;
  updatedAt: Date;
};
