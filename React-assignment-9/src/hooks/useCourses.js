import { useEffect, useState } from "react"

const useCourses = option =>{
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('./courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data));
    },[]);
    return option?[courses.slice(0,4)]:[courses];
}
export default useCourses;