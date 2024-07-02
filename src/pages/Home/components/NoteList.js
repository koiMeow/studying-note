import { useState } from "react";
import { CATEGORIES } from "../../../global/constants";

import NoteItem from "./NoteItem";

const NoteList = ({ itemList, removeData, isSubmitting }) => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", ...CATEGORIES];

  const filteredList = itemList.filter((item) => {
    if (activeTab === "All") {
      return true;
    } else {
      return item.category === activeTab;
    }
  });

  return (
    <div className="list">
      <div className="tabs">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      {filteredList.map((item) => (
        <NoteItem
          item={item}
          removeData={removeData}
          isSubmitting={isSubmitting}
        />
      ))}
    </div>
  );
};

export default NoteList;
