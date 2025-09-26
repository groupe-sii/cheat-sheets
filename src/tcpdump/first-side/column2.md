Create a file named file.txt. It can be read later with "cat" command:
`sudo tcpdump > <file.txt>`

The size of the file can be configured with "-C" option and a size in million bytes (1 MB = 1 000 000 bytes):
`sudo tcpdump -w file -C 1`

# FILTERING PACKETS FOR AN INTERFACE

List all interfaces:
`sudo tcpdump -D`
OR
`sudo tcpdump --list-interfaces`

Listen to the interface named intf:
`sudo tcpdump -i <intf>`
OR
`sudo tcpdump --interface=<intf>`

# FILTERING PACKETS BY PORT

Filtering by portnum (port source or port destination):
`sudo tcpdump port <portnum>`

Filtering by a portnum TCP:
`sudo tcpdump tcp port <portnum>`

Filtering by a source port:
`sudo tcpdump src port <portnum>`

Filtering by a destination port:
`sudo tcpdump dst port <portnum>`







