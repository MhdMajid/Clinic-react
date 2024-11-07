import { Outlet } from 'react-router-dom';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const FrontManeger = () => {
  return (
    <div>
       <Header/>
       <div className="container">
      <Outlet/>
</div>
      {/* <ScrollToTop/> */}
      <ToastContainer />
     
      <Footer/>
    </div>
  )

}

export default FrontManeger