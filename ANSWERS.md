- [ ] Why would you use class component over function components (removing hooks from the question)?

you would use Class Components over functions, just because Class Components are older and more standard. It is important to know because that is the older standard so most things are still setup in class components, nut functional components are ound better

- [ ] Name three lifecycle methods and their purposes.

componentDidMount is invoked after the component is mounted and is a good place to put get requests
componentDidUpdate is invoked after updating, it is like the useEffect in that it does things after an update
componentWillUnmount is invoked before unmounting and is used to do cleanups and stoping network requests

- [ ] What is the purpose of a custom hook?

React doesn't offer a way to attach reusable behavior to components, so Hooks allow you to reuse stateful logic.

- [ ] Why is it important to test our apps?

Testing helps minimize the risk of bugs and code not working.