import React, { useState, useEffect } from "react";
import SectionNav from "../../../../common/SectionNav/SectionNav";
import { db } from "../../../../services/firebase.config";
import { getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Details from "../../../../common/Details/Details";

const DetailJob = () => {
  const { id } = useParams();
  const docRef = doc(db, "jobs", id);

  const [data, setData] = useState(undefined);

  useEffect(() => {
    const getData = async () => {
      try {
        const docSnap = await getDoc(docRef);
        setData(docSnap.data());
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <SectionNav jobsSection />
      <Details data={data}/>
    </>
  );
};

export default DetailJob;
