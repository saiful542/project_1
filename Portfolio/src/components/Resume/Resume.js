import React from 'react';
const Resume = () => {
    return (
        <div className=" m-20 rounded-lg overflow-hidden">
            <div >
                <embed src="/assets/files/myResume.pdf" type="application/pdf" width="100%" height="800px" />
            </div>
        </div>
    );
};

export default Resume;