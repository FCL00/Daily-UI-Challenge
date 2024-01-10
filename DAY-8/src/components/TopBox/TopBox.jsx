import React from "react";
import { topDealUsers } from "@/data/data";
import "./TopBox.css";
const TopBox = () => {
  return (
    <div className="topBox">
      <h1 className="header-title">Top Deals</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img className="avatars" src={user.img} alt="" />
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
