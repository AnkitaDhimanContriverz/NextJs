"use client";
import type { NextPage } from "next";
import { FormEvent, useState } from "react";

const Form: NextPage = () => {
  const [email, setEmail] = useState("");

  async function saveFormData(data: object) {
    return (
      await fetch("/api/form"),
      {
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      }
    );
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await saveFormData({ email: email });
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
