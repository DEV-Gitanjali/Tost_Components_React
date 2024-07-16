import { useCallback, useState } from "react"
import Notification from "../components/Notification";
import {v4 as uuidv4} from "uuid";


const useNotification = (position='top-right') => {
  const [notifications , setNotifications] = useState([]);

  // let timer;

  const triggrNotification =useCallback((notificationProps)=>{
    // clearTimeout(timer)
    const toastId=uuidv4();
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      {
         id:toastId,
         ...notificationProps
      },
    ]);
    setTimeout(() => {
      setNotifications((prevNotifications)=> prevNotifications.filter((n)=> n.id!==toastId));
    }, notificationProps.duration);
  } , [])

  const NotificationComponent =  (
    <div className={` notification container ${position}`}>
      {notifications.map((notification)=>{

     return <Notification  key={notification.id} {...notification}
     onClose={()=>{}}
      />
      })}
    </div>
  ) ;

  return {
    NotificationComponent,
    triggrNotification,

  }
}

export default useNotification
