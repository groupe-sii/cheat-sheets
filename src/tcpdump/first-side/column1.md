# INTRODUCTION

Tcpdump is a command-line tool to capture and analyze network trafic packets.

# INSTALLATION

Tcpdump is often installed by default. Verify with:
`sudo tcpdump --version`

If tcpdump is not present, install it with these commands:

___Debian/Ubuntu___
`sudo apt-get install tcpdump`

___Redhat/CentOS___
`sudo yum install tcpdump`

# LAUNCH
Sudo is necessary to launch tcpdump
`sudo tcpdump`

# LAUNCH AND WRITE THE RESULT IN A FILE

`sudo tcpdump -w <file>`

Create a file named file.pcap. A pcap file can be read later on Wirehark:
___To make sure to have the rights to read/write the file, launch the command with "-Z" option to specify your local user:___
`sudo tcpdump -w <file.pcap> -Z <localuser>`

Create a file named file. It can be read later with tcpdump or direcly with "cat" command:
`sudo tcpdump -w <file> -Z <localuser>`



