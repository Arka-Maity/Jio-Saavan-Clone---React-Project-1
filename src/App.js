import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

import SongContainer from "./components/SongContainer";
import SongDetails from "./components/SongDetails";
import MainContainer from "./components/MainContainer";
import Radio from "./components/Radio";
import { Provider } from "react-redux";
import store from "./utils/store";
// import SignUp from "./components/Sigup";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import HistorySection from "./components/HistorySection";
import Subscription from "./components/Subscription";
import Artists from "./components/Artists";
import Podcast from "./components/Podcast";


let appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"/music",
      element:<MainContainer/>
    },
    {
      path:"/release",
      element:<MainContainer/>
    },
    {
      path:"/topPlaylist",
      element:<MainContainer/>
    },
    {
      path:"/topArtist",
      element:<MainContainer/>
    },
    {
      path:"/podcasts",
      element:<Podcast/>
    },
    {
      path:"/radio",
      element:<Radio/>
    },
    {
      path:"/history",
      element:<HistorySection/>
    },
    {
      path:"/signup",
      element:<SignUp/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/subscription",
      element:<Subscription/>
    },
    {
      path:"/artists",
      element:<Artists/>
    },
    {
      path:"/songs/:id",
      element:<SongDetails/>
    },
   
  ]
}])



function App() {
  return (
    <>
    <Provider store={store}>
      <div className="">
        {/* <Header/> */}
        {/* <Body/> */}
        {/* <Footer/>       */} {/* if i uncomment this the footer will show on main page  */}
       
        <RouterProvider router={appRouter}/> 
         

      </div>
      </Provider>
      
    </>
  );
}

export default App;
