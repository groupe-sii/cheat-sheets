# Bucketizer

|                                       |                   |
|---------------------------------------|-------------------|
|bucketizer.sum                         | bucketizer.max    |
|bucketizer.min                         | bucketizer.count  |
|bucketizer.mean                        | bucketizer.first  |
|bucketizer.mean.circular               | bucketizer.and    |
|bucketizer.mean.circular.exclude-nulls | bucketizer.join   |
|bucketizer.last                        | bucketizer.or     |
|bucketizer.median                      |                   |

Syntaxe: __[ [GTS] ... [GTS] bucketizer lastbucket bucketspan bucketcount ] BUCKETIZE__

Ex: *return 100 meaning datapoints from the previous element in the stack (one or more GeoTimeSeries®)*
```
[ SWAP bucketizer.mean 0 0 100 ] BUCKETIZE
```

# Reducer

|                                       |                               |
|---------------------------------------|-------------------------------|
|reducer.argmax                         |reducer.argmin                 |
|reducer.count                          |reducer.count.exclude-nulls    |
|reducer.count.include-nulls            |reducer.join                   |
|reducer.join.forbid-nulls              |reducer.max                    |
|reducer.max.forbid-nulls               |reducer.mean                   |
|reducer.mean.exclude-nulls             |reducer.mean.circular          |
|reducer.mean.circular.exclude-nulls    |reducer.median                 |
|reducer.min                            |reducer.min.forbid-nulls       |
|reducer.and                            |reducer.and.exclude-nulls      |
|reducer.or                             |reducer.or.exclude-nulls       |
|reducer.sd                             |reducer.shannonentropy.0       |
|reducer.shannonentropy.1               |reducer.sum                    |
|reducer.sum.forbid-nulls               |reducer.var                    |

Syntaxe: __[ [GTS] ... [GTS] [labels] reducer ] REDUCE__

Ex: *return a sum of aggregated GeoTimeSerie® from the previous element in the stack (one or more GeoTimeSeries®)*
```
[ SWAP [ 'label1'] reducer.sum ] REDUCE
```
