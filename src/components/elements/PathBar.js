import React from "react";

export default function PathBar() {
  return (
    <div>
      <nav
        class="breadcrumb"
        aria-label="breadcrumbs"
        style={{ padding: "20px" }}
      >
        <ul>
          <li>
            <a  style={{ color: "gray" }} href="#" onClick={() => window.location.replace("/")} >Home</a>
          </li>
          <li>
            <a style={{ color: "gray" }} href="#" onClick={() => window.history.back()}>
              {" "}
              Nazad na prethodnu
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

