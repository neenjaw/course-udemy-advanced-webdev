# Creating JSON API's with Node and Mongo

## Main Goal - Preparing for React

The way single page apps works is that the front end consists of javascript -- whether its vanilla js or a complex framework like react/angular/jquery -- that consists of the view and and parts of the controller and then the backend api (usually JSON REST)

| Back-End JSON API | Front-End |
|-------------------|-----------|
| Express | Vanilla JS |
| Rails | jQuery |
| Django | React |
| Flask | Angular |

## API Gameplan

### Data

| Field | Type |
|-------|------|
| name | String |
| completed | Boolean |
| createdDate | Date |

### Routes

| Verb | Route | Description |
|-----:|-------|:-----------:|
| GET | /api/todos | List all todos |
| POST | /api/todos | Create new todo |
| GET | /api/todos/:todoId | Retrieve a todo |
| PUT | /api/todos/:todoId | Update a todo |
| DELETE | /api/todos/:todoId | Delete a todo |

### MongoDB

```bash
sudo apt-get install -y mongodb-org
mkdir data
echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
chmod a+x mongod
```