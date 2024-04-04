import { useForm } from "react-hook-form"
import chicadog from "../../img/ChicayDog.jpg"
import paw from "../../img/Paw.png"
import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"




function LoginPage() {

    const {register, handleSubmit, formState:{errors}} = useForm();
    const {signin, errors: signinErrors} = useAuth();
    const onSubmit = handleSubmit(data =>{
        signin(data) 
    });

    return (
        <>
        <div className="bg-white h-[100vh] flex items-center justify-center">
            <section className="w-[45%] h-[100%] flex items-center justify-start ">
                <img src={chicadog} className="h-[100%] w-[100%] " />
            </section>

            <section className="w-[55%] h-[100%]  ">

                <div className="h-[20%] mt-[10%] w-[100%] flex items-center justify-center ">
                    <img src={paw} className="h-[80%] "/>
                    <h1 className="text-yellow-500 text-2xl font-bold">Paw </h1>
                    <h1 className="text-cyan-800 text-2xl font-bold">-Paseo</h1>  
                </div>

                <div className=" h-[60%] w-[100%] text-center mt-[5%]">
                    {
                        signinErrors.map((error,i)=>(
                            <div className="bg-red-500" key={i} >
                                {error}
                            </div>
                        ))
                    }
                    <form onSubmit={onSubmit}>
                        <h1 className="text-black justify-start w-[100%]">Ingresa tu correo</h1>
                        <input type="email" 
                        { ... register('email', {required: true})}
                        className="w-[60%] bg-slate-300 text-black px-4 py-2 rounded-md my-2" placeholder="Email" />
                        {
                           errors.email && <p className="text-red-500 mt-[-1%]">Email es requerido</p>
                        }

                        <h1 className="text-black text-center w-[100%]">Contraseña</h1>
                        <input type="password" { ... register("password", {required:true})} 
                        className="w-[60%] bg-slate-300 text-black px-4 py-2 rounded-md my-2 " placeholder="Password" />
                        {
                           errors.password && <p className="text-red-500 mt-[-1%]">Contraseña es requerida</p>
                        }

                        <div className="w-[100%] flex items-center justify-center mt-[5%]">
                            <button className="w-[60%] h-[40px] bg-yellow-400 rounded-3xl hover:bg-yellow-500" type="submit">
                            Iniciar Seccion
                        </button>
                        </div>

                        <div className="w-[100%] flex items-center justify-center text-center text-black mt-[5%]">
                            <div>
                                <h1 className="cursor-pointer hover:border-double hover:border-b-4 hover:border-black">
                                    <Link to={"/register"}>Registrarse</Link>
                                </h1>
                                <h1 className="cursor-pointer hover:border-double hover:border-b-4 hover:border-black">olvidaste tu contraseña?</h1>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </section>
        </div>  
        </>
    )
}

export default LoginPage