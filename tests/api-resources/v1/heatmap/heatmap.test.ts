// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { V1 } from 'ls-api-mcp/resources/v1/v1';
import { BaseHeatmap } from 'ls-api-mcp/resources/v1/heatmap/heatmap';

import LsAPI from 'ls-api-mcp';
import { createClient, type PartialLsAPI } from 'ls-api-mcp/tree-shakable';

const client = new LsAPI({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseHeatmap],
});

const parentPartialClient = createClient({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [V1],
});

const runTests = (client: PartialLsAPI<{ v1: { heatmap: BaseHeatmap } }>) => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.heatmap.create({
      distanceType: 'm',
      grid_radius: 3495,
      grid_size: 3,
      keyword: ['roofing'],
      lat: 44.670381143996,
      lng: -88.122418774951,
      place_id: 'ChIJFzfDtmDzAogRn0zn9LJaP_A',
      search_type: ['google_maps'],
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
    const response = await client.v1.heatmap.create({
      distanceType: 'm',
      grid_radius: 3495,
      grid_size: 3,
      keyword: ['roofing'],
      lat: 44.670381143996,
      lng: -88.122418774951,
      place_id: 'ChIJFzfDtmDzAogRn0zn9LJaP_A',
      search_type: ['google_maps'],
      points: [{ lat: 44.626765686401, lng: -88.078293153604 }],
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.v1.heatmap.retrieve(1482);
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
    const responsePromise = client.v1.heatmap.list();
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
      client.v1.heatmap.list(
        {
          'filter[business_name]': 'Green City',
          'filter[company_id]': 3,
          'filter[created_at][date]': 'last_30_days',
          'filter[created_at][end_date]': '2026-04-30',
          'filter[created_at][start_date]': '2026-01-01',
          'filter[google_place_id]': 'ChIJFzfDtmDzAogRn0zn9LJaP_A',
          'filter[keyword_id]': 101,
          'filter[keyword_list_id]': 5,
          'filter[keyword]': 'roofing',
          'filter[location_id]': 20,
          'filter[place_id]': 12,
          'filter[search_type]': 'google_maps',
          'filter[status]': 'Completed',
          'filter[tag_id]': 3,
          'filter[tag]': 'priority',
          page: 1,
          per_page: 25,
          search: 'roofing',
          sort: '-created_at',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LsAPI.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('deleteAll: only required params', async () => {
    const responsePromise = client.v1.heatmap.deleteAll({ heatmaps: [1482, 1483] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteAll: required and optional params', async () => {
    const response = await client.v1.heatmap.deleteAll({ heatmaps: [1482, 1483] });
  });

  // Mock server tests are disabled
  test.skip('rerun: only required params', async () => {
    const responsePromise = client.v1.heatmap.rerun({ heatmaps: [1482, 1483] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('rerun: required and optional params', async () => {
    const response = await client.v1.heatmap.rerun({ heatmaps: [1482, 1483] });
  });

  // Mock server tests are disabled
  test.skip('retrievePlaces', async () => {
    const responsePromise = client.v1.heatmap.retrievePlaces();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrievePlaces: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.heatmap.retrievePlaces(
        {
          'filter[created_at][end_date]': '2026-04-30',
          'filter[created_at][start_date]': '2026-01-01',
          'filter[google_place_id]': 'ChIJFzfDtmDzAogRn0zn9LJaP_A',
          'filter[id]': 12,
          'filter[name]': 'Green City',
          page: 1,
          per_page: 25,
          sort: '-review_count',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LsAPI.NotFoundError);
  });
};
describe('resource heatmap', () => runTests(client));
describe('resource heatmap (tree shakable, base)', () => runTests(partialClient));
describe('resource heatmap (tree shakable, subresource)', () => runTests(parentPartialClient));
