import './App.css'

function App() {
  function btnClick(){
    alert("Are pagla goma giya ")
  }
  const hascardid = (id)=>{
    alert("it's my name and id is " + id)
  }
  return (
    <>
    <button onClick="btnClick">Click Me</button>
    <button onClick={btnClick}>Click me 2</button>

    <button onClick={()=> hascardid(479)}>btn aaakga    4444</button>
    
    </>
  )
}

export default App
