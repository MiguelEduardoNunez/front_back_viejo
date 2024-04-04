import paw from "../../img/Paw.png"
import ubi from "../../img/Ubi.png"
import perrogafas from "../../img/perroGafas.jpg"
import perroniña from "../../img/perroniña.jpg"
import muchacho from "../../img/Muchacho.png"
import paseo from "../../img/Paseo.png"
import peluquero from "../../img/serviceIcons/1.png"
import huesos from "../../img/serviceIcons/2.png"
import alimento from "../../img/serviceIcons/3.png"
import paseomascota from "../../img/serviceIcons/4.png"
import cel from "../../img/Cel.png"
import { AiOutlineRight } from "react-icons/ai";
import { GiFrisbee } from "react-icons/gi";
import { MdOutlinePets  } from "react-icons/md";
import { PiBone } from "react-icons/pi";
import { CiBaseball } from "react-icons/ci";
import { FaXTwitter, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import uno from "../../img/1.png"
import dos from "../../img/2.png"
import tres from "../../img/3.png"
import { Link } from "react-router-dom"



function Home() {
    return (
    <>

        {/* PARTE 1 */}

        <div className='bg-white h-[100vh]'>
            <header id="inicio" className="bg-slate-100 h-[15%] flex items-center justify-between">

                <div className="h-[100%] flex items-center justify-center">
                  <img src={paw} className="h-[80%] "/>
                <h1 className="text-yellow-500 text-2xl font-bold">Paw </h1>
                <h1 className="text-cyan-800 text-2xl font-bold">-Paseo</h1>  
                </div>

                <div className="h-[100%] flex items-center justify-center">
                    <a href="#inicio" className="text-black m-2 hover:border-double hover:border-b-4 hover:border-black">Inicio</a>
                    <a href="#servicios" className="text-black m-2 hover:border-double hover:border-b-4 hover:border-black">Nuestros Servicios</a>
                    <a href="#sobreapp" className="text-black m-2 hover:border-double hover:border-b-4 hover:border-black">Sobre la App</a>
                    <a href="#nosotros" className="text-black m-2 hover:border-double hover:border-b-4 hover:border-black">Nosotros</a>
                    <a href="#reseñas" className="text-black m-2 hover:border-double hover:border-b-4 hover:border-black">Reseñas</a>
                </div>

                <div className="h-[100%] flex items-center justify-center">
                    <button className="bg-yellow-400 m-2 rounded-xl w-32 hover:bg-yellow-500">
                        <Link to="/login" >Iniciar Secion </Link>
                        </button>
                </div>
            </header>

            <main className="h-[85%] flex items-center justify-between">
                <section className="w-[45%] h-[100%] flex items-center justify-center">
                    <div className="bg-yellow-500 h-[70%] w-[60%] rounded-full flex items-center justify-center mb-[20%]">
                        <img src={ubi} className="mr-[-20%] mt-[100%] z-10 h-[20%]"/>
                        <img src={cel} className="h-[120%] rounded-3xl mt-[50%] mr-[5%] " />
                        <img src={paseo} className="ml-[-20%] mt-[60%] z-10 h-[20%]" />
                    </div>
                </section>
                <section className="w-[55%] h-[100%] flex items-center justify-between">
                    <div className="w-[100%] h-[70%] text-center">
                        <div className=" w-[100%] flex items-center justify-center text-center">
                            <h1 className="text-yellow-500 text-7xl font-bold">Paw </h1>
                            <h1 className="text-cyan-800 text-7xl font-bold">-Paseo</h1>  
                        </div>  

                        <h1 className="text-black ml-[15%] mr-[15%] mt-[10%]">¡Con nuestra aplicación, encontrarás al paseador de perros</h1>
                        <h1 className="text-black ml-[15%] mr-[15%]">perfecto para tu mejor amigo en cuestión de minutos!</h1>

                        <button className="bg-yellow-400 rounded-xl mt-[10%] w-[60%] h-[15%] hover:bg-yellow-500">Descarga Aquí</button>
                    </div>
                
                </section>
            </main>
        </div>


        {/* PARTE 2  Nuestros servicios*/}


        <div className='bg-white h-[100vh]'>

            <section id="servicios" className="bg-slate-100 h-[10%] flex items-center justify-start">
                <h1 className="text-black ml-[10%] border-b-4 border-blue-400 border-double">Nuestros Servicios</h1>
            </section>
            
            <header className="bg-slate-100 h-[30%] flex items-center justify-evenly">
                
                    <MdOutlinePets className= 'mr-[-10%] mt-[10%] text-6xl z-10 text-yellow-600 rotate-[-100deg]'></MdOutlinePets>

                    <div className="h-[90%] w-[11%] text-center text-black border-blue-200 bg-blue-100 border-2">
                        <img src={peluquero} className="ml-[23%] mt-[10%]"/>
                        <h1>Peluqueria</h1>
                    </div>

                    <div className="h-[90%] text-center text-black border-blue-200 bg-blue-100 border-2">
                        <img src={huesos} className=" ml-[25%] mt-[20%]  "/>
                        <h1 className="mt-[10%]">  Atención Sanitaria</h1>
                    </div>

                    <MdOutlinePets className= 'mr-[-10%] mt-[-15%] text-6xl z-10 text-violet-600 rotate-[-10deg]'></MdOutlinePets>

                    <div className="h-[90%] w-[11%] text-center text-black border-blue-200 bg-blue-100 border-2">
                        <img src={alimento} className="ml-[10%] mt-[10%]"/>
                        <h1 className="mt-[10%]">Alimentación</h1>
                    </div>

                    <div className="h-[90%] w-[11%] text-center text-black border-blue-200 bg-blue-100 border-2">
                        <img src={paseomascota} className="ml-[23%] mt-[20%]"/>
                        <h1>Paseos</h1>
                    </div>

                    <MdOutlinePets className= 'ml-[-10%] mt-[-15%] text-6xl z-10 text-fuchsia-500 rotate-[50deg]'></MdOutlinePets>
                     
            </header>

            <main id="sobreapp" className="h-[60%] flex items-center justify-center">
                <section className="w-[45%] h-[100%] ml-[5%] text-black text-center">
                    <h1 className="text-3xl font-mono mt-[5%]">Sobre la App</h1>
                    <h1 className="text-sm mt-[5%]">Una aplicación móvil que permita a los dueños de mascotas programar paseos seguros y confiables para sus
                        animales de compañía. La aplicación se centrará en brindar una interfaz intuitiva y amigable tanto para los
                        dueños de mascotas como para los paseadores. Incluirá características como registro y certificación de
                        paseadores, programación de paseos personalizables, seguimiento en tiempo real, sistema de
                        retroalimentación y reseñas, y medidas sólidas de seguridad de datos. Tambien incluira ubicaciones de
                        veterinarias y tiendas de mascostas cercanas a su ubicacion.</h1>
                    <button className="flex items-center justify-center mt-[5%] bg-yellow-400 hover:bg-yellow-500 rounded-lg text-white w-[20%] h-[10%] ml-[40%]">
                        <h1>Explorar Más</h1>
                        <AiOutlineRight></AiOutlineRight>
                    </button>
                </section>
                <section className="w-[50%] h-[100%] flex items-center justify-center">
                    <img src={muchacho} className="h-[100%]" />
                </section>
            </main>

        </div>


        {/* PARTE 3 Nosotros,misión y visión*/}


        <div className="bg-white h-[100vh]">
            <section id="nosotros" className="h-[40%] flex items-center justify-center">

                <div className="w-[100%] h-[100%] flex items-center justify-center">

                    <CiBaseball className="text-blue-200 text-5xl z-10 mt-[-10%]"/>

                    <div className="text-black text-xs w-[30%] text-center" >
                        <h1 className="text-5xl font-mono" >Nosotros</h1>
                        <h1>
                            Somos un equipo de cuatro apasionados por los animales y la tecnología, 
                            unidos por el sueño de transformar la forma en que los dueños cuidan del 
                            bienestar de sus amigos peludos.Estudiamos desarrollo de software y estamos
                            comprometidos con la creación de una aplicación móvil innovadora que facilite
                            la vida de los dueños de mascotas y, al mismo tiempo, genere oportunidades
                            para los amantes de los animales.
                        </h1>
                    </div> 

                    <PiBone className="text-blue-200 text-5xl z-10 ml-[-5%] mb-[-13%] rotate-[30deg]" />

                    <GiFrisbee className="text-blue-200 text-5xl z-10 mt-[-10%] " />
                    
                </div>
            </section>

            <section className=" h-[60%] flex items-center justify-center ">

                <div className="w-[50%] h-[100%] flex items-center justify-center">
                    <div className="w-[80%] text-center ">
                        <h1 className="text-4xl font-mono text-black">Misión</h1>
                        <h1 className="text-black">
                            Conectar a los dueños de mascotas con paseadores profesionales y confiables,
                            a través de una aplicación móvil intuitiva y segura, que ofrece una experiencia
                            excepcional para ambas partes.
                        </h1>
                        <img src={perroniña} className="w-[60%] ml-[20%] rounded-3xl "/>
                    </div>
                </div>

                <div className="w-[50%] h-[100%] flex items-center justify-center">
                    <div className="w-[80%] text-center ">

                        <img src={perrogafas} className="w-[60%] ml-[20%] rounded-3xl "/>

                        <h1 className="text-4xl font-mono text-black">Visión</h1>
                        <h1 className="text-black">
                            Ser la plataforma líder en Latinoamérica para paseos de mascotas seguros,
                            confiables y convenientes, transformando la forma en que los dueños cuidan
                            del bienestar de sus amigos peludos.
                        </h1>
                        
                    </div>
                </div>
            </section>
        </div>

        {/* PARTE 4 Carrusel*/}


        <div className="bg-white h-[100vh]">
            <section id="reseñas" className=" h-[10%] flex items-center justify-start">
                <h1 className="text-black ml-[10%] border-b-4 border-blue-400 border-double">Reseñas</h1>
            </section>
            <div className="h-[70%] text-black border-blue-400 border-2 rounded-3xl m-10 flex items-center justify-center">
            <Carousel infiniteLoop  showThumbs={false}   >
                <div className="flex items-center justify-center bg-yellow-400 rounded-3xl">
                    <div>
                        <img src={uno} className="h-96 "/>
                    </div>
                    
                    <div className="bg-cyan-800 rounded-3xl">
                        <p>Anna & Tobby</p>
                        <p>Amazing Products & Delivery on time.</p>
                        <div className="rating">4.2/5</div>
                    </div>
                    
                </div>

                <div className="flex items-center justify-center bg-fuchsia-500 rounded-3xl">
                    
                    
                    <div className="bg-cyan-800 rounded-3xl">
                        <p>Anna & Tobby</p>
                        <p>Amazing Products & Delivery on time.</p>
                        <div className="rating">4.2/5</div>
                    </div>
                    
                    <div>
                        <img src={dos} className="h-96 "/>
                    </div>
                </div>

                <div className="flex items-center justify-center bg-fuchsia-300 rounded-3xl">
                    <div>
                        <img src={tres} className="h-96 "/>
                    </div>
                    
                    <div className="bg-cyan-800 rounded-3xl">
                        <p>Anna & Tobby</p>
                        <p>Amazing Products & Delivery on time.</p>
                        <div className="rating">4.2/5</div>
                    </div>
                </div>
            </Carousel>
            </div>
            
        </div>

        {/* FOOTER */}
        
       <div className="bg-white h-[60vh]">
        <main className="h-[100%] bg-slate-200 flex items-center justify-center ">

            <section className="h-[100%]">

                <div className="h-[25%] mt-[1%] flex items-center justify-center">
                    <img src={paw} className="h-[80%] "/>
                    <h1 className="text-yellow-500 text-2xl font-bold">Paw </h1>
                    <h1 className="text-cyan-800 text-2xl font-bold">-Paseo</h1>  
                </div>

                <div className="h-[25%] mt-[1%] text-black flex items-center justify-evenly">
                    <section className="w-[40%]">
                        <h1 className="text-sm">
                            Paw-Paseo es una excelente opción para los dueños de mascotas
                            que buscan una manera segura y conveniente de pasear a sus mascotas.
                            La aplicación es fácil de usar y ofrece una variedad de características
                            que la convierten en una herramienta valiosa para los dueños de mascotas.
                        </h1>
                    </section>

                    <section className="w-[1px] h-[100%] border-black border-2">
                    </section>

                    <section className=" w-[40%] flex items-center justify-evenly">
                        <div className="text-center">
                            <h1>(616)-459-8622</h1>
                            <h1>2125  Howard Street </h1>
                            <h1>Grand Rapids, MI  Michigan</h1>
                        </div>
                        <div className="text-center">
                            <h1>(616)-459-8622</h1>
                            <h1>2125  Howard Street </h1>
                            <h1>Grand Rapids, MI  Michigan</h1>
                        </div>
                    </section> 

                </div>

                <div className="h-[25%]  text-black flex items-center justify-evenly">
                    <div className="w-[30%] text-center">
                        <h1 className="mb-[10px]">Encuentranos en:</h1>
                        <div className=" flex items-center justify-evenly text-3xl">
                            <FaFacebookF/>
                            <FaInstagram/>
                            <FaWhatsapp/>
                            <FaXTwitter/>
                        </div>
                    </div>
                </div>

                <div className="h-[10%] text-center text-black flex items-center justify-evenly">
                    <div>
                        <h1>2022 © ExitoWeb, Inc. Todos los derechos reservados.</h1>
                        <h1>Términos de servicio</h1>
                    </div>
                    
                </div>
            </section>
        </main>
       </div>
    </>
    )
}

export default Home