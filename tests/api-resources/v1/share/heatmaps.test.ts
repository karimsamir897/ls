// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseHeatmaps } from 'ls-api-mcp/resources/v1/share/heatmaps';
import { Share } from 'ls-api-mcp/resources/v1/share/share';

import LsAPI from 'ls-api-mcp';
import { createClient, type PartialLsAPI } from 'ls-api-mcp/tree-shakable';

const client = new LsAPI({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseHeatmaps],
});

const parentPartialClient = createClient({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Share],
});

const runTests = (client: PartialLsAPI<{ v1: { share: { heatmaps: BaseHeatmaps } } }>) => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.v1.share.heatmaps.retrieve('a1b2c3d4-e5f6-7890-abcd-ef1234567890', {
      heatmap: 1482,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.v1.share.heatmaps.retrieve('a1b2c3d4-e5f6-7890-abcd-ef1234567890', {
      heatmap: 1482,
    });
  });
};
describe('resource heatmaps', () => runTests(client));
describe('resource heatmaps (tree shakable, base)', () => runTests(partialClient));
describe('resource heatmaps (tree shakable, subresource)', () => runTests(parentPartialClient));
