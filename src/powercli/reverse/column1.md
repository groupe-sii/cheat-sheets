# VM management

Get VM information
`Get-VM <vmname>`

Power operations

* `Start-VM ‑VM <vm>`
* `Stop-VM ‑VM <vm>`
* `Restart-VM ‑VM <vm>`

Open console in the web browser
`Get-VM <vm> | Open-VMConsoleWindow`

Convert a VM to a template
`Set-VM ‑VM <vm> ‑ToTemplate ‑Name <templatename>`

Connect ISO file to a VM
`New-CDDrive ‑VM <vm> ‑ISOPath "[<datastorename>] ISO\sample.iso"`

Disconnect any CD drive from a VM
`Get-CDDrive ‑VM <vm> | Set-CDDrive ‑connected 0 ‑StartConnected 0 ‑NoMedia`

Attach a new persistent disk
`New-HardDisk ‑VM <vm> ‑CapacityGB 10 ‑Persistence persistent`

# Snapshot management

Create snapshot of a VM with active memory
`New-Snapshot ‑VM <vm> ‑Name "beforePatch" ‑Memory`

List snapshots of a VM
`$snapshot = Get-Snapshot ‑VM <vm>`

Remove snapshot
`Remove-Snapshot ‑Snapshot <snapshot>`
