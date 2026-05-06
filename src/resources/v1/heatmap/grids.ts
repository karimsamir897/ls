// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 *
 * Manage reusable grid templates that define the shape and point layout for heatmap searches.
 */
export class Grids extends APIResource {
  /**
   * Saves a new reusable grid template that can be applied to future heatmap runs.
   *
   * @example
   * ```ts
   * const grid = await client.v1.heatmap.grids.create({
   *   grid_name: 'Standard 3x3',
   *   grid_size: 3,
   *   lat: '44.67038',
   *   length_unit: 'm',
   *   lng: '-88.12241',
   *   radius: 3495,
   *   zoom_level: 12,
   * });
   * ```
   */
  create(body: GridCreateParams, options?: RequestOptions): APIPromise<GridCreateResponse> {
    return this._client.post('/api/v1/heatmap/grids', { body, ...options });
  }

  /**
   * Returns the details of a single saved grid template.
   *
   * @example
   * ```ts
   * const grid = await client.v1.heatmap.grids.retrieve(4263);
   * ```
   */
  retrieve(gridID: number, options?: RequestOptions): APIPromise<GridRetrieveResponse> {
    return this._client.get(path`/api/v1/heatmap/grids/${gridID}`, options);
  }

  /**
   * Returns a paginated list of saved reusable grid templates for the account.
   *
   * @example
   * ```ts
   * const grids = await client.v1.heatmap.grids.list();
   * ```
   */
  list(
    query: GridListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GridListResponse> {
    return this._client.get('/api/v1/heatmap/grids', { query, ...options });
  }

  /**
   * Permanently deletes a saved grid template.
   *
   * @example
   * ```ts
   * const grid = await client.v1.heatmap.grids.delete(4263);
   * ```
   */
  delete(gridID: number, options?: RequestOptions): APIPromise<GridDeleteResponse> {
    return this._client.delete(path`/api/v1/heatmap/grids/${gridID}`, options);
  }
}

export interface GridCreateResponse {
  id?: number;

  formatted_radius?: string;

  grid_size?: number;

  lat?: string;

  length_unit?: string;

  lng?: string;

  polygon?: Array<unknown>;

  radius?: number;

  title?: string;

  zoom_level?: number;
}

export interface GridRetrieveResponse {
  id?: number;

  formatted_radius?: string;

  grid_size?: number;

  lat?: string;

  length_unit?: string;

  lng?: string;

  polygon?: Array<unknown>;

  radius?: number;

  title?: string;

  zoom_level?: number;
}

export interface GridListResponse {
  data?: Array<GridListResponse.Data>;

  meta?: GridListResponse.Meta;
}

export namespace GridListResponse {
  export interface Data {
    id?: number;

    formatted_radius?: string;

    grid_size?: number;

    lat?: string;

    length_unit?: string;

    lng?: string;

    polygon?: Array<unknown>;

    radius?: number;

    title?: string;

    zoom_level?: number;
  }

  export interface Meta {
    current_page?: number;

    per_page?: number;

    total?: number;
  }
}

export interface GridDeleteResponse {
  message?: string;
}

export interface GridCreateParams {
  /**
   * Grid template name (mapped to `title`).
   */
  grid_name: string;

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

export interface GridListParams {
  /**
   * Filter by grid title (partial match).
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

export declare namespace Grids {
  export {
    type GridCreateResponse as GridCreateResponse,
    type GridRetrieveResponse as GridRetrieveResponse,
    type GridListResponse as GridListResponse,
    type GridDeleteResponse as GridDeleteResponse,
    type GridCreateParams as GridCreateParams,
    type GridListParams as GridListParams,
  };
}
