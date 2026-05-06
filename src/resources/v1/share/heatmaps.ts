// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 *
 * Create, retrieve, re-run and delete heatmaps. A heatmap represents a geographic grid search for a keyword at a given location.
 */
export class Heatmaps extends APIResource {
  /**
   * Returns heatmap details for a publicly shared link. The token must match the
   * heatmap's share token.
   *
   * @example
   * ```ts
   * const heatmap = await client.v1.share.heatmaps.retrieve(
   *   'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
   *   { heatmap: 1482 },
   * );
   * ```
   */
  retrieve(
    token: string,
    params: HeatmapRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<HeatmapRetrieveResponse> {
    const { heatmap } = params;
    return this._client.get(path`/api/v1/share/heatmaps/${heatmap}/token/${token}`, {
      ...options,
      __security: {},
    });
  }
}

export interface HeatmapRetrieveResponse {
  heatmap_settings?: HeatmapRetrieveResponse.HeatmapSettings;

  public_heatmap_data?: HeatmapRetrieveResponse.PublicHeatmapData;
}

export namespace HeatmapRetrieveResponse {
  export interface HeatmapSettings {
    grid_point_style?: string;
  }

  export interface PublicHeatmapData {
    id?: number;

    average?: number;

    business_name?: string;

    business_place_id?: string;

    grid_center_lat?: number;

    grid_center_lng?: number;

    grid_distance_measure?: string;

    grid_point_distance?: string;

    grid_point_distance_row?: number;

    grid_size?: number;

    keyword?: string;

    search_type?: string;

    status?: string;

    top_3_points?: number;

    total_points?: number;
  }
}

export interface HeatmapRetrieveParams {
  /**
   * The heatmap ID.
   */
  heatmap: number;
}

export declare namespace Heatmaps {
  export {
    type HeatmapRetrieveResponse as HeatmapRetrieveResponse,
    type HeatmapRetrieveParams as HeatmapRetrieveParams,
  };
}
