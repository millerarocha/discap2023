import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../services/firebase.config";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...        
        navigate("/admin");
      }
    });
  }, []);

  return (
    <div className="flex h-screen w-screen flex-col lg:flex-row">
      <div className=" lg:w-64 p-6 h-screen bg-slate-200 fixed">
        <Menu />
      </div>
      <div className="lg:w-3/4 p-6 ml-64">{children}</div>
    </div>
  );
};

export default Dashboard;
