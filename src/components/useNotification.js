import React from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) return;

  const fireNotification = () => {
    // Request the permission
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(title, options)
        } else {
          return;
        }
      })
    } else {
      new Notification(title, options)
    }
  };
  return fireNotification;
};

export default function UseNotification() {
  const triggerNotification = useNotification("Do you allow to get your security?", {body: "add more texts"});
  return (
    <div>
      <h1>12. useNotification</h1>
      <button onClick={triggerNotification}>Notification</button>
    </div>
  );
}
