// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Keyword } from 'ls-api-mcp/resources/v1/heatmap/keyword/keyword';
import { BaseLists } from 'ls-api-mcp/resources/v1/heatmap/keyword/lists';

import LsAPI from 'ls-api-mcp';
import { createClient, type PartialLsAPI } from 'ls-api-mcp/tree-shakable';

const client = new LsAPI({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseLists],
});

const parentPartialClient = createClient({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Keyword],
});

const runTests = (client: PartialLsAPI<{ v1: { heatmap: { keyword: { lists: BaseLists } } } }>) => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.heatmap.keyword.lists.create({ name: 'Roofing Keywords' });
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
    const response = await client.v1.heatmap.keyword.lists.create({
      name: 'Roofing Keywords',
      keywords: ['roofing', 'roof repair', 'roof replacement'],
      lead_source_id: 3,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.v1.heatmap.keyword.lists.retrieve(5);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.v1.heatmap.keyword.lists.update(5);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.heatmap.keyword.lists.update(
        5,
        { keywords: ['roofing', 'siding', 'gutters'], name: 'Roofing & Siding Keywords' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LsAPI.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.v1.heatmap.keyword.lists.list();
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
      client.v1.heatmap.keyword.lists.list(
        {
          'filter[company_id]': 3,
          'filter[created_at][end_date]': '2026-04-30',
          'filter[created_at][start_date]': '2026-01-01',
          'filter[created_by_user]': 1,
          'filter[keyword]': 'repair',
          'filter[name]': 'Roofing',
          'filter[updated_by_user]': 1,
          page: 1,
          per_page: 25,
          sort: '-created_at',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LsAPI.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.v1.heatmap.keyword.lists.delete(5);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteAll: only required params', async () => {
    const responsePromise = client.v1.heatmap.keyword.lists.deleteAll({ ids: [5, 6, 7] });
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
    const response = await client.v1.heatmap.keyword.lists.deleteAll({ ids: [5, 6, 7] });
  });
};
describe('resource lists', () => runTests(client));
describe('resource lists (tree shakable, base)', () => runTests(partialClient));
describe('resource lists (tree shakable, subresource)', () => runTests(parentPartialClient));
