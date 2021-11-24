Perform increment backup in a file
`zfs send -i <snapshot_n> <snapshot_n+1> > <file>`

Perform differential backup in a file
`zfs send -I <snapshot_n> <snapshot_n+p> > <file>`

Duplicate a snapshot as a new file system
`zfs send <pool>/<dataset>@<snapshot> | zfs recv <pool>/<other_dataset>`

Duplicate a snapshot on a different host
`zfs send <pool>/<dataset>@<snapshot> | ssh <host> zfs recv <pool>/<dataset>`


# zfs – set ZFS file systems properties #####

___Properties control ZFS behaviour.___

List properties of a dataset
`zfs get all <pool>/<dataset>`

Create a NFS share
`zfs set sharenfs=on <pool>/<dataset>`

Activate compression
`zfs set compression=gzip <pool>/<dataset>`

Activate encryption (only at the creation of the dataset), with Oracle ZFS
`zfs create -o encryption=on <pool>/<dataset>`

Activate read-only mode
`zfs set readonly=on <pool>/<dataset>`

Prevent executing from within this file system
`zfs set exec=off <pool_name>/<dataset_name>`
