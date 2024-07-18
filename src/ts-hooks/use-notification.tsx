import React ,{ useCallback, useState } from "react"
import Notification from "../ts-components/Notification";
import {v4 as uuidv4} from "uuid";
 type Position = "botom-left | "bottom-right" | "top-left" | "top-right;

  interface NotificationProps{
    type: "info" | "success" | "warning" | "error";
    message: string;
    duration: number;
    animation:"fade "
| "pop"  |  "slide" ;
 }

 interface UseNotificationReturn{
  NotificationComponent:JSX.Element;
  triggrNotification:(notificationProps:NotificationProps)=> void;
 }

const useNotification = (position:Position='top-right'):UseNotificationReturn => {
  const [notifications , setNotifications] = useState<(NotificationProps  & {id:string})[]>([]);

  // let timer;

  const triggrNotification =useCallback((notificationProps:NotificationProps)=>{
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


const handleNotificationClose = (index :number)=>{
  setNotifications(prevNotifications=>{
    const  updatedNotifications = [...prevNotifications]
    updatedNotifications.splice(index,1)

    return updatedNotifications;
  })
}




  const NotificationComponent =  (
    <div className={` notification container ${position} ${position.split("-")[0]}`}>
      {notifications.map((notification , index)=>{

     return <Notification  key={notification.id} {...notification}
     onClose={()=>handleNotificationClose(index)}
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
