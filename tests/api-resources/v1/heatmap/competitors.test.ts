// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseCompetitors } from 'ls-api-mcp/resources/v1/heatmap/competitors';
import { Heatmap } from 'ls-api-mcp/resources/v1/heatmap/heatmap';

import LsAPI from 'ls-api-mcp';
import { createClient, type PartialLsAPI } from 'ls-api-mcp/tree-shakable';

const client = new LsAPI({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseCompetitors],
});

const parentPartialClient = createClient({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Heatmap],
});

const runTests = (client: PartialLsAPI<{ v1: { heatmap: { competitors: BaseCompetitors } } }>) => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.v1.heatmap.competitors.list(1482);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveRankings: only required params', async () => {
    const responsePromise = client.v1.heatmap.competitors.retrieveRankings(15, { heatmap_id: 1482 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveRankings: required and optional params', async () => {
    const response = await client.v1.heatmap.competitors.retrieveRankings(15, { heatmap_id: 1482 });
  });
};
describe('resource competitors', () => runTests(client));
describe('resource competitors (tree shakable, base)', () => runTests(partialClient));
describe('resource competitors (tree shakable, subresource)', () => runTests(parentPartialClient));
