# TIC TAC TOE

 ![Screenshot 2024-12-13 at 12 28 59 PM](https://github.com/user-attachments/assets/ca464dfc-8549-4f15-bf60-a4c2f150903f)

 ![Screenshot 2024-12-13 at 12 31 31 PM](https://github.com/user-attachments/assets/0e1b44bb-0650-4721-a883-4f1eef36fd8a)

 ![Screenshot 2024-12-13 at 12 32 45 PM](https://github.com/user-attachments/assets/cb01f5db-a486-4a07-8ef3-b9bc5b7424ed)

 ![Screenshot 2024-12-13 at 12 29 55 PM](https://github.com/user-attachments/assets/11fe567d-7287-422f-b7e0-a50fc58588ad)


### Figma Design

https://www.figma.com/community/file/1254192154560627135


### Using README for Documenting my Learnings while creating this project
1. write npm create vite@latest to create a project , provide info like project name , select framework and language etc. USE npm run dev to Run the project , don’t forget to cd TicTacToe. To clone the git repository , open command pallete and there you type clone command and then copy ssh github link to clone. you can find it on repository main page. Once you clone it will ask for local folder where you want to clone.
2. If you have to create new project and push it into repository ,then do these steps : Create an empty repository and then clone it in VS code, then install react project.
3. styled components are being used ,useState is being used here
4. map function used.
5. always refer the figma design but make sure that how you want to align the items - FLEX !!!!!!
6. always type some text inside the empty div , else effects of css will not get render on  empty div
7. how to write code for ternary operator - The condition is wrapped inside {} because it needs to be evaluated as JavaScript within JSX.
   <>
   {gameStarted?   "play again":"show coverpage "}
   </>
8. when refresh , page needs score preserved , also the way to remember the current state of game and render the same route which is /game
   in this you will understand how to get back to the same route even after refresh  ?
9. Idea is to set variable in parent component so that if child component gets re-render , whole child state is saved in side the parent component.
10. gameStarted state is handled at app.js to make decision which page - cover/game to show on screen . but I wonder what will we do after keeping track of this variable , what is the advantage of gameStarted.  Well I thought earlier that we will be toggle between cover and game page. But that is not the reason ternary operator is used. Main reason is to render the game page on click of "Play now" button . Since you can assume that Cover page is the parent page and on click of "Play now" button we are trying to show the child page which is GAME page . In the parent component, use a state variable to control when the child component should be rendered. You can toggle the state by clicking the button.There are two different scenarios for conditionally rendering the child component :

   
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


15\. <MyComponent key={id} id={id} /> is it not sufficient to make key unique and find out which component was clicked by key value ? key is used internally by react , If you need to track which specific component was clicked, you should pass an explicit prop (like `id`) to identify it within the component.
16\. <div> {ids.map((id) => ( <MyComponent key={id} id={id} onClick={handleClick} /> ))} </div> here what will ids.map() will return -→

```
\[

 <MyComponent key={1} id={1} onClick={handleClick} />, 

<MyComponent key={2} id={2} onClick={handleClick} />, 

<MyComponent key={3} id={3} onClick={handleClick} /> 

\]
```



React doesn’t require any extra handling for arrays of JSX elements. Just by embedding `{array}`, React will render each item in sequence.




17\. earlier I thought that components must be breaked as much as possible . and most tiniest size. But now i think this is incorrect because the more factorize the component is , the more you have to drill the props . same is the case when you have to send data back from child to parent , it will bubble up to many components . so question is what is the right place to define components . for example in
\* in GRIDBOX components I have define 3 RowBox components
\* in RowBox components I have define 3 CellBox components
\* in CellBox components I have define 1 Cell components
18\. Also at GRIDBOX level I need information of which cell clicked . and from GRIDBOX I have to further communicate to ScoreBox and and Toast to show which user turn . In that case i have the center point as Gridbox . Now how feasible is this to divide components and put them into different files ?

```
Answer. -→ Aim to split components based on distinct responsibilities rather than purely visual divisions. If a piece of UI or logic is only relevant within the context of a larger component (like `Cell` in `RowBox`), it may be better to keep it inside that larger component rather than creating a separate file for it.
```


19\. Before creating a component , decide how many child drilling you have to do , what is the neareast component which you might need data from child to parent , can that grandparent component be created as central component think first because how many other components does that grandparent component need to communicate , all the communicating compoentns should be inside one file.
20\. while breaking down components into small pieces can make them more reusable and modular, it can also create complexity with prop drilling and state management. functionality should be centralized .
21\. Reusable Components vs. Specialized Components
\* if they’re tightly coupled with `GridBox`, it’s often simpler to keep them in the same file to reduce cognitive overhead

### 2. **Prop Drilling vs. State Management**

* **Prop drilling** can quickly get out of hand when there are multiple levels of nested components, as you’ve observed. To avoid this, you can use **context** for sharing data and functions across components without drilling.


3\. How to fill 3\*3 size array  -

```
Array(3).fill(null).map(() => Array(3).fill(null))
```


4\. Score Component should have unique keys , because score box have same name classes . Also you should use array.map() function for rendering the score component -- when multiple `ScoreBox` components might share the same class names but need to be distinguished by their unique identifiers.
5\. does state get re initialize every time component gets re render on change of state value -→ No, React preserves state between renders, so state does **not** get reinitialized every time a component re-renders due to a state change.
6\. if and else are very basic conditions where programmer doesn’;t like writing if else , insteasd use ternary operator or AND operators
7\. if condition && (function1() function2()) is this correct to call two functions in AND condition….--→

No, the syntax `condition && (function1() function2())` is not correct in JavaScript. In JavaScript, you need to use a **comma** or a **semicolon** to separate function calls within parentheses.


condition && (function1(), function2());


if (condition) {
function1();
function2();
}
8\. **foreach vs for loop**














1. `forEach`:
   * You **cannot use** `break` or `continue` with `forEach`. If you need to exit early or skip elements based on conditions, you’ll need to use other methods like `for` or `every`.
2. `for` loop:
   * Allows the use of `break` and `continue`, making it suitable for cases where you want to interrupt or skip iterations based on certain conditions.
3. condition && (function1(), function2()); in this function2 is returning a value how to get value in such case ?

   
   1. Yes, you can use the `&&` operator with multiple function calls by grouping them in parentheses. However, in JavaScript, the return value of an expression like this:

      ```javascript
      javascriptCopy codecondition && (function1(), function2());
      
      ```

      will be **the result of** `function2()` if `condition` is true. This is because of the comma operator, which evaluates `function1()` first and then `function2()`, returning the result of the last expression, `function2()`.



4\. this was the big problem as there was wrong 3d array created.

```
  const winningCombinations = [
    [[0][0], [0][1], [0][2]],
    [[1][0], [1][1], [1][2]],
    [[2][0], [2][1], [2][2]],
    [[0][0], [1][1], [2][2]],
    [[0][2], [1][1], [2][0]],
  ];
```


I struggles a lot to figure out , why values are coming a undefined when accessing winningCombinations\[0\]

because winningCombinations\[0\] is

\[

\[0\]\[0\],

\[0\]\[1\],

\[0\]\[2\]

\]

now if you observe in 1st row -values are \[0\]\[1\] where as it should be \[0,1\]



5\. let winningCondition = gridArr\[i\]\[j\] == null && (setGridArr((prev) => { let newArr = \[...prev\]; newArr\[i\]\[j\] = turn; return newArr; }), 6. There is problem in this code , it is not getting execute in 2nd condition after && . Reason is that when you call usestate , it doesn’t update state instantly - it is a ASYNC process . When you call setTurn and want to make sure that after the values are updated then only following steps are followed then for that use useEffect .


Don’t implement too much of code at once : do this in blocks












1. test for cell number when ever it is clicked
2. test for if user is able to mark some character on it or not on every click. for example mark X on each cell


# Date - 8th dec  2024


I have deleted old style array , where I was passing 2d array . Instead I would now pass 1d array . also not loop over. Also I want to understand if is it possible to design such that in code If we want to use benefits of React like reload only that component which got modified , for example on click to cell only cell should get update. But in reality  there is 1) who chance is next title 2.) score as well getting update , and because of score and title bar we are updated so these couple of things are gonna update any how.. :upside_down_face: Do it , as fast as you can….


don’t worry about where to write the code. Let keep it first inside the one file only. later we will see how components data it being passed from one file to other……Actually you know what , I would like to learn it from tutorial. As it has been 2 months last I typed . Don’t do this , please be active on coding , keep purple design but refer this code  .


:t-rex: :t-rex: :t-rex:

<https://www.youtube.com/watch?v=4Gt_YyGf6B0&t=71s>

<https://github.com/CodingWith-Adam/tic-tac-toe-react>


```javascript
        <Cell id={1} onClick={() => handleClick(id)}>
          <EnterChoiceTxt>{gridArr[1]}</EnterChoiceTxt>
        </Cell>
```

In above code you can see that  onClick={() => handleClick(id)} The issue seems to be with how the `id` prop is passed to the `Cell` component. but inside the `onClick` handler, `id` is not in scope.


make sure that you never set useState inside the component , it should always be set on click of button or inside useEffect or on any event . otherwise it will be infinite loop , and it will through error saying too many renders.


```
  const [score, setScore] = useState(new Array(3).fill(0));
```


```
 setScore(0)
```


see carefully what you are doing in this code …

You have initialized with array and d now you are assigning 0 to array type. This is very common error.


why this code not works

scoreTemp = new Array(3).fill(0); setScore(\[...scoreTemp\])

but this works why this code not works

const scoreTemp = new Array(3).fill(0); setScore(\[...scoreTemp\])

why const matters , when js don't need let , const etc to declare variable.


If you are using any type of usestate to assign it to another usestate then never directly assign this , instead

```
const [toast,setToast] = useState(`Player Turn : ${playerXTurn?"X":"O"}`)
```

use useeffect to assign the useState , because you never know what is the value of that use state . only use it in useeffect of that state.



Once user won I’m showing a message of Game over. This message doesn’t go off , when I’m pressing RESET button . I was expecting on click to reset button , I change PlayerXTurn state with usestates . also call useeffect on change of state of PlayerXTurn. but there is one thing which i don't understand is on change of state component does it first call useeffect and then rerender the component , because I feel it's not applying code inside useeffect


> `useEffect` Execution:
>
> * After the render is completed, React checks the dependencies of `useEffect`. If the dependencies (e.g., `PlayerXTurn` in your case) have changed, the effect function inside `useEffect` is executed.

that means useEffect are not executed useeffect before render.UI will reflect the new state, but any logic inside `useEffect` happens after rendering.



I noticed that on first click to reset btn, toast not reset . but on 2nd click it does.


<https://stackoverflow.com/questions/64191896/usestate-in-useeffect-does-not-update-state>

<https://github.com/facebook/react/issues/25593>




---

```
{ combo: [0, 1, 2], top: 40, rotate: 0, left: 44.5 }, { combo: [0, 1, 2], top: 40, rotate: 0, left: 44.5 },
```


make sure you keep state as small as possible , because then there are as many numbers of render as many as states. This is the main reason that big projects have schema , where they change schema , such that state don’t change a lot.



