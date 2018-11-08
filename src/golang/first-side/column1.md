Go version: __1.11__ - Date: __August 2018__
 

# Installing Go
Debian/Ubuntu
`apt update && apt install golang`

darwin & brew
`brew install golang`

Other OS/Arch
`https://golang.org/doc/install`


# Running your first go program

Executable go programs must be package main
```golang
package main 

import "fmt"

// This is a comment
func main() {
    fmt.Println("Hello World ! 你好，世界 ! 😊")
}
```

Running your program

```sh
# Compiling binaries only
> go build -o hello main.go && ./hello
# Compiling and runing (doesn't save a binary)
> go run main.go

# Output
Hello World ! 你好，世界 ! 😊
```

Cross compilation
```sh
# GOOS=operating_system GOARCH=architecture

> GOOS=windows GOARCH=i386 go build -o hello.exe main.go
> GOOS=linux GOARCH=amd64 go build -o hello main.go

# If not specified, go will detect/use the current system and compile for it
```
