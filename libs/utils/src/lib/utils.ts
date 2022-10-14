import { Year } from "@parks/graphql-client";

export function currentYear(): Year {
  return new Date().getUTCFullYear();
}
