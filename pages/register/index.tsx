import CrudUsuario from "../../components/CrudUsuario";
import NavBar from "../../components/NavBar";
function Register(){
    return (
        <>
         <NavBar/>
        {/* <div className="w-100 h-100 flex justify-center">
        <ul className="steps">
        <li className="step step-primary">Register</li>
        <li className="step step-primary">Choose plan</li>
        <li className="step">Purchase</li>
        <li className="step">Receive Product</li>
        </ul>
        </div> */}
        <CrudUsuario/>
        </> 
    )

}

export default Register;
