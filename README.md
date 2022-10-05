# How use micro-service in this API with Apache Kafka:

-- At API used **mongo server 4.4** version

-- On the root file-system execute in terminal: `docker-compose up -d`

-- Confirm if container are read status UP: `docker ps`

-- Aftfer the last steps let's start the API process with: `yarn dev` or `npm run dev`

-- If you want use pdf-creator need use kafka controller process: `yarn kafka` or `npm run kafka`

## Now let's configure insomnia to use the services:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Kafka-PDF%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2FUHZero%2FKafka_Node%2Fmain%2FInsomnia_2022-10-04.json)

#### Trouble importing? I would suggest you try:

["Import suceeded" but nothing changes](https://github.com/Kong/insomnia/issues/4274)
