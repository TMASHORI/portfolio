"use client"


const button = ({view,setView}) => {
  return (
    <>
        <button className={styles.button} onClick={()=>setView(!view)}>Click</button>
    </>
  )
}

export default button
