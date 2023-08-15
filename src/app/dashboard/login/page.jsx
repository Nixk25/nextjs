"use client";

import React from "react";
import { signIn, useSession } from "next-auth/react";
import styles from "./page.module.css";

import { useRouter } from "next/navigation";
import Image from "next/image";

const Login = () => {
  const router = useRouter();

  const session = useSession();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router.push("/dashboard");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };
  return (
    <div>
      <div className={styles.container}>
        <form action="" className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            required
          />
          <button className={styles.btnLogin}>Login</button>
          <button
            className={styles.googleSignIn}
            onClick={() => signIn("google")}
          >
            Login with Google{" "}
            <span>
              <Image src="/4.png" width={40} height={40} />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
