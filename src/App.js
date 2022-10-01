// import logo from './logo.svg';
// import "./App.css";

function NameBlock({nameForClass,name,income=0}){ //with the help of destructuring we can pass default values 
  return <div nameForClass={nameForClass}>{name} has income {income}</div>
}
function App() {  //App is just a component
  return <div>
    Hi
    <NameBlock name={"kali"} nameForClass={"div1"} income={200}/>
    <NameBlock name={"teja"} nameForClass={"div2"} />
    <NameBlock name={"sai"}  nameForClass={"div3"} income={1000000}/>
    learners
    </div>;
}

export default App;
