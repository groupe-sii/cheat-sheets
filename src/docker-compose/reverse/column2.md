# Compose File Example

Deploying Wordpress with docker-compose :

`docker-compose.yml`

```yaml
version: '3'

services:
  
   db:
     image: mysql:5.7
     volumes:
       - db_data:/var/lib/mysql
     restart: always
     environment:
       MYSQL_ROOT_PASSWORD: somewordpress
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: wordpress

   wordpress:
     depends_on:
       - db
     image: wordpress:latest
     ports:
       - "8000:80"
     restart: always
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: wordpress
       WORDPRESS_DB_PASSWORD: wordpress
       
volumes:
    db_data:
```

Using : 

* version **3** of compose file 
* **2 services** (db and wordpress)
* **restart policies** for containers
* **ports** to access web interface
* **environment variables** to initialize the database and allow wordpress to connect
* **volume** to store data
* **name of service** as DNS entry for **WORDPRESS_DB_HOST**
  
