// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HeatmapAPI from './heatmap/heatmap';
import {
  BaseHeatmap,
  Heatmap,
  HeatmapCreateParams,
  HeatmapCreateResponse,
  HeatmapDeleteAllParams,
  HeatmapDeleteAllResponse,
  HeatmapListParams,
  HeatmapListResponse,
  HeatmapRerunParams,
  HeatmapRerunResponse,
  HeatmapRetrievePlacesParams,
  HeatmapRetrievePlacesResponse,
  HeatmapRetrieveResponse,
} from './heatmap/heatmap';
import * as ShareAPI from './share/share';
import { BaseShare, Share } from './share/share';

export class BaseV1 extends APIResource {
  static override readonly _key: readonly ['v1'] = Object.freeze(['v1'] as const);
}
export class V1 extends BaseV1 {
  share: ShareAPI.Share = new ShareAPI.Share(this._client);
  heatmap: HeatmapAPI.Heatmap = new HeatmapAPI.Heatmap(this._client);
}

V1.Share = Share;
V1.BaseShare = BaseShare;
V1.Heatmap = Heatmap;
V1.BaseHeatmap = BaseHeatmap;

export declare namespace V1 {
  export { Share as Share, BaseShare as BaseShare };

  export {
    Heatmap as Heatmap,
    BaseHeatmap as BaseHeatmap,
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
}
