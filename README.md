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

## 

| Filter tasks by date 
| Automatically save task when changes are made
| Implement saving of images 
| Auto-grow description field based on content
| Implement drag & drop for marking tasks as complete/incomplete


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
