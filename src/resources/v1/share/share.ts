// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HeatmapsAPI from './heatmaps';
import { BaseHeatmaps, HeatmapRetrieveParams, HeatmapRetrieveResponse, Heatmaps } from './heatmaps';

export class BaseShare extends APIResource {
  static override readonly _key: readonly ['v1', 'share'] = Object.freeze(['v1', 'share'] as const);
}
export class Share extends BaseShare {
  heatmaps: HeatmapsAPI.Heatmaps = new HeatmapsAPI.Heatmaps(this._client);
}

Share.Heatmaps = Heatmaps;
Share.BaseHeatmaps = BaseHeatmaps;

export declare namespace Share {
  export {
    Heatmaps as Heatmaps,
    BaseHeatmaps as BaseHeatmaps,
    type HeatmapRetrieveResponse as HeatmapRetrieveResponse,
    type HeatmapRetrieveParams as HeatmapRetrieveParams,
  };
}
