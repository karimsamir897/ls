// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseLsAPI } from '../client';

export abstract class APIResource {
  /**
   * The key path from the client. For example, a resource accessible as `client.resource.subresource` would
   * have a property `static override readonly _key = Object.freeze(['resource', 'subresource'] as const);`.
   */
  static readonly _key: readonly string[] = [];
  protected _client: BaseLsAPI;

  constructor(client: BaseLsAPI) {
    this._client = client;
  }
}
