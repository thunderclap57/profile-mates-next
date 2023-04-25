import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const Child = forwardRef((props,ref)=>{
    const [data,setData] = useState('noel');
    useImperativeHandle(ref,()=>({
        log()
        {
        console.log(data);
        }
    }))

  return (
    <div>child</div>
  )
});

export default Child

export const Parent = ()=>{
    const ref = useRef();
    return(<><Child ref = {ref}/>
    <button onClick={()=>ref.current.log()}>Calling child method</button>
    </>)
}