// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 *
 * Create, retrieve, re-run and delete heatmaps. A heatmap represents a geographic grid search for a keyword at a given location.
 */
export class Competitors extends APIResource {
  /**
   * Returns aggregated ranking statistics for all competitor businesses found across
   * the grid points of the specified heatmap.
   *
   * @example
   * ```ts
   * const competitors =
   *   await client.v1.heatmap.competitors.list(1482);
   * ```
   */
  list(heatmap: number, options?: RequestOptions): APIPromise<CompetitorListResponse> {
    return this._client.get(path`/api/v1/heatmaps/${heatmap}/competitors`, options);
  }

  /**
   * Returns point-by-point ranking data for a specific competitor within a heatmap.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.heatmap.competitors.retrieveRankings(15, {
   *     heatmap_id: 1482,
   *   });
   * ```
   */
  retrieveRankings(
    competitorID: number,
    params: CompetitorRetrieveRankingsParams,
    options?: RequestOptions,
  ): APIPromise<CompetitorRetrieveRankingsResponse> {
    const { heatmap_id } = params;
    return this._client.get(
      path`/api/v1/heatmaps/${heatmap_id}/competitors/${competitorID}/rankings`,
      options,
    );
  }
}

export interface CompetitorListResponse {
  data?: Array<CompetitorListResponse.Data>;
}

export namespace CompetitorListResponse {
  export interface Data {
    id?: number;

    average?: number;

    average_position?: number;

    market_share?: number;

    market_share_position?: number;

    north_east?: number;

    north_west?: number;

    photos_count?: number;

    place?: Data.Place;

    south_east?: number;

    south_west?: number;

    top_20_points?: number;

    top_3_percentage?: number;

    top_3_points?: number;

    top_3_position?: number;

    total_points?: number;
  }

  export namespace Data {
    export interface Place {
      id?: number;

      address?: string;

      ave_review_rating?: number;

      google_place_id?: string;

      name?: string;

      review_count?: number;
    }
  }
}

export interface CompetitorRetrieveRankingsResponse {
  data?: Array<CompetitorRetrieveRankingsResponse.Data>;
}

export namespace CompetitorRetrieveRankingsResponse {
  export interface Data {
    id?: number;

    index?: number;

    lat?: number;

    lng?: number;

    places?: Array<unknown>;

    rank?: number;
  }
}

export interface CompetitorRetrieveRankingsParams {
  /**
   * The heatmap ID.
   */
  heatmap_id: number;
}

export declare namespace Competitors {
  export {
    type CompetitorListResponse as CompetitorListResponse,
    type CompetitorRetrieveRankingsResponse as CompetitorRetrieveRankingsResponse,
    type CompetitorRetrieveRankingsParams as CompetitorRetrieveRankingsParams,
  };
}
