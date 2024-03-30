import { Recipe } from "@cooklang/cooklang-ts";
import z from "zod";
import type { AstroIntegration, DataEntryType, HookParameters } from "astro";

const shoppingItemSchema = z.object({
  name: z.string(),
  synonym: z.string().optional(),
});

const ingredientSchema = z.object({
  type: z.literal("ingredient"),
  name: z.string(),
  quantity: z.number(),
  units: z.string(),
});

const cookwareSchema = z.object({
  type: z.literal("cookware"),
  name: z.string(),
  quantity: z.number(),
});

const timerSchema = z.object({
  type: z.literal("timer"),
  quantity: z.number(),
  units: z.string(),
});

const stepItemSchema = z.union([
  z.object({
    type: z.literal("text"),
    value: z.string(),
  }),
  ingredientSchema,
  cookwareSchema,
  timerSchema,
]);

export const recipeSchema = {
  slug: z.string().optional(),
  ingredients: z.array(ingredientSchema).default([]),
  cookwares: z.array(cookwareSchema).default([]),
  metadata: z.any().optional(),
  steps: z.array(z.array(stepItemSchema)).default([]),
  shoppingList: z.record(shoppingItemSchema).optional(),
};

type SetupHookParams = HookParameters<"astro:config:setup"> & {
  addPageExtension: (extension: string) => void;
  addDataEntryType: (dataEntryType: DataEntryType) => void;
};

type EntryInfoInput = {
  fileUrl: URL;
  contents: string;
};

type EntryInfoOutput = {
  data: Record<string, unknown>;
  rawData: string;
  body: string;
  slug: string;
};

function getEntryInfo({ fileUrl, contents }: EntryInfoInput): EntryInfoOutput {
  const recipe = new Recipe(contents, {
    defaultCookwareAmount: 1,
    defaultIngredientAmount: 1,
  });

  const { ingredients, cookwares, metadata, steps, shoppingList } = recipe;

  let slug = metadata.slug;

  if (!slug) {
    slug = (fileUrl.pathname.split("/").pop() || "")
      .toLowerCase()
      .replace('.cook', '') 
      .split(" ")
      .join("-");
  }
  const data = {
    ...metadata,
    slug,
    cookwares,
    ingredients,
    metadata,
    shoppingList,
    steps,
  };
  return {
    slug,
    data,
    body: contents,
    rawData: contents,
  };
}

export default function cooklangIntegration(): AstroIntegration {
  return {
    name: "@astrojs/cooklang",
    hooks: {
      "astro:config:setup": async (params) => {
        const { addDataEntryType } = params as SetupHookParams;

        addDataEntryType({
          extensions: [".cook"],
          getEntryInfo,
        });
      },
    },
  };
}
