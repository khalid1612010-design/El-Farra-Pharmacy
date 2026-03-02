import { z } from "zod";

// This is a static informational site. No database tables are needed.
// Exporting a dummy schema to ensure the file exists.
export const dummySchema = z.object({
  status: z.string(),
});
