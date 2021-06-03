# Research

This is my research about State and State Management in the scope of web applications written in React. Which means that all my comparisions and examples will be using React and React related libraries and techinques.

## What's State?

State is directly related with *Interactive Programming*. To interact with a user interface you need to, somehow, store a piece of data that represents the **state** of the application.

The naive approach is to directly *mutate* that piece of data and then have a new *version*. A new version of the state. Such as the example below:

```js
var State = {
  counter: 1
}

function inc() {
  State.counter += 1
}
```

This approach kinda works. We used this approach a lot in the jQuery times and we struggle with the results. It was very common to have applications very hard to maintain.

Imagine a world of methods mutating a global (or globally local) state.

## What's the problem?

In Declarative Programming we declare a sequence of operations that will be done in a piece of data. The main property of this approach is that the *data* is **immutable**.

Which means that we can not simply mutate a object and be happy with the result. We must build pipelines of data flow. Each step in the flow could generate a new version of the initial data. But never mutate the original data.

This is basically the [React Flux Architecture](https://facebook.github.io/flux/).

In a nutshell, in the React world, the data flows through channels between the React Tree in a **single direction**.

For example, this is 🥮

```js
const user : { firstName: 'Gustavo', lastName: 'Santos' };

const fullName = (user) => ({
  ...user,
  name: `${user.firstName} ${user.lastName}`
})
```

And this is 💩

```js
const user : { firstName: 'Gustavo', lastName: 'Santos' };

const fullName = (user) => {
  user.name = `${user.firstName} ${user.lastName}`
  return user
}
```

React is build with the idea of pure functions and immutable data structures. No data should be mutated. Functions should always return the same result if the given arguments are passed.

But how React Components handle the state if the state should be immutable?

## Why manage the state?

Quick answer: *to not loose your head* 😁

In legacy times of class components, each call to the `this.setState` function triggers the re-render of the React Component calling that function. This means that the whole tree of components above the node that is rendering again will be rendered again.

This is fine for small trees, but is a problem for big deep trees of components.

Manage how the state will change and optimize to avoid entire trees to be rendered again is a challange and it is the reason that there is so much state management libraries out there.

Each library solve the problem in a different way. Some of them use the same building blocks to offer APIs for the programmer. Others go in some crazy directions, such as [Valtio](https://github.com/pmndrs/valtio).

## Good rules of thumb

I do like to follow some patterns that I have stolen from other programmers, and others that I have adapted from other technologies, like Java (Spring), Elixir (Phoenix) and Ruby (Rails).

It's a good rule to keep view and logic as separated things. This do not means that you should never call `useState` inside a React component. You shurely are able to do that. But be careful to not write all state management logic inside the component.

When you write logic and view code in the same layer you couple these things in one. This is hard to undo if you write too much logic inside a component.

### Organize components inside contexts

In a e-commerce world, it is nice to not couple products, checkout, accounts, refunds, and so on.

Each context should be delimited to their domain. Products contexts deals with products. You are alloed to *use* things from products context in other contexts, such as the *cart context*. But the core domain, logic and presentation code will be stored inside the products context.

Users have purchased products. New users could have a shopping cart session. Old users could have returned products. Each of those relations should be coded in different contexts.

### Write view components

I like to follow two patterns depending of the project. The first is to create a `views` directory and write in that directory only components that receive data or callbacks as props and render that data.

Example:

```
/users
  /components
    /views
      /users-list.tsx
      /user-list-item.tsx
```

Another pattern is attach the suffix `view` to the filename. Example:

```
/users
  /components
    /users-list.view.tsx
    /user-list-item.view.tsx
```

### Create adapters for contexts

Your application should do not care if you use Redux, React Context, Jotai or any other provider-like library to hold data. Why?

When you couple your application to a library, it is very hard to replace the library, it is hard to test your views and you become limited by the library limitations.

I do like to think in adapters as Render Props components.

Example:

```jsx
function UsersAdapter({ children }) {
  const usersQuery = useQuery('/users', fetchUsers)

  return children({ users: usersQuery.data })
}

function UsersList({ users }) {
  return (/* renders the list of users */)
}

render(
  <UsersAdapter>
    {({ users }) => <UsersList users={users} />}
  </UsersAdapter>
)
```

I follow the same patterns for views while organizing the code:

```
/users
  /components
    /adapters
      /users.tsx
    /views
      /users-list.tsx
      /user-list-item.tsx
```

Or

```
/users
  /components
    /users.adapter.tsx
    /users-list.view.tsx
    /user-list-item.view.tsx
```

Use adapters to connect external, effectful world to your view components.

### Logic should be hooks or render props

Please, consider writing your application logic as Render Props components only if you need to deal with legacy React code written in Class Components.

Otherwise, extract the logic from components as custom hooks.

**Be careful here**, component-level logic should not handle effectful programming; like consuming an API or something like that.


```jsx
function CreateUserForm({ onCreate }) {
  const editor = useCreateUserEditor();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onCreate(editor.state);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={editor.state.firstName} />
      <input value={editor.state.lastName} />

      <button>Create user</button>
    </form>
  );
}

function useCreateUserEditor() {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const setFirstName = (firstName) =>
    dispatch({ type: 'SET_FIRST_NAME', data: firstName })

  const setLastName = (firstName) =>
    dispatch({ type: 'SET_FIRST_NAME', data: firstName })

  return { state, setFirstName, setLastName }
}
```

### Conclusion

* Keep view components pure.
* Use custom hooks to handle component logic at view layer if need
* Use adapters to connect view components to external world, as contexts and methods to fetch/mutate data.


## State management libraries in React 🌐

- [Redux]()
- [Xstate]()
- [Zustand]()
- [MobX]()
- [Jotai]()
- [React state hooks]()

## Resources

### Articles

- [Past, Present, and Future of React State Management - Lee Robinson](https://leerob.io/blog/react-state-management)
- [Jotai - Gustavo Santos (pt-BR)](https://gustavosantos.dev/a/jotai)

### Books

- [Programming in Haskell - Graham Hutton](https://www.cs.nott.ac.uk/~pszgmh/pih.html)

### Courses

- [Introduction to State Machines Using XState](https://egghead.io/playlists/introduction-to-state-machines-using-xstate)
- [Construct Sturdy UIs with XState](https://egghead.io/playlists/construct-sturdy-uis-with-xstate)