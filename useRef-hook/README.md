# useRef

## "state" without the rerender
When you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use a ref.

You can access the current value of that ref through the ref.current property. This value is intentionally mutable, meaning you can both read and write to it. It’s like a secret pocket of your component that React doesn’t track. (This is what makes it an “escape hatch” from React’s one-way data flow—more on that below!)

## Accessing DOM Elements
You can point a ref to any value. However, the most common use case for a ref is to access a DOM element. For example, this is handy if you want to focus an input programmatically.

When you pass a ref to a ref attribute in JSX, like ```<div ref={myRef}>```, React will put the corresponding DOM element into myRef.current. Once the element is removed from the DOM, React will update myRef.current to be null. 

You can read more about this in [Manipulating the DOM](https://react.dev/learn/manipulating-the-dom-with-refs) with Refs.

## Keep track of prevState
Refs persist values between renders. So, you can store values you might need after a render happens.

## Best practices for refs
Following these principles will make your components more predictable:

- Treat refs as an escape hatch.
  Refs are useful when you work with external systems or browser APIs. If much of your application logic and data flow relies on refs, you might want to rethink your approach.

- Don’t read or write ref.current during rendering.
  
  If some information is needed during rendering, use state instead. Since React doesn’t know when ref.current changes, even reading it while rendering makes your component’s behavior difficult to predict. (The only exception to this is code like if (!ref.current) ref.current = new Thing() which only sets the ref once during the first render.)