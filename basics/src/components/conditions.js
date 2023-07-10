import React from 'react'

function Conditions (props)
{

const age = 22;

return <div>
    
    {age>12 ?
     <div> you are older than 12 . </div> : 
     <div>you are smaller than 12.</div>
     }

     {age > 20 ? 
     <div>You are older than 20 </div>:null

     }

</div>
}

export default Conditions;
