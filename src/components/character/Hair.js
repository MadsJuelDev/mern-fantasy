import { React } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const Hair = () => {
  const url = "/cc/api/hair/";

  const { isLoading, data } = useQuery("cc-hair", () => {
    return axios.get(url);
  });

  if (isLoading) {
    return <h2>Loading.. </h2>;
  }

  return (
    <>
      <h2 className="grid-title testimonial">All hair assets</h2>
      {data?.data.map((hair) => {
        return (
          <div className="app-card testimonial" key={hair}>
            <span>{hair.id}</span>
            <div className="app-card__subtext">The Color is: {hair.color}</div>
            <div className="app-card__subtext">The Style is: {hair.style}</div>
            <div className="app-card-buttons">
              <button className="content-button status-button">Update</button>
              <div className="menu"></div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Hair;
