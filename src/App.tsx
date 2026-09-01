// import { Suspense } from 'react'
// import Users from './api'
import './App.css'
import Todos from './todo'
// import Cart from './cart'
// import Counter from './counter'









// const UserDataPromise = async ()=>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await res.json();
//   return data ;
// }
function App() {
  // function btnClick(){
  //   alert("Are pagla goma giya ")
  // }
  // const hascardid = (id)=>{
  //   alert("it's my name and id is " + id)
  // }


  // const clickOption = (name) => {
  //   alert (" Hello my name is  " + name)
  // }
  return (
    <>


    <Todos></Todos>

    
    {/* <Counter></Counter> */}
    {/* <p>--------------------</p>

    <Suspense fallback={<p>Loading........</p>}>
      <Users  userDataPromise= {UserDataPromise()}></Users>
    </Suspense> */}
    {/* <Cart></Cart> */}


    {/* <button onClick="btnClick">Click Me</button> */}
    {/* <button onClick={btnClick}>Click me 2</button> */}

    {/* <button onClick={()=> hascardid(479)}>btn aaakga    4444</button> */}
    {/* <button onClick={()=> clickOption("Rumi Parvez")}>Show my name</button> */}
    
    </>
  )
}

export default App
