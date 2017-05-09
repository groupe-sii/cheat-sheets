Date : __april 2017__

The WarpScript data manipulation environment allows the retrieval and analysis of data stored in the Warp 10 storage platform. It's a stack oriented language.

# API endpoints

API need an __X-Warp10-Token__ header set with a *READ* or *WRITE* token.

Send data to the platform
```
POST /api/v0/update
```
Executing a WarpScript
```
POST /api/v0/exec
```
Get raw GeoTimeSeries® data
```
GET /api/v0/fetch
```
Get GeoTimeSeries® identifier (class name and labels)
```
GET /api/v0/find
```
Remove data from the platform
```
GET /api/v0/delete
```
For setting GeoTimeSeries® attributes
```
POST /api/v0/meta
```

# Fetch some metrics
During the last hour, any metric which contains _os.cpu_
```
[ 'READ_TOKEN' '~os.cpu.*' { } NOW 1 h ] FETCH
```
The last 10 datapoints of metric which name is exactly _fuel.station_
```
[ 'READ_TOKEN' '=fuel.station' { 'tag' 'value' } NOW -10 ] FETCH
```
