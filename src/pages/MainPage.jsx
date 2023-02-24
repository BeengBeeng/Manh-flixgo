import React from "react";
import NavbarManh from "../components/navbar/NavbarManh";
import Theend from "../components/theend/Theend";
import { Outlet } from "react-router-dom";
export default function MainPage() {
  return (
    <div>
      <NavbarManh />
      <Outlet />
      <Theend />
    </div>
  );
}
