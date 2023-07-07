"use client";
import type { NextPage } from "next";
import { FormEvent, useState } from "react";

const Form: NextPage = () => {
  const [email, setEmail] = useState("");

  // async function saveFormData(data: object) {
  //   console.log(data);
  //   return (
  //     await fetch("https://64a7d048dca581464b84d36d.mockapi.io/api/v1/signup"),
  //     {
  //       body: JSON.stringify(data),
  //       headers: { "Content-Type": "application/json" },
  //       method: "POST",
  //     }
  //   );
  // }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await fetch("https://64a7d048dca581464b84d36d.mockapi.io/api/v1/signup"),
      {
        body: { email: email },
        headers: { "Content-Type": "application/json" },
        method: "POST",
      };

    // await saveFormData({ email: email });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          autoComplete="email"
          name="email"
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ borderWidth: 1, margin: 5, borderColor: "black" }}
        />
      </div>
      <button
        style={{
          width: 90,
          height: 40,
          backgroundColor: "green",
          marginLeft: 60,
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
