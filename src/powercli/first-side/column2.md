Retrieves information about host services
`Get-VMHostService <host>`

Restart a specific host service
`Get-VMHostService <host> | ? {($_.Key ‑eq "TSM-ssh")} | Restart-VMHostService`

# Cluster management

Get cluster information
`Get-Cluster ‑Name <clustername>`

Enable HA on cluster
`Set-Cluster ‑Cluster <cluster> ‑HAEnabled:$true ‑HAAdmissionControlEnabled:$true`

Enable DRS on cluster
`Set-Cluster ‑Cluster <cluster> ‑DRSEnabled:$true ‑DRSAutomationLevel "FullyAutomated"`

Set EVC mode on cluster
`Set-Cluster ‑Cluster <cluster> ‑EVCMode "intel-nehalem"`

# vApp management

Export a vApp in OVA format
`Export-VApp ‑vApp <vapp> ‑Destination "c:\vapps\" ‑Format Ova`

Import OVA file as vApp
`Import-vApp ‑Source "c:\vapps\appliance.ova" ‑Datastore <datastore> ‑VMHost <vmhost>`

Configure memory ressources for a vApp
`Set-VApp ‑VApp <vapp> ‑MemExpandableReservation:$true ‑MemReservationGB 2 ‑MemLimitGB 4`

