// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseGrids } from 'ls-api-mcp/resources/v1/heatmap/grids';
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
  resources: [BaseGrids],
});

const parentPartialClient = createClient({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Heatmap],
});

const runTests = (client: PartialLsAPI<{ v1: { heatmap: { grids: BaseGrids } } }>) => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.heatmap.grids.create({
      grid_name: 'Standard 3x3',
      grid_size: 3,
      lat: '44.67038',
      length_unit: 'm',
      lng: '-88.12241',
      radius: 3495,
      zoom_level: 12,
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
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.heatmap.grids.create({
      grid_name: 'Standard 3x3',
      grid_size: 3,
      lat: '44.67038',
      length_unit: 'm',
      lng: '-88.12241',
      radius: 3495,
      zoom_level: 12,
      formatted_radius: '3495 m',
      polygon: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.v1.heatmap.grids.retrieve(4263);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.v1.heatmap.grids.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.heatmap.grids.list(
        {
          'filter[title]': 'Standard',
          page: 1,
          per_page: 25,
          sort: 'title',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LsAPI.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.v1.heatmap.grids.delete(4263);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource grids', () => runTests(client));
describe('resource grids (tree shakable, base)', () => runTests(partialClient));
describe('resource grids (tree shakable, subresource)', () => runTests(parentPartialClient));
