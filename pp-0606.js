// abaow;iefjao;iwejfi;awf

// The code editor has a simple JSX component. 
// Use the ReactDOM.render() method to render this component to the page. 
// You can pass defined JSX elements directly in as the first argument and use document.getElementById() to select the DOM node to render them to. 
// There is a div with id='challenge-node' available for you to use.
//  Make sure you don't change the JSX constant.

 const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // change code below this line
  ReactDOM.render(JSX, document.getElementById("challenge-node"))
  

  // Fix the errors in the code editor so that it is valid JSX and successfully transpiles. Make sure you don't change any of the content - you only need to close tags where they are needed.

  const JSX = (
    <div>
      <h2>Welcome to React!</h2> <br/>
      <p>Be sure to close all tags!</p>
      <hr/>
    </div>
  );
  