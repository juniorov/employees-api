# EMPLOYEES API

## Week 1
```text

 Create an application in node.js which manages employees.
 
 The application should manage the following data of an employee: ID, name, surname, level and salary. Name and surname are strings, while ID, level and salary are numeric.
 
 The application should allow you to search an employee using his/her ID. If the employee exists, it will show their data in a json representation, otherwise it will return a 404 status code.
 
 The application should allow you to delete an employee, by specifying his/her ID.
 
 The application should allow inserting a new employee with the given data. If the ID field is left empty, the system will assign the next available ID. If the ID is already associated with an employee, the employee data is overwritten. If the ID is not associated with any employee, the employee is created. All the other fields cannot be empty.
```

## Week 2
```text
1. Create a new endpoint to authenticate your users by sending an email and password. This method should return a JWT token (generated with jsonwebtoken).
2. Protect your employees endpoints by reading and validating the token that will come from the ‘authorization’ header in the request object.
3. The token should expire in 2 minutes. However, if a successful request happens, the system will generate another token that can be used by further requests, so the session can be extended two more minutes.
```

### Week 3
```text
**Persistent data**

**Make the employee data structure persistent: ID, name, surname, level and salary**
**You could use a Database or any other option like write data to disk, json files or cloud storage, however you’ll be responsible for dealing with issues like concurrency and caching rather than a database**
**The application should be refactored to use the persistent data (CRUD)**

**The application should store logs on a plain text file (txt) of the actions and errors during the lifecycle of the app using log levels like:**
- Err
- Warn
- Info
```

### Command to run it
```shell
> npm install

> npm run start
```

### GET: all employees
```shell
url: '/'
```

### POST: Create employee
```shell
url :'/'
data: {
  id: numeric,
  name: string,
  surname: string,
  level: numeric,
  salary: numeric
}
```

### GET: Find one employee
```shell
url :'/:id'
```

### DELETE: destroy one employee
```shell
url :'/:id'
```

