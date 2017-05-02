# Guest OS operations

Power operations
* `Shutdown-VMGuest ‑VM <vm>`
* `Restart-VMGuest ‑VM <vm>`

(dis)Mounts the VMware Tools CD installer
`Mount-Tools ‑VM <vm>`
`Dismount-Tools ‑VM <vm>`

# Datastore

Get datastore information
`Get-Datastore ‑Name <dsname>`

Create (NFS|VMFS) datastores
`New-Datastore ‑Nfs ‑VMHost <host> ‑Name <dsname> ‑Path </path/folder> ‑NfsHost <nfsserver>`
`New-Datastore ‑Vmfs ‑VMHost <host> ‑Name <dsname> ‑Path <scsiLun.CanonicalName>`

# Network

Get vSphere distributed switch or port group
`Get-VDSwitch ‑name <name>`
`Get-VDPortgroup ‑Name <name>`

Create a vSphere distributed switch
`New-VDSwitch ‑Name <dvsname> ‑Location <datacenter>`

Create a distributed port group
`New-VDPortgroup ‑VDSwitch <dvswitch> ‑Name <pgname> ‑NumPorts 8 ‑VLanId 4`

Backup/Export of a vSphere distributed switch
`Export-VDSwitch ‑VDSwitch <dvswitch> ‑Destination "c:\mybkp.zip" ‑WithoutPortGroups`
