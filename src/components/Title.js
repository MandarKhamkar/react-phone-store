import React, { Component } from "react";

export default function Title({ name, title }) {
  return (
    <h1 className="cart_title">
      {name} {title}
    </h1>
  );
}
