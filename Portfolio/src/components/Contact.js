import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import content from '../content';
import useWindowPosition from '../hook/useWindowPosition';

export default function Contact() {
  const animated = useWindowPosition('header', 0.6, 4);
  return (
    <div
      className=" min-h-screen  flex justify-center items-center  "
      id="mycontact"
    >
      <div
        style={{
          minHeight: '50vh',
          background: '#091C29',
        }}
        className="w-full md:w-4/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center"
      >
        <LazyLoadImage
          effect="blur"
          src={content.header.img}

          alt="profile"
          width="300px"
          className="mt-10 transtion duration-2000 ease-in-out mx-auto"
        />
        <div className="font-dosis w-4/5  md:w-2/5 mt-5 transtion duration-2000">
          <h1
            className={`${animated ? '' : 'translate-y-10 opacity-0'
              } transform transition duration-3000 text-white text-5xl font-bold`}
          >
            Contact Me
          </h1>
          <p
            className={`${animated ? '' : 'translate-y-10 opacity-0'
              } transform transition duration-3000 text-white text-2xl`}
          >


            <div  >

              <div class="">
                <div class="bg-green-400  p-12 pb-6 rounded l">
                  <input
                    class="block text-gray-900 p-1 m-4 ml-0 w-full rounded text-lg font-normal placeholder-gray-500"
                    id="email"
                    type="email"
                    placeholder="email"
                  />
                  <textarea
                    class="block text-gray-900 p-1 m-4 ml-0 w-full rounded text-lg font-normal placeholder-gray-500"
                    id="message"
                    type="text"
                    placeholder="your message"
                  />
                  <button
                    class="inline-block mt-2 bg-green-600 hover:bg-green-700 focus:bg-green-800 px-8 py-1 rounded text-white shadow-lg"
                  >
                    send
                  </button>

                </div>

              </div>
            </div>
          </p>
          <div
            className={`flex ${animated ? '' : 'translate-y-10 opacity-0'
              } transform transition duration-3000 `}
          >
            {content.contact.socials.map((social, index) => {
              return (
                <LazyLoadImage
                  effect="blur"
                  className="m-3"
                  width="50px"
                  key={index}
                  src={social.img}
                  alt={social.alt}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
