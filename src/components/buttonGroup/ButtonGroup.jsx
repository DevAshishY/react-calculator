const ButtonGroup = ({btnHandler}) =>{
    const btnData = ["7","8","9","/","4","5","6","*","1","2","3","-","AC","0","=","+"]
    const clickBtn = (btnData) =>{
        btnHandler(btnData)
    }
    return(
        <>
        {
            btnData.map((item,index)=>{
                return <button className={item == 'AC' || item == '=' ?'last':'' } onClick={()=>clickBtn(item)} key={index}>{item}</button>
            })
        }
        
        </>
    )
}

export default ButtonGroup;