import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Footer from './component/Footer';
import CreatePost from './component/CreatePost';
import Postswrap from './component/PostsWrap/Postswrap';
import { useState } from 'react';
import PostListStore from './store/post-list';

function App() {
const [tab,setTab] = useState('Home')
  return (
    <>
   <PostListStore>
    <Header/>
    <div className="flex">
    <Sidebar tab={tab} setTab={setTab}/>
    {
      tab == 'Home' ?  <Postswrap/>:<CreatePost/>
    }
   
      
    </div>
   
  
    
    <Footer/>
    </PostListStore>
    </>
  )
}

export default App
