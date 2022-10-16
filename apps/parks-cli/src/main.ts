import { getNextYear, Year } from "@parks/graphql-client";

const nextYear: Year = getNextYear();
console.log(`Next year is ${nextYear}`);
