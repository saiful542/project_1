import React from 'react';
import { Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Courses from '../Courses/Courses';
import img from "../../utilities/images/web-devlopement-cover pic.jpeg"

const Home = () => {
    const[courses]=useCourses(true);
    return (
       <div>
           <div className="d-flex justify-content-between ps-3 mb-4 bg-dark bg-gradient mx-3 ">
    
               <img className="h-50 w-50" src={img} alt="" />
           </div>
           <div>
           <h5 className="border border-1 border-dark p-2 my-3 rounded bg-secondary text-white w-25 mx-auto">Top Courses</h5>
                <Row xs={1} md={3} className="g-4">
                    {
                        courses.map(course=><Courses course={course}></Courses>)
                    }
                </Row>
           </div>
       </div>
    );
};

export default Home;