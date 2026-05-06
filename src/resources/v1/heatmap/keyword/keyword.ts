// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ListsAPI from './lists';
import {
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

export class Keyword extends APIResource {
  lists: ListsAPI.Lists = new ListsAPI.Lists(this._client);
}

Keyword.Lists = Lists;

export declare namespace Keyword {
  export {
    Lists as Lists,
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
