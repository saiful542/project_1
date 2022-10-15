import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import content from '../content';
import useWindowPosition from '../hook/useWindowPosition';

export default function Work() {
  const animated = useWindowPosition('header', 0.6);
  return (
    <div>
      <div
        className="min-h-screen flex justify-center items-center flex-col"
        style={{
          background: '#FEFEFE',
        }}
        id="mywork"
      >
        <h1 className="text-5xl font-dosis font-bold">{content.work.title}</h1>
        <p className="text-gray-600 text-2xl font-dosis mb-10">I have done</p>
        <div className="flex flex-col md:flex-row justify-between items-center w-11/12 ">
          <LazyLoadImage
            // effect="blur"
            placeholderSrc="img"
            src="https://i.ibb.co/m68gHS5/a.png"
            alt=""
            className="m-5  transtion duration-2000 ease-in-out z-10  md:w-3/5 w-4/5 "
          />
          <div
            className="transtion duration-2000 ease-in-out p-10 max-w-xl lg:max-w-3xl rounded-lg hidden md:block"
            style={{
              border: '1px solid #e5ecf9',
              transform: animated
                ? 'translate(-10%, 0%) rotate3d(0.540, -0.95, 0, 22deg) rotateZ(7deg)'
                : '',
              boxShadow:
                '35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)',
            }}
          >
            <ProjectDetail_1 />
          </div>
          <div className="flex justify-center items-center md:hidden">
            <ProjectDetail_1 />
          </div>
        </div>
      </div>


      <div
        className="min-h-screen flex justify-center items-center flex-col"
        style={{
          background: '#FEFEFE',
        }}
        id="mywork"
      >
        
        <div className="flex flex-col md:flex-row justify-between items-center w-11/12 ">
          <LazyLoadImage
            // effect="blur"
            placeholderSrc="img"
            src="https://i.ibb.co/2FTZ8fw/ds.png"
            alt=""
            className="m-5  transtion duration-2000 ease-in-out z-10  md:w-3/5 w-4/5 "
          />
          <div
            className="transtion duration-2000 ease-in-out p-10 max-w-xl lg:max-w-3xl rounded-lg hidden md:block"
            style={{
              border: '1px solid #e5ecf9',
              transform: animated
                ? 'translate(-10%, 0%) rotate3d(0.540, -0.95, 0, 22deg) rotateZ(7deg)'
                : '',
              boxShadow:
                '35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)',
            }}
          >
            <ProjectDetail_2 />
          </div>
          <div className="flex justify-center items-center md:hidden">
            <ProjectDetail_2 />
          </div>
        </div>
      </div>


      <div
        className="min-h-screen flex justify-center items-center flex-col"
        style={{
          background: '#FEFEFE',
        }}
        id="mywork"
      >
        
        <div className="flex flex-col md:flex-row justify-between items-center w-11/12 ">
          <LazyLoadImage
            // effect="blur"
            placeholderSrc="img"
            src="https://i.ibb.co/frsrXK8/e.png"
            alt=""
            className="m-5  transtion duration-2000 ease-in-out z-10  md:w-3/5 w-4/5 "
          />
          <div
            className="transtion duration-2000 ease-in-out p-10 max-w-xl lg:max-w-3xl rounded-lg hidden md:block"
            style={{
              border: '1px solid #e5ecf9',
              transform: animated
                ? 'translate(-10%, 0%) rotate3d(0.540, -0.95, 0, 22deg) rotateZ(7deg)'
                : '',
              boxShadow:
                '35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)',
            }}
          >
            <ProjectDetail_3 />
          </div>
          <div className="flex justify-center items-center md:hidden">
            <ProjectDetail_3 />
          </div>
        </div>
      </div>
    </div>
  );
}

const ProjectDetail_1 = () => {
  const animated = useWindowPosition('header', 0.6);
  return (
    <div>
      <h1
        className={` ${animated ? '' : 'translate-y-10 opacity-0'
          }   transform transition duration-2000 inline-block m-4  font-dosis text-xl font-bold`}
      >
        Camera Zone
      </h1>
      <p
        className={`${animated ? '' : 'translate-y-10 opacity-0'
          }  transform transition duration-2000 inline-block w-11/12 m-4  text-xl font-dosis`}
      >
        This web app is developed based on MERN stack. It is full responsive site.
        <br />
        Used firebase for authentication
      </p>
      <a href="https://camera-zone.web.app/"><button
        className={`${animated ? '' : 'translate-y-10 opacity-0'
          } transform transition duration-2000  px-20 py-3 m-4 bg-black flex justify-around text-white rounded-lg shadow-2xl`}
      >
        <p className="text-lg">Website</p>
      </button>
      </a>
    </div>
  );
};

const ProjectDetail_2 = () => {
  const animated = useWindowPosition('header', 0.6);
  return (
    <div>
      <h1
        className={` ${animated ? '' : 'translate-y-10 opacity-0'
          }   transform transition duration-2000 inline-block m-4  font-dosis text-xl font-bold`}
      >
        Destination
      </h1>
      <p
        className={`${animated ? '' : 'translate-y-10 opacity-0'
          }  transform transition duration-2000 inline-block w-11/12 m-4  text-xl font-dosis`}
      >
        This web app is developed based on MERN stack. It is full responsive site.
        <br />
        Used firebase for authentication
      </p>
      <a href="https://destination-9a155.web.app/Home"><button
        className={`${animated ? '' : 'translate-y-10 opacity-0'
          } transform transition duration-2000  px-20 py-3 m-4 bg-black flex justify-around text-white rounded-lg shadow-2xl`}
      >
        <p className="text-lg">Website</p>
      </button>
      </a>
    </div>
  );
};

const ProjectDetail_3 = () => {
  const animated = useWindowPosition('header', 0.6);
  return (
    <div>
      <h1
        className={` ${animated ? '' : 'translate-y-10 opacity-0'
          }   transform transition duration-2000 inline-block m-4  font-dosis text-xl font-bold`}
      >
        Eye care
      </h1>
      <p
        className={`${animated ? '' : 'translate-y-10 opacity-0'
          }  transform transition duration-2000 inline-block w-11/12 m-4  text-xl font-dosis`}
      >
        This web app is developed based on React components. It is full responsive site
        <br />
        You will get the best user experience
      </p>
      <a href="https://eye-care-1725d.web.app/Home"><button
        className={`${animated ? '' : 'translate-y-10 opacity-0'
          } transform transition duration-2000  px-20 py-3 m-4 bg-black flex justify-around text-white rounded-lg shadow-2xl`}
      >
        <p className="text-lg">Website</p>
      </button>
      </a>
    </div>
  );
};
