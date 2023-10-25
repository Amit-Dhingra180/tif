import './App.css'
import MySVG from './assets/MyShape.svg';


function App() {
  return (
    <div>

      
      <div className='bg-red-500 md:bg-yellow-500 lg:bg-green-500 xl:bg-blue-500 fixed w-10 h-10 top-0 left-0 z-10'>

      </div>

      <div className='flex'> 

      
      <div className='bg-blue-500 w-full h-screen hidden lg:block'>
      </div>

      <div className='relative w-full h-screen'>
        
        <img src='pizza.jpg' className='w-full h-full right-0 absolute object-cover'></img>
      </div>

      </div>

      <div className='relative w-full h-screen bg-gray-400 lg:h-[80vh]'>

      </div>

      <div className='relative w-full h-screen bg-blue-200'>

      </div>
 
      
    </div>
  );
}

export default App;