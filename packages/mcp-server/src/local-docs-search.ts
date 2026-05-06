// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'retrieve',
    endpoint: '/api/v1/share/heatmaps/{heatmap}/token/{token}',
    httpMethod: 'get',
    summary: 'Get public heatmap',
    description:
      "Returns heatmap details for a publicly shared link. The token must match the heatmap's share token.",
    stainlessPath: '(resource) v1.share.heatmaps > (method) retrieve',
    qualified: 'client.v1.share.heatmaps.retrieve',
    params: ['heatmap: number;', 'token: string;'],
    response:
      '{ heatmap_settings?: { grid_point_style?: string; }; public_heatmap_data?: { id?: number; average?: number; business_name?: string; business_place_id?: string; grid_center_lat?: number; grid_center_lng?: number; grid_distance_measure?: string; grid_point_distance?: string; grid_point_distance_row?: number; grid_size?: number; keyword?: string; search_type?: string; status?: string; top_3_points?: number; total_points?: number; }; }',
    markdown:
      "## retrieve\n\n`client.v1.share.heatmaps.retrieve(heatmap: number, token: string): { heatmap_settings?: object; public_heatmap_data?: object; }`\n\n**get** `/api/v1/share/heatmaps/{heatmap}/token/{token}`\n\nReturns heatmap details for a publicly shared link. The token must match the heatmap's share token.\n\n### Parameters\n\n- `heatmap: number`\n\n- `token: string`\n\n### Returns\n\n- `{ heatmap_settings?: { grid_point_style?: string; }; public_heatmap_data?: { id?: number; average?: number; business_name?: string; business_place_id?: string; grid_center_lat?: number; grid_center_lng?: number; grid_distance_measure?: string; grid_point_distance?: string; grid_point_distance_row?: number; grid_size?: number; keyword?: string; search_type?: string; status?: string; top_3_points?: number; total_points?: number; }; }`\n\n  - `heatmap_settings?: { grid_point_style?: string; }`\n  - `public_heatmap_data?: { id?: number; average?: number; business_name?: string; business_place_id?: string; grid_center_lat?: number; grid_center_lng?: number; grid_distance_measure?: string; grid_point_distance?: string; grid_point_distance_row?: number; grid_size?: number; keyword?: string; search_type?: string; status?: string; top_3_points?: number; total_points?: number; }`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst heatmap = await client.v1.share.heatmaps.retrieve('a1b2c3d4-e5f6-7890-abcd-ef1234567890', { heatmap: 1482 });\n\nconsole.log(heatmap);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.share.heatmaps.retrieve',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst heatmap = await client.v1.share.heatmaps.retrieve('a1b2c3d4-e5f6-7890-abcd-ef1234567890', {\n  heatmap: 1482,\n});\n\nconsole.log(heatmap.heatmap_settings);",
      },
      go: {
        method: 'client.V1.Share.Heatmaps.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\theatmap, err := client.V1.Share.Heatmaps.Get(\n\t\tcontext.TODO(),\n\t\t"a1b2c3d4-e5f6-7890-abcd-ef1234567890",\n\t\tlsapi.V1ShareHeatmapGetParams{\n\t\t\tHeatmap: 1482,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", heatmap.HeatmapSettings)\n}\n',
      },
      cli: {
        method: 'heatmaps retrieve',
        example:
          "ls-api v1:share:heatmaps retrieve \\\n  --bearer-token 'My Bearer Token' \\\n  --heatmap 1482 \\\n  --token a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/share/heatmaps/$HEATMAP/token/$TOKEN \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v1/heatmaps/{heatmap}',
    httpMethod: 'get',
    summary: 'Get heatmap',
    description:
      'Returns full details of a single heatmap including grid points, place info, and ranking statistics.',
    stainlessPath: '(resource) v1.heatmap > (method) retrieve',
    qualified: 'client.v1.heatmap.retrieve',
    params: ['heatmap: number;'],
    response:
      '{ id?: number; area?: string; ave_review_rating?: number; average?: number; average_position?: number; business_name?: string; business_place_id?: string; created_at?: string; grid_center_lat?: number; grid_center_lng?: number; grid_distance_measure?: string; grid_point_distance?: string; grid_point_distance_row?: number; grid_size?: number; keyword?: string; keyword_difficulty?: string; keyword_search_intents?: object[]; lead_source_id?: string; location?: string; location_id?: string; market_share?: number; market_share_position?: number; place?: { id?: number; address?: string; ave_review_rating?: number; google_place_id?: string; name?: string; phone?: string; review_count?: number; website_url?: string; }; place_id?: number; points?: object[]; previous_ranking?: number; ranking_change?: number; ranking_change_percentage?: number; review_count?: number; search_type?: string; search_volume?: string; status?: string; tags?: object[]; top_3_percentage?: number; top_3_points?: number; top_3_position?: number; top_n?: number; total?: number; total_points?: number; updated_at?: string; zoom_level?: number; }',
    markdown:
      "## retrieve\n\n`client.v1.heatmap.retrieve(heatmap: number): { id?: number; area?: string; ave_review_rating?: number; average?: number; average_position?: number; business_name?: string; business_place_id?: string; created_at?: string; grid_center_lat?: number; grid_center_lng?: number; grid_distance_measure?: string; grid_point_distance?: string; grid_point_distance_row?: number; grid_size?: number; keyword?: string; keyword_difficulty?: string; keyword_search_intents?: object[]; lead_source_id?: string; location?: string; location_id?: string; market_share?: number; market_share_position?: number; place?: object; place_id?: number; points?: object[]; previous_ranking?: number; ranking_change?: number; ranking_change_percentage?: number; review_count?: number; search_type?: string; search_volume?: string; status?: string; tags?: object[]; top_3_percentage?: number; top_3_points?: number; top_3_position?: number; top_n?: number; total?: number; total_points?: number; updated_at?: string; zoom_level?: number; }`\n\n**get** `/api/v1/heatmaps/{heatmap}`\n\nReturns full details of a single heatmap including grid points, place info, and ranking statistics.\n\n### Parameters\n\n- `heatmap: number`\n\n### Returns\n\n- `{ id?: number; area?: string; ave_review_rating?: number; average?: number; average_position?: number; business_name?: string; business_place_id?: string; created_at?: string; grid_center_lat?: number; grid_center_lng?: number; grid_distance_measure?: string; grid_point_distance?: string; grid_point_distance_row?: number; grid_size?: number; keyword?: string; keyword_difficulty?: string; keyword_search_intents?: object[]; lead_source_id?: string; location?: string; location_id?: string; market_share?: number; market_share_position?: number; place?: { id?: number; address?: string; ave_review_rating?: number; google_place_id?: string; name?: string; phone?: string; review_count?: number; website_url?: string; }; place_id?: number; points?: object[]; previous_ranking?: number; ranking_change?: number; ranking_change_percentage?: number; review_count?: number; search_type?: string; search_volume?: string; status?: string; tags?: object[]; top_3_percentage?: number; top_3_points?: number; top_3_position?: number; top_n?: number; total?: number; total_points?: number; updated_at?: string; zoom_level?: number; }`\n\n  - `id?: number`\n  - `area?: string`\n  - `ave_review_rating?: number`\n  - `average?: number`\n  - `average_position?: number`\n  - `business_name?: string`\n  - `business_place_id?: string`\n  - `created_at?: string`\n  - `grid_center_lat?: number`\n  - `grid_center_lng?: number`\n  - `grid_distance_measure?: string`\n  - `grid_point_distance?: string`\n  - `grid_point_distance_row?: number`\n  - `grid_size?: number`\n  - `keyword?: string`\n  - `keyword_difficulty?: string`\n  - `keyword_search_intents?: object[]`\n  - `lead_source_id?: string`\n  - `location?: string`\n  - `location_id?: string`\n  - `market_share?: number`\n  - `market_share_position?: number`\n  - `place?: { id?: number; address?: string; ave_review_rating?: number; google_place_id?: string; name?: string; phone?: string; review_count?: number; website_url?: string; }`\n  - `place_id?: number`\n  - `points?: object[]`\n  - `previous_ranking?: number`\n  - `ranking_change?: number`\n  - `ranking_change_percentage?: number`\n  - `review_count?: number`\n  - `search_type?: string`\n  - `search_volume?: string`\n  - `status?: string`\n  - `tags?: object[]`\n  - `top_3_percentage?: number`\n  - `top_3_points?: number`\n  - `top_3_position?: number`\n  - `top_n?: number`\n  - `total?: number`\n  - `total_points?: number`\n  - `updated_at?: string`\n  - `zoom_level?: number`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst heatmap = await client.v1.heatmap.retrieve(1482);\n\nconsole.log(heatmap);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.retrieve',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst heatmap = await client.v1.heatmap.retrieve(1482);\n\nconsole.log(heatmap.id);",
      },
      go: {
        method: 'client.V1.Heatmap.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\theatmap, err := client.V1.Heatmap.Get(context.TODO(), 1482)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", heatmap.ID)\n}\n',
      },
      cli: {
        method: 'heatmap retrieve',
        example: "ls-api v1:heatmap retrieve \\\n  --bearer-token 'My Bearer Token' \\\n  --heatmap 1482",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmaps/$HEATMAP \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v1/heatmaps',
    httpMethod: 'post',
    summary: 'Create heatmap',
    description:
      'Creates one or more heatmaps. Each combination of keyword × search_type generates a separate heatmap.',
    stainlessPath: '(resource) v1.heatmap > (method) create',
    qualified: 'client.v1.heatmap.create',
    params: [
      'distanceType: string;',
      'grid_radius: number;',
      'grid_size: number;',
      'keyword: string[];',
      'lat: number;',
      'lng: number;',
      'place_id: string;',
      'search_type: string[];',
      'points?: { lat: number; lng: number; }[];',
    ],
    response:
      '{ id?: number; area?: string; ave_review_rating?: string; average?: string; average_position?: string; business_name?: string; business_place_id?: string; created_at?: string; grid_center_lat?: number; grid_center_lng?: number; grid_distance_measure?: string; grid_point_distance?: string; grid_point_distance_row?: number; grid_size?: number; keyword?: string; keyword_difficulty?: string; keyword_search_intents?: object[]; lead_source_id?: string; location?: string; location_id?: string; market_share?: string; market_share_position?: string; place?: string; place_id?: string; points?: object[]; previous_ranking?: string; ranking_change?: string; ranking_change_percentage?: string; review_count?: string; search_type?: string; search_volume?: string; status?: string; tags?: object[]; top_3_percentage?: string; top_3_points?: number; top_3_position?: string; top_n?: string; total?: number; total_points?: number; updated_at?: string; zoom_level?: string; }',
    markdown:
      "## create\n\n`client.v1.heatmap.create(distanceType: string, grid_radius: number, grid_size: number, keyword: string[], lat: number, lng: number, place_id: string, search_type: string[], points?: { lat: number; lng: number; }[]): { id?: number; area?: string; ave_review_rating?: string; average?: string; average_position?: string; business_name?: string; business_place_id?: string; created_at?: string; grid_center_lat?: number; grid_center_lng?: number; grid_distance_measure?: string; grid_point_distance?: string; grid_point_distance_row?: number; grid_size?: number; keyword?: string; keyword_difficulty?: string; keyword_search_intents?: object[]; lead_source_id?: string; location?: string; location_id?: string; market_share?: string; market_share_position?: string; place?: string; place_id?: string; points?: object[]; previous_ranking?: string; ranking_change?: string; ranking_change_percentage?: string; review_count?: string; search_type?: string; search_volume?: string; status?: string; tags?: object[]; top_3_percentage?: string; top_3_points?: number; top_3_position?: string; top_n?: string; total?: number; total_points?: number; updated_at?: string; zoom_level?: string; }`\n\n**post** `/api/v1/heatmaps`\n\nCreates one or more heatmaps. Each combination of keyword × search_type generates a separate heatmap.\n\n### Parameters\n\n- `distanceType: string`\n  Unit for the radius. Accepted: `km`, `mi`, `m`.\n\n- `grid_radius: number`\n  Radius between grid points in the chosen unit. Used to auto-generate points when `points` is not provided.\n\n- `grid_size: number`\n  Number of grid points per side (e.g. 3 = 3×3). Used to auto-generate points when `points` is not provided.\n\n- `keyword: string[]`\n  Keywords to track.\n\n- `lat: number`\n  Latitude of the grid center.\n\n- `lng: number`\n  Longitude of the grid center.\n\n- `place_id: string`\n  Google Place ID of the business.\n\n- `search_type: string[]`\n  Search type(s) to run per keyword. Accepted: `google_maps`, `local_pack`.\n\n- `points?: { lat: number; lng: number; }[]`\n  optional Pre-computed grid point coordinates. If provided (must not be empty), `grid_radius` and `grid_size` are ignored. If omitted, points are auto-generated from `grid_size` and `grid_radius`.\n\n### Returns\n\n- `{ id?: number; area?: string; ave_review_rating?: string; average?: string; average_position?: string; business_name?: string; business_place_id?: string; created_at?: string; grid_center_lat?: number; grid_center_lng?: number; grid_distance_measure?: string; grid_point_distance?: string; grid_point_distance_row?: number; grid_size?: number; keyword?: string; keyword_difficulty?: string; keyword_search_intents?: object[]; lead_source_id?: string; location?: string; location_id?: string; market_share?: string; market_share_position?: string; place?: string; place_id?: string; points?: object[]; previous_ranking?: string; ranking_change?: string; ranking_change_percentage?: string; review_count?: string; search_type?: string; search_volume?: string; status?: string; tags?: object[]; top_3_percentage?: string; top_3_points?: number; top_3_position?: string; top_n?: string; total?: number; total_points?: number; updated_at?: string; zoom_level?: string; }`\n\n  - `id?: number`\n  - `area?: string`\n  - `ave_review_rating?: string`\n  - `average?: string`\n  - `average_position?: string`\n  - `business_name?: string`\n  - `business_place_id?: string`\n  - `created_at?: string`\n  - `grid_center_lat?: number`\n  - `grid_center_lng?: number`\n  - `grid_distance_measure?: string`\n  - `grid_point_distance?: string`\n  - `grid_point_distance_row?: number`\n  - `grid_size?: number`\n  - `keyword?: string`\n  - `keyword_difficulty?: string`\n  - `keyword_search_intents?: object[]`\n  - `lead_source_id?: string`\n  - `location?: string`\n  - `location_id?: string`\n  - `market_share?: string`\n  - `market_share_position?: string`\n  - `place?: string`\n  - `place_id?: string`\n  - `points?: object[]`\n  - `previous_ranking?: string`\n  - `ranking_change?: string`\n  - `ranking_change_percentage?: string`\n  - `review_count?: string`\n  - `search_type?: string`\n  - `search_volume?: string`\n  - `status?: string`\n  - `tags?: object[]`\n  - `top_3_percentage?: string`\n  - `top_3_points?: number`\n  - `top_3_position?: string`\n  - `top_n?: string`\n  - `total?: number`\n  - `total_points?: number`\n  - `updated_at?: string`\n  - `zoom_level?: string`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst heatmap = await client.v1.heatmap.create({\n  distanceType: 'm',\n  grid_radius: 3495,\n  grid_size: 3,\n  keyword: ['roofing'],\n  lat: 44.670381143996,\n  lng: -88.122418774951,\n  place_id: 'ChIJFzfDtmDzAogRn0zn9LJaP_A',\n  search_type: ['google_maps'],\n});\n\nconsole.log(heatmap);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.create',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst heatmap = await client.v1.heatmap.create({\n  distanceType: 'm',\n  grid_radius: 3495,\n  grid_size: 3,\n  keyword: ['roofing'],\n  lat: 44.670381143996,\n  lng: -88.122418774951,\n  place_id: 'ChIJFzfDtmDzAogRn0zn9LJaP_A',\n  search_type: ['google_maps'],\n});\n\nconsole.log(heatmap.id);",
      },
      go: {
        method: 'client.V1.Heatmap.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\theatmap, err := client.V1.Heatmap.New(context.TODO(), lsapi.V1HeatmapNewParams{\n\t\tDistanceType: "m",\n\t\tGridRadius:   3495,\n\t\tGridSize:     3,\n\t\tKeyword:      []string{"roofing"},\n\t\tLat:          44.670381143996,\n\t\tLng:          -88.122418774951,\n\t\tPlaceID:      "ChIJFzfDtmDzAogRn0zn9LJaP_A",\n\t\tSearchType:   []string{"google_maps"},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", heatmap.ID)\n}\n',
      },
      cli: {
        method: 'heatmap create',
        example:
          "ls-api v1:heatmap create \\\n  --bearer-token 'My Bearer Token' \\\n  --distance-type m \\\n  --grid-radius 3495 \\\n  --grid-size 3 \\\n  --keyword roofing \\\n  --lat 44.670381143996 \\\n  --lng -88.122418774951 \\\n  --place-id ChIJFzfDtmDzAogRn0zn9LJaP_A \\\n  --search-type google_maps",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmaps \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN" \\\n    -d \'{\n          "distanceType": "m",\n          "grid_radius": 3495,\n          "grid_size": 3,\n          "keyword": [\n            "roofing"\n          ],\n          "lat": 44.670381143996,\n          "lng": -88.122418774951,\n          "place_id": "ChIJFzfDtmDzAogRn0zn9LJaP_A",\n          "search_type": [\n            "google_maps"\n          ],\n          "points": [\n            {\n              "lat": 44.626765686401,\n              "lng": -88.078293153604\n            }\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/heatmaps',
    httpMethod: 'get',
    summary: 'List heatmaps',
    description:
      'Returns a paginated list of heatmaps for the authenticated account. Supports filtering, sorting, searching, and pagination.\n\n**Pagination** — all list responses include pagination fields at the root level alongside `data`:\n- `total` total matching records; `last_page` total pages; `per_page` results per page (default 25)\n- `next_page_url` URL of the next page (`null` on the last page)\n- `links` array of page link objects (`url`, `label`, `active`)\n\n**Date filters** — `filter[created_at]` accepts an object with `start_date` and/or `end_date` (YYYY-MM-DD):\n```\nfilter[created_at][start_date]=2026-01-01\nfilter[created_at][end_date]=2026-04-30\n```\nAlternatively, pass a named range alias via `filter[created_at][date]`:\n`today`, `yesterday`, `this_week`, `last_week`, `last_7_days`, `last_30_days`, `last_90_days`,\n`this_month`, `last_month`, `this_quarter`, `last_quarter`, `this_year`, `year_to_date`, `last_year`, `all_time`',
    stainlessPath: '(resource) v1.heatmap > (method) list',
    qualified: 'client.v1.heatmap.list',
    params: [
      'filter[business_name]?: string;',
      'filter[company_id]?: number;',
      'filter[created_at][date]?: string;',
      'filter[created_at][end_date]?: string;',
      'filter[created_at][start_date]?: string;',
      'filter[google_place_id]?: string;',
      'filter[keyword_id]?: number;',
      'filter[keyword_list_id]?: number;',
      'filter[keyword]?: string;',
      'filter[location_id]?: number;',
      'filter[place_id]?: number;',
      'filter[search_type]?: string;',
      'filter[status]?: string;',
      'filter[tag_id]?: number;',
      'filter[tag]?: string;',
      'page?: number;',
      'per_page?: number;',
      'search?: string;',
      'sort?: string;',
    ],
    response:
      '{ current_page?: number; data?: { id?: number; average?: number; average_position?: number; business_name?: string; business_place_id?: string; created_at?: string; grid_center_lat?: number; grid_center_lng?: number; grid_distance_measure?: string; grid_point_distance?: string; grid_point_distance_row?: number; grid_size?: number; keyword?: string; lead_source_id?: string; search_type?: string; status?: string; tags?: object[]; top_3_percentage?: number; top_3_points?: number; top_3_position?: number; total_points?: number; updated_at?: string; }[]; first_page_url?: string; from?: number; last_page?: number; last_page_url?: string; links?: { active?: boolean; label?: string; url?: string; }[]; next_page_url?: string; path?: string; per_page?: number; prev_page_url?: string; to?: number; total?: number; }',
    markdown:
      "## list\n\n`client.v1.heatmap.list(filter[business_name]?: string, filter[company_id]?: number, filter[created_at][date]?: string, filter[created_at][end_date]?: string, filter[created_at][start_date]?: string, filter[google_place_id]?: string, filter[keyword_id]?: number, filter[keyword_list_id]?: number, filter[keyword]?: string, filter[location_id]?: number, filter[place_id]?: number, filter[search_type]?: string, filter[status]?: string, filter[tag_id]?: number, filter[tag]?: string, page?: number, per_page?: number, search?: string, sort?: string): { current_page?: number; data?: object[]; first_page_url?: string; from?: number; last_page?: number; last_page_url?: string; links?: object[]; next_page_url?: string; path?: string; per_page?: number; prev_page_url?: string; to?: number; total?: number; }`\n\n**get** `/api/v1/heatmaps`\n\nReturns a paginated list of heatmaps for the authenticated account. Supports filtering, sorting, searching, and pagination.\n\n**Pagination** — all list responses include pagination fields at the root level alongside `data`:\n- `total` total matching records; `last_page` total pages; `per_page` results per page (default 25)\n- `next_page_url` URL of the next page (`null` on the last page)\n- `links` array of page link objects (`url`, `label`, `active`)\n\n**Date filters** — `filter[created_at]` accepts an object with `start_date` and/or `end_date` (YYYY-MM-DD):\n```\nfilter[created_at][start_date]=2026-01-01\nfilter[created_at][end_date]=2026-04-30\n```\nAlternatively, pass a named range alias via `filter[created_at][date]`:\n`today`, `yesterday`, `this_week`, `last_week`, `last_7_days`, `last_30_days`, `last_90_days`,\n`this_month`, `last_month`, `this_quarter`, `last_quarter`, `this_year`, `year_to_date`, `last_year`, `all_time`\n\n### Parameters\n\n- `filter[business_name]?: string`\n  Filter by business name (partial match).\n\n- `filter[company_id]?: number`\n  Filter by lead source / company ID.\n\n- `filter[created_at][date]?: string`\n  Filter by a named date alias instead of a range. Accepted: `today`, `yesterday`, `this_week`, `last_week`, `last_7_days`, `last_30_days`, `last_90_days`, `this_month`, `last_month`, `this_quarter`, `last_quarter`, `this_year`, `year_to_date`, `last_year`, `all_time`.\n\n- `filter[created_at][end_date]?: string`\n  Filter by creation date — range end (YYYY-MM-DD).\n\n- `filter[created_at][start_date]?: string`\n  Filter by creation date — range start (YYYY-MM-DD).\n\n- `filter[google_place_id]?: string`\n  Filter by Google Place ID (exact).\n\n- `filter[keyword_id]?: number`\n  Filter by keyword ID.\n\n- `filter[keyword_list_id]?: number`\n  Filter by keyword list ID.\n\n- `filter[keyword]?: string`\n  Filter by keyword text (partial match).\n\n- `filter[location_id]?: number`\n  Filter by location ID.\n\n- `filter[place_id]?: number`\n  Filter by place ID (exact).\n\n- `filter[search_type]?: string`\n  Filter by search type. Accepted: `google_maps`, `local_pack`.\n\n- `filter[status]?: string`\n  Filter by heatmap status. Accepted: `Completed`, `Pending`, `Failed`.\n\n- `filter[tag_id]?: number`\n  Filter by tag ID.\n\n- `filter[tag]?: string`\n  Filter by tag name (exact match).\n\n- `page?: number`\n  Page number.\n\n- `per_page?: number`\n  Number of results per page (default 25).\n\n- `search?: string`\n  Full-text search across keyword and business name.\n\n- `sort?: string`\n  Sort field. Prefix with `-` for descending. Accepted: `created_at`, `average`, `top_3_points`, `top_3_position`, `top_3_percentage`, `review_count`, `review_rating`, `average_position`, `zoom_level`, `grid_size`, `market_share`, `keyword`, `business_name`, `reviews`.\n\n### Returns\n\n- `{ current_page?: number; data?: { id?: number; average?: number; average_position?: number; business_name?: string; business_place_id?: string; created_at?: string; grid_center_lat?: number; grid_center_lng?: number; grid_distance_measure?: string; grid_point_distance?: string; grid_point_distance_row?: number; grid_size?: number; keyword?: string; lead_source_id?: string; search_type?: string; status?: string; tags?: object[]; top_3_percentage?: number; top_3_points?: number; top_3_position?: number; total_points?: number; updated_at?: string; }[]; first_page_url?: string; from?: number; last_page?: number; last_page_url?: string; links?: { active?: boolean; label?: string; url?: string; }[]; next_page_url?: string; path?: string; per_page?: number; prev_page_url?: string; to?: number; total?: number; }`\n\n  - `current_page?: number`\n  - `data?: { id?: number; average?: number; average_position?: number; business_name?: string; business_place_id?: string; created_at?: string; grid_center_lat?: number; grid_center_lng?: number; grid_distance_measure?: string; grid_point_distance?: string; grid_point_distance_row?: number; grid_size?: number; keyword?: string; lead_source_id?: string; search_type?: string; status?: string; tags?: object[]; top_3_percentage?: number; top_3_points?: number; top_3_position?: number; total_points?: number; updated_at?: string; }[]`\n  - `first_page_url?: string`\n  - `from?: number`\n  - `last_page?: number`\n  - `last_page_url?: string`\n  - `links?: { active?: boolean; label?: string; url?: string; }[]`\n  - `next_page_url?: string`\n  - `path?: string`\n  - `per_page?: number`\n  - `prev_page_url?: string`\n  - `to?: number`\n  - `total?: number`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst heatmaps = await client.v1.heatmap.list();\n\nconsole.log(heatmaps);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.list',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst heatmaps = await client.v1.heatmap.list();\n\nconsole.log(heatmaps.current_page);",
      },
      go: {
        method: 'client.V1.Heatmap.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\theatmaps, err := client.V1.Heatmap.List(context.TODO(), lsapi.V1HeatmapListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", heatmaps.CurrentPage)\n}\n',
      },
      cli: {
        method: 'heatmap list',
        example: "ls-api v1:heatmap list \\\n  --bearer-token 'My Bearer Token'",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmaps \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN"',
      },
    },
  },
  {
    name: 'delete_all',
    endpoint: '/api/v1/heatmaps',
    httpMethod: 'delete',
    summary: 'Delete heatmaps',
    description: 'Permanently deletes one or more heatmaps by ID.',
    stainlessPath: '(resource) v1.heatmap > (method) delete_all',
    qualified: 'client.v1.heatmap.deleteAll',
    params: ['heatmaps: number[];'],
    response: '{ message?: string; }',
    markdown:
      "## delete_all\n\n`client.v1.heatmap.deleteAll(heatmaps: number[]): { message?: string; }`\n\n**delete** `/api/v1/heatmaps`\n\nPermanently deletes one or more heatmaps by ID.\n\n### Parameters\n\n- `heatmaps: number[]`\n  Array of heatmap IDs to delete.\n\n### Returns\n\n- `{ message?: string; }`\n\n  - `message?: string`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst response = await client.v1.heatmap.deleteAll({ heatmaps: [1482, 1483] });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.deleteAll',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.heatmap.deleteAll({ heatmaps: [1482, 1483] });\n\nconsole.log(response.message);",
      },
      go: {
        method: 'client.V1.Heatmap.DeleteAll',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tresponse, err := client.V1.Heatmap.DeleteAll(context.TODO(), lsapi.V1HeatmapDeleteAllParams{\n\t\tHeatmaps: []int64{1482, 1483},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Message)\n}\n',
      },
      cli: {
        method: 'heatmap delete_all',
        example:
          "ls-api v1:heatmap delete-all \\\n  --bearer-token 'My Bearer Token' \\\n  --heatmap 1482 \\\n  --heatmap 1483",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmaps \\\n    -X DELETE \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN"',
      },
    },
  },
  {
    name: 'retrieve_places',
    endpoint: '/api/v1/heatmaps/places',
    httpMethod: 'get',
    summary: 'List heatmap places',
    description:
      'Returns a paginated list of all places (businesses) that have been used in heatmaps for the account.\n\n**Pagination** — all list responses include pagination fields at the root level alongside `data`:\n- `total` total matching records; `last_page` total pages; `per_page` results per page (default 25)\n- `next_page_url` URL of the next page (`null` on the last page)\n- `links` array of page link objects (`url`, `label`, `active`)\n\n**Date filters** — `filter[created_at]` accepts an object with `start_date` and/or `end_date` (YYYY-MM-DD):\n```\nfilter[created_at][start_date]=2026-01-01\nfilter[created_at][end_date]=2026-04-30\n```\nNamed range aliases are also supported via `filter[created_at][date_range]`:\n`today`, `yesterday`, `last_7_days`, `last_30_days`, `this_month`, `last_month`, `this_year`, `last_year`, `all_time`',
    stainlessPath: '(resource) v1.heatmap > (method) retrieve_places',
    qualified: 'client.v1.heatmap.retrievePlaces',
    params: [
      'filter[created_at][end_date]?: string;',
      'filter[created_at][start_date]?: string;',
      'filter[google_place_id]?: string;',
      'filter[id]?: number;',
      'filter[name]?: string;',
      'page?: number;',
      'per_page?: number;',
      'sort?: string;',
    ],
    response:
      '{ current_page?: number; data?: { id?: number; address?: string; ave_review_rating?: number; google_place_id?: string; google_place_serial?: string; latitude?: number; longitude?: number; main_category?: string; map_url?: string; name?: string; phone?: string; place_url?: string; ranking?: string; related_categories?: string[]; review_count?: number; thumbnail_url?: string; website_url?: string; }[]; first_page_url?: string; from?: number; last_page?: number; last_page_url?: string; links?: { active?: boolean; label?: string; url?: string; }[]; next_page_url?: string; path?: string; per_page?: number; prev_page_url?: string; to?: number; total?: number; }',
    markdown:
      "## retrieve_places\n\n`client.v1.heatmap.retrievePlaces(filter[created_at][end_date]?: string, filter[created_at][start_date]?: string, filter[google_place_id]?: string, filter[id]?: number, filter[name]?: string, page?: number, per_page?: number, sort?: string): { current_page?: number; data?: object[]; first_page_url?: string; from?: number; last_page?: number; last_page_url?: string; links?: object[]; next_page_url?: string; path?: string; per_page?: number; prev_page_url?: string; to?: number; total?: number; }`\n\n**get** `/api/v1/heatmaps/places`\n\nReturns a paginated list of all places (businesses) that have been used in heatmaps for the account.\n\n**Pagination** — all list responses include pagination fields at the root level alongside `data`:\n- `total` total matching records; `last_page` total pages; `per_page` results per page (default 25)\n- `next_page_url` URL of the next page (`null` on the last page)\n- `links` array of page link objects (`url`, `label`, `active`)\n\n**Date filters** — `filter[created_at]` accepts an object with `start_date` and/or `end_date` (YYYY-MM-DD):\n```\nfilter[created_at][start_date]=2026-01-01\nfilter[created_at][end_date]=2026-04-30\n```\nNamed range aliases are also supported via `filter[created_at][date_range]`:\n`today`, `yesterday`, `last_7_days`, `last_30_days`, `this_month`, `last_month`, `this_year`, `last_year`, `all_time`\n\n### Parameters\n\n- `filter[created_at][end_date]?: string`\n  Filter by creation date — range end (YYYY-MM-DD).\n\n- `filter[created_at][start_date]?: string`\n  Filter by creation date — range start (YYYY-MM-DD).\n\n- `filter[google_place_id]?: string`\n  Filter by Google Place ID (exact).\n\n- `filter[id]?: number`\n  Filter by place ID (exact).\n\n- `filter[name]?: string`\n  Filter by place name (partial match).\n\n- `page?: number`\n  Page number.\n\n- `per_page?: number`\n  Number of results per page (default 25).\n\n- `sort?: string`\n  Sort field. Prefix with `-` for descending. Accepted: `name`, `id`, `created_at`, `review_count`, `rating`.\n\n### Returns\n\n- `{ current_page?: number; data?: { id?: number; address?: string; ave_review_rating?: number; google_place_id?: string; google_place_serial?: string; latitude?: number; longitude?: number; main_category?: string; map_url?: string; name?: string; phone?: string; place_url?: string; ranking?: string; related_categories?: string[]; review_count?: number; thumbnail_url?: string; website_url?: string; }[]; first_page_url?: string; from?: number; last_page?: number; last_page_url?: string; links?: { active?: boolean; label?: string; url?: string; }[]; next_page_url?: string; path?: string; per_page?: number; prev_page_url?: string; to?: number; total?: number; }`\n\n  - `current_page?: number`\n  - `data?: { id?: number; address?: string; ave_review_rating?: number; google_place_id?: string; google_place_serial?: string; latitude?: number; longitude?: number; main_category?: string; map_url?: string; name?: string; phone?: string; place_url?: string; ranking?: string; related_categories?: string[]; review_count?: number; thumbnail_url?: string; website_url?: string; }[]`\n  - `first_page_url?: string`\n  - `from?: number`\n  - `last_page?: number`\n  - `last_page_url?: string`\n  - `links?: { active?: boolean; label?: string; url?: string; }[]`\n  - `next_page_url?: string`\n  - `path?: string`\n  - `per_page?: number`\n  - `prev_page_url?: string`\n  - `to?: number`\n  - `total?: number`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst response = await client.v1.heatmap.retrievePlaces();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.retrievePlaces',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.heatmap.retrievePlaces();\n\nconsole.log(response.current_page);",
      },
      go: {
        method: 'client.V1.Heatmap.GetPlaces',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tresponse, err := client.V1.Heatmap.GetPlaces(context.TODO(), lsapi.V1HeatmapGetPlacesParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.CurrentPage)\n}\n',
      },
      cli: {
        method: 'heatmap retrieve_places',
        example: "ls-api v1:heatmap retrieve-places \\\n  --bearer-token 'My Bearer Token'",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmaps/places \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN"',
      },
    },
  },
  {
    name: 'rerun',
    endpoint: '/api/v1/heatmaps/rerun',
    httpMethod: 'post',
    summary: 'Re-run heatmaps',
    description:
      'Creates new heatmap runs for each provided heatmap ID, reusing the same grid points and settings. Returns the newly queued heatmaps.',
    stainlessPath: '(resource) v1.heatmap > (method) rerun',
    qualified: 'client.v1.heatmap.rerun',
    params: ['heatmaps: number[];'],
    response:
      '{ data?: { id?: number; average?: string; business_name?: string; business_place_id?: string; grid_center_lat?: number; grid_center_lng?: number; grid_distance_measure?: string; grid_point_distance?: string; grid_point_distance_row?: number; grid_size?: number; keyword?: string; lead_source_id?: string; search_type?: string; status?: string; top_3_points?: number; total_points?: number; }[]; }',
    markdown:
      "## rerun\n\n`client.v1.heatmap.rerun(heatmaps: number[]): { data?: object[]; }`\n\n**post** `/api/v1/heatmaps/rerun`\n\nCreates new heatmap runs for each provided heatmap ID, reusing the same grid points and settings. Returns the newly queued heatmaps.\n\n### Parameters\n\n- `heatmaps: number[]`\n  Array of heatmap IDs to re-run.\n\n### Returns\n\n- `{ data?: { id?: number; average?: string; business_name?: string; business_place_id?: string; grid_center_lat?: number; grid_center_lng?: number; grid_distance_measure?: string; grid_point_distance?: string; grid_point_distance_row?: number; grid_size?: number; keyword?: string; lead_source_id?: string; search_type?: string; status?: string; top_3_points?: number; total_points?: number; }[]; }`\n\n  - `data?: { id?: number; average?: string; business_name?: string; business_place_id?: string; grid_center_lat?: number; grid_center_lng?: number; grid_distance_measure?: string; grid_point_distance?: string; grid_point_distance_row?: number; grid_size?: number; keyword?: string; lead_source_id?: string; search_type?: string; status?: string; top_3_points?: number; total_points?: number; }[]`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst response = await client.v1.heatmap.rerun({ heatmaps: [1482, 1483] });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.rerun',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.heatmap.rerun({ heatmaps: [1482, 1483] });\n\nconsole.log(response.data);",
      },
      go: {
        method: 'client.V1.Heatmap.Rerun',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tresponse, err := client.V1.Heatmap.Rerun(context.TODO(), lsapi.V1HeatmapRerunParams{\n\t\tHeatmaps: []int64{1482, 1483},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      cli: {
        method: 'heatmap rerun',
        example:
          "ls-api v1:heatmap rerun \\\n  --bearer-token 'My Bearer Token' \\\n  --heatmap 1482 \\\n  --heatmap 1483",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmaps/rerun \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN" \\\n    -d \'{\n          "heatmaps": [\n            1482,\n            1483\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/heatmap/configs',
    httpMethod: 'get',
    summary: 'List heatmap configs',
    description: 'Returns a paginated list of saved heatmap grid configurations for the account.',
    stainlessPath: '(resource) v1.heatmap.configs > (method) list',
    qualified: 'client.v1.heatmap.configs.list',
    params: ['filter[title]?: string;', 'page?: number;', 'per_page?: number;', 'sort?: string;'],
    response:
      '{ data?: { id?: number; formatted_radius?: string; grid_size?: number; keyword?: string; keywords_list_id?: string; lat?: string; length_unit?: string; lng?: string; place_id?: string; polygon?: object[]; search_type?: string; status?: string; title?: string; zoom_level?: number; }[]; meta?: { current_page?: number; per_page?: number; total?: number; }; }',
    markdown:
      "## list\n\n`client.v1.heatmap.configs.list(filter[title]?: string, page?: number, per_page?: number, sort?: string): { data?: object[]; meta?: object; }`\n\n**get** `/api/v1/heatmap/configs`\n\nReturns a paginated list of saved heatmap grid configurations for the account.\n\n### Parameters\n\n- `filter[title]?: string`\n  Filter by config title (partial match).\n\n- `page?: number`\n  Page number.\n\n- `per_page?: number`\n  Number of results per page (default 25).\n\n- `sort?: string`\n  Sort field. Prefix with `-` for descending. Accepted: `title`.\n\n### Returns\n\n- `{ data?: { id?: number; formatted_radius?: string; grid_size?: number; keyword?: string; keywords_list_id?: string; lat?: string; length_unit?: string; lng?: string; place_id?: string; polygon?: object[]; search_type?: string; status?: string; title?: string; zoom_level?: number; }[]; meta?: { current_page?: number; per_page?: number; total?: number; }; }`\n\n  - `data?: { id?: number; formatted_radius?: string; grid_size?: number; keyword?: string; keywords_list_id?: string; lat?: string; length_unit?: string; lng?: string; place_id?: string; polygon?: object[]; search_type?: string; status?: string; title?: string; zoom_level?: number; }[]`\n  - `meta?: { current_page?: number; per_page?: number; total?: number; }`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst configs = await client.v1.heatmap.configs.list();\n\nconsole.log(configs);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.configs.list',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst configs = await client.v1.heatmap.configs.list();\n\nconsole.log(configs.data);",
      },
      go: {
        method: 'client.V1.Heatmap.Configs.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tconfigs, err := client.V1.Heatmap.Configs.List(context.TODO(), lsapi.V1HeatmapConfigListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", configs.Data)\n}\n',
      },
      cli: {
        method: 'configs list',
        example: "ls-api v1:heatmap:configs list \\\n  --bearer-token 'My Bearer Token'",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmap/configs \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v1/heatmap/configs',
    httpMethod: 'post',
    summary: 'Create heatmap config',
    description:
      'Saves a new heatmap grid configuration that can be reapplied when creating future heatmaps.',
    stainlessPath: '(resource) v1.heatmap.configs > (method) create',
    qualified: 'client.v1.heatmap.configs.create',
    params: [
      'grid_size: number;',
      'lat: string;',
      'length_unit: string;',
      'lng: string;',
      'radius: number;',
      'title: string;',
      'zoom_level: number;',
      'formatted_radius?: string;',
      'polygon?: string[];',
    ],
    response:
      '{ id?: number; formatted_radius?: string; grid_size?: number; keyword?: string; keywords_list_id?: string; lat?: string; length_unit?: string; lng?: string; place_id?: string; polygon?: object[]; search_type?: string; status?: string; title?: string; zoom_level?: number; }',
    markdown:
      "## create\n\n`client.v1.heatmap.configs.create(grid_size: number, lat: string, length_unit: string, lng: string, radius: number, title: string, zoom_level: number, formatted_radius?: string, polygon?: string[]): { id?: number; formatted_radius?: string; grid_size?: number; keyword?: string; keywords_list_id?: string; lat?: string; length_unit?: string; lng?: string; place_id?: string; polygon?: object[]; search_type?: string; status?: string; title?: string; zoom_level?: number; }`\n\n**post** `/api/v1/heatmap/configs`\n\nSaves a new heatmap grid configuration that can be reapplied when creating future heatmaps.\n\n### Parameters\n\n- `grid_size: number`\n  Number of grid points per side (e.g. 3 = 3×3 grid).\n\n- `lat: string`\n  Grid center latitude.\n\n- `length_unit: string`\n  Distance unit. Accepted: `km`, `mi`, `m`.\n\n- `lng: string`\n  Grid center longitude.\n\n- `radius: number`\n  Spacing between grid points in the chosen unit.\n\n- `title: string`\n  Configuration name.\n\n- `zoom_level: number`\n  Map zoom level for display.\n\n- `formatted_radius?: string`\n  optional Human-readable radius string.\n\n- `polygon?: string[]`\n  optional Custom polygon coordinates for non-square grid shapes.\n\n### Returns\n\n- `{ id?: number; formatted_radius?: string; grid_size?: number; keyword?: string; keywords_list_id?: string; lat?: string; length_unit?: string; lng?: string; place_id?: string; polygon?: object[]; search_type?: string; status?: string; title?: string; zoom_level?: number; }`\n\n  - `id?: number`\n  - `formatted_radius?: string`\n  - `grid_size?: number`\n  - `keyword?: string`\n  - `keywords_list_id?: string`\n  - `lat?: string`\n  - `length_unit?: string`\n  - `lng?: string`\n  - `place_id?: string`\n  - `polygon?: object[]`\n  - `search_type?: string`\n  - `status?: string`\n  - `title?: string`\n  - `zoom_level?: number`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst config = await client.v1.heatmap.configs.create({\n  grid_size: 3,\n  lat: '44.67038',\n  length_unit: 'm',\n  lng: '-88.12241',\n  radius: 3495,\n  title: 'Green Bay 3x3 Grid',\n  zoom_level: 12,\n});\n\nconsole.log(config);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.configs.create',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst config = await client.v1.heatmap.configs.create({\n  grid_size: 3,\n  lat: '44.67038',\n  length_unit: 'm',\n  lng: '-88.12241',\n  radius: 3495,\n  title: 'Green Bay 3x3 Grid',\n  zoom_level: 12,\n});\n\nconsole.log(config.id);",
      },
      go: {
        method: 'client.V1.Heatmap.Configs.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tconfig, err := client.V1.Heatmap.Configs.New(context.TODO(), lsapi.V1HeatmapConfigNewParams{\n\t\tGridSize:   3,\n\t\tLat:        "44.67038",\n\t\tLengthUnit: "m",\n\t\tLng:        "-88.12241",\n\t\tRadius:     3495,\n\t\tTitle:      "Green Bay 3x3 Grid",\n\t\tZoomLevel:  12,\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", config.ID)\n}\n',
      },
      cli: {
        method: 'configs create',
        example:
          "ls-api v1:heatmap:configs create \\\n  --bearer-token 'My Bearer Token' \\\n  --grid-size 3 \\\n  --lat 44.67038 \\\n  --length-unit m \\\n  --lng -88.12241 \\\n  --radius 3495 \\\n  --title 'Green Bay 3x3 Grid' \\\n  --zoom-level 12",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmap/configs \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN" \\\n    -d \'{\n          "grid_size": 3,\n          "lat": "44.67038",\n          "length_unit": "m",\n          "lng": "-88.12241",\n          "radius": 3495,\n          "title": "Green Bay 3x3 Grid",\n          "zoom_level": 12,\n          "formatted_radius": "3495 m",\n          "polygon": [\n            "string"\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v1/heatmap/configs/{config_id}',
    httpMethod: 'get',
    summary: 'Get heatmap config',
    description: 'Returns the details of a single saved heatmap configuration.',
    stainlessPath: '(resource) v1.heatmap.configs > (method) retrieve',
    qualified: 'client.v1.heatmap.configs.retrieve',
    params: ['config_id: number;'],
    response:
      '{ id?: number; formatted_radius?: string; grid_size?: number; keyword?: string; keywords_list_id?: string; lat?: string; length_unit?: string; lng?: string; place_id?: string; polygon?: object[]; search_type?: string; status?: string; title?: string; zoom_level?: number; }',
    markdown:
      "## retrieve\n\n`client.v1.heatmap.configs.retrieve(config_id: number): { id?: number; formatted_radius?: string; grid_size?: number; keyword?: string; keywords_list_id?: string; lat?: string; length_unit?: string; lng?: string; place_id?: string; polygon?: object[]; search_type?: string; status?: string; title?: string; zoom_level?: number; }`\n\n**get** `/api/v1/heatmap/configs/{config_id}`\n\nReturns the details of a single saved heatmap configuration.\n\n### Parameters\n\n- `config_id: number`\n\n### Returns\n\n- `{ id?: number; formatted_radius?: string; grid_size?: number; keyword?: string; keywords_list_id?: string; lat?: string; length_unit?: string; lng?: string; place_id?: string; polygon?: object[]; search_type?: string; status?: string; title?: string; zoom_level?: number; }`\n\n  - `id?: number`\n  - `formatted_radius?: string`\n  - `grid_size?: number`\n  - `keyword?: string`\n  - `keywords_list_id?: string`\n  - `lat?: string`\n  - `length_unit?: string`\n  - `lng?: string`\n  - `place_id?: string`\n  - `polygon?: object[]`\n  - `search_type?: string`\n  - `status?: string`\n  - `title?: string`\n  - `zoom_level?: number`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst config = await client.v1.heatmap.configs.retrieve(4);\n\nconsole.log(config);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.configs.retrieve',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst config = await client.v1.heatmap.configs.retrieve(4);\n\nconsole.log(config.id);",
      },
      go: {
        method: 'client.V1.Heatmap.Configs.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tconfig, err := client.V1.Heatmap.Configs.Get(context.TODO(), 4)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", config.ID)\n}\n',
      },
      cli: {
        method: 'configs retrieve',
        example:
          "ls-api v1:heatmap:configs retrieve \\\n  --bearer-token 'My Bearer Token' \\\n  --config-id 4",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmap/configs/$CONFIG_ID \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/v1/heatmap/configs/{config_id}',
    httpMethod: 'delete',
    summary: 'Delete heatmap config',
    description: 'Permanently deletes a saved heatmap configuration.',
    stainlessPath: '(resource) v1.heatmap.configs > (method) delete',
    qualified: 'client.v1.heatmap.configs.delete',
    params: ['config_id: number;'],
    response: '{ message?: string; }',
    markdown:
      "## delete\n\n`client.v1.heatmap.configs.delete(config_id: number): { message?: string; }`\n\n**delete** `/api/v1/heatmap/configs/{config_id}`\n\nPermanently deletes a saved heatmap configuration.\n\n### Parameters\n\n- `config_id: number`\n\n### Returns\n\n- `{ message?: string; }`\n\n  - `message?: string`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst config = await client.v1.heatmap.configs.delete(4);\n\nconsole.log(config);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.configs.delete',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst config = await client.v1.heatmap.configs.delete(4);\n\nconsole.log(config.message);",
      },
      go: {
        method: 'client.V1.Heatmap.Configs.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tconfig, err := client.V1.Heatmap.Configs.Delete(context.TODO(), 4)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", config.Message)\n}\n',
      },
      cli: {
        method: 'configs delete',
        example:
          "ls-api v1:heatmap:configs delete \\\n  --bearer-token 'My Bearer Token' \\\n  --config-id 4",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmap/configs/$CONFIG_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/heatmap/grids',
    httpMethod: 'get',
    summary: 'List heatmap grids',
    description: 'Returns a paginated list of saved reusable grid templates for the account.',
    stainlessPath: '(resource) v1.heatmap.grids > (method) list',
    qualified: 'client.v1.heatmap.grids.list',
    params: ['filter[title]?: string;', 'page?: number;', 'per_page?: number;', 'sort?: string;'],
    response:
      '{ data?: { id?: number; formatted_radius?: string; grid_size?: number; lat?: string; length_unit?: string; lng?: string; polygon?: object[]; radius?: number; title?: string; zoom_level?: number; }[]; meta?: { current_page?: number; per_page?: number; total?: number; }; }',
    markdown:
      "## list\n\n`client.v1.heatmap.grids.list(filter[title]?: string, page?: number, per_page?: number, sort?: string): { data?: object[]; meta?: object; }`\n\n**get** `/api/v1/heatmap/grids`\n\nReturns a paginated list of saved reusable grid templates for the account.\n\n### Parameters\n\n- `filter[title]?: string`\n  Filter by grid title (partial match).\n\n- `page?: number`\n  Page number.\n\n- `per_page?: number`\n  Number of results per page (default 25).\n\n- `sort?: string`\n  Sort field. Prefix with `-` for descending. Accepted: `title`.\n\n### Returns\n\n- `{ data?: { id?: number; formatted_radius?: string; grid_size?: number; lat?: string; length_unit?: string; lng?: string; polygon?: object[]; radius?: number; title?: string; zoom_level?: number; }[]; meta?: { current_page?: number; per_page?: number; total?: number; }; }`\n\n  - `data?: { id?: number; formatted_radius?: string; grid_size?: number; lat?: string; length_unit?: string; lng?: string; polygon?: object[]; radius?: number; title?: string; zoom_level?: number; }[]`\n  - `meta?: { current_page?: number; per_page?: number; total?: number; }`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst grids = await client.v1.heatmap.grids.list();\n\nconsole.log(grids);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.grids.list',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst grids = await client.v1.heatmap.grids.list();\n\nconsole.log(grids.data);",
      },
      go: {
        method: 'client.V1.Heatmap.Grids.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tgrids, err := client.V1.Heatmap.Grids.List(context.TODO(), lsapi.V1HeatmapGridListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", grids.Data)\n}\n',
      },
      cli: {
        method: 'grids list',
        example: "ls-api v1:heatmap:grids list \\\n  --bearer-token 'My Bearer Token'",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmap/grids \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v1/heatmap/grids',
    httpMethod: 'post',
    summary: 'Create heatmap grid',
    description: 'Saves a new reusable grid template that can be applied to future heatmap runs.',
    stainlessPath: '(resource) v1.heatmap.grids > (method) create',
    qualified: 'client.v1.heatmap.grids.create',
    params: [
      'grid_name: string;',
      'grid_size: number;',
      'lat: string;',
      'length_unit: string;',
      'lng: string;',
      'radius: number;',
      'zoom_level: number;',
      'formatted_radius?: string;',
      'polygon?: string[];',
    ],
    response:
      '{ id?: number; formatted_radius?: string; grid_size?: number; lat?: string; length_unit?: string; lng?: string; polygon?: object[]; radius?: number; title?: string; zoom_level?: number; }',
    markdown:
      "## create\n\n`client.v1.heatmap.grids.create(grid_name: string, grid_size: number, lat: string, length_unit: string, lng: string, radius: number, zoom_level: number, formatted_radius?: string, polygon?: string[]): { id?: number; formatted_radius?: string; grid_size?: number; lat?: string; length_unit?: string; lng?: string; polygon?: object[]; radius?: number; title?: string; zoom_level?: number; }`\n\n**post** `/api/v1/heatmap/grids`\n\nSaves a new reusable grid template that can be applied to future heatmap runs.\n\n### Parameters\n\n- `grid_name: string`\n  Grid template name (mapped to `title`).\n\n- `grid_size: number`\n  Number of grid points per side (e.g. 3 = 3×3 grid).\n\n- `lat: string`\n  Grid center latitude.\n\n- `length_unit: string`\n  Distance unit. Accepted: `km`, `mi`, `m`.\n\n- `lng: string`\n  Grid center longitude.\n\n- `radius: number`\n  Spacing between grid points in the chosen unit.\n\n- `zoom_level: number`\n  Map zoom level for display.\n\n- `formatted_radius?: string`\n  optional Human-readable radius string.\n\n- `polygon?: string[]`\n  optional Custom polygon coordinates for non-square grid shapes.\n\n### Returns\n\n- `{ id?: number; formatted_radius?: string; grid_size?: number; lat?: string; length_unit?: string; lng?: string; polygon?: object[]; radius?: number; title?: string; zoom_level?: number; }`\n\n  - `id?: number`\n  - `formatted_radius?: string`\n  - `grid_size?: number`\n  - `lat?: string`\n  - `length_unit?: string`\n  - `lng?: string`\n  - `polygon?: object[]`\n  - `radius?: number`\n  - `title?: string`\n  - `zoom_level?: number`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst grid = await client.v1.heatmap.grids.create({\n  grid_name: 'Standard 3x3',\n  grid_size: 3,\n  lat: '44.67038',\n  length_unit: 'm',\n  lng: '-88.12241',\n  radius: 3495,\n  zoom_level: 12,\n});\n\nconsole.log(grid);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.grids.create',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst grid = await client.v1.heatmap.grids.create({\n  grid_name: 'Standard 3x3',\n  grid_size: 3,\n  lat: '44.67038',\n  length_unit: 'm',\n  lng: '-88.12241',\n  radius: 3495,\n  zoom_level: 12,\n});\n\nconsole.log(grid.id);",
      },
      go: {
        method: 'client.V1.Heatmap.Grids.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tgrid, err := client.V1.Heatmap.Grids.New(context.TODO(), lsapi.V1HeatmapGridNewParams{\n\t\tGridName:   "Standard 3x3",\n\t\tGridSize:   3,\n\t\tLat:        "44.67038",\n\t\tLengthUnit: "m",\n\t\tLng:        "-88.12241",\n\t\tRadius:     3495,\n\t\tZoomLevel:  12,\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", grid.ID)\n}\n',
      },
      cli: {
        method: 'grids create',
        example:
          "ls-api v1:heatmap:grids create \\\n  --bearer-token 'My Bearer Token' \\\n  --grid-name 'Standard 3x3' \\\n  --grid-size 3 \\\n  --lat 44.67038 \\\n  --length-unit m \\\n  --lng -88.12241 \\\n  --radius 3495 \\\n  --zoom-level 12",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmap/grids \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN" \\\n    -d \'{\n          "grid_name": "Standard 3x3",\n          "grid_size": 3,\n          "lat": "44.67038",\n          "length_unit": "m",\n          "lng": "-88.12241",\n          "radius": 3495,\n          "zoom_level": 12,\n          "formatted_radius": "3495 m",\n          "polygon": [\n            "string"\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v1/heatmap/grids/{grid_id}',
    httpMethod: 'get',
    summary: 'Get heatmap grid',
    description: 'Returns the details of a single saved grid template.',
    stainlessPath: '(resource) v1.heatmap.grids > (method) retrieve',
    qualified: 'client.v1.heatmap.grids.retrieve',
    params: ['grid_id: number;'],
    response:
      '{ id?: number; formatted_radius?: string; grid_size?: number; lat?: string; length_unit?: string; lng?: string; polygon?: object[]; radius?: number; title?: string; zoom_level?: number; }',
    markdown:
      "## retrieve\n\n`client.v1.heatmap.grids.retrieve(grid_id: number): { id?: number; formatted_radius?: string; grid_size?: number; lat?: string; length_unit?: string; lng?: string; polygon?: object[]; radius?: number; title?: string; zoom_level?: number; }`\n\n**get** `/api/v1/heatmap/grids/{grid_id}`\n\nReturns the details of a single saved grid template.\n\n### Parameters\n\n- `grid_id: number`\n\n### Returns\n\n- `{ id?: number; formatted_radius?: string; grid_size?: number; lat?: string; length_unit?: string; lng?: string; polygon?: object[]; radius?: number; title?: string; zoom_level?: number; }`\n\n  - `id?: number`\n  - `formatted_radius?: string`\n  - `grid_size?: number`\n  - `lat?: string`\n  - `length_unit?: string`\n  - `lng?: string`\n  - `polygon?: object[]`\n  - `radius?: number`\n  - `title?: string`\n  - `zoom_level?: number`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst grid = await client.v1.heatmap.grids.retrieve(4263);\n\nconsole.log(grid);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.grids.retrieve',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst grid = await client.v1.heatmap.grids.retrieve(4263);\n\nconsole.log(grid.id);",
      },
      go: {
        method: 'client.V1.Heatmap.Grids.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tgrid, err := client.V1.Heatmap.Grids.Get(context.TODO(), 4263)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", grid.ID)\n}\n',
      },
      cli: {
        method: 'grids retrieve',
        example:
          "ls-api v1:heatmap:grids retrieve \\\n  --bearer-token 'My Bearer Token' \\\n  --grid-id 4263",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmap/grids/$GRID_ID \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/v1/heatmap/grids/{grid_id}',
    httpMethod: 'delete',
    summary: 'Delete heatmap grid',
    description: 'Permanently deletes a saved grid template.',
    stainlessPath: '(resource) v1.heatmap.grids > (method) delete',
    qualified: 'client.v1.heatmap.grids.delete',
    params: ['grid_id: number;'],
    response: '{ message?: string; }',
    markdown:
      "## delete\n\n`client.v1.heatmap.grids.delete(grid_id: number): { message?: string; }`\n\n**delete** `/api/v1/heatmap/grids/{grid_id}`\n\nPermanently deletes a saved grid template.\n\n### Parameters\n\n- `grid_id: number`\n\n### Returns\n\n- `{ message?: string; }`\n\n  - `message?: string`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst grid = await client.v1.heatmap.grids.delete(4263);\n\nconsole.log(grid);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.grids.delete',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst grid = await client.v1.heatmap.grids.delete(4263);\n\nconsole.log(grid.message);",
      },
      go: {
        method: 'client.V1.Heatmap.Grids.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tgrid, err := client.V1.Heatmap.Grids.Delete(context.TODO(), 4263)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", grid.Message)\n}\n',
      },
      cli: {
        method: 'grids delete',
        example: "ls-api v1:heatmap:grids delete \\\n  --bearer-token 'My Bearer Token' \\\n  --grid-id 4263",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmap/grids/$GRID_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/heatmap/keyword/lists',
    httpMethod: 'get',
    summary: 'List keyword lists',
    description:
      'Returns a paginated list of keyword lists for the account.\n\n**Pagination** — all list responses include pagination fields at the root level alongside `data`:\n- `total` total matching records; `last_page` total pages; `per_page` results per page (default 25)\n- `next_page_url` URL of the next page (`null` on the last page)\n- `links` array of page link objects (`url`, `label`, `active`)\n\n**Date filters** — `filter[created_at]` accepts an object with `start_date` and/or `end_date` (YYYY-MM-DD):\n```\nfilter[created_at][start_date]=2026-01-01\nfilter[created_at][end_date]=2026-04-30\n```\nNamed range aliases are also supported via `filter[created_at][date_range]`:\n`today`, `yesterday`, `last_7_days`, `last_30_days`, `this_month`, `last_month`, `this_year`, `last_year`, `all_time`',
    stainlessPath: '(resource) v1.heatmap.keyword.lists > (method) list',
    qualified: 'client.v1.heatmap.keyword.lists.list',
    params: [
      'filter[company_id]?: number;',
      'filter[created_at][end_date]?: string;',
      'filter[created_at][start_date]?: string;',
      'filter[created_by_user]?: number;',
      'filter[keyword]?: string;',
      'filter[name]?: string;',
      'filter[updated_by_user]?: number;',
      'page?: number;',
      'per_page?: number;',
      'sort?: string;',
    ],
    response:
      '{ current_page?: number; data?: { id?: number; created_at?: string; created_by_user?: { id?: number; name?: string; }; keywords?: { id?: number; keyword?: string; }[]; lead_source_id?: string; name?: string; updated_at?: string; updated_by_user?: string; }[]; first_page_url?: string; from?: number; last_page?: number; last_page_url?: string; links?: { active?: boolean; label?: string; url?: string; }[]; next_page_url?: string; path?: string; per_page?: number; prev_page_url?: string; to?: number; total?: number; }',
    markdown:
      "## list\n\n`client.v1.heatmap.keyword.lists.list(filter[company_id]?: number, filter[created_at][end_date]?: string, filter[created_at][start_date]?: string, filter[created_by_user]?: number, filter[keyword]?: string, filter[name]?: string, filter[updated_by_user]?: number, page?: number, per_page?: number, sort?: string): { current_page?: number; data?: object[]; first_page_url?: string; from?: number; last_page?: number; last_page_url?: string; links?: object[]; next_page_url?: string; path?: string; per_page?: number; prev_page_url?: string; to?: number; total?: number; }`\n\n**get** `/api/v1/heatmap/keyword/lists`\n\nReturns a paginated list of keyword lists for the account.\n\n**Pagination** — all list responses include pagination fields at the root level alongside `data`:\n- `total` total matching records; `last_page` total pages; `per_page` results per page (default 25)\n- `next_page_url` URL of the next page (`null` on the last page)\n- `links` array of page link objects (`url`, `label`, `active`)\n\n**Date filters** — `filter[created_at]` accepts an object with `start_date` and/or `end_date` (YYYY-MM-DD):\n```\nfilter[created_at][start_date]=2026-01-01\nfilter[created_at][end_date]=2026-04-30\n```\nNamed range aliases are also supported via `filter[created_at][date_range]`:\n`today`, `yesterday`, `last_7_days`, `last_30_days`, `this_month`, `last_month`, `this_year`, `last_year`, `all_time`\n\n### Parameters\n\n- `filter[company_id]?: number`\n  Filter by lead source / company ID.\n\n- `filter[created_at][end_date]?: string`\n  Filter by creation date — range end (YYYY-MM-DD).\n\n- `filter[created_at][start_date]?: string`\n  Filter by creation date — range start (YYYY-MM-DD).\n\n- `filter[created_by_user]?: number`\n  Filter by the ID of the user who created the list.\n\n- `filter[keyword]?: string`\n  Filter by keyword in the list (partial match).\n\n- `filter[name]?: string`\n  Filter by list name (partial match).\n\n- `filter[updated_by_user]?: number`\n  Filter by the ID of the user who last updated the list.\n\n- `page?: number`\n  Page number.\n\n- `per_page?: number`\n  Number of results per page (default 25).\n\n- `sort?: string`\n  Sort field. Prefix with `-` for descending. Accepted: `id`, `name`, `created_at`, `updated_at`.\n\n### Returns\n\n- `{ current_page?: number; data?: { id?: number; created_at?: string; created_by_user?: { id?: number; name?: string; }; keywords?: { id?: number; keyword?: string; }[]; lead_source_id?: string; name?: string; updated_at?: string; updated_by_user?: string; }[]; first_page_url?: string; from?: number; last_page?: number; last_page_url?: string; links?: { active?: boolean; label?: string; url?: string; }[]; next_page_url?: string; path?: string; per_page?: number; prev_page_url?: string; to?: number; total?: number; }`\n\n  - `current_page?: number`\n  - `data?: { id?: number; created_at?: string; created_by_user?: { id?: number; name?: string; }; keywords?: { id?: number; keyword?: string; }[]; lead_source_id?: string; name?: string; updated_at?: string; updated_by_user?: string; }[]`\n  - `first_page_url?: string`\n  - `from?: number`\n  - `last_page?: number`\n  - `last_page_url?: string`\n  - `links?: { active?: boolean; label?: string; url?: string; }[]`\n  - `next_page_url?: string`\n  - `path?: string`\n  - `per_page?: number`\n  - `prev_page_url?: string`\n  - `to?: number`\n  - `total?: number`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst lists = await client.v1.heatmap.keyword.lists.list();\n\nconsole.log(lists);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.keyword.lists.list',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst lists = await client.v1.heatmap.keyword.lists.list();\n\nconsole.log(lists.current_page);",
      },
      go: {
        method: 'client.V1.Heatmap.Keyword.Lists.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tlists, err := client.V1.Heatmap.Keyword.Lists.List(context.TODO(), lsapi.V1HeatmapKeywordListListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", lists.CurrentPage)\n}\n',
      },
      cli: {
        method: 'lists list',
        example: "ls-api v1:heatmap:keyword:lists list \\\n  --bearer-token 'My Bearer Token'",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmap/keyword/lists \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v1/heatmap/keyword/lists',
    httpMethod: 'post',
    summary: 'Create keyword list',
    description: 'Creates a new keyword list with an optional initial set of keywords.',
    stainlessPath: '(resource) v1.heatmap.keyword.lists > (method) create',
    qualified: 'client.v1.heatmap.keyword.lists.create',
    params: ['name: string;', 'keywords?: string[];', 'lead_source_id?: number;'],
    response:
      '{ id?: number; created_at?: string; created_by_user?: { id?: number; name?: string; }; keywords?: { id?: number; keyword?: string; }[]; lead_source_id?: string; name?: string; updated_at?: string; updated_by_user?: string; }',
    markdown:
      "## create\n\n`client.v1.heatmap.keyword.lists.create(name: string, keywords?: string[], lead_source_id?: number): { id?: number; created_at?: string; created_by_user?: object; keywords?: object[]; lead_source_id?: string; name?: string; updated_at?: string; updated_by_user?: string; }`\n\n**post** `/api/v1/heatmap/keyword/lists`\n\nCreates a new keyword list with an optional initial set of keywords.\n\n### Parameters\n\n- `name: string`\n  The list name.\n\n- `keywords?: string[]`\n  optional Keywords to add to the list.\n\n- `lead_source_id?: number`\n  optional Associate the list with a specific lead source / company.\n\n### Returns\n\n- `{ id?: number; created_at?: string; created_by_user?: { id?: number; name?: string; }; keywords?: { id?: number; keyword?: string; }[]; lead_source_id?: string; name?: string; updated_at?: string; updated_by_user?: string; }`\n\n  - `id?: number`\n  - `created_at?: string`\n  - `created_by_user?: { id?: number; name?: string; }`\n  - `keywords?: { id?: number; keyword?: string; }[]`\n  - `lead_source_id?: string`\n  - `name?: string`\n  - `updated_at?: string`\n  - `updated_by_user?: string`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst list = await client.v1.heatmap.keyword.lists.create({ name: 'Roofing Keywords' });\n\nconsole.log(list);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.keyword.lists.create',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst list = await client.v1.heatmap.keyword.lists.create({ name: 'Roofing Keywords' });\n\nconsole.log(list.id);",
      },
      go: {
        method: 'client.V1.Heatmap.Keyword.Lists.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tlist, err := client.V1.Heatmap.Keyword.Lists.New(context.TODO(), lsapi.V1HeatmapKeywordListNewParams{\n\t\tName: "Roofing Keywords",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", list.ID)\n}\n',
      },
      cli: {
        method: 'lists create',
        example:
          "ls-api v1:heatmap:keyword:lists create \\\n  --bearer-token 'My Bearer Token' \\\n  --name 'Roofing Keywords'",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmap/keyword/lists \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN" \\\n    -d \'{\n          "name": "Roofing Keywords",\n          "keywords": [\n            "roofing",\n            "roof repair",\n            "roof replacement"\n          ],\n          "lead_source_id": 3\n        }\'',
      },
    },
  },
  {
    name: 'delete_all',
    endpoint: '/api/v1/heatmap/keyword/lists',
    httpMethod: 'delete',
    summary: 'Bulk delete keyword lists',
    description: 'Deletes multiple keyword lists by ID.',
    stainlessPath: '(resource) v1.heatmap.keyword.lists > (method) delete_all',
    qualified: 'client.v1.heatmap.keyword.lists.deleteAll',
    params: ['ids: number[];'],
    response: 'boolean',
    markdown:
      "## delete_all\n\n`client.v1.heatmap.keyword.lists.deleteAll(ids: number[]): boolean`\n\n**delete** `/api/v1/heatmap/keyword/lists`\n\nDeletes multiple keyword lists by ID.\n\n### Parameters\n\n- `ids: number[]`\n  Array of keyword list IDs to delete.\n\n### Returns\n\n- `boolean`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst response = await client.v1.heatmap.keyword.lists.deleteAll({ ids: [5, 6, 7] });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.keyword.lists.deleteAll',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.heatmap.keyword.lists.deleteAll({ ids: [5, 6, 7] });\n\nconsole.log(response);",
      },
      go: {
        method: 'client.V1.Heatmap.Keyword.Lists.DeleteAll',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tresponse, err := client.V1.Heatmap.Keyword.Lists.DeleteAll(context.TODO(), lsapi.V1HeatmapKeywordListDeleteAllParams{\n\t\tIDs: []int64{5, 6, 7},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      cli: {
        method: 'lists delete_all',
        example:
          "ls-api v1:heatmap:keyword:lists delete-all \\\n  --bearer-token 'My Bearer Token' \\\n  --id 5 \\\n  --id 6 \\\n  --id 7",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmap/keyword/lists \\\n    -X DELETE \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v1/heatmap/keyword/lists/{keyword_list}',
    httpMethod: 'get',
    summary: 'Get keyword list',
    description:
      'Returns full details for a single keyword list, including all associated keywords and optional SEO data.',
    stainlessPath: '(resource) v1.heatmap.keyword.lists > (method) retrieve',
    qualified: 'client.v1.heatmap.keyword.lists.retrieve',
    params: ['keyword_list: number;'],
    response:
      '{ id?: number; created_at?: string; created_by_user?: { id?: number; name?: string; }; keywords?: { id?: number; keyword?: string; keyword_difficulty?: { value?: number; }; keyword_search_intents?: { intent?: string; }[]; search_volume?: { trend?: object[]; value?: number; }; }[]; lead_source_id?: string; name?: string; updated_at?: string; updated_by_user?: string; }',
    markdown:
      "## retrieve\n\n`client.v1.heatmap.keyword.lists.retrieve(keyword_list: number): { id?: number; created_at?: string; created_by_user?: object; keywords?: object[]; lead_source_id?: string; name?: string; updated_at?: string; updated_by_user?: string; }`\n\n**get** `/api/v1/heatmap/keyword/lists/{keyword_list}`\n\nReturns full details for a single keyword list, including all associated keywords and optional SEO data.\n\n### Parameters\n\n- `keyword_list: number`\n\n### Returns\n\n- `{ id?: number; created_at?: string; created_by_user?: { id?: number; name?: string; }; keywords?: { id?: number; keyword?: string; keyword_difficulty?: { value?: number; }; keyword_search_intents?: { intent?: string; }[]; search_volume?: { trend?: object[]; value?: number; }; }[]; lead_source_id?: string; name?: string; updated_at?: string; updated_by_user?: string; }`\n\n  - `id?: number`\n  - `created_at?: string`\n  - `created_by_user?: { id?: number; name?: string; }`\n  - `keywords?: { id?: number; keyword?: string; keyword_difficulty?: { value?: number; }; keyword_search_intents?: { intent?: string; }[]; search_volume?: { trend?: object[]; value?: number; }; }[]`\n  - `lead_source_id?: string`\n  - `name?: string`\n  - `updated_at?: string`\n  - `updated_by_user?: string`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst list = await client.v1.heatmap.keyword.lists.retrieve(5);\n\nconsole.log(list);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.keyword.lists.retrieve',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst list = await client.v1.heatmap.keyword.lists.retrieve(5);\n\nconsole.log(list.id);",
      },
      go: {
        method: 'client.V1.Heatmap.Keyword.Lists.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tlist, err := client.V1.Heatmap.Keyword.Lists.Get(context.TODO(), 5)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", list.ID)\n}\n',
      },
      cli: {
        method: 'lists retrieve',
        example:
          "ls-api v1:heatmap:keyword:lists retrieve \\\n  --bearer-token 'My Bearer Token' \\\n  --keyword-list 5",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmap/keyword/lists/$KEYWORD_LIST \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/v1/heatmap/keyword/lists/{keyword_list}',
    httpMethod: 'put',
    summary: 'Update keyword list',
    description: 'Updates the name and/or keywords of a keyword list.',
    stainlessPath: '(resource) v1.heatmap.keyword.lists > (method) update',
    qualified: 'client.v1.heatmap.keyword.lists.update',
    params: ['keyword_list: number;', 'keywords?: string[];', 'name?: string;'],
    response:
      '{ id?: number; created_at?: string; created_by_user?: { id?: number; name?: string; }; keywords?: { id?: number; keyword?: string; }[]; lead_source_id?: string; name?: string; updated_at?: string; updated_by_user?: { id?: number; name?: string; }; }',
    markdown:
      "## update\n\n`client.v1.heatmap.keyword.lists.update(keyword_list: number, keywords?: string[], name?: string): { id?: number; created_at?: string; created_by_user?: object; keywords?: object[]; lead_source_id?: string; name?: string; updated_at?: string; updated_by_user?: object; }`\n\n**put** `/api/v1/heatmap/keyword/lists/{keyword_list}`\n\nUpdates the name and/or keywords of a keyword list.\n\n### Parameters\n\n- `keyword_list: number`\n\n- `keywords?: string[]`\n  optional Full replacement set of keywords for the list.\n\n- `name?: string`\n  optional New list name.\n\n### Returns\n\n- `{ id?: number; created_at?: string; created_by_user?: { id?: number; name?: string; }; keywords?: { id?: number; keyword?: string; }[]; lead_source_id?: string; name?: string; updated_at?: string; updated_by_user?: { id?: number; name?: string; }; }`\n\n  - `id?: number`\n  - `created_at?: string`\n  - `created_by_user?: { id?: number; name?: string; }`\n  - `keywords?: { id?: number; keyword?: string; }[]`\n  - `lead_source_id?: string`\n  - `name?: string`\n  - `updated_at?: string`\n  - `updated_by_user?: { id?: number; name?: string; }`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst list = await client.v1.heatmap.keyword.lists.update(5);\n\nconsole.log(list);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.keyword.lists.update',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst list = await client.v1.heatmap.keyword.lists.update(5);\n\nconsole.log(list.id);",
      },
      go: {
        method: 'client.V1.Heatmap.Keyword.Lists.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tlist, err := client.V1.Heatmap.Keyword.Lists.Update(\n\t\tcontext.TODO(),\n\t\t5,\n\t\tlsapi.V1HeatmapKeywordListUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", list.ID)\n}\n',
      },
      cli: {
        method: 'lists update',
        example:
          "ls-api v1:heatmap:keyword:lists update \\\n  --bearer-token 'My Bearer Token' \\\n  --keyword-list 5",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmap/keyword/lists/$KEYWORD_LIST \\\n    -X PUT \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/v1/heatmap/keyword/lists/{keyword_list}',
    httpMethod: 'delete',
    summary: 'Delete keyword list',
    description: 'Deletes a single keyword list by ID.',
    stainlessPath: '(resource) v1.heatmap.keyword.lists > (method) delete',
    qualified: 'client.v1.heatmap.keyword.lists.delete',
    params: ['keyword_list: number;'],
    response: '{ message?: string; }',
    markdown:
      "## delete\n\n`client.v1.heatmap.keyword.lists.delete(keyword_list: number): { message?: string; }`\n\n**delete** `/api/v1/heatmap/keyword/lists/{keyword_list}`\n\nDeletes a single keyword list by ID.\n\n### Parameters\n\n- `keyword_list: number`\n\n### Returns\n\n- `{ message?: string; }`\n\n  - `message?: string`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst list = await client.v1.heatmap.keyword.lists.delete(5);\n\nconsole.log(list);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.keyword.lists.delete',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst list = await client.v1.heatmap.keyword.lists.delete(5);\n\nconsole.log(list.message);",
      },
      go: {
        method: 'client.V1.Heatmap.Keyword.Lists.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tlist, err := client.V1.Heatmap.Keyword.Lists.Delete(context.TODO(), 5)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", list.Message)\n}\n',
      },
      cli: {
        method: 'lists delete',
        example:
          "ls-api v1:heatmap:keyword:lists delete \\\n  --bearer-token 'My Bearer Token' \\\n  --keyword-list 5",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmap/keyword/lists/$KEYWORD_LIST \\\n    -X DELETE \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/heatmap/schedules',
    httpMethod: 'get',
    summary: 'List schedules',
    description:
      'Returns a paginated list of heatmap schedules for the account. Supports filtering, sorting, searching, and pagination.\n\n**Pagination** — all list responses include pagination fields at the root level alongside `data`:\n- `total` total matching records; `last_page` total pages; `per_page` results per page (default 25)\n- `next_page_url` URL of the next page (`null` on the last page)\n- `links` array of page link objects (`url`, `label`, `active`)\n\n**Date filters** — date params accept an object with `start_date` and/or `end_date` (YYYY-MM-DD):\n```\nfilter[created_at][start_date]=2026-01-01\nfilter[created_at][end_date]=2026-04-30\n```\nNamed range aliases are also supported via `filter[created_at][date_range]`:\n`today`, `yesterday`, `last_7_days`, `last_30_days`, `this_month`, `last_month`, `this_year`, `last_year`, `all_time`',
    stainlessPath: '(resource) v1.heatmap.schedules > (method) list',
    qualified: 'client.v1.heatmap.schedules.list',
    params: [
      'filter[company_id]?: number;',
      'filter[created_at][end_date]?: string;',
      'filter[created_at][start_date]?: string;',
      'filter[google_place_id]?: string;',
      'filter[keyword]?: string;',
      'filter[last_schedule_ran_at][end_date]?: string;',
      'filter[last_schedule_ran_at][start_date]?: string;',
      'filter[location_id]?: number;',
      'filter[name]?: string;',
      'filter[place_id]?: number;',
      'filter[repeat_every]?: number;',
      'filter[repeat_on]?: number;',
      'filter[repeat_type]?: string;',
      'filter[scheduled_at][end_date]?: string;',
      'filter[scheduled_at][start_date]?: string;',
      'filter[status]?: string;',
      'page?: number;',
      'per_page?: number;',
      'search?: string;',
      'sort?: string;',
    ],
    response:
      '{ current_page?: number; data?: { id?: number; grid_size?: number; keywords?: string[]; lat?: number; lead_source_id?: string; length_unit?: string; lng?: number; name?: string; place?: { id?: number; google_place_id?: string; name?: string; }; place_id?: number; radius?: number; schedule_config?: { last_schedule_ran_at?: string; repeat_every?: number; repeat_on?: number; repeat_type?: string; scheduled_at?: string; timezone?: string; }; status?: string; stop_reason?: string; }[]; first_page_url?: string; from?: number; last_page?: number; last_page_url?: string; links?: { active?: boolean; label?: string; url?: string; }[]; next_page_url?: string; path?: string; per_page?: number; prev_page_url?: string; to?: number; total?: number; }',
    markdown:
      "## list\n\n`client.v1.heatmap.schedules.list(filter[company_id]?: number, filter[created_at][end_date]?: string, filter[created_at][start_date]?: string, filter[google_place_id]?: string, filter[keyword]?: string, filter[last_schedule_ran_at][end_date]?: string, filter[last_schedule_ran_at][start_date]?: string, filter[location_id]?: number, filter[name]?: string, filter[place_id]?: number, filter[repeat_every]?: number, filter[repeat_on]?: number, filter[repeat_type]?: string, filter[scheduled_at][end_date]?: string, filter[scheduled_at][start_date]?: string, filter[status]?: string, page?: number, per_page?: number, search?: string, sort?: string): { current_page?: number; data?: object[]; first_page_url?: string; from?: number; last_page?: number; last_page_url?: string; links?: object[]; next_page_url?: string; path?: string; per_page?: number; prev_page_url?: string; to?: number; total?: number; }`\n\n**get** `/api/v1/heatmap/schedules`\n\nReturns a paginated list of heatmap schedules for the account. Supports filtering, sorting, searching, and pagination.\n\n**Pagination** — all list responses include pagination fields at the root level alongside `data`:\n- `total` total matching records; `last_page` total pages; `per_page` results per page (default 25)\n- `next_page_url` URL of the next page (`null` on the last page)\n- `links` array of page link objects (`url`, `label`, `active`)\n\n**Date filters** — date params accept an object with `start_date` and/or `end_date` (YYYY-MM-DD):\n```\nfilter[created_at][start_date]=2026-01-01\nfilter[created_at][end_date]=2026-04-30\n```\nNamed range aliases are also supported via `filter[created_at][date_range]`:\n`today`, `yesterday`, `last_7_days`, `last_30_days`, `this_month`, `last_month`, `this_year`, `last_year`, `all_time`\n\n### Parameters\n\n- `filter[company_id]?: number`\n  Filter by lead source / company ID.\n\n- `filter[created_at][end_date]?: string`\n  Filter by creation date — range end (YYYY-MM-DD).\n\n- `filter[created_at][start_date]?: string`\n  Filter by creation date — range start (YYYY-MM-DD).\n\n- `filter[google_place_id]?: string`\n  Filter by Google Place ID (exact).\n\n- `filter[keyword]?: string`\n  Filter by keyword in the schedule (exact match).\n\n- `filter[last_schedule_ran_at][end_date]?: string`\n  Filter by last run date — range end (YYYY-MM-DD).\n\n- `filter[last_schedule_ran_at][start_date]?: string`\n  Filter by last run date — range start (YYYY-MM-DD).\n\n- `filter[location_id]?: number`\n  Filter by location ID.\n\n- `filter[name]?: string`\n  Filter by schedule name (partial match).\n\n- `filter[place_id]?: number`\n  Filter by place ID.\n\n- `filter[repeat_every]?: number`\n  Filter by repeat interval.\n\n- `filter[repeat_on]?: number`\n  Filter by day of week (1–7) or day of month (1–31) depending on repeat_type.\n\n- `filter[repeat_type]?: string`\n  Filter by repeat type. Accepted: `week`, `month`, `custom-day`, `custom-week`, `custom-month`.\n\n- `filter[scheduled_at][end_date]?: string`\n  Filter by next run date — range end (YYYY-MM-DD).\n\n- `filter[scheduled_at][start_date]?: string`\n  Filter by next run date — range start (YYYY-MM-DD).\n\n- `filter[status]?: string`\n  Filter by schedule status. Accepted: `active`, `paused`.\n\n- `page?: number`\n  Page number.\n\n- `per_page?: number`\n  Number of results per page (default 25).\n\n- `search?: string`\n  Full-text search across schedule name and place name.\n\n- `sort?: string`\n  Sort field. Prefix with `-` for descending. Accepted: `created_at`, `name`, `status`, `scheduled_at`, `last_schedule_ran_at`, `repeat_type`, `repeat_every`, `place_id`, `place.name`, `location_id`.\n\n### Returns\n\n- `{ current_page?: number; data?: { id?: number; grid_size?: number; keywords?: string[]; lat?: number; lead_source_id?: string; length_unit?: string; lng?: number; name?: string; place?: { id?: number; google_place_id?: string; name?: string; }; place_id?: number; radius?: number; schedule_config?: { last_schedule_ran_at?: string; repeat_every?: number; repeat_on?: number; repeat_type?: string; scheduled_at?: string; timezone?: string; }; status?: string; stop_reason?: string; }[]; first_page_url?: string; from?: number; last_page?: number; last_page_url?: string; links?: { active?: boolean; label?: string; url?: string; }[]; next_page_url?: string; path?: string; per_page?: number; prev_page_url?: string; to?: number; total?: number; }`\n\n  - `current_page?: number`\n  - `data?: { id?: number; grid_size?: number; keywords?: string[]; lat?: number; lead_source_id?: string; length_unit?: string; lng?: number; name?: string; place?: { id?: number; google_place_id?: string; name?: string; }; place_id?: number; radius?: number; schedule_config?: { last_schedule_ran_at?: string; repeat_every?: number; repeat_on?: number; repeat_type?: string; scheduled_at?: string; timezone?: string; }; status?: string; stop_reason?: string; }[]`\n  - `first_page_url?: string`\n  - `from?: number`\n  - `last_page?: number`\n  - `last_page_url?: string`\n  - `links?: { active?: boolean; label?: string; url?: string; }[]`\n  - `next_page_url?: string`\n  - `path?: string`\n  - `per_page?: number`\n  - `prev_page_url?: string`\n  - `to?: number`\n  - `total?: number`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst schedules = await client.v1.heatmap.schedules.list();\n\nconsole.log(schedules);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.schedules.list',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst schedules = await client.v1.heatmap.schedules.list();\n\nconsole.log(schedules.current_page);",
      },
      go: {
        method: 'client.V1.Heatmap.Schedules.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tschedules, err := client.V1.Heatmap.Schedules.List(context.TODO(), lsapi.V1HeatmapScheduleListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", schedules.CurrentPage)\n}\n',
      },
      cli: {
        method: 'schedules list',
        example: "ls-api v1:heatmap:schedules list \\\n  --bearer-token 'My Bearer Token'",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmap/schedules \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v1/heatmap/schedules',
    httpMethod: 'post',
    summary: 'Create schedule',
    description:
      'Creates a new automated heatmap schedule. The schedule will run heatmaps on the specified recurrence.',
    stainlessPath: '(resource) v1.heatmap.schedules > (method) create',
    qualified: 'client.v1.heatmap.schedules.create',
    params: [
      'heatmap_config: { grid_points: { lat: number; lng: number; }[]; keywords: string[]; name: string; place_id: number; grid_size?: number; lat?: number; lead_source_id?: number; length_unit?: string; lng?: number; location_id?: number; radius?: number; };',
      'schedule_config: { repeat_every: number; repeat_on: number; repeat_type: string; schedule_hour_minute?: string; timezone?: string; };',
    ],
    response:
      '{ id?: number; grid_size?: number; keywords?: string[]; lat?: number; lead_source_id?: string; length_unit?: string; lng?: number; name?: string; place?: { id?: number; google_place_id?: string; name?: string; }; place_id?: number; radius?: number; schedule_config?: { last_schedule_ran_at?: string; repeat_every?: number; repeat_on?: number; repeat_type?: string; scheduled_at?: string; timezone?: string; }; status?: string; stop_reason?: string; }',
    markdown:
      "## create\n\n`client.v1.heatmap.schedules.create(heatmap_config: { grid_points: { lat: number; lng: number; }[]; keywords: string[]; name: string; place_id: number; grid_size?: number; lat?: number; lead_source_id?: number; length_unit?: string; lng?: number; location_id?: number; radius?: number; }, schedule_config: { repeat_every: number; repeat_on: number; repeat_type: string; schedule_hour_minute?: string; timezone?: string; }): { id?: number; grid_size?: number; keywords?: string[]; lat?: number; lead_source_id?: string; length_unit?: string; lng?: number; name?: string; place?: object; place_id?: number; radius?: number; schedule_config?: object; status?: string; stop_reason?: string; }`\n\n**post** `/api/v1/heatmap/schedules`\n\nCreates a new automated heatmap schedule. The schedule will run heatmaps on the specified recurrence.\n\n### Parameters\n\n- `heatmap_config: { grid_points: { lat: number; lng: number; }[]; keywords: string[]; name: string; place_id: number; grid_size?: number; lat?: number; lead_source_id?: number; length_unit?: string; lng?: number; location_id?: number; radius?: number; }`\n  Grid and place configuration for the heatmap.\n  - `grid_points: { lat: number; lng: number; }[]`\n    Pre-computed grid point coordinates (min 1, max 200).\n  - `keywords: string[]`\n    Keywords to search.\n  - `name: string`\n    Schedule name.\n  - `place_id: number`\n    The heatmap place ID.\n  - `grid_size?: number`\n    optional Grid size (informational, points are used for actual run).\n  - `lat?: number`\n    optional Grid center latitude (informational).\n  - `lead_source_id?: number`\n    optional Lead source / company ID.\n  - `length_unit?: string`\n    optional Distance unit. Accepted: `km`, `mi`, `m`. Default: `m`.\n  - `lng?: number`\n    optional Grid center longitude (informational).\n  - `location_id?: number`\n    optional Location ID to associate the schedule with.\n  - `radius?: number`\n    optional Grid radius (informational).\n\n- `schedule_config: { repeat_every: number; repeat_on: number; repeat_type: string; schedule_hour_minute?: string; timezone?: string; }`\n  Recurrence settings for the schedule.\n  - `repeat_every: number`\n    (required when repeat_type is `custom-*`) Interval between runs.\n  - `repeat_on: number`\n    (required when repeat_type is `week` or `month`) Day of week (1–7) or day of month (1–31).\n  - `repeat_type: string`\n    Recurrence type. Accepted: `week`, `month`, `custom-day`, `custom-week`, `custom-month`.\n  - `schedule_hour_minute?: string`\n    optional Time of day to run the schedule in `HH:MM` format. Defaults to 12:00.\n  - `timezone?: string`\n    optional Timezone for the schedule. Default: UTC.\n\n### Returns\n\n- `{ id?: number; grid_size?: number; keywords?: string[]; lat?: number; lead_source_id?: string; length_unit?: string; lng?: number; name?: string; place?: { id?: number; google_place_id?: string; name?: string; }; place_id?: number; radius?: number; schedule_config?: { last_schedule_ran_at?: string; repeat_every?: number; repeat_on?: number; repeat_type?: string; scheduled_at?: string; timezone?: string; }; status?: string; stop_reason?: string; }`\n\n  - `id?: number`\n  - `grid_size?: number`\n  - `keywords?: string[]`\n  - `lat?: number`\n  - `lead_source_id?: string`\n  - `length_unit?: string`\n  - `lng?: number`\n  - `name?: string`\n  - `place?: { id?: number; google_place_id?: string; name?: string; }`\n  - `place_id?: number`\n  - `radius?: number`\n  - `schedule_config?: { last_schedule_ran_at?: string; repeat_every?: number; repeat_on?: number; repeat_type?: string; scheduled_at?: string; timezone?: string; }`\n  - `status?: string`\n  - `stop_reason?: string`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst schedule = await client.v1.heatmap.schedules.create({\n  heatmap_config: {\n  grid_points: [{ lat: 44.627, lng: -88.078 }],\n  keywords: ['roofing', 'roof repair'],\n  name: 'Weekly Roofing Check',\n  place_id: 12,\n},\n  schedule_config: {\n  repeat_every: 1,\n  repeat_on: 1,\n  repeat_type: 'week',\n},\n});\n\nconsole.log(schedule);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.schedules.create',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst schedule = await client.v1.heatmap.schedules.create({\n  heatmap_config: {\n    grid_points: [{ lat: 44.627, lng: -88.078 }],\n    keywords: ['roofing', 'roof repair'],\n    name: 'Weekly Roofing Check',\n    place_id: 12,\n  },\n  schedule_config: {\n    repeat_every: 1,\n    repeat_on: 1,\n    repeat_type: 'week',\n  },\n});\n\nconsole.log(schedule.id);",
      },
      go: {
        method: 'client.V1.Heatmap.Schedules.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tschedule, err := client.V1.Heatmap.Schedules.New(context.TODO(), lsapi.V1HeatmapScheduleNewParams{\n\t\tHeatmapConfig: lsapi.V1HeatmapScheduleNewParamsHeatmapConfig{\n\t\t\tGridPoints: []lsapi.V1HeatmapScheduleNewParamsHeatmapConfigGridPoint{{\n\t\t\t\tLat: 44.627,\n\t\t\t\tLng: -88.078,\n\t\t\t}},\n\t\t\tKeywords: []string{"roofing", "roof repair"},\n\t\t\tName:     "Weekly Roofing Check",\n\t\t\tPlaceID:  12,\n\t\t},\n\t\tScheduleConfig: lsapi.V1HeatmapScheduleNewParamsScheduleConfig{\n\t\t\tRepeatEvery: 1,\n\t\t\tRepeatOn:    1,\n\t\t\tRepeatType:  "week",\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", schedule.ID)\n}\n',
      },
      cli: {
        method: 'schedules create',
        example:
          "ls-api v1:heatmap:schedules create \\\n  --bearer-token 'My Bearer Token' \\\n  --heatmap-config '{grid_points: [{lat: 44.627, lng: -88.078}], keywords: [roofing, roof repair], name: Weekly Roofing Check, place_id: 12}' \\\n  --schedule-config '{repeat_every: 1, repeat_on: 1, repeat_type: week}'",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmap/schedules \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN" \\\n    -d \'{\n          "heatmap_config": {\n            "grid_points": [\n              {\n                "lat": 44.627,\n                "lng": -88.078\n              }\n            ],\n            "keywords": [\n              "roofing",\n              "roof repair"\n            ],\n            "name": "Weekly Roofing Check",\n            "place_id": 12\n          },\n          "schedule_config": {\n            "repeat_every": 1,\n            "repeat_on": 1,\n            "repeat_type": "week"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/v1/heatmap/schedules/{schedule_id}',
    httpMethod: 'patch',
    summary: 'Update schedule',
    description: 'Updates the grid configuration and/or recurrence settings of an existing schedule.',
    stainlessPath: '(resource) v1.heatmap.schedules > (method) update',
    qualified: 'client.v1.heatmap.schedules.update',
    params: [
      'schedule_id: number;',
      'heatmap_config: { name: string; place_id: number; grid_points?: object[]; keywords?: string[]; };',
      'schedule_config: { repeat_type: string; repeat_on?: number; };',
    ],
    response:
      '{ id?: number; keywords?: string[]; name?: string; schedule_config?: { last_schedule_ran_at?: string; repeat_every?: number; repeat_on?: number; repeat_type?: string; scheduled_at?: string; timezone?: string; }; status?: string; }',
    markdown:
      "## update\n\n`client.v1.heatmap.schedules.update(schedule_id: number, heatmap_config: { name: string; place_id: number; grid_points?: object[]; keywords?: string[]; }, schedule_config: { repeat_type: string; repeat_on?: number; }): { id?: number; keywords?: string[]; name?: string; schedule_config?: object; status?: string; }`\n\n**patch** `/api/v1/heatmap/schedules/{schedule_id}`\n\nUpdates the grid configuration and/or recurrence settings of an existing schedule.\n\n### Parameters\n\n- `schedule_id: number`\n\n- `heatmap_config: { name: string; place_id: number; grid_points?: object[]; keywords?: string[]; }`\n  Updated grid and place configuration.\n  - `name: string`\n    Schedule name.\n  - `place_id: number`\n    The heatmap place ID.\n  - `grid_points?: object[]`\n    optional Updated grid point coordinates (omit to keep existing).\n  - `keywords?: string[]`\n    optional Keywords to search (omit to keep existing).\n\n- `schedule_config: { repeat_type: string; repeat_on?: number; }`\n  Updated recurrence settings.\n  - `repeat_type: string`\n    Recurrence type. Accepted: `week`, `month`, `custom-day`, `custom-week`, `custom-month`.\n  - `repeat_on?: number`\n    optional Day of week (1–7) or day of month (1–31).\n\n### Returns\n\n- `{ id?: number; keywords?: string[]; name?: string; schedule_config?: { last_schedule_ran_at?: string; repeat_every?: number; repeat_on?: number; repeat_type?: string; scheduled_at?: string; timezone?: string; }; status?: string; }`\n\n  - `id?: number`\n  - `keywords?: string[]`\n  - `name?: string`\n  - `schedule_config?: { last_schedule_ran_at?: string; repeat_every?: number; repeat_on?: number; repeat_type?: string; scheduled_at?: string; timezone?: string; }`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst schedule = await client.v1.heatmap.schedules.update(6490, {\n  heatmap_config: { name: 'Weekly Roofing Check Updated', place_id: 12 },\n  schedule_config: { repeat_type: 'month' },\n});\n\nconsole.log(schedule);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.schedules.update',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst schedule = await client.v1.heatmap.schedules.update(6490, {\n  heatmap_config: { name: 'Weekly Roofing Check Updated', place_id: 12 },\n  schedule_config: { repeat_type: 'month' },\n});\n\nconsole.log(schedule.id);",
      },
      go: {
        method: 'client.V1.Heatmap.Schedules.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tschedule, err := client.V1.Heatmap.Schedules.Update(\n\t\tcontext.TODO(),\n\t\t6490,\n\t\tlsapi.V1HeatmapScheduleUpdateParams{\n\t\t\tHeatmapConfig: lsapi.V1HeatmapScheduleUpdateParamsHeatmapConfig{\n\t\t\t\tName:    "Weekly Roofing Check Updated",\n\t\t\t\tPlaceID: 12,\n\t\t\t},\n\t\t\tScheduleConfig: lsapi.V1HeatmapScheduleUpdateParamsScheduleConfig{\n\t\t\t\tRepeatType: "month",\n\t\t\t},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", schedule.ID)\n}\n',
      },
      cli: {
        method: 'schedules update',
        example:
          "ls-api v1:heatmap:schedules update \\\n  --bearer-token 'My Bearer Token' \\\n  --schedule-id 6490 \\\n  --heatmap-config '{name: Weekly Roofing Check Updated, place_id: 12}' \\\n  --schedule-config '{repeat_type: month}'",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmap/schedules/$SCHEDULE_ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN" \\\n    -d \'{\n          "heatmap_config": {\n            "name": "Weekly Roofing Check Updated",\n            "place_id": 12\n          },\n          "schedule_config": {\n            "repeat_type": "month"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/v1/heatmap/schedules/{schedule_id}',
    httpMethod: 'delete',
    summary: 'Delete schedule',
    description: 'Permanently deletes a single heatmap schedule.',
    stainlessPath: '(resource) v1.heatmap.schedules > (method) delete',
    qualified: 'client.v1.heatmap.schedules.delete',
    params: ['schedule_id: number;'],
    response: '{ message?: string; }',
    markdown:
      "## delete\n\n`client.v1.heatmap.schedules.delete(schedule_id: number): { message?: string; }`\n\n**delete** `/api/v1/heatmap/schedules/{schedule_id}`\n\nPermanently deletes a single heatmap schedule.\n\n### Parameters\n\n- `schedule_id: number`\n\n### Returns\n\n- `{ message?: string; }`\n\n  - `message?: string`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst schedule = await client.v1.heatmap.schedules.delete(6490);\n\nconsole.log(schedule);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.schedules.delete',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst schedule = await client.v1.heatmap.schedules.delete(6490);\n\nconsole.log(schedule.message);",
      },
      go: {
        method: 'client.V1.Heatmap.Schedules.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tschedule, err := client.V1.Heatmap.Schedules.Delete(context.TODO(), 6490)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", schedule.Message)\n}\n',
      },
      cli: {
        method: 'schedules delete',
        example:
          "ls-api v1:heatmap:schedules delete \\\n  --bearer-token 'My Bearer Token' \\\n  --schedule-id 6490",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmap/schedules/$SCHEDULE_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v1/heatmap/schedules/{schedule}',
    httpMethod: 'get',
    summary: 'Get schedule',
    description:
      'Returns full details of a single heatmap schedule including its configuration and next run time.',
    stainlessPath: '(resource) v1.heatmap.schedules > (method) retrieve',
    qualified: 'client.v1.heatmap.schedules.retrieve',
    params: ['schedule: number;'],
    response:
      '{ id?: number; draw_type?: string; google_location?: string; grid_size?: number; keywords?: string[]; lat?: number; lead_source_id?: string; length_unit?: string; lng?: number; name?: string; place?: { id?: number; address?: string; google_place_id?: string; name?: string; }; place_id?: number; radius?: number; schedule_config?: { last_schedule_ran_at?: string; repeat_every?: number; repeat_on?: number; repeat_type?: string; scheduled_at?: string; timezone?: string; }; status?: string; stop_reason?: string; }',
    markdown:
      "## retrieve\n\n`client.v1.heatmap.schedules.retrieve(schedule: number): { id?: number; draw_type?: string; google_location?: string; grid_size?: number; keywords?: string[]; lat?: number; lead_source_id?: string; length_unit?: string; lng?: number; name?: string; place?: object; place_id?: number; radius?: number; schedule_config?: object; status?: string; stop_reason?: string; }`\n\n**get** `/api/v1/heatmap/schedules/{schedule}`\n\nReturns full details of a single heatmap schedule including its configuration and next run time.\n\n### Parameters\n\n- `schedule: number`\n\n### Returns\n\n- `{ id?: number; draw_type?: string; google_location?: string; grid_size?: number; keywords?: string[]; lat?: number; lead_source_id?: string; length_unit?: string; lng?: number; name?: string; place?: { id?: number; address?: string; google_place_id?: string; name?: string; }; place_id?: number; radius?: number; schedule_config?: { last_schedule_ran_at?: string; repeat_every?: number; repeat_on?: number; repeat_type?: string; scheduled_at?: string; timezone?: string; }; status?: string; stop_reason?: string; }`\n\n  - `id?: number`\n  - `draw_type?: string`\n  - `google_location?: string`\n  - `grid_size?: number`\n  - `keywords?: string[]`\n  - `lat?: number`\n  - `lead_source_id?: string`\n  - `length_unit?: string`\n  - `lng?: number`\n  - `name?: string`\n  - `place?: { id?: number; address?: string; google_place_id?: string; name?: string; }`\n  - `place_id?: number`\n  - `radius?: number`\n  - `schedule_config?: { last_schedule_ran_at?: string; repeat_every?: number; repeat_on?: number; repeat_type?: string; scheduled_at?: string; timezone?: string; }`\n  - `status?: string`\n  - `stop_reason?: string`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst schedule = await client.v1.heatmap.schedules.retrieve(10);\n\nconsole.log(schedule);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.schedules.retrieve',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst schedule = await client.v1.heatmap.schedules.retrieve(10);\n\nconsole.log(schedule.id);",
      },
      go: {
        method: 'client.V1.Heatmap.Schedules.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tschedule, err := client.V1.Heatmap.Schedules.Get(context.TODO(), 10)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", schedule.ID)\n}\n',
      },
      cli: {
        method: 'schedules retrieve',
        example:
          "ls-api v1:heatmap:schedules retrieve \\\n  --bearer-token 'My Bearer Token' \\\n  --schedule 10",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmap/schedules/$SCHEDULE \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN"',
      },
    },
  },
  {
    name: 'delete_bulk_delete',
    endpoint: '/api/v1/heatmap/schedules/bulk-delete',
    httpMethod: 'delete',
    summary: 'Bulk delete schedules',
    description: 'Permanently deletes multiple heatmap schedules by ID.',
    stainlessPath: '(resource) v1.heatmap.schedules > (method) delete_bulk_delete',
    qualified: 'client.v1.heatmap.schedules.deleteBulkDelete',
    params: ['ids: number[];'],
    response: '{ message?: string; }',
    markdown:
      "## delete_bulk_delete\n\n`client.v1.heatmap.schedules.deleteBulkDelete(ids: number[]): { message?: string; }`\n\n**delete** `/api/v1/heatmap/schedules/bulk-delete`\n\nPermanently deletes multiple heatmap schedules by ID.\n\n### Parameters\n\n- `ids: number[]`\n  Array of schedule IDs to delete.\n\n### Returns\n\n- `{ message?: string; }`\n\n  - `message?: string`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst response = await client.v1.heatmap.schedules.deleteBulkDelete({ ids: [10, 11, 12] });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.schedules.deleteBulkDelete',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.heatmap.schedules.deleteBulkDelete({ ids: [10, 11, 12] });\n\nconsole.log(response.message);",
      },
      go: {
        method: 'client.V1.Heatmap.Schedules.DeleteBulkDelete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tresponse, err := client.V1.Heatmap.Schedules.DeleteBulkDelete(context.TODO(), lsapi.V1HeatmapScheduleDeleteBulkDeleteParams{\n\t\tIDs: []int64{10, 11, 12},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Message)\n}\n',
      },
      cli: {
        method: 'schedules delete_bulk_delete',
        example:
          "ls-api v1:heatmap:schedules delete-bulk-delete \\\n  --bearer-token 'My Bearer Token' \\\n  --id 10 \\\n  --id 11 \\\n  --id 12",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmap/schedules/bulk-delete \\\n    -X DELETE \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN"',
      },
    },
  },
  {
    name: 'pause',
    endpoint: '/api/v1/heatmap/schedules/{schedule_id}/pause',
    httpMethod: 'post',
    summary: 'Pause schedule',
    description: 'Pauses an active schedule so it stops running until resumed.',
    stainlessPath: '(resource) v1.heatmap.schedules > (method) pause',
    qualified: 'client.v1.heatmap.schedules.pause',
    params: ['schedule_id: number;'],
    response: '{ id?: number; name?: string; status?: string; }',
    markdown:
      "## pause\n\n`client.v1.heatmap.schedules.pause(schedule_id: number): { id?: number; name?: string; status?: string; }`\n\n**post** `/api/v1/heatmap/schedules/{schedule_id}/pause`\n\nPauses an active schedule so it stops running until resumed.\n\n### Parameters\n\n- `schedule_id: number`\n\n### Returns\n\n- `{ id?: number; name?: string; status?: string; }`\n\n  - `id?: number`\n  - `name?: string`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst response = await client.v1.heatmap.schedules.pause(6490);\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.schedules.pause',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.heatmap.schedules.pause(6490);\n\nconsole.log(response.id);",
      },
      go: {
        method: 'client.V1.Heatmap.Schedules.Pause',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tresponse, err := client.V1.Heatmap.Schedules.Pause(context.TODO(), 6490)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      cli: {
        method: 'schedules pause',
        example:
          "ls-api v1:heatmap:schedules pause \\\n  --bearer-token 'My Bearer Token' \\\n  --schedule-id 6490",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmap/schedules/$SCHEDULE_ID/pause \\\n    -X POST \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN"',
      },
    },
  },
  {
    name: 'resume',
    endpoint: '/api/v1/heatmap/schedules/{schedule_id}/resume',
    httpMethod: 'post',
    summary: 'Resume schedule',
    description: 'Resumes a paused schedule so it runs again on its next scheduled date.',
    stainlessPath: '(resource) v1.heatmap.schedules > (method) resume',
    qualified: 'client.v1.heatmap.schedules.resume',
    params: ['schedule_id: number;'],
    response: '{ id?: number; name?: string; status?: string; }',
    markdown:
      "## resume\n\n`client.v1.heatmap.schedules.resume(schedule_id: number): { id?: number; name?: string; status?: string; }`\n\n**post** `/api/v1/heatmap/schedules/{schedule_id}/resume`\n\nResumes a paused schedule so it runs again on its next scheduled date.\n\n### Parameters\n\n- `schedule_id: number`\n\n### Returns\n\n- `{ id?: number; name?: string; status?: string; }`\n\n  - `id?: number`\n  - `name?: string`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst response = await client.v1.heatmap.schedules.resume(6490);\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.schedules.resume',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.heatmap.schedules.resume(6490);\n\nconsole.log(response.id);",
      },
      go: {
        method: 'client.V1.Heatmap.Schedules.Resume',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tresponse, err := client.V1.Heatmap.Schedules.Resume(context.TODO(), 6490)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      cli: {
        method: 'schedules resume',
        example:
          "ls-api v1:heatmap:schedules resume \\\n  --bearer-token 'My Bearer Token' \\\n  --schedule-id 6490",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmap/schedules/$SCHEDULE_ID/resume \\\n    -X POST \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/heatmaps/{heatmap}/competitors',
    httpMethod: 'get',
    summary: 'Get heatmap competitors',
    description:
      'Returns aggregated ranking statistics for all competitor businesses found across the grid points of the specified heatmap.',
    stainlessPath: '(resource) v1.heatmap.competitors > (method) list',
    qualified: 'client.v1.heatmap.competitors.list',
    params: ['heatmap: number;'],
    response:
      '{ data?: { id?: number; average?: number; average_position?: number; market_share?: number; market_share_position?: number; north_east?: number; north_west?: number; photos_count?: number; place?: { id?: number; address?: string; ave_review_rating?: number; google_place_id?: string; name?: string; review_count?: number; }; south_east?: number; south_west?: number; top_20_points?: number; top_3_percentage?: number; top_3_points?: number; top_3_position?: number; total_points?: number; }[]; }',
    markdown:
      "## list\n\n`client.v1.heatmap.competitors.list(heatmap: number): { data?: object[]; }`\n\n**get** `/api/v1/heatmaps/{heatmap}/competitors`\n\nReturns aggregated ranking statistics for all competitor businesses found across the grid points of the specified heatmap.\n\n### Parameters\n\n- `heatmap: number`\n\n### Returns\n\n- `{ data?: { id?: number; average?: number; average_position?: number; market_share?: number; market_share_position?: number; north_east?: number; north_west?: number; photos_count?: number; place?: { id?: number; address?: string; ave_review_rating?: number; google_place_id?: string; name?: string; review_count?: number; }; south_east?: number; south_west?: number; top_20_points?: number; top_3_percentage?: number; top_3_points?: number; top_3_position?: number; total_points?: number; }[]; }`\n\n  - `data?: { id?: number; average?: number; average_position?: number; market_share?: number; market_share_position?: number; north_east?: number; north_west?: number; photos_count?: number; place?: { id?: number; address?: string; ave_review_rating?: number; google_place_id?: string; name?: string; review_count?: number; }; south_east?: number; south_west?: number; top_20_points?: number; top_3_percentage?: number; top_3_points?: number; top_3_position?: number; total_points?: number; }[]`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst competitors = await client.v1.heatmap.competitors.list(1482);\n\nconsole.log(competitors);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.competitors.list',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst competitors = await client.v1.heatmap.competitors.list(1482);\n\nconsole.log(competitors.data);",
      },
      go: {
        method: 'client.V1.Heatmap.Competitors.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tcompetitors, err := client.V1.Heatmap.Competitors.List(context.TODO(), 1482)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", competitors.Data)\n}\n',
      },
      cli: {
        method: 'competitors list',
        example:
          "ls-api v1:heatmap:competitors list \\\n  --bearer-token 'My Bearer Token' \\\n  --heatmap 1482",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmaps/$HEATMAP/competitors \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN"',
      },
    },
  },
  {
    name: 'retrieve_rankings',
    endpoint: '/api/v1/heatmaps/{heatmap_id}/competitors/{competitor_id}/rankings',
    httpMethod: 'get',
    summary: 'Get competitor rankings',
    description: 'Returns point-by-point ranking data for a specific competitor within a heatmap.',
    stainlessPath: '(resource) v1.heatmap.competitors > (method) retrieve_rankings',
    qualified: 'client.v1.heatmap.competitors.retrieveRankings',
    params: ['heatmap_id: number;', 'competitor_id: number;'],
    response:
      '{ data?: { id?: number; index?: number; lat?: number; lng?: number; places?: object[]; rank?: number; }[]; }',
    markdown:
      "## retrieve_rankings\n\n`client.v1.heatmap.competitors.retrieveRankings(heatmap_id: number, competitor_id: number): { data?: object[]; }`\n\n**get** `/api/v1/heatmaps/{heatmap_id}/competitors/{competitor_id}/rankings`\n\nReturns point-by-point ranking data for a specific competitor within a heatmap.\n\n### Parameters\n\n- `heatmap_id: number`\n\n- `competitor_id: number`\n\n### Returns\n\n- `{ data?: { id?: number; index?: number; lat?: number; lng?: number; places?: object[]; rank?: number; }[]; }`\n\n  - `data?: { id?: number; index?: number; lat?: number; lng?: number; places?: object[]; rank?: number; }[]`\n\n### Example\n\n```typescript\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI();\n\nconst response = await client.v1.heatmap.competitors.retrieveRankings(15, { heatmap_id: 1482 });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.v1.heatmap.competitors.retrieveRankings',
        example:
          "import LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.v1.heatmap.competitors.retrieveRankings(15, { heatmap_id: 1482 });\n\nconsole.log(response.data);",
      },
      go: {
        method: 'client.V1.Heatmap.Competitors.GetRankings',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tresponse, err := client.V1.Heatmap.Competitors.GetRankings(\n\t\tcontext.TODO(),\n\t\t15,\n\t\tlsapi.V1HeatmapCompetitorGetRankingsParams{\n\t\t\tHeatmapID: 1482,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      cli: {
        method: 'competitors retrieve_rankings',
        example:
          "ls-api v1:heatmap:competitors retrieve-rankings \\\n  --bearer-token 'My Bearer Token' \\\n  --heatmap-id 1482 \\\n  --competitor-id 15",
      },
      http: {
        example:
          'curl https://app.leadsnap.com/api/v1/heatmaps/$HEATMAP_ID/competitors/$COMPETITOR_ID/rankings \\\n    -H "Authorization: Bearer $LS_API_BEARER_TOKEN"',
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'cli',
    content:
      "# Ls API CLI\n\nThe official CLI for the Ls API REST API.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## Installation\n\n### Installing with Go\n\nTo test or install the CLI locally, you need [Go](https://go.dev/doc/install) version 1.22 or later installed.\n\n~~~sh\ngo install 'github.com/stainless-sdks/ls-api-cli/cmd/ls-api@latest'\n~~~\n\nOnce you have run `go install`, the binary is placed in your Go bin directory:\n\n- **Default location**: `$HOME/go/bin` (or `$GOPATH/bin` if GOPATH is set)\n- **Check your path**: Run `go env GOPATH` to see the base directory\n\nIf commands aren't found after installation, add the Go bin directory to your PATH:\n\n~~~sh\n# Add to your shell profile (.zshrc, .bashrc, etc.)\nexport PATH=\"$PATH:$(go env GOPATH)/bin\"\n~~~\n\n### Running Locally\n\nAfter cloning the git repository for this project, you can use the\n`scripts/run` script to run the tool locally:\n\n~~~sh\n./scripts/run args...\n~~~\n\n## Usage\n\nThe CLI follows a resource-based command structure:\n\n~~~sh\nls-api [resource] <command> [flags...]\n~~~\n\n~~~sh\nls-api v1:heatmap:configs list \\\n  --bearer-token 'My Bearer Token'\n~~~\n\nFor details about specific commands, use the `--help` flag.\n\n### Environment variables\n\n| Environment variable  | Description                                                                                                 | Required |\n| --------------------- | ----------------------------------------------------------------------------------------------------------- | -------- |\n| `LS_API_BEARER_TOKEN` | Authenticate using a Sanctum bearer token. Use @unauthenticated on a route method to mark public endpoints. | yes      |\n\n### Global flags\n\n- `--bearer-token` - Authenticate using a Sanctum bearer token. Use @unauthenticated on a route method to mark public endpoints. (can also be set with `LS_API_BEARER_TOKEN` env var)\n- `--help` - Show command line usage\n- `--debug` - Enable debug logging (includes HTTP request/response details)\n- `--version`, `-v` - Show the CLI version\n- `--base-url` - Use a custom API backend URL\n- `--format` - Change the output format (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--format-error` - Change the output format for errors (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--transform` - Transform the data output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n- `--transform-error` - Transform the error output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n\n### Passing files as arguments\n\nTo pass files to your API, you can use the `@myfile.ext` syntax:\n\n~~~bash\nls-api <command> --arg @abe.jpg\n~~~\n\nFiles can also be passed inside JSON or YAML blobs:\n\n~~~bash\nls-api <command> --arg '{image: \"@abe.jpg\"}'\n# Equivalent:\nls-api <command> <<YAML\narg:\n  image: \"@abe.jpg\"\nYAML\n~~~\n\nIf you need to pass a string literal that begins with an `@` sign, you can\nescape the `@` sign to avoid accidentally passing a file.\n\n~~~bash\nls-api <command> --username '\\@abe'\n~~~\n\n#### Explicit encoding\n\nFor JSON endpoints, the CLI tool does filetype sniffing to determine whether the\nfile contents should be sent as a string literal (for plain text files) or as a\nbase64-encoded string literal (for binary files). If you need to explicitly send\nthe file as either plain text or base64-encoded data, you can use\n`@file://myfile.txt` (for string encoding) or `@data://myfile.dat` (for\nbase64-encoding). Note that absolute paths will begin with `@file://` or\n`@data://`, followed by a third `/` (for example, `@file:///tmp/file.txt`).\n\n~~~bash\nls-api <command> --arg @data://file.txt\n~~~\n\n## Linking different Go SDK versions\n\nYou can link the CLI against a different version of the Ls API Go SDK\nfor development purposes using the `./scripts/link` script.\n\nTo link to a specific version from a repository (version can be a branch,\ngit tag, or commit hash):\n\n~~~bash\n./scripts/link github.com/org/repo@version\n~~~\n\nTo link to a local copy of the SDK:\n\n~~~bash\n./scripts/link ../path/to/lsapi-go\n~~~\n\nIf you run the link script without any arguments, it will default to `../lsapi-go`.\n",
  },
  {
    language: 'go',
    content:
      '# Ls API Go API Library\n\n<a href="https://pkg.go.dev/github.com/stainless-sdks/ls-api-go"><img src="https://pkg.go.dev/badge/github.com/stainless-sdks/ls-api-go.svg" alt="Go Reference"></a>\n\nThe Ls API Go library provides convenient access to the Ls API REST API\nfrom applications written in Go.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Ls API MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=ls-api-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImxzLWFwaS1tY3AiXSwiZW52Ijp7IkxTX0FQSV9CRUFSRVJfVE9LRU4iOiJNeSBCZWFyZXIgVG9rZW4ifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22ls-api-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22ls-api-mcp%22%5D%2C%22env%22%3A%7B%22LS_API_BEARER_TOKEN%22%3A%22My%20Bearer%20Token%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n\n\n```go\nimport (\n\t"github.com/stainless-sdks/ls-api-go" // imported as SDK_PackageName\n)\n```\n\n\n\nOr to pin the version:\n\n\n\n```sh\ngo get -u \'github.com/stainless-sdks/ls-api-go@v0.0.1\'\n```\n\n\n\n## Requirements\n\nThis library requires Go 1.22+.\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```go\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/ls-api-go"\n\t"github.com/stainless-sdks/ls-api-go/option"\n)\n\nfunc main() {\n\tclient := lsapi.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"), // defaults to os.LookupEnv("LS_API_BEARER_TOKEN")\n\t)\n\tconfigs, err := client.V1.Heatmap.Configs.List(context.TODO(), lsapi.V1HeatmapConfigListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", configs.Data)\n}\n\n```\n\n### Request fields\n\nAll request parameters are wrapped in a generic `Field` type,\nwhich we use to distinguish zero values from null or omitted fields.\n\nThis prevents accidentally sending a zero value if you forget a required parameter,\nand enables explicitly sending `null`, `false`, `\'\'`, or `0` on optional parameters.\nAny field not specified is not sent.\n\nTo construct fields with values, use the helpers `String()`, `Int()`, `Float()`, or most commonly, the generic `F[T]()`.\nTo send a null, use `Null[T]()`, and to send a nonconforming value, use `Raw[T](any)`. For example:\n\n```go\nparams := FooParams{\n\tName: SDK_PackageName.F("hello"),\n\n\t// Explicitly send `"description": null`\n\tDescription: SDK_PackageName.Null[string](),\n\n\tPoint: SDK_PackageName.F(SDK_PackageName.Point{\n\t\tX: SDK_PackageName.Int(0),\n\t\tY: SDK_PackageName.Int(1),\n\n\t\t// In cases where the API specifies a given type,\n\t\t// but you want to send something else, use `Raw`:\n\t\tZ: SDK_PackageName.Raw[int64](0.01), // sends a float\n\t}),\n}\n```\n\n### Response objects\n\nAll fields in response structs are value types (not pointers or wrappers).\n\nIf a given field is `null`, not present, or invalid, the corresponding field\nwill simply be its zero value.\n\nAll response structs also include a special `JSON` field, containing more detailed\ninformation about each property, which you can use like so:\n\n```go\nif res.Name == "" {\n\t// true if `"name"` is either not present or explicitly null\n\tres.JSON.Name.IsNull()\n\n\t// true if the `"name"` key was not present in the response JSON at all\n\tres.JSON.Name.IsMissing()\n\n\t// When the API returns data that cannot be coerced to the expected type:\n\tif res.JSON.Name.IsInvalid() {\n\t\traw := res.JSON.Name.Raw()\n\n\t\tlegacyName := struct{\n\t\t\tFirst string `json:"first"`\n\t\t\tLast  string `json:"last"`\n\t\t}{}\n\t\tjson.Unmarshal([]byte(raw), &legacyName)\n\t\tname = legacyName.First + " " + legacyName.Last\n\t}\n}\n```\n\nThese `.JSON` structs also include an `Extras` map containing\nany properties in the json response that were not specified\nin the struct. This can be useful for API features not yet\npresent in the SDK.\n\n```go\nbody := res.JSON.ExtraFields["my_unexpected_field"].Raw()\n```\n\n### RequestOptions\n\nThis library uses the functional options pattern. Functions defined in the\n`SDK_PackageOptionName` package return a `RequestOption`, which is a closure that mutates a\n`RequestConfig`. These options can be supplied to the client or at individual\nrequests. For example:\n\n```go\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\t// Adds a header to every request made by the client\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "custom_header_info"),\n)\n\nclient.V1.Heatmap.Configs.List(context.TODO(), ...,\n\t// Override the header\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "some_other_custom_header_info"),\n\t// Add an undocumented field to the request body, using sjson syntax\n\tSDK_PackageOptionName.WithJSONSet("some.json.path", map[string]string{"my": "object"}),\n)\n```\n\nSee the [full list of request options](https://pkg.go.dev/github.com/stainless-sdks/ls-api-go/SDK_PackageOptionName).\n\n### Pagination\n\nThis library provides some conveniences for working with paginated list endpoints.\n\nYou can use `.ListAutoPaging()` methods to iterate through items across all pages:\n\n\n\nOr you can use simple `.List()` methods to fetch a single page and receive a standard response object\nwith additional helper methods like `.GetNextPage()`, e.g.:\n\n\n\n### Errors\n\nWhen the API returns a non-success status code, we return an error with type\n`*SDK_PackageName.Error`. This contains the `StatusCode`, `*http.Request`, and\n`*http.Response` values of the request, as well as the JSON of the error body\n(much like other response objects in the SDK).\n\nTo handle errors, we recommend that you use the `errors.As` pattern:\n\n```go\n_, err := client.V1.Heatmap.Configs.List(context.TODO(), lsapi.V1HeatmapConfigListParams{})\nif err != nil {\n\tvar apierr *lsapi.Error\n\tif errors.As(err, &apierr) {\n\t\tprintln(string(apierr.DumpRequest(true)))  // Prints the serialized HTTP request\n\t\tprintln(string(apierr.DumpResponse(true))) // Prints the serialized HTTP response\n\t}\n\tpanic(err.Error()) // GET "/api/v1/heatmap/configs": 400 Bad Request { ... }\n}\n```\n\nWhen other errors occur, they are returned unwrapped; for example,\nif HTTP transport fails, you might receive `*url.Error` wrapping `*net.OpError`.\n\n### Timeouts\n\nRequests do not time out by default; use context to configure a timeout for a request lifecycle.\n\nNote that if a request is [retried](#retries), the context timeout does not start over.\nTo set a per-retry timeout, use `SDK_PackageOptionName.WithRequestTimeout()`.\n\n```go\n// This sets the timeout for the request, including all the retries.\nctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)\ndefer cancel()\nclient.V1.Heatmap.Configs.List(\n\tctx,\n\tlsapi.V1HeatmapConfigListParams{},\n\t// This sets the per-retry timeout\n\toption.WithRequestTimeout(20*time.Second),\n)\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads in multipart requests are typed as\n`param.Field[io.Reader]`. The contents of the `io.Reader` will by default be sent as a multipart form\npart with the file name of "anonymous_file" and content-type of "application/octet-stream".\n\nThe file name and content-type can be customized by implementing `Name() string` or `ContentType()\nstring` on the run-time type of `io.Reader`. Note that `os.File` implements `Name() string`, so a\nfile returned by `os.Open` will be sent with the file name on disk.\n\nWe also provide a helper `SDK_PackageName.FileParam(reader io.Reader, filename string, contentType string)`\nwhich can be used to wrap any `io.Reader` with the appropriate file name and content type.\n\n\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nWe retry by default all connection errors, 408 Request Timeout, 409 Conflict, 429 Rate Limit,\nand >=500 Internal errors.\n\nYou can use the `WithMaxRetries` option to configure or disable this:\n\n```go\n// Configure the default for all requests:\nclient := lsapi.NewClient(\n\toption.WithMaxRetries(0), // default is 2\n)\n\n// Override per-request:\nclient.V1.Heatmap.Configs.List(\n\tcontext.TODO(),\n\tlsapi.V1HeatmapConfigListParams{},\n\toption.WithMaxRetries(5),\n)\n```\n\n\n### Accessing raw response data (e.g. response headers)\n\nYou can access the raw HTTP response data by using the `option.WithResponseInto()` request option. This is useful when\nyou need to examine response headers, status codes, or other details.\n\n```go\n// Create a variable to store the HTTP response\nvar response *http.Response\nconfigs, err := client.V1.Heatmap.Configs.List(\n\tcontext.TODO(),\n\tlsapi.V1HeatmapConfigListParams{},\n\toption.WithResponseInto(&response),\n)\nif err != nil {\n\t// handle error\n}\nfmt.Printf("%+v\\n", configs)\n\nfmt.Printf("Status Code: %d\\n", response.StatusCode)\nfmt.Printf("Headers: %+#v\\n", response.Header)\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.Get`, `client.Post`, and other HTTP verbs.\n`RequestOptions` on the client, such as retries, will be respected when making these requests.\n\n```go\nvar (\n    // params can be an io.Reader, a []byte, an encoding/json serializable object,\n    // or a "…Params" struct defined in this library.\n    params map[string]interface{}\n\n    // result can be an []byte, *http.Response, a encoding/json deserializable object,\n    // or a model defined in this library.\n    result *http.Response\n)\nerr := client.Post(context.Background(), "/unspecified", params, &result)\nif err != nil {\n    …\n}\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use either the `SDK_PackageOptionName.WithQuerySet()`\nor the `SDK_PackageOptionName.WithJSONSet()` methods.\n\n```go\nparams := FooNewParams{\n    ID:   SDK_PackageName.F("id_xxxx"),\n    Data: SDK_PackageName.F(FooNewParamsData{\n        FirstName: SDK_PackageName.F("John"),\n    }),\n}\nclient.Foo.New(context.Background(), params, SDK_PackageOptionName.WithJSONSet("data.last_name", "Doe"))\n```\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may either access the raw JSON of the response as a string\nwith `result.JSON.RawJSON()`, or get the raw JSON of a particular field on the result with\n`result.JSON.Foo.Raw()`.\n\nAny fields that are not present on the response struct will be saved and can be accessed by `result.JSON.ExtraFields()` which returns the extra fields as a `map[string]Field`.\n\n### Middleware\n\nWe provide `SDK_PackageOptionName.WithMiddleware` which applies the given\nmiddleware to requests.\n\n```go\nfunc Logger(req *http.Request, next SDK_PackageOptionName.MiddlewareNext) (res *http.Response, err error) {\n\t// Before the request\n\tstart := time.Now()\n\tLogReq(req)\n\n\t// Forward the request to the next handler\n\tres, err = next(req)\n\n\t// Handle stuff after the request\n\tend := time.Now()\n\tLogRes(res, err, start - end)\n\n    return res, err\n}\n\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\tSDK_PackageOptionName.WithMiddleware(Logger),\n)\n```\n\nWhen multiple middlewares are provided as variadic arguments, the middlewares\nare applied left to right. If `SDK_PackageOptionName.WithMiddleware` is given\nmultiple times, for example first in the client then the method, the\nmiddleware in the client will run first and the middleware given in the method\nwill run next.\n\nYou may also replace the default `http.Client` with\n`SDK_PackageOptionName.WithHTTPClient(client)`. Only one http client is\naccepted (this overwrites any previous client) and receives requests after any\nmiddleware has been applied.\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stainless-sdks/ls-api-go/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Ls API TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/ls-api.svg?label=npm%20(stable))](https://npmjs.org/package/ls-api) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/ls-api)\n\nThis library provides convenient access to the Ls API REST API from server-side TypeScript or JavaScript.\n\n\n\nThe full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Ls API MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=ls-api-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImxzLWFwaS1tY3AiXSwiZW52Ijp7IkxTX0FQSV9CRUFSRVJfVE9LRU4iOiJNeSBCZWFyZXIgVG9rZW4ifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22ls-api-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22ls-api-mcp%22%5D%2C%22env%22%3A%7B%22LS_API_BEARER_TOKEN%22%3A%22My%20Bearer%20Token%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install git+ssh://git@github.com:stainless-sdks/ls-api-typescript.git\n```\n> [!NOTE]\n> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npm install ls-api`\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst configs = await client.v1.heatmap.configs.list();\n\nconsole.log(configs.data);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  bearerToken: process.env['LS_API_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst configs: LsAPI.V1.Heatmap.ConfigListResponse = await client.v1.heatmap.configs.list();\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst configs = await client.v1.heatmap.configs.list().catch(async (err) => {\n  if (err instanceof LsAPI.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new LsAPI({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.v1.heatmap.configs.list({\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new LsAPI({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.v1.heatmap.configs.list({\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new LsAPI();\n\nconst response = await client.v1.heatmap.configs.list().asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: configs, response: raw } = await client.v1.heatmap.configs.list().withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(configs.data);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `LS_API_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport LsAPI from 'ls-api';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new LsAPI({\n  logger: logger.child({ name: 'LsAPI' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.v1.heatmap.configs.list({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport LsAPI from 'ls-api';\nimport fetch from 'my-fetch';\n\nconst client = new LsAPI({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport LsAPI from 'ls-api';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new LsAPI({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport LsAPI from 'ls-api';\n\nconst client = new LsAPI({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport LsAPI from 'npm:ls-api';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new LsAPI({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stainless-sdks/ls-api-typescript/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
