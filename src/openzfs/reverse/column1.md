# zfs – configure ZFS snapshots

___A snapshot is a read-only copy of a file system.___

_File system snapshots can be accessed under the .zfs/snapshot directory in the root of the file system._

List snapshots
`zfs list -t snapshot`

Create a snapshot
`zfs snapshot <pool>/<dataset>@<snapshot>`

Rollback a snapshot
`zfs rollback <pool>/<dataset>@<snapshot>`

Remove a snapshot
`zfs destroy <pool>/<dataset>@<snapshot>`

Remove a snapshot and his descendent snapshots
`zfs destroy -r <pool>/<dataset>@<snapshot>`


# zfs – configure ZFS CLONES

___A clone is a writable volume or file system whose initial contents are the same as the original dataset.___

Create a clone
`zfs clone <snapshot> <filesystem>|<volume>`


# zfs – configure backup and restore

___ZFS implements data protection feature___

Backup a snapshot in a file
`zfs send <pool>/<dataset>@<snapshot>  >  <file>`

Restore a file system from a file
`zfs recv <pool>/<dataset>  <  <file>`
