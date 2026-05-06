# V1

## Share

### Heatmaps

Types:

- <code><a href="./src/resources/v1/share/heatmaps.ts">HeatmapRetrieveResponse</a></code>

Methods:

- <code title="get /api/v1/share/heatmaps/{heatmap}/token/{token}">client.v1.share.heatmaps.<a href="./src/resources/v1/share/heatmaps.ts">retrieve</a>(token, { ...params }) -> HeatmapRetrieveResponse</code>

## Heatmap

Types:

- <code><a href="./src/resources/v1/heatmap/heatmap.ts">HeatmapCreateResponse</a></code>
- <code><a href="./src/resources/v1/heatmap/heatmap.ts">HeatmapRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/heatmap/heatmap.ts">HeatmapListResponse</a></code>
- <code><a href="./src/resources/v1/heatmap/heatmap.ts">HeatmapDeleteAllResponse</a></code>
- <code><a href="./src/resources/v1/heatmap/heatmap.ts">HeatmapRerunResponse</a></code>
- <code><a href="./src/resources/v1/heatmap/heatmap.ts">HeatmapRetrievePlacesResponse</a></code>

Methods:

- <code title="post /api/v1/heatmaps">client.v1.heatmap.<a href="./src/resources/v1/heatmap/heatmap.ts">create</a>({ ...params }) -> HeatmapCreateResponse</code>
- <code title="get /api/v1/heatmaps/{heatmap}">client.v1.heatmap.<a href="./src/resources/v1/heatmap/heatmap.ts">retrieve</a>(heatmap) -> HeatmapRetrieveResponse</code>
- <code title="get /api/v1/heatmaps">client.v1.heatmap.<a href="./src/resources/v1/heatmap/heatmap.ts">list</a>({ ...params }) -> HeatmapListResponse</code>
- <code title="delete /api/v1/heatmaps">client.v1.heatmap.<a href="./src/resources/v1/heatmap/heatmap.ts">deleteAll</a>({ ...params }) -> HeatmapDeleteAllResponse</code>
- <code title="post /api/v1/heatmaps/rerun">client.v1.heatmap.<a href="./src/resources/v1/heatmap/heatmap.ts">rerun</a>({ ...params }) -> HeatmapRerunResponse</code>
- <code title="get /api/v1/heatmaps/places">client.v1.heatmap.<a href="./src/resources/v1/heatmap/heatmap.ts">retrievePlaces</a>({ ...params }) -> HeatmapRetrievePlacesResponse</code>

### Configs

Types:

- <code><a href="./src/resources/v1/heatmap/configs.ts">ConfigCreateResponse</a></code>
- <code><a href="./src/resources/v1/heatmap/configs.ts">ConfigRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/heatmap/configs.ts">ConfigListResponse</a></code>
- <code><a href="./src/resources/v1/heatmap/configs.ts">ConfigDeleteResponse</a></code>

Methods:

- <code title="post /api/v1/heatmap/configs">client.v1.heatmap.configs.<a href="./src/resources/v1/heatmap/configs.ts">create</a>({ ...params }) -> ConfigCreateResponse</code>
- <code title="get /api/v1/heatmap/configs/{config_id}">client.v1.heatmap.configs.<a href="./src/resources/v1/heatmap/configs.ts">retrieve</a>(configID) -> ConfigRetrieveResponse</code>
- <code title="get /api/v1/heatmap/configs">client.v1.heatmap.configs.<a href="./src/resources/v1/heatmap/configs.ts">list</a>({ ...params }) -> ConfigListResponse</code>
- <code title="delete /api/v1/heatmap/configs/{config_id}">client.v1.heatmap.configs.<a href="./src/resources/v1/heatmap/configs.ts">delete</a>(configID) -> ConfigDeleteResponse</code>

### Grids

Types:

- <code><a href="./src/resources/v1/heatmap/grids.ts">GridCreateResponse</a></code>
- <code><a href="./src/resources/v1/heatmap/grids.ts">GridRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/heatmap/grids.ts">GridListResponse</a></code>
- <code><a href="./src/resources/v1/heatmap/grids.ts">GridDeleteResponse</a></code>

Methods:

- <code title="post /api/v1/heatmap/grids">client.v1.heatmap.grids.<a href="./src/resources/v1/heatmap/grids.ts">create</a>({ ...params }) -> GridCreateResponse</code>
- <code title="get /api/v1/heatmap/grids/{grid_id}">client.v1.heatmap.grids.<a href="./src/resources/v1/heatmap/grids.ts">retrieve</a>(gridID) -> GridRetrieveResponse</code>
- <code title="get /api/v1/heatmap/grids">client.v1.heatmap.grids.<a href="./src/resources/v1/heatmap/grids.ts">list</a>({ ...params }) -> GridListResponse</code>
- <code title="delete /api/v1/heatmap/grids/{grid_id}">client.v1.heatmap.grids.<a href="./src/resources/v1/heatmap/grids.ts">delete</a>(gridID) -> GridDeleteResponse</code>

### Keyword

#### Lists

Types:

- <code><a href="./src/resources/v1/heatmap/keyword/lists.ts">ListCreateResponse</a></code>
- <code><a href="./src/resources/v1/heatmap/keyword/lists.ts">ListRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/heatmap/keyword/lists.ts">ListUpdateResponse</a></code>
- <code><a href="./src/resources/v1/heatmap/keyword/lists.ts">ListListResponse</a></code>
- <code><a href="./src/resources/v1/heatmap/keyword/lists.ts">ListDeleteResponse</a></code>
- <code><a href="./src/resources/v1/heatmap/keyword/lists.ts">ListDeleteAllResponse</a></code>

Methods:

- <code title="post /api/v1/heatmap/keyword/lists">client.v1.heatmap.keyword.lists.<a href="./src/resources/v1/heatmap/keyword/lists.ts">create</a>({ ...params }) -> ListCreateResponse</code>
- <code title="get /api/v1/heatmap/keyword/lists/{keyword_list}">client.v1.heatmap.keyword.lists.<a href="./src/resources/v1/heatmap/keyword/lists.ts">retrieve</a>(keywordList) -> ListRetrieveResponse</code>
- <code title="put /api/v1/heatmap/keyword/lists/{keyword_list}">client.v1.heatmap.keyword.lists.<a href="./src/resources/v1/heatmap/keyword/lists.ts">update</a>(keywordList, { ...params }) -> ListUpdateResponse</code>
- <code title="get /api/v1/heatmap/keyword/lists">client.v1.heatmap.keyword.lists.<a href="./src/resources/v1/heatmap/keyword/lists.ts">list</a>({ ...params }) -> ListListResponse</code>
- <code title="delete /api/v1/heatmap/keyword/lists/{keyword_list}">client.v1.heatmap.keyword.lists.<a href="./src/resources/v1/heatmap/keyword/lists.ts">delete</a>(keywordList) -> ListDeleteResponse</code>
- <code title="delete /api/v1/heatmap/keyword/lists">client.v1.heatmap.keyword.lists.<a href="./src/resources/v1/heatmap/keyword/lists.ts">deleteAll</a>({ ...params }) -> ListDeleteAllResponse</code>

### Schedules

Types:

- <code><a href="./src/resources/v1/heatmap/schedules.ts">ScheduleCreateResponse</a></code>
- <code><a href="./src/resources/v1/heatmap/schedules.ts">ScheduleRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/heatmap/schedules.ts">ScheduleUpdateResponse</a></code>
- <code><a href="./src/resources/v1/heatmap/schedules.ts">ScheduleListResponse</a></code>
- <code><a href="./src/resources/v1/heatmap/schedules.ts">ScheduleDeleteResponse</a></code>
- <code><a href="./src/resources/v1/heatmap/schedules.ts">ScheduleDeleteBulkDeleteResponse</a></code>
- <code><a href="./src/resources/v1/heatmap/schedules.ts">SchedulePauseResponse</a></code>
- <code><a href="./src/resources/v1/heatmap/schedules.ts">ScheduleResumeResponse</a></code>

Methods:

- <code title="post /api/v1/heatmap/schedules">client.v1.heatmap.schedules.<a href="./src/resources/v1/heatmap/schedules.ts">create</a>({ ...params }) -> ScheduleCreateResponse</code>
- <code title="get /api/v1/heatmap/schedules/{schedule}">client.v1.heatmap.schedules.<a href="./src/resources/v1/heatmap/schedules.ts">retrieve</a>(schedule) -> ScheduleRetrieveResponse</code>
- <code title="patch /api/v1/heatmap/schedules/{schedule_id}">client.v1.heatmap.schedules.<a href="./src/resources/v1/heatmap/schedules.ts">update</a>(scheduleID, { ...params }) -> ScheduleUpdateResponse</code>
- <code title="get /api/v1/heatmap/schedules">client.v1.heatmap.schedules.<a href="./src/resources/v1/heatmap/schedules.ts">list</a>({ ...params }) -> ScheduleListResponse</code>
- <code title="delete /api/v1/heatmap/schedules/{schedule_id}">client.v1.heatmap.schedules.<a href="./src/resources/v1/heatmap/schedules.ts">delete</a>(scheduleID) -> ScheduleDeleteResponse</code>
- <code title="delete /api/v1/heatmap/schedules/bulk-delete">client.v1.heatmap.schedules.<a href="./src/resources/v1/heatmap/schedules.ts">deleteBulkDelete</a>({ ...params }) -> ScheduleDeleteBulkDeleteResponse</code>
- <code title="post /api/v1/heatmap/schedules/{schedule_id}/pause">client.v1.heatmap.schedules.<a href="./src/resources/v1/heatmap/schedules.ts">pause</a>(scheduleID) -> SchedulePauseResponse</code>
- <code title="post /api/v1/heatmap/schedules/{schedule_id}/resume">client.v1.heatmap.schedules.<a href="./src/resources/v1/heatmap/schedules.ts">resume</a>(scheduleID) -> ScheduleResumeResponse</code>

### Competitors

Types:

- <code><a href="./src/resources/v1/heatmap/competitors.ts">CompetitorListResponse</a></code>
- <code><a href="./src/resources/v1/heatmap/competitors.ts">CompetitorRetrieveRankingsResponse</a></code>

Methods:

- <code title="get /api/v1/heatmaps/{heatmap}/competitors">client.v1.heatmap.competitors.<a href="./src/resources/v1/heatmap/competitors.ts">list</a>(heatmap) -> CompetitorListResponse</code>
- <code title="get /api/v1/heatmaps/{heatmap_id}/competitors/{competitor_id}/rankings">client.v1.heatmap.competitors.<a href="./src/resources/v1/heatmap/competitors.ts">retrieveRankings</a>(competitorID, { ...params }) -> CompetitorRetrieveRankingsResponse</code>
