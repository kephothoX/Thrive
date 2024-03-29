/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@1.8.0.
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as api_ from "../api.js";
import type * as descope from "../descope.js";
import type * as descopeActions from "../descopeActions.js";
import type * as http from "../http.js";
import type * as square from "../square.js";
import type * as squareActions from "../squareActions.js";
import type * as thrive from "../thrive.js";
import type * as thriveActions from "../thriveActions.js";
import type * as thriveMutations from "../thriveMutations.js";
import type * as thriveQueries from "../thriveQueries.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  api: typeof api_;
  descope: typeof descope;
  descopeActions: typeof descopeActions;
  http: typeof http;
  square: typeof square;
  squareActions: typeof squareActions;
  thrive: typeof thrive;
  thriveActions: typeof thriveActions;
  thriveMutations: typeof thriveMutations;
  thriveQueries: typeof thriveQueries;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
