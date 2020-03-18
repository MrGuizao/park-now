import React from "react";

export default function Login() {
     return (
          <div className="full-screen d-flex justify-content-center align-items-center flex-column">
               <form
                    action=""
                    className="short-screen border rounded text-center"
               >
                    <h1 className="text-uppercase py-3">Login</h1>
                    <div className="form-inline my-2 d-flex justify-content-center flex-row">
                         <label htmlFor="email">E-mail: </label>
                         <input
                              type="email"
                              className="form-control"
                              required
                         />
                    </div>
                    <div className="form-inline my-2 d-flex justify-content-center flex-row">
                         <label htmlFor="senha">Senha: </label>
                         <input
                              type="password"
                              className="form-control"
                              required
                              minLength="6"
                              maxLength="16"
                         />
                    </div>
                    <button className="btn btn-primary my-2 px-5">Login</button>
               </form>
          </div>
     );
}
