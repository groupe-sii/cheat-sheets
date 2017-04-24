Date : __april 2017__

The WarpScript data manipulation environment allows the retrieval and analysis of data stored in the Warp 10 storage platform.

# API endpoints

API need an __X-Warp10-Token__ header settted with a *READ* or *WITE* token.

for sending data to the Warp 10 platform
```
POST /api/v0/update
```
for executing analysis expressed in the WarpScript language
```
POST /api/v0/exec
```
for retrieving raw GeoTimeSeries® data in an extremely quick an efficient way
```
GET /api/v0/fetch
```
for retrieving GeoTimeSeries® identifier (class name and labels)
```
GET /api/v0/find
```
for erasing data from the Warp 10 platform
```
GET /api/v0/delete
```
 for setting GeoTimeSeries® attributes
```
POST /api/v0/meta
```

# Fetch some metrics
During the last hour, a metric which contains _metric_
```
[ 'READ_TOKEN' '~metric.*' { } NOW 1 h ] FETCH
```
The last 10 datapoints of metric which name is exactly _metric_
```
[ 'READ_TOKEN' '=metric' { 'tag' 'value' } NOW -10 ] FETCH
```
