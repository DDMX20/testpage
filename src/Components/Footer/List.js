import React, { memo } from "react";

const List = memo((props) => {
  console.log(props);
  return (
    <div>
      {
        <>
          <ul>
            <p
              style={{
                fontSize: "10px",
                fontWeight: "bold",
              }}
            >
              {props.heading}
            </p>
            {props.list.map((listItem) => {
              return (
                <li
                  style={{
                    fontSize: "10px",
                    listStyle: "none",
                    marginLeft: "0px",
                  }}
                >
                  {listItem}
                </li>
              );
            })}
          </ul>
        </>
      }
    </div>
  );
});

export default List;
