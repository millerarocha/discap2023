import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Jobs from "./Jobs";
import News from "./News";
import Donations from "./Donations";
import Footer from "../../../common/Footer";
import { db } from "../../../services/firebase.config";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

const newsCollectionRef = collection(db, "news");
const jobsCollectionRef = collection(db, "jobs");

const Landing = () => {
  const [news, setNews] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await getDocs(query(newsCollectionRef, orderBy("timestamp", "desc"), limit(6)))
        .then((data) => {
          let newsData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setNews(newsData);
        })
        .catch((err) => Swal.fire("Error", err, "error"));
      await getDocs(query(jobsCollectionRef, orderBy("timestamp", "desc"), limit(6)))
        .then((data) => {
          let jobsData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setJobs(jobsData);
        })
        .catch((err) => Swal.fire("Error", err, "error"));
    };

    getData();
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <Hero />
        <About />
        <News news={news}/>
        <Jobs jobs={jobs}/>
        <Donations />
      </div>
      <Footer />
    </>
  );
};

export default Landing;
