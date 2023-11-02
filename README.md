# NodeAPI

NodeAPI is a Node.js-based RESTful API template that provides a solid foundation for building web services and APIs. It's designed with simplicity and flexibility in mind, making it easy to start your own projects or build upon it for your specific requirements.

## Getting Started

To get started with NodeAPI, follow these steps:

1. Clone this repository:

```bash
git clone https://github.com/lxweb/NodeAPI.git
```

2. Install dependencies
```bash
npm install
```

3. Run a database service(Mysql) - Docker recommended
```bash
docker pull mysql
docker run --name bunker-mysql -it mysql:latest -p3306:3306
docker exec -it bunker-mysql bash
```

Once you are in the docker VM you can configure the mysql service
the default configuration exists in the src/config/config.json file

- "username": "root",
- "password": "bunker",
- "database": "bunker",
- "host": "localhost",
- "port": 3306,
- "dialect": "mysql",

4. Populate the Database
```bash
npm run db:recreate
```

5. Run the app

```bash
npm run app:dev
```

## App build process

To build the app run the following command:
```bash
npm run app:build
```

After the process finishes you will have the application on the /build folder