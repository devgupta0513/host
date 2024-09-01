import React from 'react'
const Redirected = () => {
    return (
        <>
            <div style={{
                display: "flex",

                justifyContent: "center",
                alignItems: "center",

                paddingRight: "50px"
            }}>
                
               {process.env.REACT_APP_TITLE}
            </div>
        </>
    )
}
export default Redirected