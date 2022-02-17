// import './App.css';
import './css/style.css';
import './css/bootstrap.css';
// import './css/responsive.css';
import Preloader from  './Components/Preloader';
import Header from  './Components/Header';
import { useEffect, useState } from 'react';
import Album from './Components/Album';
 
function App() {
    const [showLoader, setShowLoader] = useState(true)
     
    useEffect(()=>{
        setTimeout(()=>{
          loaderChange(false)
        }, 1000)
    }, []);

    // const setItemDetail = (item) =>{
    //   loaderChange(true)
    //   // setSelectItem(item);
    //   setTimeout(()=>{
    //     setShowLoader(false)
    //     loaderChange(false)
    //   }, 1000)
    // }

    const loaderChange = (show = false) =>{
      setShowLoader (show)
    }

  return (
    <>   
      {showLoader===true? 
      (<Preloader  />)  
      :
      (
        <>
          <Header />
          <Album />

        </>
      )
      }
      
      
      
      
      
      
    </>
  );
}

export default App;
