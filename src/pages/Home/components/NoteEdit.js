import { useEffect, useState } from "react";
import { CATEGORIES } from "../../../global/constants";

import { v4 } from "uuid";

const NoteEdit = ({ add, isSubmitting }) => {
  // Note的基本架構
  const [formData, setFormData] = useState({
    title: "",
    category: "React",
    date: "",
    url: "",
  });

  // 監聽網頁中的輸入格Value是否被改變
  // ...代表解構
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: today,
    }));
  }, []);

  function addItem() {
    if (!formData.title) {
      window.alert("Title cannot be empty!");
      return;
    }
    isSubmitting.current = true;
    add(function (prevData) {
      return [
        {
          id: v4(),
          ...formData,
        },
        ...prevData,
      ];
    });
  }

  return (
    <div>
      <h1>Studying Notes</h1>
      <p>Title</p>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <p>Category</p>
      <select
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
      >
        {CATEGORIES.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <p>Date</p>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <p>URL</p>
      <input
        type="url"
        name="url"
        value={formData.url}
        onChange={handleChange}
      />
      <p>
        <button className="add" onClick={addItem}>
          Add
        </button>
      </p>
    </div>
  );
};

export default NoteEdit;
