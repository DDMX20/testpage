import React, { memo } from "react";
import searchImg from "../../assets/search.svg";
const SearchBar = memo(() => {
  return (
    <div class="input-group mb-3 ">
      <div class="input-group-prepend rounded-pill">
        <span
          class="input-group-text bg-light  border-0"
          style={{
            borderTopLeftRadius: "25px",
            borderBottomLeftRadius: "25px",
          }}
          id="basic-addon1"
        >
          <img
            src={searchImg}
            class="img-responsive bg-light"
            alt="Responsive image"
            width="25"
            height="20"
          />
          {/* <div className="bi bi-search"></div> */}
        </span>
      </div>
      <input
        type="text"
        class="form-control bg-light border-0 "
        style={{ borderEndEndRadius: "25px", borderTopRightRadius: "25px" }}
        placeholder="Search anything on tax and corporate law in bookstore"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>
  );
});

export default SearchBar;
