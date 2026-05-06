// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.v1.share.heatmaps.retrieve',
    fullyQualifiedName: 'v1.share.heatmaps.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/share/heatmaps/{heatmap}/token/{token}',
  },
  {
    clientCallName: 'client.v1.heatmap.create',
    fullyQualifiedName: 'v1.heatmap.create',
    httpMethod: 'post',
    httpPath: '/api/v1/heatmaps',
  },
  {
    clientCallName: 'client.v1.heatmap.retrieve',
    fullyQualifiedName: 'v1.heatmap.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/heatmaps/{heatmap}',
  },
  {
    clientCallName: 'client.v1.heatmap.list',
    fullyQualifiedName: 'v1.heatmap.list',
    httpMethod: 'get',
    httpPath: '/api/v1/heatmaps',
  },
  {
    clientCallName: 'client.v1.heatmap.deleteAll',
    fullyQualifiedName: 'v1.heatmap.deleteAll',
    httpMethod: 'delete',
    httpPath: '/api/v1/heatmaps',
  },
  {
    clientCallName: 'client.v1.heatmap.rerun',
    fullyQualifiedName: 'v1.heatmap.rerun',
    httpMethod: 'post',
    httpPath: '/api/v1/heatmaps/rerun',
  },
  {
    clientCallName: 'client.v1.heatmap.retrievePlaces',
    fullyQualifiedName: 'v1.heatmap.retrievePlaces',
    httpMethod: 'get',
    httpPath: '/api/v1/heatmaps/places',
  },
  {
    clientCallName: 'client.v1.heatmap.configs.create',
    fullyQualifiedName: 'v1.heatmap.configs.create',
    httpMethod: 'post',
    httpPath: '/api/v1/heatmap/configs',
  },
  {
    clientCallName: 'client.v1.heatmap.configs.retrieve',
    fullyQualifiedName: 'v1.heatmap.configs.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/heatmap/configs/{config_id}',
  },
  {
    clientCallName: 'client.v1.heatmap.configs.list',
    fullyQualifiedName: 'v1.heatmap.configs.list',
    httpMethod: 'get',
    httpPath: '/api/v1/heatmap/configs',
  },
  {
    clientCallName: 'client.v1.heatmap.configs.delete',
    fullyQualifiedName: 'v1.heatmap.configs.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/heatmap/configs/{config_id}',
  },
  {
    clientCallName: 'client.v1.heatmap.grids.create',
    fullyQualifiedName: 'v1.heatmap.grids.create',
    httpMethod: 'post',
    httpPath: '/api/v1/heatmap/grids',
  },
  {
    clientCallName: 'client.v1.heatmap.grids.retrieve',
    fullyQualifiedName: 'v1.heatmap.grids.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/heatmap/grids/{grid_id}',
  },
  {
    clientCallName: 'client.v1.heatmap.grids.list',
    fullyQualifiedName: 'v1.heatmap.grids.list',
    httpMethod: 'get',
    httpPath: '/api/v1/heatmap/grids',
  },
  {
    clientCallName: 'client.v1.heatmap.grids.delete',
    fullyQualifiedName: 'v1.heatmap.grids.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/heatmap/grids/{grid_id}',
  },
  {
    clientCallName: 'client.v1.heatmap.keyword.lists.create',
    fullyQualifiedName: 'v1.heatmap.keyword.lists.create',
    httpMethod: 'post',
    httpPath: '/api/v1/heatmap/keyword/lists',
  },
  {
    clientCallName: 'client.v1.heatmap.keyword.lists.retrieve',
    fullyQualifiedName: 'v1.heatmap.keyword.lists.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/heatmap/keyword/lists/{keyword_list}',
  },
  {
    clientCallName: 'client.v1.heatmap.keyword.lists.update',
    fullyQualifiedName: 'v1.heatmap.keyword.lists.update',
    httpMethod: 'put',
    httpPath: '/api/v1/heatmap/keyword/lists/{keyword_list}',
  },
  {
    clientCallName: 'client.v1.heatmap.keyword.lists.list',
    fullyQualifiedName: 'v1.heatmap.keyword.lists.list',
    httpMethod: 'get',
    httpPath: '/api/v1/heatmap/keyword/lists',
  },
  {
    clientCallName: 'client.v1.heatmap.keyword.lists.delete',
    fullyQualifiedName: 'v1.heatmap.keyword.lists.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/heatmap/keyword/lists/{keyword_list}',
  },
  {
    clientCallName: 'client.v1.heatmap.keyword.lists.deleteAll',
    fullyQualifiedName: 'v1.heatmap.keyword.lists.deleteAll',
    httpMethod: 'delete',
    httpPath: '/api/v1/heatmap/keyword/lists',
  },
  {
    clientCallName: 'client.v1.heatmap.schedules.create',
    fullyQualifiedName: 'v1.heatmap.schedules.create',
    httpMethod: 'post',
    httpPath: '/api/v1/heatmap/schedules',
  },
  {
    clientCallName: 'client.v1.heatmap.schedules.retrieve',
    fullyQualifiedName: 'v1.heatmap.schedules.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/heatmap/schedules/{schedule}',
  },
  {
    clientCallName: 'client.v1.heatmap.schedules.update',
    fullyQualifiedName: 'v1.heatmap.schedules.update',
    httpMethod: 'patch',
    httpPath: '/api/v1/heatmap/schedules/{schedule_id}',
  },
  {
    clientCallName: 'client.v1.heatmap.schedules.list',
    fullyQualifiedName: 'v1.heatmap.schedules.list',
    httpMethod: 'get',
    httpPath: '/api/v1/heatmap/schedules',
  },
  {
    clientCallName: 'client.v1.heatmap.schedules.delete',
    fullyQualifiedName: 'v1.heatmap.schedules.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/heatmap/schedules/{schedule_id}',
  },
  {
    clientCallName: 'client.v1.heatmap.schedules.deleteBulkDelete',
    fullyQualifiedName: 'v1.heatmap.schedules.deleteBulkDelete',
    httpMethod: 'delete',
    httpPath: '/api/v1/heatmap/schedules/bulk-delete',
  },
  {
    clientCallName: 'client.v1.heatmap.schedules.pause',
    fullyQualifiedName: 'v1.heatmap.schedules.pause',
    httpMethod: 'post',
    httpPath: '/api/v1/heatmap/schedules/{schedule_id}/pause',
  },
  {
    clientCallName: 'client.v1.heatmap.schedules.resume',
    fullyQualifiedName: 'v1.heatmap.schedules.resume',
    httpMethod: 'post',
    httpPath: '/api/v1/heatmap/schedules/{schedule_id}/resume',
  },
  {
    clientCallName: 'client.v1.heatmap.competitors.list',
    fullyQualifiedName: 'v1.heatmap.competitors.list',
    httpMethod: 'get',
    httpPath: '/api/v1/heatmaps/{heatmap}/competitors',
  },
  {
    clientCallName: 'client.v1.heatmap.competitors.retrieveRankings',
    fullyQualifiedName: 'v1.heatmap.competitors.retrieveRankings',
    httpMethod: 'get',
    httpPath: '/api/v1/heatmaps/{heatmap_id}/competitors/{competitor_id}/rankings',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
