import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
     return (
          <div className="App">
               <header className="img-header d-flex justify-content-center align-items-center flex-column">
                    <h1 className="text-uppercase p-2 display-1 text-white">
                         Park now
                    </h1>
                    <Link to="/login" className="Link">
                         <h2 className="py-2 px-5 rounded border">Entrar</h2>
                    </Link>
               </header>
               <h2 className="text-center text-uppercase my-5 py-5">
                    Quem somos?
               </h2>
               <section className="img-apresenta container-fluid row text-white full-center">
                    <h2 className="text-center text-uppercase py-3 col-12">
                         Como funciona?
                    </h2>
                    <div className="col-sm-12 col-xl-4 my-3 text-center">
                         <h4 className="text-uppercase">Mapa</h4>
                         <p className="px-5 py-2">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Blanditiis neque nemo, unde, rem rerum
                              ducimus recusandae ullam, mollitia accusamus nisi
                              hic. Doloribus, consequatur earum assumenda
                              laborum unde placeat tenetur pariatur?
                         </p>
                    </div>
                    <div className="col-sm-12 col-xl-4 my-3 text-center">
                         <h4 className="text-uppercase">Agendamento</h4>
                         <p className="px-5 py-2">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Blanditiis neque nemo, unde, rem rerum
                              ducimus recusandae ullam, mollitia accusamus nisi
                              hic. Doloribus, consequatur earum assumenda
                              laborum unde placeat tenetur pariatur?
                         </p>
                    </div>
                    <div className="col-sm-12 col-xl-4 my-3 text-center">
                         <h4 className="text-uppercase">Descontos</h4>
                         <p className="px-5 py-2">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Blanditiis neque nemo, unde, rem rerum
                              ducimus recusandae ullam, mollitia accusamus nisi
                              hic. Doloribus, consequatur earum assumenda
                              laborum unde placeat tenetur pariatur?
                         </p>
                    </div>
               </section>

               <footer className="bg-dark p-5 text-white">Park now</footer>
          </div>
     );
}
