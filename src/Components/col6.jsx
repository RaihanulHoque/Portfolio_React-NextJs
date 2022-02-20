import React, { useState } from 'react';

const HalfCol = ({children}) => {
    return <div className='col-md-6' style={{ width:"50%", backgroundColor:"red", textAlign:"center" }} >       
        <div style={{ width:"50%", border:"2px solid green" }}>{children}</div> 
    </div>
};
export default HalfCol;