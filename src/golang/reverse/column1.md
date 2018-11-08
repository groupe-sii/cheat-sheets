Strings
```go
s1 := "SII"
var s2 = s1 + " ROCKS !"
fmt.Println(s2) // Will print "SII ROCKS !"
```

Arrays
```go
// Syntax: []type
var a []int // nil array
var b []int = []int{10, 20, 30}
fmt.Println(a[0]) // Will panic and exit
fmt.Println(b[1]) // Will print: 20

// Allocation
a := make([]int, 4, 10) // lenght: 4, capacity: 10
fmt.Println(a) // Print: [0, 0, 0, 0]
```

Maps
```go
// Syntax: map[keys_type]values_type
var m map[string]int // nil map
var m := map[string]int{"score": 5000}
fmt.Println(m["score"]) // Print 5000
// Allocation
m = make(map[string]int, 10) // Capacity: 10
m["score"] = 5000
m["year"] = 2018
m["hello"] = "world" // Will panic and exit
```

# Conditions

```go
if 30 > 10{
    fmt.Println("true")
} else if true == false{ 
    fmt.Println("false")
}
```

# Loops
```go
for i:=0;i<10;i++ { // loop in range [0:10[
    fmt.Println("Hello")
}
// loop over array elements/indexes
array := []int{0, 2, 4, 6, 8}
for index, element := range array {
    fmt.Println(index, element)
}
// loop over map keys/values
m := []map[int]bool{0: true, 10, false}
for key, value := range m {
    fmt.Println(key, value)
}
```
