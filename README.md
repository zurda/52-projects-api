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

```
mutation {
  createProject(input: {name: "new project", number: 5, type: BACKEND}) {
    name 
    id 
    type
    number
  }
}
```

#### Extending interface 

We're implementing the `Project` interface to tell graphql that both `OngoingProject` and `CompleteProject` are of type Project. Using interface allows us to use the `implements` keyword and tell graphql both structures refer to the same object with slight changes. Note that we still need to copy the common fields (name, id, etc). 

```
 interface Project {
    name: String!
    id: String!
    number: Int!
    repo: String
    url: String
    type: ProjectType
  }

    type OngoingProject implements Project {
    name: String!
    id: String!
    number: Int!
    repo: String
    url: String
    type: ProjectType
    isTested: Boolean!
    todo: [String]!
  } 

    type CompleteProject implements Project {
    name: String!
    id: String!
    number: Int!
    repo: String
    url: String
    type: ProjectType
    isComplete: Boolean!
  } 

```

Once these types and interface are in the schema, if we try to start the server - we'll get an error. 

```
Type "Project" is missing a "__resolveType" resolver. Pass false into "resolverValidationOptions.requireResolversForResolveType" to disable this warning.
```

We need to allow graphql to distinguish between the two implementations of `Projects`. In our example, we have a `todo` array on every ongoing project. The resolver might look like this: 

```
Project: {
    __resolveType(project) {
      return (project.todo && project.todo.length > 0 ? 'OngoingProject' : 'CompleteProject')
    }
  }
```

This next query gets all commong fields from all projects, and also gets the todo fields from the `OngoingProject` items. 

```
query {
  projects {
    name 
    id 
    type
    number
    ... on OngoingProject {
      todo
    }
  }
}
```

