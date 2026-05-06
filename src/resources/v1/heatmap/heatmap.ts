// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CompetitorsAPI from './competitors';
import {
  CompetitorListResponse,
  CompetitorRetrieveRankingsParams,
  CompetitorRetrieveRankingsResponse,
  Competitors,
} from './competitors';
import * as ConfigsAPI from './configs';
import {
  ConfigCreateParams,
  ConfigCreateResponse,
  ConfigDeleteResponse,
  ConfigListParams,
  ConfigListResponse,
  ConfigRetrieveResponse,
  Configs,
} from './configs';
import * as GridsAPI from './grids';
import {
  GridCreateParams,
  GridCreateResponse,
  GridDeleteResponse,
  GridListParams,
  GridListResponse,
  GridRetrieveResponse,
  Grids,
} from './grids';
import * as SchedulesAPI from './schedules';
import {
  ScheduleCreateParams,
  ScheduleCreateResponse,
  ScheduleDeleteBulkDeleteParams,
  ScheduleDeleteBulkDeleteResponse,
  ScheduleDeleteResponse,
  ScheduleListParams,
  ScheduleListResponse,
  SchedulePauseResponse,
  ScheduleResumeResponse,
  ScheduleRetrieveResponse,
  ScheduleUpdateParams,
  ScheduleUpdateResponse,
  Schedules,
} from './schedules';
import * as KeywordAPI from './keyword/keyword';
import { Keyword } from './keyword/keyword';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 *
 * Create, retrieve, re-run and delete heatmaps. A heatmap represents a geographic grid search for a keyword at a given location.
 */
export class Heatmap extends APIResource {
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);
  grids: GridsAPI.Grids = new GridsAPI.Grids(this._client);
  keyword: KeywordAPI.Keyword = new KeywordAPI.Keyword(this._client);
  schedules: SchedulesAPI.Schedules = new SchedulesAPI.Schedules(this._client);
  competitors: CompetitorsAPI.Competitors = new CompetitorsAPI.Competitors(this._client);

  /**
   * Creates one or more heatmaps. Each combination of keyword × search_type
   * generates a separate heatmap.
   *
   * @example
   * ```ts
   * const heatmap = await client.v1.heatmap.create({
   *   distanceType: 'm',
   *   grid_radius: 3495,
   *   grid_size: 3,
   *   keyword: ['roofing'],
   *   lat: 44.670381143996,
   *   lng: -88.122418774951,
   *   place_id: 'ChIJFzfDtmDzAogRn0zn9LJaP_A',
   *   search_type: ['google_maps'],
   * });
   * ```
   */
  create(body: HeatmapCreateParams, options?: RequestOptions): APIPromise<HeatmapCreateResponse> {
    return this._client.post('/api/v1/heatmaps', { body, ...options });
  }

  /**
   * Returns full details of a single heatmap including grid points, place info, and
   * ranking statistics.
   *
   * @example
   * ```ts
   * const heatmap = await client.v1.heatmap.retrieve(1482);
   * ```
   */
  retrieve(heatmap: number, options?: RequestOptions): APIPromise<HeatmapRetrieveResponse> {
    return this._client.get(path`/api/v1/heatmaps/${heatmap}`, options);
  }

  /**
   * Returns a paginated list of heatmaps for the authenticated account. Supports
   * filtering, sorting, searching, and pagination.
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
   * Alternatively, pass a named range alias via `filter[created_at][date]`: `today`,
   * `yesterday`, `this_week`, `last_week`, `last_7_days`, `last_30_days`,
   * `last_90_days`, `this_month`, `last_month`, `this_quarter`, `last_quarter`,
   * `this_year`, `year_to_date`, `last_year`, `all_time`
   *
   * @example
   * ```ts
   * const heatmaps = await client.v1.heatmap.list();
   * ```
   */
  list(
    query: HeatmapListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HeatmapListResponse> {
    return this._client.get('/api/v1/heatmaps', { query, ...options });
  }

  /**
   * Permanently deletes one or more heatmaps by ID.
   *
   * @example
   * ```ts
   * const response = await client.v1.heatmap.deleteAll({
   *   heatmaps: [1482, 1483],
   * });
   * ```
   */
  deleteAll(body: HeatmapDeleteAllParams, options?: RequestOptions): APIPromise<HeatmapDeleteAllResponse> {
    return this._client.delete('/api/v1/heatmaps', { body, ...options });
  }

  /**
   * Creates new heatmap runs for each provided heatmap ID, reusing the same grid
   * points and settings. Returns the newly queued heatmaps.
   *
   * @example
   * ```ts
   * const response = await client.v1.heatmap.rerun({
   *   heatmaps: [1482, 1483],
   * });
   * ```
   */
  rerun(body: HeatmapRerunParams, options?: RequestOptions): APIPromise<HeatmapRerunResponse> {
    return this._client.post('/api/v1/heatmaps/rerun', { body, ...options });
  }

  /**
   * Returns a paginated list of all places (businesses) that have been used in
   * heatmaps for the account.
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
   * const response = await client.v1.heatmap.retrievePlaces();
   * ```
   */
  retrievePlaces(
    query: HeatmapRetrievePlacesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HeatmapRetrievePlacesResponse> {
    return this._client.get('/api/v1/heatmaps/places', { query, ...options });
  }
}

export interface HeatmapCreateResponse {
  id?: number;

  area?: string | null;

  ave_review_rating?: string | null;

  average?: string | null;

  average_position?: string | null;

  business_name?: string;

  business_place_id?: string;

  created_at?: string;

  grid_center_lat?: number;

  grid_center_lng?: number;

  grid_distance_measure?: string;

  grid_point_distance?: string;

  grid_point_distance_row?: number;

  grid_size?: number;

  keyword?: string;

  keyword_difficulty?: string | null;

  keyword_search_intents?: Array<unknown>;

  lead_source_id?: string | null;

  location?: string | null;

  location_id?: string | null;

  market_share?: string | null;

  market_share_position?: string | null;

  place?: string | null;

  place_id?: string;

  points?: Array<unknown>;

  previous_ranking?: string | null;

  ranking_change?: string | null;

  ranking_change_percentage?: string | null;

  review_count?: string | null;

  search_type?: string;

  search_volume?: string | null;

  status?: string;

  tags?: Array<unknown>;

  top_3_percentage?: string | null;

  top_3_points?: number;

  top_3_position?: string | null;

  top_n?: string | null;

  total?: number;

  total_points?: number;

  updated_at?: string;

  zoom_level?: string | null;
}

export interface HeatmapRetrieveResponse {
  id?: number;

  area?: string | null;

  ave_review_rating?: number;

  average?: number;

  average_position?: number;

  business_name?: string;

  business_place_id?: string;

  created_at?: string;

  grid_center_lat?: number;

  grid_center_lng?: number;

  grid_distance_measure?: string;

  grid_point_distance?: string;

  grid_point_distance_row?: number;

  grid_size?: number;

  keyword?: string;

  keyword_difficulty?: string | null;

  keyword_search_intents?: Array<unknown>;

  lead_source_id?: string | null;

  location?: string | null;

  location_id?: string | null;

  market_share?: number;

  market_share_position?: number;

  place?: HeatmapRetrieveResponse.Place;

  place_id?: number;

  points?: Array<unknown>;

  previous_ranking?: number;

  ranking_change?: number;

  ranking_change_percentage?: number;

  review_count?: number;

  search_type?: string;

  search_volume?: string | null;

  status?: string;

  tags?: Array<unknown>;

  top_3_percentage?: number;

  top_3_points?: number;

  top_3_position?: number;

  top_n?: number;

  total?: number;

  total_points?: number;

  updated_at?: string;

  zoom_level?: number;
}

export namespace HeatmapRetrieveResponse {
  export interface Place {
    id?: number;

    address?: string;

    ave_review_rating?: number;

    google_place_id?: string;

    name?: string;

    phone?: string;

    review_count?: number;

    website_url?: string;
  }
}

export interface HeatmapListResponse {
  current_page?: number;

  data?: Array<HeatmapListResponse.Data>;

  first_page_url?: string;

  from?: number;

  last_page?: number;

  last_page_url?: string;

  links?: Array<HeatmapListResponse.Link>;

  next_page_url?: string;

  path?: string;

  per_page?: number;

  prev_page_url?: string | null;

  to?: number;

  total?: number;
}

export namespace HeatmapListResponse {
  export interface Data {
    id?: number;

    average?: number;

    average_position?: number;

    business_name?: string;

    business_place_id?: string;

    created_at?: string;

    grid_center_lat?: number;

    grid_center_lng?: number;

    grid_distance_measure?: string;

    grid_point_distance?: string;

    grid_point_distance_row?: number;

    grid_size?: number;

    keyword?: string;

    lead_source_id?: string | null;

    search_type?: string;

    status?: string;

    tags?: Array<unknown>;

    top_3_percentage?: number;

    top_3_points?: number;

    top_3_position?: number;

    total_points?: number;

    updated_at?: string;
  }

  export interface Link {
    active?: boolean;

    label?: string;

    url?: string | null;
  }
}

export interface HeatmapDeleteAllResponse {
  message?: string;
}

export interface HeatmapRerunResponse {
  data?: Array<HeatmapRerunResponse.Data>;
}

export namespace HeatmapRerunResponse {
  export interface Data {
    id?: number;

    average?: string | null;

    business_name?: string;

    business_place_id?: string;

    grid_center_lat?: number;

    grid_center_lng?: number;

    grid_distance_measure?: string;

    grid_point_distance?: string;

    grid_point_distance_row?: number;

    grid_size?: number;

    keyword?: string;

    lead_source_id?: string | null;

    search_type?: string;

    status?: string;

    top_3_points?: number;

    total_points?: number;
  }
}

export interface HeatmapRetrievePlacesResponse {
  current_page?: number;

  data?: Array<HeatmapRetrievePlacesResponse.Data>;

  first_page_url?: string;

  from?: number;

  last_page?: number;

  last_page_url?: string;

  links?: Array<HeatmapRetrievePlacesResponse.Link>;

  next_page_url?: string | null;

  path?: string;

  per_page?: number;

  prev_page_url?: string | null;

  to?: number;

  total?: number;
}

export namespace HeatmapRetrievePlacesResponse {
  export interface Data {
    id?: number;

    address?: string;

    ave_review_rating?: number;

    google_place_id?: string;

    google_place_serial?: string | null;

    latitude?: number;

    longitude?: number;

    main_category?: string;

    map_url?: string | null;

    name?: string;

    phone?: string;

    place_url?: string;

    ranking?: string | null;

    related_categories?: Array<string>;

    review_count?: number;

    thumbnail_url?: string | null;

    website_url?: string;
  }

  export interface Link {
    active?: boolean;

    label?: string;

    url?: string | null;
  }
}

export interface HeatmapCreateParams {
  /**
   * Unit for the radius. Accepted: `km`, `mi`, `m`.
   */
  distanceType: string;

  /**
   * Radius between grid points in the chosen unit. Used to auto-generate points when
   * `points` is not provided.
   */
  grid_radius: number;

  /**
   * Number of grid points per side (e.g. 3 = 3×3). Used to auto-generate points when
   * `points` is not provided.
   */
  grid_size: number;

  /**
   * Keywords to track.
   */
  keyword: Array<string>;

  /**
   * Latitude of the grid center.
   */
  lat: number;

  /**
   * Longitude of the grid center.
   */
  lng: number;

  /**
   * Google Place ID of the business.
   */
  place_id: string;

  /**
   * Search type(s) to run per keyword. Accepted: `google_maps`, `local_pack`.
   */
  search_type: Array<string>;

  /**
   * optional Pre-computed grid point coordinates. If provided (must not be empty),
   * `grid_radius` and `grid_size` are ignored. If omitted, points are auto-generated
   * from `grid_size` and `grid_radius`.
   */
  points?: Array<HeatmapCreateParams.Point>;
}

export namespace HeatmapCreateParams {
  export interface Point {
    /**
     * Latitude of the point.
     */
    lat: number;

    /**
     * Longitude of the point.
     */
    lng: number;
  }
}

export interface HeatmapListParams {
  /**
   * Filter by business name (partial match).
   */
  'filter[business_name]'?: string;

  /**
   * Filter by lead source / company ID.
   */
  'filter[company_id]'?: number;

  /**
   * Filter by a named date alias instead of a range. Accepted: `today`, `yesterday`,
   * `this_week`, `last_week`, `last_7_days`, `last_30_days`, `last_90_days`,
   * `this_month`, `last_month`, `this_quarter`, `last_quarter`, `this_year`,
   * `year_to_date`, `last_year`, `all_time`.
   */
  'filter[created_at][date]'?: string;

  /**
   * Filter by creation date — range end (YYYY-MM-DD).
   */
  'filter[created_at][end_date]'?: string;

  /**
   * Filter by creation date — range start (YYYY-MM-DD).
   */
  'filter[created_at][start_date]'?: string;

  /**
   * Filter by Google Place ID (exact).
   */
  'filter[google_place_id]'?: string;

  /**
   * Filter by keyword ID.
   */
  'filter[keyword_id]'?: number;

  /**
   * Filter by keyword list ID.
   */
  'filter[keyword_list_id]'?: number;

  /**
   * Filter by keyword text (partial match).
   */
  'filter[keyword]'?: string;

  /**
   * Filter by location ID.
   */
  'filter[location_id]'?: number;

  /**
   * Filter by place ID (exact).
   */
  'filter[place_id]'?: number;

  /**
   * Filter by search type. Accepted: `google_maps`, `local_pack`.
   */
  'filter[search_type]'?: string;

  /**
   * Filter by heatmap status. Accepted: `Completed`, `Pending`, `Failed`.
   */
  'filter[status]'?: string;

  /**
   * Filter by tag ID.
   */
  'filter[tag_id]'?: number;

  /**
   * Filter by tag name (exact match).
   */
  'filter[tag]'?: string;

  /**
   * Page number.
   */
  page?: number;

  /**
   * Number of results per page (default 25).
   */
  per_page?: number;

  /**
   * Full-text search across keyword and business name.
   */
  search?: string;

  /**
   * Sort field. Prefix with `-` for descending. Accepted: `created_at`, `average`,
   * `top_3_points`, `top_3_position`, `top_3_percentage`, `review_count`,
   * `review_rating`, `average_position`, `zoom_level`, `grid_size`, `market_share`,
   * `keyword`, `business_name`, `reviews`.
   */
  sort?: string;
}

export interface HeatmapDeleteAllParams {
  /**
   * Array of heatmap IDs to delete.
   */
  heatmaps: Array<number>;
}

export interface HeatmapRerunParams {
  /**
   * Array of heatmap IDs to re-run.
   */
  heatmaps: Array<number>;
}

export interface HeatmapRetrievePlacesParams {
  /**
   * Filter by creation date — range end (YYYY-MM-DD).
   */
  'filter[created_at][end_date]'?: string;

  /**
   * Filter by creation date — range start (YYYY-MM-DD).
   */
  'filter[created_at][start_date]'?: string;

  /**
   * Filter by Google Place ID (exact).
   */
  'filter[google_place_id]'?: string;

  /**
   * Filter by place ID (exact).
   */
  'filter[id]'?: number;

  /**
   * Filter by place name (partial match).
   */
  'filter[name]'?: string;

  /**
   * Page number.
   */
  page?: number;

  /**
   * Number of results per page (default 25).
   */
  per_page?: number;

  /**
   * Sort field. Prefix with `-` for descending. Accepted: `name`, `id`,
   * `created_at`, `review_count`, `rating`.
   */
  sort?: string;
}

Heatmap.Configs = Configs;
Heatmap.Grids = Grids;
Heatmap.Keyword = Keyword;
Heatmap.Schedules = Schedules;
Heatmap.Competitors = Competitors;

export declare namespace Heatmap {
  export {
    type HeatmapCreateResponse as HeatmapCreateResponse,
    type HeatmapRetrieveResponse as HeatmapRetrieveResponse,
    type HeatmapListResponse as HeatmapListResponse,
    type HeatmapDeleteAllResponse as HeatmapDeleteAllResponse,
    type HeatmapRerunResponse as HeatmapRerunResponse,
    type HeatmapRetrievePlacesResponse as HeatmapRetrievePlacesResponse,
    type HeatmapCreateParams as HeatmapCreateParams,
    type HeatmapListParams as HeatmapListParams,
    type HeatmapDeleteAllParams as HeatmapDeleteAllParams,
    type HeatmapRerunParams as HeatmapRerunParams,
    type HeatmapRetrievePlacesParams as HeatmapRetrievePlacesParams,
  };

  export {
    Configs as Configs,
    type ConfigCreateResponse as ConfigCreateResponse,
    type ConfigRetrieveResponse as ConfigRetrieveResponse,
    type ConfigListResponse as ConfigListResponse,
    type ConfigDeleteResponse as ConfigDeleteResponse,
    type ConfigCreateParams as ConfigCreateParams,
    type ConfigListParams as ConfigListParams,
  };

  export {
    Grids as Grids,
    type GridCreateResponse as GridCreateResponse,
    type GridRetrieveResponse as GridRetrieveResponse,
    type GridListResponse as GridListResponse,
    type GridDeleteResponse as GridDeleteResponse,
    type GridCreateParams as GridCreateParams,
    type GridListParams as GridListParams,
  };

  export { Keyword as Keyword };

  export {
    Schedules as Schedules,
    type ScheduleCreateResponse as ScheduleCreateResponse,
    type ScheduleRetrieveResponse as ScheduleRetrieveResponse,
    type ScheduleUpdateResponse as ScheduleUpdateResponse,
    type ScheduleListResponse as ScheduleListResponse,
    type ScheduleDeleteResponse as ScheduleDeleteResponse,
    type ScheduleDeleteBulkDeleteResponse as ScheduleDeleteBulkDeleteResponse,
    type SchedulePauseResponse as SchedulePauseResponse,
    type ScheduleResumeResponse as ScheduleResumeResponse,
    type ScheduleCreateParams as ScheduleCreateParams,
    type ScheduleUpdateParams as ScheduleUpdateParams,
    type ScheduleListParams as ScheduleListParams,
    type ScheduleDeleteBulkDeleteParams as ScheduleDeleteBulkDeleteParams,
  };

  export {
    Competitors as Competitors,
    type CompetitorListResponse as CompetitorListResponse,
    type CompetitorRetrieveRankingsResponse as CompetitorRetrieveRankingsResponse,
    type CompetitorRetrieveRankingsParams as CompetitorRetrieveRankingsParams,
  };
}
