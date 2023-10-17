/* eslint-disable no-use-before-define */
import type { Options as BrowserSyncOptions } from 'browser-sync';

type Join<S extends Array<string | number>, D extends string, > = S extends []
  ? ''
  : S extends [string | number]
  ? `${S[0]}`
  : S extends [string | number, ...infer Rest]
  // @ts-expect-error `Rest` is inferred as `unknown`
  ? `${S[0]}${D}${Join<Rest, D>}`
  : string;

type TemplateEngines = (
  | 'html'
  | 'md'
  | '11ty.js'
  | 'liquid'
  | 'njk'
  | 'hbs'
  | 'mustache'
  | 'ejs'
  | 'haml'
  | 'pug'
  | 'jstl'
);

type EventNamesDeprecated = (
  | 'beforeBuild'
  | 'beforeWatch'
  | 'afterBuild'
)

type EventNames = (
  | 'eleventy.before'
  | 'eleventy.after'
  | 'eleventy.beforeWatch'
)

// declare type Plugin<Options = undefined> = (
//   | PluginFunction<Options>
//   | PluginObject<Options>
// );

// interface PluginObject<Options> {
//   initArguments?: object;
//   configFunction: PluginFunction<Options>;
// }

// type PluginFunction<Options> = (eleventyConfig: EleventyConfig, options: Options) => void;

type AsyncFilter = (error: unknown | null, result?: any) => void;

interface Filters {
  /**
   * Liquid Filter
   *
   * [11ty Docs](https://www.11ty.dev/docs/filters/)
   */
  addLiquidFilter(filterName: string, filter: (...args: any[]) => string): void;
  /**
   * Handlebars Filter
   *
   * [11ty Docs](https://www.11ty.dev/docs/filters/)
   */
  addHandlebarsHelper(filterName: string, filter: (...args: any[]) => string): void;
  /**
   * JavaScript Function Filter
   *
   * [11ty Docs](https://www.11ty.dev/docs/filters/)
   */
  addJavaScriptFunction(filterName: string, filter: (...args: any[]) => string | PromiseLike<string>): void;
  /**
   * Nunjucks Async Filter
   *
   * [11ty Docs](https://www.11ty.dev/docs/filters/)
   */
  addNunjucksFilter(filterName: string, filter: (...args: any[]) => string): void;
  /**
   * Nunjucks Async Filter
   *
   * [11ty Docs](https://www.11ty.dev/docs/filters/)
   */
  addNunjucksAsyncFilter(filterName: string, filter: (callback: AsyncFilter) => void): void;
  /**
   * Nunjucks Async Filter
   *
   * [11ty Docs](https://www.11ty.dev/docs/filters/)
   */
  addNunjucksAsyncFilter(filterName: string, filter: (arg: any, callback: AsyncFilter) => void): void;
  /**
   * Nunjucks Async Filter
   *
   * [11ty Docs](https://www.11ty.dev/docs/filters/)
   */
  addNunjucksAsyncFilter(filterName: string, filter: (
    arg1: any,
    arg2: any,
    callback: AsyncFilter) => void
  ): void;
}

interface ShortCodes {
  /**
   * Liquid Sortcode
   *
   * [11ty Docs](https://www.11ty.dev/docs/shortcodes/#shortcodes)
   */
  addLiquidShortcode(
    shortcodeName: string,
    filter: (...args: any[]) => string | PromiseLike<string>
  ): void;
  /**
   * Nunjucks Sortcode
   *
   * [11ty Docs](https://www.11ty.dev/docs/shortcodes/#shortcodes)
   */
  addNunjucksShortcode(
    shortcodeName: string,
    filter: (...args: any[]) => string | PromiseLike<string>
  ): void;
  /**
   * Handlebars Sortcode
   *
   * [11ty Docs](https://www.11ty.dev/docs/shortcodes/#shortcodes)
   */
  addHandlebarsShortcode(
    shortcodeName: string,
    filter: (...args: any[]) => string
  ): void;
  /**
   * JavaScript Function Sortcode
   *
   * [11ty Docs](https://www.11ty.dev/docs/shortcodes/#shortcodes)
   */
  addJavaScriptFunction(
    shortcodeName: string,
    filter: (...args: any[]) => string | PromiseLike<string>
  ): void;
  /**
   * Liquid Paired Sortcode
   *
   * [11ty Docs](https://www.11ty.dev/docs/shortcodes/#paired-shortcodes)
   */
  addPairedLiquidShortcode(
    shortcodeName: string,
    filter: (content: string, ...args: any[]) => string | PromiseLike<string>
  ): void;
  /**
   * Nunjucks Paired Sortcode
   *
   * [11ty Docs](https://www.11ty.dev/docs/shortcodes/#paired-shortcodes)
   */
  addPairedNunjucksShortcode(
    shortcodeName: string,
    filter: (content: string, ...args: any[]) => string | PromiseLike<string>
  ): void;
  /**
   *Handlebars Paired Sortcode
   *
   * [11ty Docs](https://www.11ty.dev/docs/shortcodes/#paired-shortcodes)
   */
  addPairedHandlebarsShortcode(
    shortcodeName: string,
    filter: (content: string, ...args: any[]) => string
  ): void;
}

export declare interface PluginExtend {
  /**
   * Add an Eleventy Plugin.
   *
   * Plugins are custom code that Eleventy can import into a project
   * from an external repository.
   *
   * [11ty Docs](https://www.11ty.dev/docs/plugins/)
   */
   addPlugin<O, F extends (o: O) => unknown>(plugin: F, options?: O): void
}

export declare interface EleventyConfig extends Filters, ShortCodes, PluginExtend {
  /**
   * In order to maximize user-friendliness to beginners,
   * Eleventy will show each file it processes and the output file.
   * To disable this noisy console output, use quiet mode!
   *
   * [11ty Docs](https://www.11ty.dev/docs/config/#enable-quiet-mode-to-reduce-console-noise)
   *
   * ---
   *
   * @default false
   */
  setQuietMode(quiet: boolean): void;
  /**
   * Specify which types of templates should be transformed.
   *
   * [11ty Docs](https://www.11ty.dev/docs/config/#template-formats)
   *
   */
  setTemplateFormats(formats: readonly TemplateEngines[] | Join<TemplateEngines[], ','>): void;
  /**
   * Use a full deep merge when combining the Data Cascade.
   * This will use something similar to lodash.mergewith to
   * combine Arrays and deep merge Objects, rather than a simple
   * top-level merge using `Object.assign`
   *
   * [11ty Docs](https://www.11ty.dev/docs/data-deep-merge/)
   *
   * _As of Eleventy **1.0** this defaults to enabled (but API still exists for opt-out)._
   *
   */
  setDataDeepMerge(deepMerge: boolean): void;

  /**
   * Customize front matter parsing
   */
  setFrontMatterParsingOptions(options: any): void;

  /**
   * Watch JavaScript Dependencies
   *
   * When in `--watch` mode, Eleventy will spider the dependencies
   * of your JavaScript Templates (_.11ty.js_), JavaScript Data Files
   * or Configuration File (usually _.eleventy.js_)
   * to watch those files too.
   *
   * Files in node_modules directories are ignored. This feature is enabled by default.
   *
   * [11ty Docs](https://www.11ty.dev/docs/watch-serve/#watch-javascript-dependencies)
   */
  setWatchJavaScriptDependencies(watch: boolean): void;

  /**
   * Override BrowserSync Server Options
   *
   * Useful if you want to change or override the default Browsersync configuration.
   * Find the Eleventy defaults in EleventyServe.js. Take special note that Eleventy
   * does not use Browsersync’s watch options and trigger reloads manually after our
   * own internal watch methods are complete.
   *
   * [11ty Docs](https://www.11ty.dev/docs/watch-serve/#override-browsersync-server-options)
   *
   * _This only applies to Eleventy **1.x** and **0.x** and will be removed when
   * Eleventy **2.0** is stable. If you want to use Browsersync with Eleventy **2.0**,
   * learn how to [swap back to BrowserSync](https://www.11ty.dev/docs/watch-serve/#swap-back-to-browsersync)_
   */
  setBrowserSyncConfig(browserSyncOptions: BrowserSyncOptions): void;
  /**
   * Add Delay Before Re-Running
   *
   * A hardcoded amount of time Eleventy will wait before triggering a new build
   * when files have changes during --watch or --serve modes. You probably won’t
   * need this, but is useful in some edge cases with other task runners (Gulp, Grunt, etc).
   *
   * [11ty Docs](https://www.11ty.dev/docs/watch-serve/#add-delay-before-re-running)
   *
   * ---
   *
   * @default 0
   */
  setWatchThrottleWaitTime(ms: number): void;
  /**
   * Add Your Own Watch Targets
   *
   * The `addWatchTarget` config method allows you to manually add a
   * file or directory for Eleventy to watch. When the file or the
   * files in this directory change Eleventy will trigger a build.
   * This is useful if Eleventy is not directly aware of any external
   * file dependencies.
   *
   * [11ty Docs](https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets)
   */
  addWatchTarget(target: string): void;
  /**
   * Opt-out of using .gitignore
   *
   * You can disable automatic use of your `.gitignore` file. When using
   * `.gitignore` is disabled, `.eleventyignore` will be the single source
   * of truth for ignored files. This also means that your `node_modules`
   * directory will be processed unless otherwise specified in your
   * `.eleventyignore` file.
   *
   * [11ty Docs](https://www.11ty.dev/docs/ignores/#opt-out-of-using-.gitignore)
   */
  setUseGitIgnore(use: boolean): void;
  /**
   * You can programmatically add and delete ignores in your configuration file.
   *
   * [11ty Docs](https://www.11ty.dev/docs/ignores/#configuration-api)
   */
  ignores: Set<string>
  /**
   * Transforms
   *
   * These used to be called Filters but were renamed to Transforms to
   * avoid confusion with Template Language Filters. Transforms can modify
   * a template’s output. For example, use a transform to format/prettify
   * an HTML file with proper whitespace. The provided transform function
   * must return the original or transformed content.
   *
   * [11ty Docs](https://www.11ty.dev/docs/config/#transforms)
   */
  addTransform(name: string, transform: (
    content: string,
    outputPath: string) => string | PromiseLike<string>
  ): void;
  /**
   * Linters
   *
   * Similar to Transforms, Linters are provided to analyze a template's
   * output without modifying it.
   *
   * [11ty Docs](https://www.11ty.dev/docs/config/#linters)
   */
  addLinter(name: string, linter: (
      content: string,
      inputPath: string,
      outputPath: string
    ) => void
  ): void;

  /**
   * A Set of lodash selectors that allow you to include data from the
   * data cascade in the output from `--to=json`, `--to=ndjson`, or the
   * `EleventyServerless.prototype.getOutput` method.
   *
   * [11ty Docs](https://www.11ty.dev/docs/config/#data-filter-selectors)
   *
   * _This will now include a data property in your JSON output that
   * includes the page variable for each matching template_
   */
  dataFilterSelectors: Set<string>
  /**
   * If we want to copy additional files that are not Eleventy templates,
   * we use a feature called Passthrough File Copy to tell Eleventy to copy
   * things to our output folder for us.
   *
   * Passthrough File Copy entries are relative to the root of your project
   * and not your Eleventy input directory.
   *
   * [11ty Docs](https://www.11ty.dev/docs/copy/)
   */
  addPassthroughCopy(path: string | { [input: string]: string }): void;
  /**
   * Universal filters can be added in a single place and are available to
   * multiple template engines, simultaneously. This is currently supported
   * in JavaScript, Nunjucks, Liquid, and Handlebars.
   *
   * [11ty Docs](https://www.11ty.dev/docs/filters/#filters)
   */
  addFilter(filterName: string, filter: (...args: any[]) => string): void;
  /**
   * If you’d like to reuse existing filters in a different way, consider
   * using the new Configuration API getFilter method. You can use this
   * to alias a filter to a different name. You can use this to use a filter
   * inside of your own filter. You can use this to use a filter inside of a shortcode.
   *
   * [11ty Docs](https://www.11ty.dev/docs/filters/#access-existing-filters)
   */
  getFilter(filterName: string): (...args: any[]) => string;
  /**
   * Various template engines can be extended with shortcodes for easy reusable content.
   * This is sugar around Template Language Custom Tags. Shortcodes are supported in
   * JavaScript, Liquid, Nunjucks, Handlebars templates.
   *
   * Markdown files are pre-processed as Liquid templates by default. This means that
   * shortcodes available in Liquid templates are also available in Markdown files.
   * Likewise, if you change the template engine for Markdown files, the shortcodes
   * available for that templating language will also be available in Markdown files
   *
   * [11ty Docs](https://www.11ty.dev/docs/shortcodes/#shortcodes)
   *
   */
  addShortcode(shortcodeName: string, filter: (...args: any[]) => string | PromiseLike<string>): void;
  /**
   * The real ultimate power of Shortcodes comes when they are paired.
   * Paired Shortcodes have a start and end tag—and allow you to nest other template
   * content inside!
   *
   * [11ty Docs](https://www.11ty.dev/docs/shortcodes/#paired-shortcodes)
   */
  addPairedShortcode(
    shortcodeName: string,
    filter: (content: string, ...args: any[]) => string | PromiseLike<string>
  ): void;


  addExtension(extension: string, options: { key: string }): void;

  /**
   * Pass in your own instance of the Markdown library
   *
   * [11ty Docs](https://www.11ty.dev/docs/languages/markdown/#optional-set-your-own-library-instance)
   */

  addDataExtension(extension: string, handler: (contents: string) => any): void;

  /**
   * Add global data.
   */
  addGlobalData(key: string, data: any): void;

  /**
   * Add a custom URL transform.
   */
  addUrlTransform(transform: ({url: string}) => string): void;

  /**
   * Add an asynchronous shortcode.
   */
  addAsyncShortcode(name: string, handler: (...args: any[]) => Promise<string>): void;

  /**
   * Set server options.
   */
  setServerOptions(options: any): void;

  /**
   * Set server passthrough copy behavior.
   */
  setServerPassthroughCopyBehavior(behavior: string): void;

  setLibrary(name: string, instance: any): void
  /**
   * You may want to run some code at certain times during the compiling process.
   * To do that, you can use configuration events, which will run at specific times
   * during the compiling process.
   *
   * [11ty Docs](https://www.11ty.dev/docs/events/)
   */
  on(event: EventNames, handler: () => void): void;
  /**
   * Deprecated Event Name, Use the new Event names:
   *
   * - `eleventy.before`
   * - `eleventy.after`
   * - `eleventy.beforeWatch`
   *
   * [11ty Docs](https://www.11ty.dev/docs/events/)
   *
   * @deprecated
   */
   on(event: EventNamesDeprecated, handler: () => void): void;
}

declare interface ReturnConfig {
  dir?: {
    /**
     * Input directory
     */
    input?: string;
    /**
     * Output directory
     */
    output?: string;
    /**
     * Directory for includes
     */
    includes?: string;
    /**
     * Directory for layouts
     */
    layouts?: string;
    /**
     * Directory for global data files
     */
    data?: string;
  };
  /**
   * Default template engine for global data files
   */
  dataTemplateEngine?: TemplateEngines | false;
  /**
   * Default template engine for markdown files
   */
  markdownTemplateEngine?: TemplateEngines | false;
  /**
   * Default template engine for HTML files
   */
  htmlTemplateEngine?: TemplateEngines | false;
  /**
   * Template formats that should be transformed
   */
  templateFormats?: string | string[];
  /**
   * URL path prefix
   */
  pathPrefix?: string;
  /**
   * Suffix that will be added to output files
   * if `dir.input` and `dir.output` match.
   */
  htmlOutputSuffix?: string;
  /**
   * Set file suffix for template and directory specific data files.
   */
  jsDataFileSuffix?: string;
  /**
   * Disable passthrough file copy
   */
  passthroughFileCopy?: boolean;
}

/**
 * [Eleventy](https://www.11ty.dev/)
 *
 * A simpler static site generator.
 */
declare const Eleventy: (eleventy: ((eleventyConfig: EleventyConfig) => ReturnConfig | undefined)) => void;

export = Eleventy