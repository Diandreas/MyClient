import { Billing } from "../billing/Billing";
import { Invoice } from "../invoice/Invoice";
import { Notification } from "../notification/Notification";

export type Client = {
  address: string | null;
  billings?: Array<Billing>;
  birthday: Date | null;
  createdAt: Date;
  email: string | null;
  id: string;
  invoices?: Array<Invoice>;
  name: string | null;
  notifications?: Array<Notification>;
  phoneNumber: string | null;
  updatedAt: Date;
};
