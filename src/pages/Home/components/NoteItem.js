const NoteItem = ({ item, removeData, isSubmitting }) => {
  function removeItem() {
    isSubmitting.current = true;
    removeData(function (prev) {
      return prev.filter((prevItem) => prevItem.id !== item.id);
    });
  }

  return (
    <div className="item">
      <div>
        <h2>{item.title}</h2>
        <p>
          {item.category} {item.date}
        </p>
        <h3>
          <a href={item.url}>{item.url}</a>
        </h3>
      </div>
      <button onClick={removeItem} className="remove">
        Remove
      </button>
    </div>
  );
};

export default NoteItem;
