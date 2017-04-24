# Mappers

Apply a function on each tick of each GeoTimeSeries®.

Syntaxe: __[ [GTS] ... [GTS] CONSTANT mapper 0 0 0 ] MAP__

Ex: *display Bytes instead of bits*
```
[ SWAP 8.0 mapper.mul 0 0 0 ] MAP
```

# Input data format

Each metric has an unique identifier, composed by his class name and labels. Changing just one label, create a new GeoTimeSeries®.

__TIMESTAMP/LATITUDE:LONGITUDE/ALTITUDE className{label=value} VALUE__

````
1493153321000000/49.133810978382826:6.657044710591435/12.75 device.tick{id=1} 15
```

# Output data format

```
[
  {
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
  }
]
```

# If / Else

Ex: if 7 <= 4 then A else B
```
<% 7 4 <= %>   <% 'A' %>   <% 'B'%>   IFTE
```
