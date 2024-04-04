import { useForm } from "react-hook-form"
import { useAuth } from "../../context/AuthContext";
import chicadog from "../../img/ChicayDog.jpg"
import paw from "../../img/Paw.png"
import { FcGoogle } from "react-icons/fc";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {

    const {register, handleSubmit, formState:{errors} } = useForm();
    const {signup, isAuthenticated, errors: registerErrors} = useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit (async (values) => {
        signup(values);
        })

    useEffect(()=>{
        if (isAuthenticated) navigate("/tasks");
    }, [isAuthenticated] )

    return (
        <>
        <div className="bg-white h-[100vh] flex items-center justify-center">
            <section className="w-[45%] h-[100%] flex items-center justify-start ">
                <img src={chicadog} className="h-[100%] w-[100%] " />
            </section>

            <section className="w-[55%] h-[100%]  ">

                <div className="h-[15%] w-[100%] flex items-center justify-center ">
                    <img src={paw} className="h-[80%] "/>
                    <h1 className="text-yellow-500 text-2xl font-bold">Paw </h1>
                    <h1 className="text-cyan-800 text-2xl font-bold">-Paseo</h1>  
                </div>
                
                <div className="h-[5%] w-[100%] flex items-center justify-center mt-[1%] ">
                    <FcGoogle className="h-[100%] w-[10%] border-2 mr-[5%] cursor-pointer"/>
                    <FaFacebook className="text-blue-800 h-[100%] w-[10%] border-2 cursor-pointer"/>
                    <BsTwitterX className="text-black h-[100%] w-[10%] border-2 ml-[5%] cursor-pointer"/>
                </div>
                <div className="h-[4%] w-[100%] flex items-center justify-center mt-[1%]">
                    <h1 className="text-black hover:border-double hover:border-b-4 hover:border-black cursor-pointer">
                        <Link to={"/login"}>O Iniciar Secion</Link>
                    </h1>
                </div>

                <div className="  w-[100%] text-center mt-[5%]">
                    {
                        registerErrors.map((error,i)=>(
                            <div className="bg-red-500" key={i} >
                                {error}
                            </div>
                        ))
                    }
                    <form onSubmit={onSubmit}>
                        <h1 className="text-black justify-start w-[100%]">Nombre Completo:</h1>
                        <input type="text" 
                        { ... register('username', {required: true})}
                        className="w-[60%] bg-slate-300 text-black px-4 py-2 rounded-md my-2" placeholder="Username" />
                        {
                           errors.username && <p className="text-red-500">Nombre es requerido</p>
                        }
                        
                        <h1 className="text-black text-center w-[100%]">Email:</h1>
                        <input type="email" { ... register("email", {required:true})} 
                        className="w-[60%] bg-slate-300 text-black px-4 py-2 rounded-md my-2" placeholder="Email" />
                        {
                           errors.email && <p className="text-red-500">Email es requerido</p>
                        }

                        <h1 className="text-black text-center w-[100%]">Contraseña</h1>
                        <input type="password" { ... register("password", {required:true})} 
                        className="w-[60%] bg-slate-300 text-black px-4 py-2 rounded-md my-2 " placeholder="Password" />
                        {
                           errors.password && <p className="text-red-500">Contraseña es requerida</p>
                        }

                        <div className="w-[100%] flex items-center justify-center mt-[3%]">
                            <button className="w-[60%] h-[40px] bg-yellow-400 rounded-3xl hover:bg-yellow-500 " type="submit">
                            Register
                        </button>
                        </div>
                        
                    </form>
                </div>
            </section>
        </div>  
        </>
    )
}

export default RegisterPage