# Functions

```go
func SpamHello(ntimes int) (ok bool) {
    for i:=0; i<n;i++ {
        fmt.Println("Hello")
    }
    return true
}

func WriteData(data []byte, filepath string) error {
    if len(data) < 5 {
        return fmt.Errorf("data is too short %v", data)
    }
    
    err := WriteFile(data, path)
    if err != nil {
        return fmt.Errorf("error: %v", err)
    }

    return nil
}
```

# Structs and Pointers
```go 
type Book struct {
    Name string
    Author string
    Rating float64
}

var HarryPotterP1 Book = Book{
    Name: "Harry Potter",
    Author: "J.K Rawlings",
}
// Pointers
var mypointer *Book = &Book{Name: "LAMBDA"}
var mypointer2 *Book = &HarryPotterP1
```

# Methods

```go
func (b Book) Description() string {
    return b.Name + " " + b.Author
}

func (b *Book) IncrRating(r float64) float64 {
    b.Rating += r
    return b.Rating
}

func main() {
    b := &Book{}
    b.IncrRating(0.99)
    fmt.Println(b.Rating)
}
```