// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 *
 * Manage saved keyword lists that can be reused across multiple heatmap runs.
 */
export class Lists extends APIResource {
  /**
   * Creates a new keyword list with an optional initial set of keywords.
   *
   * @example
   * ```ts
   * const list = await client.v1.heatmap.keyword.lists.create({
   *   name: 'Roofing Keywords',
   * });
   * ```
   */
  create(body: ListCreateParams, options?: RequestOptions): APIPromise<ListCreateResponse> {
    return this._client.post('/api/v1/heatmap/keyword/lists', { body, ...options });
  }

  /**
   * Returns full details for a single keyword list, including all associated
   * keywords and optional SEO data.
   *
   * @example
   * ```ts
   * const list = await client.v1.heatmap.keyword.lists.retrieve(
   *   5,
   * );
   * ```
   */
  retrieve(keywordList: number, options?: RequestOptions): APIPromise<ListRetrieveResponse> {
    return this._client.get(path`/api/v1/heatmap/keyword/lists/${keywordList}`, options);
  }

  /**
   * Updates the name and/or keywords of a keyword list.
   *
   * @example
   * ```ts
   * const list = await client.v1.heatmap.keyword.lists.update(
   *   5,
   * );
   * ```
   */
  update(
    keywordList: number,
    body: ListUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListUpdateResponse> {
    return this._client.put(path`/api/v1/heatmap/keyword/lists/${keywordList}`, { body, ...options });
  }

  /**
   * Returns a paginated list of keyword lists for the account.
   *
   * **Pagination** — all list responses include pagination fields at the root level
   * alongside `data`:
   *
   * - `total` total matching records; `last_page` total pages; `per_page` results
   *   per page (default 25)
   * - `next_page_url` URL of the next page (`null` on the last page)
   * - `links` array of page link objects (`url`, `label`, `active`)
   *
   * **Date filters** — `filter[created_at]` accepts an object with `start_date`
   * and/or `end_date` (YYYY-MM-DD):
   *
   * ```
   * filter[created_at][start_date]=2026-01-01
   * filter[created_at][end_date]=2026-04-30
   * ```
   *
   * Named range aliases are also supported via `filter[created_at][date_range]`:
   * `today`, `yesterday`, `last_7_days`, `last_30_days`, `this_month`, `last_month`,
   * `this_year`, `last_year`, `all_time`
   *
   * @example
   * ```ts
   * const lists = await client.v1.heatmap.keyword.lists.list();
   * ```
   */
  list(
    query: ListListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListListResponse> {
    return this._client.get('/api/v1/heatmap/keyword/lists', { query, ...options });
  }

  /**
   * Deletes a single keyword list by ID.
   *
   * @example
   * ```ts
   * const list = await client.v1.heatmap.keyword.lists.delete(
   *   5,
   * );
   * ```
   */
  delete(keywordList: number, options?: RequestOptions): APIPromise<ListDeleteResponse> {
    return this._client.delete(path`/api/v1/heatmap/keyword/lists/${keywordList}`, options);
  }

  /**
   * Deletes multiple keyword lists by ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.heatmap.keyword.lists.deleteAll({
   *     ids: [5, 6, 7],
   *   });
   * ```
   */
  deleteAll(body: ListDeleteAllParams, options?: RequestOptions): APIPromise<ListDeleteAllResponse> {
    return this._client.delete('/api/v1/heatmap/keyword/lists', { body, ...options });
  }
}

export interface ListCreateResponse {
  id?: number;

  created_at?: string;

  created_by_user?: ListCreateResponse.CreatedByUser;

  keywords?: Array<ListCreateResponse.Keyword>;

  lead_source_id?: string | null;

  name?: string;

  updated_at?: string;

  updated_by_user?: string | null;
}

export namespace ListCreateResponse {
  export interface CreatedByUser {
    id?: number;

    name?: string;
  }

  export interface Keyword {
    id?: number;

    keyword?: string;
  }
}

export interface ListRetrieveResponse {
  id?: number;

  created_at?: string;

  created_by_user?: ListRetrieveResponse.CreatedByUser;

  keywords?: Array<ListRetrieveResponse.Keyword>;

  lead_source_id?: string | null;

  name?: string;

  updated_at?: string;

  updated_by_user?: string | null;
}

export namespace ListRetrieveResponse {
  export interface CreatedByUser {
    id?: number;

    name?: string;
  }

  export interface Keyword {
    id?: number;

    keyword?: string;

    keyword_difficulty?: Keyword.KeywordDifficulty;

    keyword_search_intents?: Array<Keyword.KeywordSearchIntent>;

    search_volume?: Keyword.SearchVolume;
  }

  export namespace Keyword {
    export interface KeywordDifficulty {
      value?: number;
    }

    export interface KeywordSearchIntent {
      intent?: string;
    }

    export interface SearchVolume {
      trend?: Array<unknown>;

      value?: number;
    }
  }
}

export interface ListUpdateResponse {
  id?: number;

  created_at?: string;

  created_by_user?: ListUpdateResponse.CreatedByUser;

  keywords?: Array<ListUpdateResponse.Keyword>;

  lead_source_id?: string | null;

  name?: string;

  updated_at?: string;

  updated_by_user?: ListUpdateResponse.UpdatedByUser;
}

export namespace ListUpdateResponse {
  export interface CreatedByUser {
    id?: number;

    name?: string;
  }

  export interface Keyword {
    id?: number;

    keyword?: string;
  }

  export interface UpdatedByUser {
    id?: number;

    name?: string;
  }
}

export interface ListListResponse {
  current_page?: number;

  data?: Array<ListListResponse.Data>;

  first_page_url?: string;

  from?: number;

  last_page?: number;

  last_page_url?: string;

  links?: Array<ListListResponse.Link>;

  next_page_url?: string | null;

  path?: string;

  per_page?: number;

  prev_page_url?: string | null;

  to?: number;

  total?: number;
}

export namespace ListListResponse {
  export interface Data {
    id?: number;

    created_at?: string;

    created_by_user?: Data.CreatedByUser;

    keywords?: Array<Data.Keyword>;

    lead_source_id?: string | null;

    name?: string;

    updated_at?: string;

    updated_by_user?: string | null;
  }

  export namespace Data {
    export interface CreatedByUser {
      id?: number;

      name?: string;
    }

    export interface Keyword {
      id?: number;

      keyword?: string;
    }
  }

  export interface Link {
    active?: boolean;

    label?: string;

    url?: string | null;
  }
}

export interface ListDeleteResponse {
  message?: string;
}

export type ListDeleteAllResponse = boolean;

export interface ListCreateParams {
  /**
   * The list name.
   */
  name: string;

  /**
   * optional Keywords to add to the list.
   */
  keywords?: Array<string>;

  /**
   * optional Associate the list with a specific lead source / company.
   */
  lead_source_id?: number;
}

export interface ListUpdateParams {
  /**
   * optional Full replacement set of keywords for the list.
   */
  keywords?: Array<string>;

  /**
   * optional New list name.
   */
  name?: string;
}

export interface ListListParams {
  /**
   * Filter by lead source / company ID.
   */
  'filter[company_id]'?: number;

  /**
   * Filter by creation date — range end (YYYY-MM-DD).
   */
  'filter[created_at][end_date]'?: string;

  /**
   * Filter by creation date — range start (YYYY-MM-DD).
   */
  'filter[created_at][start_date]'?: string;

  /**
   * Filter by the ID of the user who created the list.
   */
  'filter[created_by_user]'?: number;

  /**
   * Filter by keyword in the list (partial match).
   */
  'filter[keyword]'?: string;

  /**
   * Filter by list name (partial match).
   */
  'filter[name]'?: string;

  /**
   * Filter by the ID of the user who last updated the list.
   */
  'filter[updated_by_user]'?: number;

  /**
   * Page number.
   */
  page?: number;

  /**
   * Number of results per page (default 25).
   */
  per_page?: number;

  /**
   * Sort field. Prefix with `-` for descending. Accepted: `id`, `name`,
   * `created_at`, `updated_at`.
   */
  sort?: string;
}

export interface ListDeleteAllParams {
  /**
   * Array of keyword list IDs to delete.
   */
  ids: Array<number>;
}

export declare namespace Lists {
  export {
    type ListCreateResponse as ListCreateResponse,
    type ListRetrieveResponse as ListRetrieveResponse,
    type ListUpdateResponse as ListUpdateResponse,
    type ListListResponse as ListListResponse,
    type ListDeleteResponse as ListDeleteResponse,
    type ListDeleteAllResponse as ListDeleteAllResponse,
    type ListCreateParams as ListCreateParams,
    type ListUpdateParams as ListUpdateParams,
    type ListListParams as ListListParams,
    type ListDeleteAllParams as ListDeleteAllParams,
  };
}
