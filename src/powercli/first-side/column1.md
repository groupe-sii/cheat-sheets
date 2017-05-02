VMware PowerCLI **6.5.1** 

Date : **April 2017**

# Installation

From Powershell Gallery

`Install-Module ‑Name VMware.PowerCLI –Scope CurrentUser`

Offline installation

`Save-Module ‑Name VMware.PowerCLI ‑Path C:\Path\To\Desired\Folder`

... then copy content to the target machine in folder: *"$home\Documents\WindowsPowerShell\Modules"*

Load module

`Import-Module VMware.PowerCLI`

# Connections

Enter credentials in a windows popup
`Connect-VIServer ‑Server <server> ‑credential $(Get-Credential)`

# Host management

Add a new ESXi to the inventory
`Add-VMHost <fqdn or ip> ‑Location (Get-Cluster <cLustername>) ‑User root ‑Password <password>`

Set a host to maintenand mode
`Set-VMHost ‑VMHost <host> ‑State "Maintenance"`

Power operations on ESXi
* `Restart-VMHost ‑VMHost <host>`
* `Stop-VMHost ‑VMHost <host>`

