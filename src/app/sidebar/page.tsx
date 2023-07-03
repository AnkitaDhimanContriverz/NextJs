"use client";

import { createContext, useContext, useState } from "react";
import Image from "next/image";
import imageShow from "../download.png";
const SideBarContext = createContext({});

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState();

  return (
    <SideBarContext.Provider value={{ isOpen }}>
      <OpenSideBar />
    </SideBarContext.Provider>
  );
}
function OpenSideBar() {
  const isOpen = useContext(SideBarContext);
  return (
    <div
      style={{
        display: "grid",
        gridGap: "8px",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, auto))",
      }}
    >
      {isOpen && (
        <div style={{ position: "relative", height: "400px" }}>
          {" "}
          <Image
            alt="demo image"
            src={imageShow}
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "contain", // cover, contain, none
            }}
          />
        </div>
      )}
    </div>
  );
}
