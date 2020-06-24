import React, { useRef, useEffect, useState } from "react";

const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine); // will get true or false
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
  }, []);
  return status;
};

export default function UseNetwork() {
  const handleNetworkChange = (dynamicCheck) => {
    console.log(dynamicCheck ? "We are online": "We are offline");
  };
  const dynamicCheck = useNetwork(handleNetworkChange); // op 1
  const online = useNetwork(); // op 2
  return (
    <div>
      <h1>9. useNetwork</h1>
      <p> Network status: {online ? "online" : "offline"}</p>
    </div>
  );
}
