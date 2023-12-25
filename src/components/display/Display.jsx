const Display = (props) =>{
    return(
        <div className='inputArea'>
     <input type="text" value={props.displayValue} readOnly/>
      </div>
    )
}

export default Display;