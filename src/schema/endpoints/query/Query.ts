import { OpenAPIV3 } from "openapi-types";

export const QuerySuccess: OpenAPIV3.SchemaObject = {
  type: "object",
  properties: {
    id: {
      title: "id",
      type: "number",
    },
    userId: {
      title: "userId",
      type: "number",
    },
    createdAt: {
      title: "createdAt",
      type: "string",
    },
  },
};
