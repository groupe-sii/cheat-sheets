 Ansible version: __2.3__ - Date: __June 2017__

# Getting Started
**Installation** (example on RedHat environnement) : 
```
$ sudo yum -y install epel-release
$ sudo yum -y update
$ sudo yum -y install ansible
```

** Doc link : http://docs.ansible.com/ansible/latest/**

# Inventory files
The default file is **/etc/ansible/hosts** :
```
[web]
web1.sii-ouest.fr ansible_ssh_host=192.168.0.101
web2.sii-ouest.fr ansible_ssh_host=192.168.0.102

[db]
db1.sii-ouest.fr ansible_ssh_host=192.168.0.100

[production:children]
web
db
```

## Hostname ranges
```
www[01:50].example.com, db-[a:f].example.com
```

# Variable files
 - **./group_vars/web** : variable definitions for all members of group 'web'
 - **./host_vars/web1.sii-ouest.fr** : variable definitions for 'web1.sii-ouest.fr'

# Ad-Hoc commands
```ansible <pattern> -m <module> -a <params>```

Execute reboot on all servers in a group (example on production, in 10 parallel forks) :
```
$ ansible production -i ./hosts all -m command -a "/sbin/reboot" -f 10
```
