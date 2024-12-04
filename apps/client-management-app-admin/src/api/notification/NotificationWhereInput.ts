import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type NotificationWhereInput = {
  client?: ClientWhereUniqueInput;
  id?: StringFilter;
  message?: StringNullableFilter;
  notificationType?: StringNullableFilter;
  sentAt?: DateTimeNullableFilter;
};
