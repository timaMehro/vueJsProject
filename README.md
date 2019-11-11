# Frontend Dev Task

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Todo

| Task | Difficulty | Related File |
| ---- | ---------- | ------------ |
| Implement saving of images | Moderate | `src/components/TaskImages.vue` |

## API Endpoints

| Path | Method | Requires Auth | Body | Response | Description |
| ---- | ------ | ------------- | ---- | -------- | ----------- |
| /auth | POST | | `{ "email": "test@email.com", "password": "test" }` | `{ "accessToken": "123..." }` | Login user |
| /auth | DELETE | | | | Logout user |
| /me | GET | ✓ | | `{ "id": 123, "email": "test@email.com", ... }` | Get authenticated user |
| /users | GET | | | `[{ "id": 123, "email": "test@email.com", ... }, ...]` | Get all users |
| /projects | GET | | | `[{ "id": 123, "name": "Project", ... }, ...]` | Get all projects |
| /tasks | GET | | | `[{ "id": 123, "title": "Task", ... }, ...]` | Get all tasks |
| /tasks | POST | | `{ "title": "Task", ... }` | `{ "id": 123, "title": "Task", ... }` | Create new task |
| /tasks/:id | GET | | | `{ "id": 123, "title": "Task", ... }` | Get task |
| /tasks/:id | PUT | | `{ "title": "Task", ... }` | `{ "id": 123, "title": "Task", ... }` | Update task |
| /images | POST | | `FormData { "file": File }` | `"/path/to/image.jpg"` | Upload a new image |


## Models

```json
// User
{
    "id": 1,
    "email": "josephine@email.com",
    "password": "josephine",
    "name": "Josephine",
    "role": "Designer",
    "avatar": "/assets/mock/josephine.jpg"
}

// Project
{
    "id": 1,
    "name": "M18 Website",
    "team": "Myriad"
}

// Task
{
    "id": 1,
    "title": "Design 9:16 TV Screens",
    "description": "Lorem ipsum...",
    "priority": "low",
    "due_date": "2018-12-13",
    "resolved_date": null,
    "created_by": 1,
    "assigned_to": 1,
    "project": 1,
    "images": [ "/assets/images/task.jpg" ]
}
```