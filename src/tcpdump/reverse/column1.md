Filtering by a port range:
`sudo tcpdump portrange <firstport>-<lastport>`

Use a filter expression:
`sudo tcpdump less <portnum>`
`sudo tcpdump greater <portnum>`
`sudo tcpdump <= <portnum>`

# FILTERING PACKETS BY IP ADDRESS

Filtering by a source IP address:
`sudo tcpdump src <srcip>`

Filtering by a destination IP address:
`sudo tcpdump dst <destip>`

Filtering by a host (both source and destination):
`sudo tcpdump host <hostip>`

Filtering by a network address:
`sudo tcpdump net <netip/netmask>`

# FILTERING PACKETS BY PROTOCOL

ICMP traffic:
`sudo tcpdump icmp`

TCP traffic:
`sudo tcpdump tcp`

UDP traffic:
`sudo tcpdump udp`

Other protocols can be used: IGMP, IGRP, PIM, AH, ESP, CARP, VRRP.
Example:
`sudo tcpdump igmp`




