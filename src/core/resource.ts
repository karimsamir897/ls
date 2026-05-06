// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { LsAPI } from '../client';

export abstract class APIResource {
  protected _client: LsAPI;

  constructor(client: LsAPI) {
    this._client = client;
  }
}
