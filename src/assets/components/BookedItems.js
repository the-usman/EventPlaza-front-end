function BookedItems(props) {
  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();
    const formattedDate = `${day} / ${month} / ${year}`;
    return formattedDate;
  };

  const getStatusClassName1 = () => {
    if (props.post.status === "Accepted") {
      return "successTag";
    } else if (props.post.status === "Rejected") {
      return "rejectTag";
    }
    return ""; // Default class name if status doesn't match
  };
  const getStatusClassName = () => {
    if (props.post.status === "Accepted") {
      return "successCard";
    } else if (props.post.status === "Rejected") {
      return "rejectCard";
    }
    return ""; // Default class name if status doesn't match
  };

  return (
    <div className={`subContainer`}>
      <div className={`bookedCard ${getStatusClassName()}`}>
        <div className="f-display">
          <h1>{props.post.title}</h1>
          <div className={`tag ${getStatusClassName1()}`}>
            {props.post.status}
          </div>
        </div>
        <div className="location">
          <i className="fa-solid fa-location-crosshairs"></i> {props.post.location}
        </div>
        <div className="date">
          <i className="fa-solid fa-calendar-days"></i> {formatDate(props.post.lastdate)}
        </div>
        <button>Read More</button>
        <div className="reason">
          {props.post.reason}
        </div>
      </div>
    </div>
  );
}

export default BookedItems;
