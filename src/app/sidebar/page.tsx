"use client";
import axios from "axios";
import useSWR from "swr";
import Image from "next/image";
import imageShow from "../download.png";
import React from "react";

export default function Sidebar() {
  const [details, setDetails] = React.useState();
  const address = `https://randomuser.me/api/?results=1`;
  const getData = async () =>
    await axios
      .get(`https://randomuser.me/api/?results=1`)
      .then((res) => res.data);

  const { data, error } = useSWR(address, getData);
  if (error) <p>Error occured</p>;
  if (!data) <h1>PLease wait...</h1>;

  return (
    <div
      style={{
        display: "grid",
        gridGap: "8px",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, auto))",
      }}
    >
      <div style={{ position: "relative", height: "200px" }}>
        {" "}
        <Image
          alt="demo image"
          src={imageShow}
          fill
          sizes="(min-width: 808px) 40vw, 80vw"
          style={{
            objectFit: "contain", // cover, contain, none
          }}
        />
      </div>
      {data &&
        data.results.map((item: any) => (
          <div>
            <p>Name: {item.name.first}</p>
            <p>Age: {item.dob.age}</p>
            <p>Gender: {item.gender}</p>
            <p>Country: {item.location.country}</p>
            <p>Pin: {item.location.postcode}</p>
          </div>
        ))}
    </div>
  );
}
