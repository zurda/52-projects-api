Setting up a graphql api for #52Projects 

<img src="./screen.png" 
alt="Screen grab of graphql playground" width="500" />

1. Clone
2. Run `yarn && yarn start`
3. Go to `http://localhost:4000`

Uses the file system to generate a list of projects

Examples: 

#### General query: get all projects 

```
query {
  projects {
    name 
    id 
    type
  }
}
```


#### Get all projects 

```
query {
  project() {
    name 
    id 
    type
  }
}
```

#### Get a project by name: 

```
query {
  project(input: {name: "Hangman React"}) {
    name 
    id 
    type
  }
}
```

#### Get a projects by type: 

```
query {
  projects(input: {type: FRONTEND}) {
    name 
    id 
    type
  }
}
```


#### Add a project: 

mutation {
  createProject(input: {name: "new project", number: 5, type: BACKEND}) {
    name 
    id 
    type
    number
  }
}


