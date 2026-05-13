// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LsAPI from 'ls-api-mcp';

const client = new LsAPI({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource schedules', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.heatmap.schedules.create({
      heatmap_config: {
        grid_points: [{ lat: 44.627, lng: -88.078 }],
        keywords: ['roofing', 'roof repair'],
        name: 'Weekly Roofing Check',
        place_id: 12,
      },
      schedule_config: {
        repeat_every: 1,
        repeat_on: 1,
        repeat_type: 'week',
      },
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
    const response = await client.v1.heatmap.schedules.create({
      heatmap_config: {
        grid_points: [{ lat: 44.627, lng: -88.078 }],
        keywords: ['roofing', 'roof repair'],
        name: 'Weekly Roofing Check',
        place_id: 12,
        grid_size: 3,
        lat: 44.67038,
        lead_source_id: 3,
        length_unit: 'm',
        lng: -88.12241,
        location_id: 20,
        radius: 3495,
      },
      schedule_config: {
        repeat_every: 1,
        repeat_on: 1,
        repeat_type: 'week',
        schedule_hour_minute: '08:00',
        timezone: 'America/Chicago',
      },
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.v1.heatmap.schedules.retrieve(10);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.v1.heatmap.schedules.update(6490, {
      heatmap_config: { name: 'Weekly Roofing Check Updated', place_id: 12 },
      schedule_config: { repeat_type: 'month' },
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
  test.skip('update: required and optional params', async () => {
    const response = await client.v1.heatmap.schedules.update(6490, {
      heatmap_config: {
        name: 'Weekly Roofing Check Updated',
        place_id: 12,
        grid_points: [{ lat: 44.627, lng: -88.078 }],
        keywords: ['roofing', 'gutters'],
      },
      schedule_config: { repeat_type: 'month', repeat_on: 15 },
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.v1.heatmap.schedules.list();
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
      client.v1.heatmap.schedules.list(
        {
          'filter[company_id]': 3,
          'filter[created_at][end_date]': '2026-04-30',
          'filter[created_at][start_date]': '2026-01-01',
          'filter[google_place_id]': 'ChIJFzfDtmDzAogRn0zn9LJaP_A',
          'filter[keyword]': 'roofing',
          'filter[last_schedule_ran_at][end_date]': '2026-04-30',
          'filter[last_schedule_ran_at][start_date]': '2026-04-01',
          'filter[location_id]': 20,
          'filter[name]': 'Weekly Roofing',
          'filter[place_id]': 12,
          'filter[repeat_every]': 2,
          'filter[repeat_on]': 1,
          'filter[repeat_type]': 'week',
          'filter[scheduled_at][end_date]': '2026-05-31',
          'filter[scheduled_at][start_date]': '2026-05-01',
          'filter[status]': 'active',
          page: 1,
          per_page: 25,
          search: 'Green City',
          sort: '-created_at',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LsAPI.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.v1.heatmap.schedules.delete(6490);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteBulkDelete: only required params', async () => {
    const responsePromise = client.v1.heatmap.schedules.deleteBulkDelete({ ids: [10, 11, 12] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteBulkDelete: required and optional params', async () => {
    const response = await client.v1.heatmap.schedules.deleteBulkDelete({ ids: [10, 11, 12] });
  });

  // Mock server tests are disabled
  test.skip('pause', async () => {
    const responsePromise = client.v1.heatmap.schedules.pause(6490);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('resume', async () => {
    const responsePromise = client.v1.heatmap.schedules.resume(6490);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
