// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 *
 * Create and manage automated heatmap schedules. Schedules run heatmaps on a recurring interval (weekly, monthly, or custom).
 */
export class BaseSchedules extends APIResource {
  static override readonly _key: readonly ['v1', 'heatmap', 'schedules'] = Object.freeze([
    'v1',
    'heatmap',
    'schedules',
  ] as const);

  /**
   * Creates a new automated heatmap schedule. The schedule will run heatmaps on the
   * specified recurrence.
   *
   * @example
   * ```ts
   * const schedule = await client.v1.heatmap.schedules.create({
   *   heatmap_config: {
   *     grid_points: [{ lat: 44.627, lng: -88.078 }],
   *     keywords: ['roofing', 'roof repair'],
   *     name: 'Weekly Roofing Check',
   *     place_id: 12,
   *   },
   *   schedule_config: {
   *     repeat_every: 1,
   *     repeat_on: 1,
   *     repeat_type: 'week',
   *   },
   * });
   * ```
   */
  create(body: ScheduleCreateParams, options?: RequestOptions): APIPromise<ScheduleCreateResponse> {
    return this._client.post('/api/v1/heatmap/schedules', { body, ...options });
  }

  /**
   * Returns full details of a single heatmap schedule including its configuration
   * and next run time.
   *
   * @example
   * ```ts
   * const schedule = await client.v1.heatmap.schedules.retrieve(
   *   10,
   * );
   * ```
   */
  retrieve(schedule: number, options?: RequestOptions): APIPromise<ScheduleRetrieveResponse> {
    return this._client.get(path`/api/v1/heatmap/schedules/${schedule}`, options);
  }

  /**
   * Updates the grid configuration and/or recurrence settings of an existing
   * schedule.
   *
   * @example
   * ```ts
   * const schedule = await client.v1.heatmap.schedules.update(
   *   6490,
   *   {
   *     heatmap_config: {
   *       name: 'Weekly Roofing Check Updated',
   *       place_id: 12,
   *     },
   *     schedule_config: { repeat_type: 'month' },
   *   },
   * );
   * ```
   */
  update(
    scheduleID: number,
    body: ScheduleUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ScheduleUpdateResponse> {
    return this._client.patch(path`/api/v1/heatmap/schedules/${scheduleID}`, { body, ...options });
  }

  /**
   * Returns a paginated list of heatmap schedules for the account. Supports
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
   * **Date filters** — date params accept an object with `start_date` and/or
   * `end_date` (YYYY-MM-DD):
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
   * const schedules = await client.v1.heatmap.schedules.list();
   * ```
   */
  list(
    query: ScheduleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScheduleListResponse> {
    return this._client.get('/api/v1/heatmap/schedules', { query, ...options });
  }

  /**
   * Permanently deletes a single heatmap schedule.
   *
   * @example
   * ```ts
   * const schedule = await client.v1.heatmap.schedules.delete(
   *   6490,
   * );
   * ```
   */
  delete(scheduleID: number, options?: RequestOptions): APIPromise<ScheduleDeleteResponse> {
    return this._client.delete(path`/api/v1/heatmap/schedules/${scheduleID}`, options);
  }

  /**
   * Permanently deletes multiple heatmap schedules by ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.heatmap.schedules.deleteBulkDelete({
   *     ids: [10, 11, 12],
   *   });
   * ```
   */
  deleteBulkDelete(
    body: ScheduleDeleteBulkDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ScheduleDeleteBulkDeleteResponse> {
    return this._client.delete('/api/v1/heatmap/schedules/bulk-delete', { body, ...options });
  }

  /**
   * Pauses an active schedule so it stops running until resumed.
   *
   * @example
   * ```ts
   * const response = await client.v1.heatmap.schedules.pause(
   *   6490,
   * );
   * ```
   */
  pause(scheduleID: number, options?: RequestOptions): APIPromise<SchedulePauseResponse> {
    return this._client.post(path`/api/v1/heatmap/schedules/${scheduleID}/pause`, options);
  }

  /**
   * Resumes a paused schedule so it runs again on its next scheduled date.
   *
   * @example
   * ```ts
   * const response = await client.v1.heatmap.schedules.resume(
   *   6490,
   * );
   * ```
   */
  resume(scheduleID: number, options?: RequestOptions): APIPromise<ScheduleResumeResponse> {
    return this._client.post(path`/api/v1/heatmap/schedules/${scheduleID}/resume`, options);
  }
}
/**
 *
 * Create and manage automated heatmap schedules. Schedules run heatmaps on a recurring interval (weekly, monthly, or custom).
 */
export class Schedules extends BaseSchedules {}

export interface ScheduleCreateResponse {
  id?: number;

  grid_size?: number;

  keywords?: Array<string>;

  lat?: number;

  lead_source_id?: string | null;

  length_unit?: string;

  lng?: number;

  name?: string;

  place?: ScheduleCreateResponse.Place;

  place_id?: number;

  radius?: number;

  schedule_config?: ScheduleCreateResponse.ScheduleConfig;

  status?: string;

  stop_reason?: string | null;
}

export namespace ScheduleCreateResponse {
  export interface Place {
    id?: number;

    google_place_id?: string;

    name?: string;
  }

  export interface ScheduleConfig {
    last_schedule_ran_at?: string | null;

    repeat_every?: number;

    repeat_on?: number;

    repeat_type?: string;

    scheduled_at?: string;

    timezone?: string;
  }
}

export interface ScheduleRetrieveResponse {
  id?: number;

  draw_type?: string | null;

  google_location?: string | null;

  grid_size?: number;

  keywords?: Array<string>;

  lat?: number;

  lead_source_id?: string | null;

  length_unit?: string;

  lng?: number;

  name?: string;

  place?: ScheduleRetrieveResponse.Place;

  place_id?: number;

  radius?: number;

  schedule_config?: ScheduleRetrieveResponse.ScheduleConfig;

  status?: string;

  stop_reason?: string | null;
}

export namespace ScheduleRetrieveResponse {
  export interface Place {
    id?: number;

    address?: string;

    google_place_id?: string;

    name?: string;
  }

  export interface ScheduleConfig {
    last_schedule_ran_at?: string | null;

    repeat_every?: number;

    repeat_on?: number;

    repeat_type?: string;

    scheduled_at?: string;

    timezone?: string;
  }
}

export interface ScheduleUpdateResponse {
  id?: number;

  keywords?: Array<string>;

  name?: string;

  schedule_config?: ScheduleUpdateResponse.ScheduleConfig;

  status?: string;
}

export namespace ScheduleUpdateResponse {
  export interface ScheduleConfig {
    last_schedule_ran_at?: string | null;

    repeat_every?: number;

    repeat_on?: number;

    repeat_type?: string;

    scheduled_at?: string;

    timezone?: string;
  }
}

export interface ScheduleListResponse {
  current_page?: number;

  data?: Array<ScheduleListResponse.Data>;

  first_page_url?: string;

  from?: number;

  last_page?: number;

  last_page_url?: string;

  links?: Array<ScheduleListResponse.Link>;

  next_page_url?: string | null;

  path?: string;

  per_page?: number;

  prev_page_url?: string | null;

  to?: number;

  total?: number;
}

export namespace ScheduleListResponse {
  export interface Data {
    id?: number;

    grid_size?: number;

    keywords?: Array<string>;

    lat?: number;

    lead_source_id?: string | null;

    length_unit?: string;

    lng?: number;

    name?: string;

    place?: Data.Place;

    place_id?: number;

    radius?: number;

    schedule_config?: Data.ScheduleConfig;

    status?: string;

    stop_reason?: string | null;
  }

  export namespace Data {
    export interface Place {
      id?: number;

      google_place_id?: string;

      name?: string;
    }

    export interface ScheduleConfig {
      last_schedule_ran_at?: string | null;

      repeat_every?: number;

      repeat_on?: number;

      repeat_type?: string;

      scheduled_at?: string;

      timezone?: string;
    }
  }

  export interface Link {
    active?: boolean;

    label?: string;

    url?: string | null;
  }
}

export interface ScheduleDeleteResponse {
  message?: string;
}

export interface ScheduleDeleteBulkDeleteResponse {
  message?: string;
}

export interface SchedulePauseResponse {
  id?: number;

  name?: string;

  status?: string;
}

export interface ScheduleResumeResponse {
  id?: number;

  name?: string;

  status?: string;
}

export interface ScheduleCreateParams {
  /**
   * Grid and place configuration for the heatmap.
   */
  heatmap_config: ScheduleCreateParams.HeatmapConfig;

  /**
   * Recurrence settings for the schedule.
   */
  schedule_config: ScheduleCreateParams.ScheduleConfig;
}

export namespace ScheduleCreateParams {
  /**
   * Grid and place configuration for the heatmap.
   */
  export interface HeatmapConfig {
    /**
     * Pre-computed grid point coordinates (min 1, max 200).
     */
    grid_points: Array<HeatmapConfig.GridPoint>;

    /**
     * Keywords to search.
     */
    keywords: Array<string>;

    /**
     * Schedule name.
     */
    name: string;

    /**
     * The heatmap place ID.
     */
    place_id: number;

    /**
     * optional Grid size (informational, points are used for actual run).
     */
    grid_size?: number;

    /**
     * optional Grid center latitude (informational).
     */
    lat?: number;

    /**
     * optional Lead source / company ID.
     */
    lead_source_id?: number;

    /**
     * optional Distance unit. Accepted: `km`, `mi`, `m`. Default: `m`.
     */
    length_unit?: string;

    /**
     * optional Grid center longitude (informational).
     */
    lng?: number;

    /**
     * optional Location ID to associate the schedule with.
     */
    location_id?: number;

    /**
     * optional Grid radius (informational).
     */
    radius?: number;
  }

  export namespace HeatmapConfig {
    export interface GridPoint {
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

  /**
   * Recurrence settings for the schedule.
   */
  export interface ScheduleConfig {
    /**
     * (required when repeat_type is `custom-*`) Interval between runs.
     */
    repeat_every: number;

    /**
     * (required when repeat_type is `week` or `month`) Day of week (1–7) or day of
     * month (1–31).
     */
    repeat_on: number;

    /**
     * Recurrence type. Accepted: `week`, `month`, `custom-day`, `custom-week`,
     * `custom-month`.
     */
    repeat_type: string;

    /**
     * optional Time of day to run the schedule in `HH:MM` format. Defaults to 12:00.
     */
    schedule_hour_minute?: string;

    /**
     * optional Timezone for the schedule. Default: UTC.
     */
    timezone?: string;
  }
}

export interface ScheduleUpdateParams {
  /**
   * Updated grid and place configuration.
   */
  heatmap_config: ScheduleUpdateParams.HeatmapConfig;

  /**
   * Updated recurrence settings.
   */
  schedule_config: ScheduleUpdateParams.ScheduleConfig;
}

export namespace ScheduleUpdateParams {
  /**
   * Updated grid and place configuration.
   */
  export interface HeatmapConfig {
    /**
     * Schedule name.
     */
    name: string;

    /**
     * The heatmap place ID.
     */
    place_id: number;

    /**
     * optional Updated grid point coordinates (omit to keep existing).
     */
    grid_points?: Array<unknown>;

    /**
     * optional Keywords to search (omit to keep existing).
     */
    keywords?: Array<string>;
  }

  /**
   * Updated recurrence settings.
   */
  export interface ScheduleConfig {
    /**
     * Recurrence type. Accepted: `week`, `month`, `custom-day`, `custom-week`,
     * `custom-month`.
     */
    repeat_type: string;

    /**
     * optional Day of week (1–7) or day of month (1–31).
     */
    repeat_on?: number;
  }
}

export interface ScheduleListParams {
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
   * Filter by Google Place ID (exact).
   */
  'filter[google_place_id]'?: string;

  /**
   * Filter by keyword in the schedule (exact match).
   */
  'filter[keyword]'?: string;

  /**
   * Filter by last run date — range end (YYYY-MM-DD).
   */
  'filter[last_schedule_ran_at][end_date]'?: string;

  /**
   * Filter by last run date — range start (YYYY-MM-DD).
   */
  'filter[last_schedule_ran_at][start_date]'?: string;

  /**
   * Filter by location ID.
   */
  'filter[location_id]'?: number;

  /**
   * Filter by schedule name (partial match).
   */
  'filter[name]'?: string;

  /**
   * Filter by place ID.
   */
  'filter[place_id]'?: number;

  /**
   * Filter by repeat interval.
   */
  'filter[repeat_every]'?: number;

  /**
   * Filter by day of week (1–7) or day of month (1–31) depending on repeat_type.
   */
  'filter[repeat_on]'?: number;

  /**
   * Filter by repeat type. Accepted: `week`, `month`, `custom-day`, `custom-week`,
   * `custom-month`.
   */
  'filter[repeat_type]'?: string;

  /**
   * Filter by next run date — range end (YYYY-MM-DD).
   */
  'filter[scheduled_at][end_date]'?: string;

  /**
   * Filter by next run date — range start (YYYY-MM-DD).
   */
  'filter[scheduled_at][start_date]'?: string;

  /**
   * Filter by schedule status. Accepted: `active`, `paused`.
   */
  'filter[status]'?: string;

  /**
   * Page number.
   */
  page?: number;

  /**
   * Number of results per page (default 25).
   */
  per_page?: number;

  /**
   * Full-text search across schedule name and place name.
   */
  search?: string;

  /**
   * Sort field. Prefix with `-` for descending. Accepted: `created_at`, `name`,
   * `status`, `scheduled_at`, `last_schedule_ran_at`, `repeat_type`, `repeat_every`,
   * `place_id`, `place.name`, `location_id`.
   */
  sort?: string;
}

export interface ScheduleDeleteBulkDeleteParams {
  /**
   * Array of schedule IDs to delete.
   */
  ids: Array<number>;
}

export declare namespace Schedules {
  export {
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
}
