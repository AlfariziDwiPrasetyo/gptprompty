"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, getProviders, useSession } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const setProvider = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setProvider();
  }, []);

  return (
    <nav className="flex-between mb-16 pt-3 w-full">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="GptPrompty"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">GptPrompty</p>
      </Link>

      {/* dekstop */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="create-prompt" className="black_btn">
              Create Prompt
            </Link>

            <button className="outline_btn" type="button" onClick={signOut}>
              Logout
            </button>

            <Link href="sign-out">
              <Image
                src="/assets/images/logo.svg"
                width={30}
                height={30}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.id}
                  className="black_btn"
                  onClick={() => signIn(provider.id)}
                  alt="Login"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile*/}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              alt="GptPrompty"
              width={30}
              height={30}
              className="object-contain"
              onClick={() => {
                setToggle((prev) => !prev);
              }}
            />

            {toggle && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggle(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-post"
                  className="dropdown_link"
                  onClick={() => setToggle(false)}
                >
                  Create Prompt
                </Link>
                <button
                  className="black_btn"
                  onClick={() => {
                    setToggle(false);
                    signOut();
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.id}
                  className="black_btn"
                  onClick={() => signIn(provider.id)}
                  alt="Login"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
