// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HeatmapsAPI from './heatmaps';
import { HeatmapRetrieveParams, HeatmapRetrieveResponse, Heatmaps } from './heatmaps';

export class Share extends APIResource {
  heatmaps: HeatmapsAPI.Heatmaps = new HeatmapsAPI.Heatmaps(this._client);
}

Share.Heatmaps = Heatmaps;

export declare namespace Share {
  export {
    Heatmaps as Heatmaps,
    type HeatmapRetrieveResponse as HeatmapRetrieveResponse,
    type HeatmapRetrieveParams as HeatmapRetrieveParams,
  };
}
