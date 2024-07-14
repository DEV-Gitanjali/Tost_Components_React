import { useCallback, useState } from "react"
import Notification from "../components/Notification";



const useNotification = (position='top-right') => {
  const [notification , setNotification] = useState(null);

  let timer;

  const triggrNotification =useCallback((notificationProps)=>{
    setNotification(notificationProps)
    clearTimeout(timer)
    setTimeout(() => {
      setNotification(null)
    }, notificationProps.duration);
  } , [])

  const NotificationComponent = notification ? (
    <div className={`${position}`}>
      <Notification {...notification}/>
    </div>
  ) : null

  return {
    NotificationComponent,
    triggrNotification,

  }
}

export default useNotification
