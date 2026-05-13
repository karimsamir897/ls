// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 *
 * Manage saved heatmap configurations (grid size, radius, distance unit) that can be reapplied when creating new heatmaps.
 */
export class BaseConfigs extends APIResource {
  static override readonly _key: readonly ['v1', 'heatmap', 'configs'] = Object.freeze([
    'v1',
    'heatmap',
    'configs',
  ] as const);

  /**
   * Saves a new heatmap grid configuration that can be reapplied when creating
   * future heatmaps.
   *
   * @example
   * ```ts
   * const config = await client.v1.heatmap.configs.create({
   *   grid_size: 3,
   *   lat: '44.67038',
   *   length_unit: 'm',
   *   lng: '-88.12241',
   *   radius: 3495,
   *   title: 'Green Bay 3x3 Grid',
   *   zoom_level: 12,
   * });
   * ```
   */
  create(body: ConfigCreateParams, options?: RequestOptions): APIPromise<ConfigCreateResponse> {
    return this._client.post('/api/v1/heatmap/configs', { body, ...options });
  }

  /**
   * Returns the details of a single saved heatmap configuration.
   *
   * @example
   * ```ts
   * const config = await client.v1.heatmap.configs.retrieve(4);
   * ```
   */
  retrieve(configID: number, options?: RequestOptions): APIPromise<ConfigRetrieveResponse> {
    return this._client.get(path`/api/v1/heatmap/configs/${configID}`, options);
  }

  /**
   * Returns a paginated list of saved heatmap grid configurations for the account.
   *
   * @example
   * ```ts
   * const configs = await client.v1.heatmap.configs.list();
   * ```
   */
  list(
    query: ConfigListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConfigListResponse> {
    return this._client.get('/api/v1/heatmap/configs', { query, ...options });
  }

  /**
   * Permanently deletes a saved heatmap configuration.
   *
   * @example
   * ```ts
   * const config = await client.v1.heatmap.configs.delete(4);
   * ```
   */
  delete(configID: number, options?: RequestOptions): APIPromise<ConfigDeleteResponse> {
    return this._client.delete(path`/api/v1/heatmap/configs/${configID}`, options);
  }
}
/**
 *
 * Manage saved heatmap configurations (grid size, radius, distance unit) that can be reapplied when creating new heatmaps.
 */
export class Configs extends BaseConfigs {}

export interface ConfigCreateResponse {
  id?: number;

  formatted_radius?: string;

  grid_size?: number;

  keyword?: string | null;

  keywords_list_id?: string | null;

  lat?: string;

  length_unit?: string;

  lng?: string;

  place_id?: string | null;

  polygon?: Array<unknown>;

  search_type?: string | null;

  status?: string | null;

  title?: string;

  zoom_level?: number;
}

export interface ConfigRetrieveResponse {
  id?: number;

  formatted_radius?: string;

  grid_size?: number;

  keyword?: string | null;

  keywords_list_id?: string | null;

  lat?: string;

  length_unit?: string;

  lng?: string;

  place_id?: string | null;

  polygon?: Array<unknown>;

  search_type?: string | null;

  status?: string | null;

  title?: string;

  zoom_level?: number;
}

export interface ConfigListResponse {
  data?: Array<ConfigListResponse.Data>;

  meta?: ConfigListResponse.Meta;
}

export namespace ConfigListResponse {
  export interface Data {
    id?: number;

    formatted_radius?: string;

    grid_size?: number;

    keyword?: string | null;

    keywords_list_id?: string | null;

    lat?: string;

    length_unit?: string;

    lng?: string;

    place_id?: string | null;

    polygon?: Array<unknown>;

    search_type?: string | null;

    status?: string | null;

    title?: string;

    zoom_level?: number;
  }

  export interface Meta {
    current_page?: number;

    per_page?: number;

    total?: number;
  }
}

export interface ConfigDeleteResponse {
  message?: string;
}

export interface ConfigCreateParams {
  /**
   * Number of grid points per side (e.g. 3 = 3×3 grid).
   */
  grid_size: number;

  /**
   * Grid center latitude.
   */
  lat: string;

  /**
   * Distance unit. Accepted: `km`, `mi`, `m`.
   */
  length_unit: string;

  /**
   * Grid center longitude.
   */
  lng: string;

  /**
   * Spacing between grid points in the chosen unit.
   */
  radius: number;

  /**
   * Configuration name.
   */
  title: string;

  /**
   * Map zoom level for display.
   */
  zoom_level: number;

  /**
   * optional Human-readable radius string.
   */
  formatted_radius?: string;

  /**
   * optional Custom polygon coordinates for non-square grid shapes.
   */
  polygon?: Array<string>;
}

export interface ConfigListParams {
  /**
   * Filter by config title (partial match).
   */
  'filter[title]'?: string;

  /**
   * Page number.
   */
  page?: number;

  /**
   * Number of results per page (default 25).
   */
  per_page?: number;

  /**
   * Sort field. Prefix with `-` for descending. Accepted: `title`.
   */
  sort?: string;
}

export declare namespace Configs {
  export {
    type ConfigCreateResponse as ConfigCreateResponse,
    type ConfigRetrieveResponse as ConfigRetrieveResponse,
    type ConfigListResponse as ConfigListResponse,
    type ConfigDeleteResponse as ConfigDeleteResponse,
    type ConfigCreateParams as ConfigCreateParams,
    type ConfigListParams as ConfigListParams,
  };
}
