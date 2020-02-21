1. What problem does the context API help solve?
Allows you to store state at the top level store and pass down props without having to prop drill.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
The redux store holds our global state which can be accessed by any of our components through connect. Actions tell the reducers what is happening in order to know what to update in our state. Reducers update our store based on what action is being sent. The store is a single source of truth because it holds all of our state that's needed throughout the application that can be shared between components.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Component state is isolated to that component and isn't shared across the application. Application state is used/needed in various parts of your application. Component state is better for situations like a form that doesn't need it's state to be shared with other components.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Thunk is middleware that helps us to use asynchronous updates to dispatch our actions, otherwise we could only use synchronous changes.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
At this point I like redux more than context, it's flow makes a lot more sense to me than at the beggining. After a while it starts to feel straight forward and the steps aren't as hard to remember as I thought.