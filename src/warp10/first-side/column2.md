# Bucketizer

|                             |         |
|-----------------------------|---------|
|.sum                         | .max    |
|.min                         | .count  |
|.mean                        | .first  |
|.mean.circular               | .and    |
|.mean.circular.exclude-nulls | .join   |
|.last                        | .or     |
|.median                      |         |

Syntaxe: __[ [GTS] *bucketizer* *lastbucket* *bucketspan* *bucketcount* ] BUCKETIZE__

Ex: *return 100 meaning datapoints from the previous GeoTimeSeries®*
```
[ SWAP bucketizer.mean 0 0 100 ] BUCKETIZE
```

# Reducer

|                             |                   |
|-----------------------------|-------------------|
|.argmax                      |.argmin            |
|.count.exclude-nulls         |.count             |
|.count.include-nulls         |.join              |
|.join.forbid-nulls           |.max               |
|.max.forbid-nulls            |.mean              |
|.mean.exclude-nulls          |.mean.circular     |
|.mean.circular.exclude-nulls |.median            |
|.min                         |.min.forbid-nulls  |
|.and                         |.and.exclude-nulls |
|.or.exclude-nulls            |.or                |
|.shannonentropy.0            |.sd                |
|.shannonentropy.1            |.sum               |
|.sum.forbid-nulls            |.var               |

Syntaxe: __[ [GTS]...[GTS] [*labels*] *reducer* ] REDUCE__

Ex: *return a sum of aggregated GeoTimeSerie® from the previous GeoTimeSerie®*
```
[ SWAP [ 'label1'] reducer.sum ] REDUCE
```
