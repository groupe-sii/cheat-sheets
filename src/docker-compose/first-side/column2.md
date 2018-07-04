Set the number of containers to run for an existing service
```bash
docker-compose scale SERVICE=NUM
```

Scale the service web with 3 containers: `docker-compose scale web=3`

Start existing containers for a service
```bash
docker-compose start SERVICE
```

Stop running containers (without removing them)
```bash
docker-compose stop SERVICE
```

Pause running containers of a service
```bash
docker-compose pause SERVICE
```

Unpause paused containers of a service
```bash
docker-compose unpause SERVICE
```

Run a one-time command against a service
```bash
docker-compose run [options] SERVICE [COMMAND]
```

Start the web service and runs bash as its command: `docker-compose run web bash`

Force running containers to stop by sending a SIGKILL signal
```bash
docker-compose kill [options] [SERVICE]
```

Kill all containers with SIGINT signal: 
```bash
docker-compose kill -s SIGINT
```
