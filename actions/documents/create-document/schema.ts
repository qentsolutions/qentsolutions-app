import { z } from "zod";

export const CreateDocument = z.object({
  title: z.string({
    required_error: "Title is required",
    invalid_type_error: "Title is required",
  }),
  workspaceId: z.string(),
});