import React, { useState } from "react";

const Post = ({ data, maxCharas = 150 }) => {
  let [expanded, setExpanded] = useState(true)

  const text = data.desc;

  let newText = expanded? text.substring(0, maxCharas) + "...": text;

  return (
    <div>
      <div className="main-card" key={data.id}>
        <img src={data.img} alt="" />
        <div className="card-description">
          <h3>{data.title}</h3>
          <h5>
            Title description, <span>{data.date}</span>
          </h5>
          <p>
            {/* {data.desc} */}
            {newText}
          </p>
          <div className="card-bottom">
            <button onClick={() => setExpanded(!expanded)}>
              {expanded? "READ MORE>>": "READ LESS<<"}
            </button>
            <p>
              Comments <span>{data.comments}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
