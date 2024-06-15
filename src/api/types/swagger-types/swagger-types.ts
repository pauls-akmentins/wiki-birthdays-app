/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Lists of events which happened on the provided day and month */
export interface OnthisdayResponse {
  births?: Onthisday;
  deaths?: Onthisday;
  events?: Onthisday;
  holidays?: Onthisday;
  selected?: Onthisday;
}

export type Onthisday = {
  /** Short description of the event */
  text?: string;
  /** List of pages related to the event */
  pages?: Summary[];
}[];

export interface Summary {
  /** a good example of the differences can be seen in https://en.wikipedia.org/api/rest_v1/page/summary/IOS_13 */
  titles: TitlesSet;
  /**
   * The page title.
   * Deprecated: Use `titles.normalized` instead.
   * @deprecated
   */
  title?: string;
  /**
   * The page title how it should be shown to the user.
   * Deprecated: Use `titles.display` instead.
   * @deprecated
   */
  displaytitle?: string;
  /** The page ID */
  pageid?: number;
  /** First several sentences of an article in plain text */
  extract: string;
  /** First several sentences of an article in simple HTML format */
  extract_html?: string;
  thumbnail?: Thumbnail;
  originalimage?: Originalimage;
  /**
   * The page language code
   * @example "en"
   */
  lang: string;
  /**
   * The page language direction code
   * @example "ltr"
   */
  dir: string;
  /**
   * The time when the page was last edited in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
   * @example {}
   */
  timestamp?: string;
  /**
   * Wikidata description for the page
   * @example "American poet"
   */
  description?: string;
  /** The coordinates of the item */
  coordinates?: {
    /** The latitude */
    lat: number;
    /** The longitude */
    lon: number;
  };
}

/** a good example of the differences can be seen in https://en.wikipedia.org/api/rest_v1/page/summary/IOS_13 */
export interface TitlesSet {
  /** the DB key (non-prefixed), e.g. may have _ instead of spaces, best for making request URIs, still requires Percent-encoding */
  canonical: string;
  /** the normalized title (https://www.mediawiki.org/wiki/API:Query#Example_2:_Title_normalization), e.g. may have spaces instead of _ */
  normalized: string;
  /** the title as it should be displayed to the user */
  display: string;
}

export interface Thumbnail {
  /** Thumbnail image URI */
  source: string;
  /** Thumbnail width */
  width: number;
  /** Thumnail height */
  height: number;
}

export interface Originalimage {
  /** Original image URI */
  source: string;
  /** Original image width */
  width: number;
  /** Original image height */
  height: number;
}
