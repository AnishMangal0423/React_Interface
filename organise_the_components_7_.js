
     import Head from "./Header"
      import Footer from "./Footer"
      import Listcontent from "./Content"

function App(){
   
    return(
    
    <div>
    
       <Head />
       <Listcontent />
      <Footer />

 </div>
 )
 }
 
 ReactDOM.render(<App />,document.querySelector("#root2"));