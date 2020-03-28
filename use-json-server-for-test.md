# fake data to work with

We need the fake data to work with using one package called json-server

## install the package

```bash
npm install -g json-server
```

## create some data

create the folder inside src directory called data and in that folder, create one file called contacts.json. 

## start the JSON server using the following command

```bash
json-server --watch src/data/contacts.json --port 4000
```
