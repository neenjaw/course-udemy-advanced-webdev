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

## Reflection

Colt uses a lot of the jQuery shorthand methods for ajax calls. eg:

1. `$.getJSON()`
2. `$.post()`
3. `$.put()`
4. `$.delete()`

I did not do that as I used the generic `$.ajax()` call, specifying the method to be used.  I think the difference made it required for me to prepend the protocol (`http://...`) to the start of the url, where he does not do that.  It might also be because I specified `localhost:3000` where he just has the path portion.

Overall, was able to implement the app with minimal help from the code-along.  The biggest thing was how simply colt did the delete button for each task.  I had this complex nested span and using flexbox to get the positioning I wanted, whereas Colt had a simple `float: right;` on the delete span.

One other difference is that I just serve my index html as a static file from the public directory, where he has a dedicated express route for it.  Looking it up, the biggest difference between the methods is that the public directory will set a couple headers automatically that would generally have to be specified otherwise.