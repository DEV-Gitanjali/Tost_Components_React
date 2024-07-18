// import Notification from './components/Notification';
import './App.css';
import useNotification from './ts-hooks/use-notification';
function App() {
  // custom hooks -useNotification(possition)
  const{NotificationComponent , triggrNotification}=useNotification("top-right")


  return (
    <div className='App'>
      
        {NotificationComponent}

      {/* <Notification  type="error" message={"new notification"}/> */}
      <h1>Toast Component</h1>
      <div className='btns'>

      <button onClick={()=> triggrNotification({
        type:"success",
        message:'File Sent Successfully',
        duration:3000,
        animation:"pop",
      })}>show Sucess</button>

      <button onClick={()=> triggrNotification({
        type:"info",
        message:' this is an info message',
        duration:3000,
      })}>Show Info</button>

      <button onClick={()=> triggrNotification({
        type:"warning",
        message:'this is a warning message',
        duration:3000,
      })}>show Warning</button>

      <button onClick={()=> triggrNotification({
        type:"error",
        message:'this is an error message!',
        duration:3000,
      })}>Show Error</button>

      
    </div>
    </div>
  )
}

export default App
