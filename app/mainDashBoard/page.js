"use client";
import React from 'react';
import DashboardNavbar from '../(components)/dashboardNavbar';
import Tabs from '../(components)/tabs';

import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/config/firebase';

const initialState = { email: "", password: "" };

export default function Page() {
  const [state, setState] = useState(initialState);
  const [user, setUser] = useState(null); // Initialize user as null.

  useEffect(() => {
    // Listen to changes in user authentication state.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Set the user if authenticated.
      } else {
        setUser(null); // Set user as null if not authenticated.
      }
    });

    // Cleanup the subscription when the component unmounts.
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = state;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User Logged In successfully");
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });

    console.log(state);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="">
        <div className="">
          {user && user.email ? (
            <>
              {/* <div className="text-center flex justify-evenly">
                <button
                  className='bg-blue-600 py-3 m-1 px-5 text-white rounded-lg'
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div> */}
              <DashboardNavbar />


            </>
          ) : (
            <div className='rounded-xl card items-center justify-center flex py-8 '>
              <div className="">
                <h2 className="text-3xl font-semibold text-center text-blue-600 mb-4">Login Form</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-600 text-lg font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border rounded-lg bg-gray-100"
                      placeholder="Your email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-600 text-lg font-semibold mb-2">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="w-full px-4 py-2 border rounded-lg bg-gray-100"
                      placeholder="Your password"
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white text-lg font-semibold py-2 rounded-lg hover:bg-blue-700"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
