import './App.css'
import { Body } from './componets/body'
import {Footer} from './componets/Footer'
import { Header } from './componets/header'

function App() {

  return (
    <div>
        <div>
            <Header/>
        </div>
        <div className='flex justify-around'>
          <div className='border-2 h-[calc(100vh-120px)] w-80 mt-10 rounded-xl ml-24'>AD1</div>
          <div>
            <Body/>
          </div>
          <div className='border-2 h-[calc(100vh-120px)] w-80 mt-10 rounded-xl mr-24'>ad2</div>
        </div>
        <div className='border-2  w-[calc(90vw)] rounded-xl mx-24 h-40 mt-10'>ad3</div>
        <Footer/>
    </div>
  )
}

export default App
