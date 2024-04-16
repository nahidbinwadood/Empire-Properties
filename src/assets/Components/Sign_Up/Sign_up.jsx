const Sign_up = () => {
  return (
    // <div className="hero min-h-screen bg-base-200">
    //   <div className="hero-content flex-col lg:flex gap-12">
    //     <div className="text-center lg:text-left">
    //       <h1 className="text-5xl font-bold">Sign Up now!</h1>
          
    //     </div>
    //     <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    //       <form className="card-body">
    //         <div className="form-control">
    //           <label className="label">
    //             <span className="label-text">Email</span>
    //           </label>
    //           <input
    //             type="email"
    //             placeholder="email"
    //             className="input  input-bordered"
    //             required
    //           />
    //         </div>
    //         <div className="form-control">
    //           <label className="label">
    //             <span className="label-text">Password</span>
    //           </label>
    //           <input
    //             type="password"
    //             placeholder="password"
    //             className="input input-bordered"
    //             required
    //           />
    //           <label className="label">
    //             <a href="#" className="label-text-alt link link-hover">
    //               Forgot password?
    //             </a>
    //           </label>
    //         </div>
    //         <div className="form-control mt-6">
    //           <button className="btn btn-primary">Sign Up</button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <div className="container mx-auto">
        <h2 className="pp text-5xl mt-20 text-center font-bold mb-20">Sign Up </h2>
        <div className="container mx-auto">
            <form className="border-2 border-gray-500 p-8 rounded-xl">
                <div className="w-1/2 mx-auto flex  flex-col  gap-2 mb-6">
                    <label className="pp font-semibold text-xl" htmlFor="">Name:</label>
                    <input type="text" name="name" id="" className="input input-bordered w-full"/>
                </div>
                <div className="w-1/2 mx-auto flex flex-col gap-2 mb-6">
                    <label className="pp font-semibold text-xl" htmlFor="">Email:</label>
                    <input type="email" name="email" id="" className="input input-bordered w-full"/>
                </div>
                <div className="w-1/2 mx-auto flex flex-col gap-2 mb-6">
                    <label className="pp font-semibold text-xl" htmlFor="">Password:</label>
                    <input type="password" name="password" id="" className="input input-bordered w-full"/>
                </div>
                <div className="w-1/2 mx-auto flex flex-col gap-2 mb-6">
                    <label className="pp font-semibold text-xl" htmlFor="">Name:</label>
                    <input type="text" name="name" id="" className="input input-bordered w-full"/>
                </div>

                <div className="w-1/2 mx-auto flex flex-col gap-2 mb-6">
                <button  className="mr-4 md:mr-0 px-4 py-2 lg:px-6 lg:py-3 rounded-lg hover:scale-105 cursor-pointer transition text-white pp font-semibold lg:text-lg bg-[#59C6D2] ">Sign Up </button>
                </div>
            </form>
        </div>
    </div>  
  );
};

export default Sign_up;
