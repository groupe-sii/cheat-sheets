**Handlers and Notify** :
```
tasks:
 - name: Install Apache
   yum: name=httpd state=present
   notify: Start Apache

handlers:
 - name: Start Apache
   service: name=httpd state=started
```

Handlers by default get executed at the end of the playbook.

**Conditionnals** :
```
- name: Analyse 'my_file'
  shell: cat "my_file"
  register: my_file_contents

- name: Show results
  shell: echo "find <toto> pattern"
  when: my_file_contents.stdout.find('toto') != -1
```

**Template** : Jinja Templating
- **{% ... %}** for control statements
- **{{ ... }}** for expressions
- **{# ... #}** for comments

**Tags** :
Limit a playbook on tags :
```ansible-playbook <playbook.yml> -i ./hosts --tag <mytag> ```

**Loops over items** :
```
- name: Add a list of users
  user: name={{ item }} state=present
  with_items:
   - testuser1
   - testuser2
   - testuser3
```

## Example (Installation and conf. of Apache server):

./playbook-deploy-apache.yml
```
---
- hosts: web
  roles:
    - { role: demo-install-apache }
    - { role: demo-configure-apache }
```


