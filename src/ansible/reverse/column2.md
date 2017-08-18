./roles/demo-configure-apache/vars/main.yml
```
---
apache_listen_port: 8081
app_directory: /var/www/html
app_user: apache
app_group: apache
```

./roles/demo-configure-apache/handlers/main.yml
```
---
 - name: Reload Apache
     service:
       name: httpd
       state: reloaded
```

./roles/demo-install-apache/tasks/main.yml
```
---
   - name: Installation of Apache Package
     yum:
       name: httpd
       state: present
       update_cache: yes

   - name: Ensure Apache is running (and enable it at boot)
     service: name=httpd state=started enabled=yes
```

./roles/demo-configure-apache/tasks/main.yml
```
---
   - name: Modify permission of directory {{ app_directory }}
     file:
       dest: '{{ app_directory }}'
       mode: 0755
       owner: '{{ app_user }}'
       group: '{{ app_group }}'
       recurse: yes

   - name: Modify Apache configuration
     lineinfile:
       dest: /etc/httpd/conf/httpd.conf
       regexp: '^Listen '
       line: 'Listen {{ apache_listen_port }}'
     notify: Reload Apache
```
