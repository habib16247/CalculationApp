import React from "react";
import { NavLink } from "react-router-dom";
import user from "./User.module.css";

const User = ({
  user: {
    id,
    name,
    email,
    website,
    company: { name: companyName },
  },
}) => {
  return (
    <div className={user.card}>
      <img
        className={user.ceoImg}
        src={`/src/assets/image/${id}.jpeg`}
        alt="CEO"
      />
      <div className={user.textSide}>
        <h3>Name: {name}</h3> <br />
        <p>Email: {email}</p> <br />
        <p>Website: {website}</p> <br />
        <p>Company Name: {companyName}</p>
        <button className={user.detailsBtn}>
          <NavLink
            className={user.details}
            style={{ padding: 0 }}
            to={`/a/${id}`}
          >
            Details
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default User;
