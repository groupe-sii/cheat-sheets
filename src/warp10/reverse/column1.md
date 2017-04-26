# Mappers

Apply a function on each tick of each GeoTimeSeries®.

Syntaxe: __[ [GTS]...[GTS] *constant* *mapper* 0 0 0 ] MAP__

Ex: *display Bytes instead of bits*
```
[ SWAP 8.0 mapper.mul 0 0 0 ] MAP
```

# Input data format

Each metric has an unique identifier. Changing just one label, create a new GeoTimeSeries®.

__TIMESTAMP/LATITUDE:LONGITUDE/ALTITUDE className{label=value} VALUE__

```
1493153321000000/49.13:6.65/12.75 device{id=1} 15
```

# Output data format

```json
[{
  "c": "class",
  "i": "1",
  "l": {
    "label0": "value0",
    "label1": "value1"
  },
  "a": {
    "attr0": "value0"
  },
  "v":[
    [ 1380475081000000, 3.14 ],
    [ 1380475081500000, 48.0, -4.5, 2.5],
    [ 1380475082000000, 10000000, 3.0]
  ]
},
{
  "i": "1",
  "v": [
    [ 1380475083000000, 48.1, -4.5,11000000, 42.0]
  ]
}]
```

# If / Else

Ex: if 7 <= 4 then A else B
```
<% 7 4 <= %>   <% 'A' %>   <% 'B'%>   IFTE
```
