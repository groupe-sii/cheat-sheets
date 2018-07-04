# Playbooks

Execute a playbook :
```bash
ansible-playbook <playbook.yml> -i ./hosts
```

Test a playbook (don't make any changes on servers) :
```bash
ansible-playbook <playbook.yml> --check
```

Limit a playbook on a host :
```bash
ansible-playbook <playbook.yml> --limit <host>
```

**Tasks** : 
```yml
- hosts: web
  tasks:
   - name: Installation of Apache Package
     yum:
       name: httpd
       state: present
       update_cache: yes

   - name: Ensure Apache is running (and enable it at boot)
     service: name=httpd state=started enabled=yes
```

**Roles** (use to structure a list of Tasks):
- Directory structure :
```tree
.
├── ansible.cfg
├── hosts
└── roles
    └── myrole
        ├── defaults
        │   └── main.yml
        ├── files
        │   └── myfile
        ├── handlers
        │   └── main.yml
        ├── tasks
        │   └── main.yml
        ├── templates
        │   └── mytemplate.j2
        └── vars
            └── main.yml
```
