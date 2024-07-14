// import Notification from './components/Notification';
import './App.css';
import useNotification from './hooks/use-notification';
function App() {
  // custom hooks -useNotification(possition)
  const{NotificationComponent , triggrNotification}=useNotification('top-right')


  return (
    <div>
      Subscribe  to roadside coder
      {/* <Notification  type="error" message={"new notification"}/> */}

      <button onClick={()=> triggrNotification({
        type:"success",
        message:'File Sent Successfully',
        duration:3000,
      })}>Trigger Sucess</button>

      <button onClick={()=> triggrNotification({
        type:"error",
        message:'File Sent Successfully',
        duration:3000,
      })}>Trigger Error</button>

      {NotificationComponent}
    </div>
  )
}

export default App
