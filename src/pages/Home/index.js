import { useEffect, useRef, useState } from "react";
import { API_GET_DATA } from "../../global/constants";

import NoteEdit from "./components/NoteEdit";
import NoteList from "./components/NoteList";
import "./index.css";

async function loadData(setData) {
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json();
  setData(data);
}

async function saveData(data) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
}

const Home = () => {
  const [data, setData] = useState([]);
  const isSubmitting = useRef(false);

  useEffect(() => {
    if (!isSubmitting.current) {
      return;
    }
    saveData(data).then((data) => (isSubmitting.current = false));
  }, [data]);

  useEffect(() => {
    loadData(setData);
  }, []);

  return (
    <div className="home">
      <NoteEdit add={setData} isSubmitting={isSubmitting} />
      <NoteList
        itemList={data}
        removeData={setData}
        isSubmitting={isSubmitting}
      />
    </div>
  );
};

export default Home;
