// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ListsAPI from './lists';
import {
  BaseLists,
  ListCreateParams,
  ListCreateResponse,
  ListDeleteAllParams,
  ListDeleteAllResponse,
  ListDeleteResponse,
  ListListParams,
  ListListResponse,
  ListRetrieveResponse,
  ListUpdateParams,
  ListUpdateResponse,
  Lists,
} from './lists';

export class BaseKeyword extends APIResource {
  static override readonly _key: readonly ['v1', 'heatmap', 'keyword'] = Object.freeze([
    'v1',
    'heatmap',
    'keyword',
  ] as const);
}
export class Keyword extends BaseKeyword {
  lists: ListsAPI.Lists = new ListsAPI.Lists(this._client);
}

Keyword.Lists = Lists;
Keyword.BaseLists = BaseLists;

export declare namespace Keyword {
  export {
    Lists as Lists,
    BaseLists as BaseLists,
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
