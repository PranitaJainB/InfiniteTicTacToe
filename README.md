# TIC TAC TOE

![Screenshot 2024-12-13 at 12 28 59 PM](https://github.com/user-attachments/assets/ca464dfc-8549-4f15-bf60-a4c2f150903f)

![Screenshot 2024-12-13 at 12 31 31 PM](https://github.com/user-attachments/assets/0e1b44bb-0650-4721-a883-4f1eef36fd8a)

![Screenshot 2024-12-13 at 12 32 45 PM](https://github.com/user-attachments/assets/cb01f5db-a486-4a07-8ef3-b9bc5b7424ed)

![Screenshot 2024-12-13 at 12 29 55 PM](https://github.com/user-attachments/assets/11fe567d-7287-422f-b7e0-a50fc58588ad)




### Figma Design

https://www.figma.com/community/file/1254192154560627135







1. write npm create vite@latest to create a project , provide info like project name , select framework and language etc. USE npm run dev to Run the project , don’t forget to cd TicTacToe
2. styled components are being used ,useState is being used here
3. map function used.
4. always refer the figma design but make sure that how you want to align the items - FLEX !!!!!!
5. always type some text inside the empty div , else effects of css will not get render on  empty div
6. how to write code for ternary operator - The condition is wrapped inside {} because it needs to be evaluated as JavaScript within JSX.
   <>
   {gameStarted?   "play again":"show coverpage "}
   </>
7. when refresh , page needs score preserved , also the way to remember the current state of game and render the same route which is /game
   in this you will understand how to get back to the same route even after refresh  ?
8. Idea is to set variable in parent component so that if child component gets re-render , whole child state is saved in side the parent component.
9. gameStarted state is handled at app.js to make decision which page - cover/game to show on screen . but I wonder what will we do after keeping track of this variable , what is the advantage of gameStarted.  Well I thought earlier that we will be toggle between cover and game page. But that is not the reason ternary operator is used. Main reason is to render the game page on click of "Play now" button . Since you can assume that Cover page is the parent page and on click of "Play now" button we are trying to show the child page which is GAME page . In the parent component, use a state variable to control when the child component should be rendered. You can toggle the state by clicking the button.There are two different scenarios for conditionally rendering the child component :

   
   1. when child component lies inside the parent component page
   2. when it a complete page which you want to show as child page . for this situation we have 2 different scenarios :
      a. React Router allows you to navigate between different components, treating each component as a separate "page."
      so you handle it like this :const handleClick = () => {navigate('/child'); // Navigate to the ChildComponent page};
      b. another work around is to make ternary operator use , conditional rendering .Which we are trying to do in app.jsx

const ParentComponent = () => {
const \[showChild, setShowChild\] = useState(false);

const handleClick = () => {
setShowChild(true); // Toggle the state to show the child component
};

return (
<div>
<h1>This is the Parent Component</h1>
<button onClick={handleClick}>Show Child Component</button>

```
  {/* Conditionally render the child component */}
  {showChild && <ChildComponent />}
</div>
```

);
};



> Also want to mention here that when user clicks any button the whole page get refresh , and then we don’t know that what needs to be done after click of button . So on click we update the state - so we can take decision on the basis of state , as what do you want to show/hide in components .






________________

Comparison:

const showGamePageFun = setShowGamePage(true);	-->The setShowGamePage(true) function is called immediately, and its result is assigned to showGamePageFun. This means showGamePageFun is not a function.
const showGamePageFun = () => setShowGamePage(true);-->	showGamePageFun is a function that will call setShowGamePage(true) when invoked. This is the correct approach if you want it to run on a button click or another event.








_________________


10\. Please note how props are passed from drilling .
const Cover = (props) => {
return <Btn lbl="abc" {...props} />;
};

const Btn = ({ lbl, ...rest }) => {
return (
<button {...rest}>
{lbl}
</button>
);
};

// Usage
<Cover onClick={() => alert('Button clicked!')} className="btn-primary" />

a. Destructuring Props:

{ lbl, ...rest }: This extracts lbl from the props, and collects the remaining props in rest.
lbl will be "abc" as passed by Cover.
rest contains all other props that were passed to Cover and then spread to Btn using {...props}.

b. Applying Props to the Button:

<button {...rest}>: This spreads the rest props on the button element. It allows you to pass any other properties (e.g., onClick, className, etc.) through the Cover component to the button.

c. What is the value of Props here ?

In the `Cover` component:

```jsx
const Cover = (props) => {
  return <Btn lbl="abc" {...props} />;
};
```

The value of `props` here refers to any properties that are passed to the `Cover` component when it is used. These `props` can include attributes like `onClick`, `className`, `style`, etc., depending on how the `Cover` component is used.

For example, if you use `Cover` like this:

```jsx
<Cover onClick={() => alert('Button clicked!')} className="btn-primary" />
```

Then `props` will be:-

```js
{
  onClick: () => alert('Button clicked!'),
  className: "btn-primary"
}
```

When `Cover` passes `{...props}` to `Btn`, `Btn` will receive `onClick` and `className` as props in addition to `lbl="abc"`.








________________


11\. I'm little confuse here as I don't understand one thing that is ,if i click into the grid component cell , and I want to save those cell clicked changes , then will the whole page will render ? because we will be saving the state not at the grid component level but instead at the parent level.if that is the case I understand that whole component will get re render causing state value being lost.


12\. One thing I can think of is that when we click cell , onClick event is called, which will draw X/O , which further will update parent's state of grid X/O . Now question is that on updation of state component gets re-render . but is that also true that STATE values are lost ?

or the other way
Answer :
When a React component re-renders, the state values are not lost unless explicitly reset. React uses a state mechanism (via useState, setState, etc.) that persists across re-renders within the same session or component lifecycle.

However, when you refresh the entire page (e.g., hitting F5 or reloading the browser), the application state stored in memory is reset because the React app reinitializes from scratch. In this case, the state is lost unless you're using mechanisms like:

Local storage, session storage, or cookies to persist state data across page reloads.
URL parameters or query strings to persist data in the URL.
Backend/database or external services (like Redux with persist) to save and retrieve state on reload.
So, in short:

Re-render: State values persist.
Page refresh: State values are lost unless saved externally.



13\. Another question is if component have bubble effect then will it refresh all parent components or it will be refreshed till states are getting effected in parent component . This makes me think that on click to any cell in grid how many other components you want to update . I just want to update the component which is being clicked !! In React, to ensure only the clicked component (cell) updates without re-rendering parent or sibling components, here are some strategies:**Lift State Minimally**: , Memoization with `React.memo , Use useCallback for Event Handlers, Local State for Each Cell ,  --→ `



14\. When to use  local storage and when to use usestate in components in react

```
1. if you are using local storage then there will be no re-rendering , but all you want in components in react is that take some actions on change in value of component , that is what the meaning of component is , least possible unit of UI which is interactable.
```


15. <MyComponent key={id} id={id} /> is it not sufficient to make key unique and find out which component was clicked by key value ? key is used internally by react , If you need to track which specific component was clicked, you should pass an explicit prop (like `id`) to identify it within the component.
16. <div> {ids.map((id) => ( <MyComponent key={id} id={id} onClick={handleClick} /> ))} </div> here what will ids.map() will return -→ 

    \[

     <MyComponent key={1} id={1} onClick={handleClick} />, 

    <MyComponent key={2} id={2} onClick={handleClick} />, 

    <MyComponent key={3} id={3} onClick={handleClick} /> 

    \]

    React doesn’t require any extra handling for arrays of JSX elements. Just by embedding `{array}`, React will render each item in sequence. 


