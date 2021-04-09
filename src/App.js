import './App.css';

function Welcome(props){
  return <h5 className="Welcome">Hello, {props.name}</h5>
}

function Tick(){
  return(
    <div>
      <h1>Time</h1>
      <h2>It's {new Date().toLocaleTimeString()}</h2>
    </div>
  )
}

const div1 = {
  // width: "300px",
  margin: "10px",
  // minHeight: "200px",
  // boxSizing: "border-box"
};

function App() {
  return (
    <div style = {div1}>
          <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"></meta>
      <button style={{color:"red"}}>Click</button>
      <Welcome name="Sara"/>
      <Welcome name="Lily"/>
      <Welcome name="Ran"/>
      <Tick/>
    </div>
  );
}



// setInterval(App, 1000);


export default App;
