# TIC TAC TOE




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

10. 
