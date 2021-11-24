# For

Ex: _for i from 1 to 10 : push i*i_
```
1 10 <% 2 **  %> FOR
```

# Secure Script

Cipher a script to share it

```
'aSecretKey' SECUREKEY
<S
  [
    'TOKEN'
    '~metric.*'
    { }
    NOW
    -1
  ] FETCH
S>
```

And to execute it
```
"secureScriptString" EVALSECURE
```


# Filter on Geo place

__The last position must be the start position__

Ex: *Grep all GeoTimeSerie® which have datapoints in the place*
```
[ [ 'READ_TOKEN' '~station.*' { } NOW -1 ] FETCH
  'POLYGON ((
  47.6300000 3.8300000,
  47.6600000 3.8300000,
  47.6300000 3.7900000,
  47.6300000 3.8300000, ))'
  0.1 true GEO.WKT
  mapper.geo.within 0 0 0
]
```


# Links

My first steps with WarpScript

[http://tour.warp10.io/#1-1](http://tour.warp10.io/#1-1)

List of WarpScript functions

[http://www.warp10.io/reference/reference/#frameworks](http://www.warp10.io/reference/reference/#frameworks)
