import { Recipe } from "@cooklang/cooklang-ts";
import z from "zod";
// import type { AstroComponentFactory } from "astro";
import type {
  AstroIntegration,
  ContentEntryModule,
  ContentEntryType,
  HookParameters,
} from "astro";

// TODO: Use template to render default content display.
type ContentTemplate = void;

export interface AstroCooklangConfig {
  contentTemplate?: ContentTemplate;
}

// export interface CooklangInstance<T extends Record<string, any>> {
//   cookwares: object;
//   ingredients: object;
//   metadata: object;
//   shoppingList: object;
//   steps: object;

//   /** Component to render content in `.astro` files. Usage: `<Content />` */
//   Content: AstroComponentFactory;
//   default: AstroComponentFactory;
// }

//
// Content schemas...
//

const shoppingItemSchema = z.object({
  name: z.string(),
  synonym: z.string().optional(),
});

export const recipeSchema = {
  ingredients: z.array(z.any()).default([]),
  cookwares: z.array(z.any()).default([]),
  metadata: z.any().optional(),
  steps: z.array(z.array(z.any())).default([]),
  shoppingList: z.record(shoppingItemSchema).optional(),
};


type SetupHookParams = HookParameters<'astro:config:setup'> & {
	// `addPageExtension` and `contentEntryType` are not a public APIs
	// Add type defs here
	addPageExtension: (extension: string) => void;
	addContentEntryType: (contentEntryType: ContentEntryType) => void;
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

/**
 * Load recipe from file contents and extract data.
 *
 * Output is used to build the collection entry item.
 *
 * @see https://docs.astro.build/en/reference/api-reference/#collection-entry-type
 */
function getEntryInfo({ fileUrl, contents }: EntryInfoInput): EntryInfoOutput {
  // Parse the recipe...
  console.log('hello')
  const recipe = new Recipe(contents);
//   console.log(recipe);

  // Extract parts.
  const { ingredients, cookwares, metadata, steps, shoppingList } = recipe;

  // TODO: Attempt to deserialize metadata into collection's schema format as
  //       defined in the content config.
  //
  // https://github.com/kauhat/astro-cooklang-integration/issues/7

  // TODO: Find images matching recipe name fitting spec conventions.
  //
  // I don't think we'll be able to use `getImageURL()` here, we probably need
  // to search the content directory for multiple image extensions.
  //
  // https://cooklang.org/docs/spec/#adding-pictures
  // https://cooklang.github.io/cooklang-ts/modules.html#getImageURL.
  //
  // https://github.com/kauhat/astro-cooklang-integration/issues/3

  const data = {
    // Add recipe metadata properties as top level.
    ...metadata,

    cookwares,
    ingredients,
    metadata,
    shoppingList,
    steps,
  };

  return {
    slug: metadata.slug,
    data,
    body: contents, // Should we use body or rawData for the recipe source?
    rawData: contents,
  };
}

//
// Using the data that was setup when handling the entry above, we generate a
// module will allow us to display recipes in pages.
//
// The module returns a `<Content />` component.
//
// TODO: Allow content component to be customized. (see `ContentTemplate`)
//

type RenderModuleInput = {
contents: string;

  entry: ContentEntryModule;
  viteId: string;
};

// type RenderModuleOutput = SourceDescription & { [additonal: string]: any };

/**
 * Build a bundleable module from recipe entry data.
 *
 * Output is used to build the collection entry item.
 *
 * @see https://docs.astro.build/en/reference/api-reference/#collection-entry-type
 */
// async function getRenderModule({
//     contents,
//   viteId,
//   entry,
// }: RenderModuleInput): Promise<RenderModuleOutput> {
//   const { body, data } = entry;
//   const { cookwares, ingredients, metadata, shoppingList, steps } = data;

//   const code = `
// import { jsx as h } from "astro/jsx-runtime";

// // TODO: How can we load a user given renderer?
// import Renderer from 'astro-cooklang/Renderer.astro';

// /**
//  * Source cooklang file.
//  */
// const raw = ${JSON.stringify(body)}

// /**
//  * Parsed recipe data.
//  */
// export const {
//   cookwares,
//   ingredients,
//   metadata,
//   shoppingList,
//   steps,
// } = ${JSON.stringify({ cookwares, ingredients, metadata, shoppingList, steps })}

// /**
//  * Use renderer component for file entry's <Content/> display.
//  */
// export async function Content (props) {
//   return h(
//     Renderer,
//     {
//       raw,

//       ingredients,
//       cookwares,
//       metadata,
//       steps,
//       shoppingList,
//     }
//   );
// }

// export default Content
// `;

//   return {
//     code,
//     vite: {
//       lang: "ts",
//     },
//   };
// }

// Types for the render module's Content component.
const contentTypesTemplate = `
declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}
}`;

/**
 * Our main Astro integration...
 */
export default function cooklangIntegration(
  inputConfig: AstroCooklangConfig = {}
): AstroIntegration {
  return {
    name: "@astrojs/cooklang",
    hooks: {
      "astro:config:setup": async (params) => {
        const { updateConfig, config, addPageExtension, addContentEntryType, addRenderer } =
        params as SetupHookParams;


        // addPageExtension(".cook");
        addContentEntryType({
          extensions: [".cook"],
          getEntryInfo,
          contentModuleTypes: contentTypesTemplate,
        });
      },
    },
  };
}