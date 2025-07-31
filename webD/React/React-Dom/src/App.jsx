import { Suspense, useState, lazy } from 'react'
import './App.css'
import Todos from './components/Todos'
import Navbar from './components/Efficiency/lazyloading/Navbar'
import Hero from './components/Efficiency/lazyloading/Hero'
const Footer = lazy(() => import("./components/Efficiency/lazyloading/Footer"))
const Testimonial = lazy(()=>import("./components/Efficiency/lazyloading/Testimonial"))
import Counter from './components/Efficiency/ErrorBoundaries/Counter'
import ErrorBoundary from './components/Efficiency/ErrorBoundaries/ErrorBoundary'
// function App() {
//  var data = [{"name":"name","title":"title","salary":"salary"},
//           ["John","Database","80"],
//           ["Alex","Database","90"],
//           ["John","Database","100"] 
//   ]
//   return (
//     <div>
//       <table border= {1}>
//         <thead>
//           <tr>
//             <th>{data[0].name}</th>
//             <th>{data[0].title}</th>
//             <th>{data[0].salary}</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.slice(1).map((item, index) => (
//             <tr key={index}>
//               <td>{item[0]}</td>
//               <td>{item[1]}</td>
//               <td>{item[2]}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }
// export default App

// function Controlled(){
//   const [data,setData] = useState({
//     name:"",
//     email:"",
//     pass:""
// })
// const [condition, setCondition] = useState(false)
// function handleSubmit(e){
//   e.preventDefault()+
//   setCondition(true)
// }

// return (
//   <div>
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Name" value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/><br></br><br></br>
//       <input type="email" placeholder="Email" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}/><br></br><br></br>
//       <input type="password" placeholder="Password" value={data.pass} onChange={(e)=>setData({...data,pass:e.target.value})}/><br></br><br></br>
//       <button type="submit">Submit</button>
//     </form>
//     {condition && <div>
//       <h1>{data.name}</h1>
//       <h1>{data.email}</h1>
//       <h1>{data.pass}</h1>
//     </div>}
//   </div>
//   )
// }

// export default Controlled;

function App(){
  return(
    <div>
      {/* <Todos/> */}
      
      {/* <Navbar/>
      <Hero/>
      <Suspense fallback={<h1> Thakur Loading...</h1>}>
      </Suspense>
      <Testimonial/>
      <Suspense fallback={<h1>Footer Loading...</h1>}>
      <Footer/>
      </Suspense>
       */}
      <ErrorBoundary>
      <Counter/>  
      </ErrorBoundary>

    </div>
  )
}
export default App;