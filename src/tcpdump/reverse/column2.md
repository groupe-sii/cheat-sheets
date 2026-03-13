# ADD PACKET INFORMATION

Print link-level header (MAC addresses):
`sudo tcpdump -e`

# OTHER OPTIONS

Capture a number of packets:
`sudo tcpdump -c <numberofpackets>`
Example with 10 packets:
`sudo tcpdump -c 10`  
<br />
Print a number of packets of a file capture:
`sudo tcpdump -r <file> --count` 
<br />
Only capture a part of each packet:
`sudo tcpdump -s <size>`
OR
`sudo tcpdump --snapshot-length= <size>`
Example for a packet size of 50 bytes:
`sudo tcpdump -s 50`
-s 0 is used for illimited size
<br />
Use a verbose mode to display detailed information about each packet:
`sudo tcpdump -v`
`sudo tcpdump -vv`
`sudo tcpdump -vvv`
<br />
# COMBINE FILTERS

All filters can be combine with "and" or "&&", "or" or "||", "not" or "!".



