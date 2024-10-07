# TIC TAC TOE
![image](https://github.com/user-attachments/assets/10b147f6-fc99-4592-805a-cdcf6bb0cc20)

![image](https://github.com/user-attachments/assets/6c026352-7021-412c-b466-5eb2f22faba7)



###  Figma Design 
https://www.figma.com/community/file/1254192154560627135

1. write npm create vite@latest to create a project , provide info like project name , select framework and language etc
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
  const [showChild, setShowChild] = useState(false);

  const handleClick = () => {
    setShowChild(true); // Toggle the state to show the child component
  };

  return (
    <div>
      <h1>This is the Parent Component</h1>
      <button onClick={handleClick}>Show Child Component</button>
      
      {/* Conditionally render the child component */}
      {showChild && <ChildComponent />}
    </div>
  );
};


________________

Comparison:

const showGamePageFun = setShowGamePage(true);	-->The setShowGamePage(true) function is called immediately, and its result is assigned to showGamePageFun. This means showGamePageFun is not a function.
const showGamePageFun = () => setShowGamePage(true);-->	showGamePageFun is a function that will call setShowGamePage(true) when invoked. This is the correct approach if you want it to run on a button click or another event.


_________________


10. Please note how props are passed from drilling .
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
