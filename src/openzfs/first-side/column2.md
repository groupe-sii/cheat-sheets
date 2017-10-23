# zfs – configure ZFS file systems

___A ZFS dataset of type filesystem can be mounted.___

List the property information for the fs-type datasets
`zfs list`

Create a new ZFS file system
`zfs create <pool>/<dataset>`

Remove a ZFS file system
`zfs destroy <pool>/<dataset>`

Set mount point for a dataset
`zfs set mountpoint=<path> <pool>/<dataset>`

Mount and umount a ZFS file system
`zfs mount [-o mountpoint=<dir>]<pool>/<dataset>`
`zfs umount <pool>/<dataset>`

Limit the amount of space a dataset can consume
`zfs set refquota=<size> <pool>/<dataset>`

Guaranty minimum amount of space to a dataset
`zfs set refreservation=<size> <pool>/<dataset>`


# zfs – configure ZFS volumes

___A ZFS dataset of type volume is a logical volume exported as a raw or block device.___

Create a volume with reservation (thick)
`zfs create -V <size> <volume>`

Creates a sparse volume with no reservation
`zfs create -s -V <size> <volume>`
