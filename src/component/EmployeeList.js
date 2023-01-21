const EmployeeList=(props)=>{
    console.log(props)


    /*  when a function code has single line then no need to write {}*/
   /* const renderEmployee=()=>{
   
       return  (props.employees.map((emp,index)=>{return <tr key={index}>
        <td>{emp.empid}</td>
        <td>{emp.ename}</td>
        <td>{emp.sal}</td>
    </tr>}))}*/
  const renderEmployee=()=>
   
        props.employees.map((emp,index)=> <tr key={index}>
         <td>{emp.empid}</td>
         <td>{emp.ename}</td>
         <td>{emp.sal}</td>
     </tr>)

    return(
        <div className="container">
        <div className="row">
            <div className="col-sm-12 col-md-3">
            {/*to retrieve the image from public folder folowwing 2 ways are there 
                <img src="/clock.jpg"></img> */}
                <img className="rounded" style={{width:"200px",height:"200px"}} src={process.env.PUBLIC_URL+"/clock.jpg"}></img>
            </div>
            <div className="col-sm-12 col-md-9">
            <h3>From Employee listComponent</h3>
            <table className="table table-stripped" border="2">
            <thead>
                    <tr>
                    <th>Employee id</th>
                    <th>Employee Name</th>
                    <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {renderEmployee()}
                </tbody>
            </table>
            </div> 
        </div>
        </div>
    )
}

export default EmployeeList;