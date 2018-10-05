# Constant and variables

Constant
```go
const myconstant int32 = 1 
myconstant = 5 // program will panic and exit

const LOGLEVEL = 0 // type auto detection 
// LOGLEVEL is of type int32 under 32bit systems, int64 under 64bit systems
```

Variable

```go
var a int // default value for int is 0
a = 2 + 5
fmt.Println(a) // Will print 7
var a = "hello" // Will panic and exit. Changing type isn't possible.
```

multiple variables
```go
const (
    PATH = "/etc"
    CONFIG = PATH + "/myconfig.yml"
)
var (
    a = 1
    b = a + 9 // b = 10
    anotherCONFIG = PATH + "/myconfig.ini"
)
```

# Go builtin types

Integers and floats
```go
// Integers
const a uint = 1 // uint8 uint16 uint32 uint64
const b int = 2 // int8 int16 int32 int64
// floats
const c float = 31 // float32 float64
// int, uint, float are respectivly aliases to uint64, int64, float64 in 64 bit systems
```

Bytes
```go
const a byte = 'a'
const b byte = 97
fmt.Println(a==b) // will print "true"
// In go byte is an alias to uint8 (values from 0 to 255)
const c byte = 256 // error
```

