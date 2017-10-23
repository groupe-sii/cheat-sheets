# zpool – configure ZFS storage pools

___A ZFS storage pool is a logical collection of devices that provide space for datasets.___

List pool health status and space usage
`zpool list`

Display the detailed health status
`zpool status`
`zpool status -x`

Create a new storage pool
`zpool create <pool> <disk>`

Create a new storage pool (RAID1)
`zpool create <pool> mirror <first_disk> <second_disk>`

Grow-up a storage pool
`zpool add <pool> <disk>`

Remove a storage pool
`zpool destroy <pool>`

Import a storage pool
`zpool import <pool>|<pool_id>`

Export a storage pool
`zpool export <pool>|<pool_id>`

Display I/O statistics
`zpool iostat <interval>`

Display the command history
`zpool history <pool>`
