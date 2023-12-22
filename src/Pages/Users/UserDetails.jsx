import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import userData from "./User.module.css"

export default function UserDetails() {
  const navigate = useNavigate();
  const user = useLoaderData();
  const {id, name, email, phone, username, website, address,  company: { name: companyName },
  } = user;
  return (
    <>
      <div className={userData.userDetails}>
      <img className={userData.ceo} src={`/src/assets/image/${id}.jpeg`} alt="CEO" />

        <div className={userData.totalDetails}>
          <h1 className={userData.UserHead}>User Full Details</h1>
          <h2>{name}</h2>
          <h2>{username}</h2>
          <h3>{companyName}</h3>
          <p>{email}</p>
          <p>{website}</p>
          <p>{phone}</p>
          <address>
            <strong>Address:</strong> <br />
            <i>City: {address.city}</i> <br />
            <i>Street: {address.street}</i> <br />
            <i>Suite: {address.suite}</i> <br />
            <i>Zipcode: {address.zipcode}</i>
          </address>
          <button className={userData.backBtn} onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
    </>
  );
}

