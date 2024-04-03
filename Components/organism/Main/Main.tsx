import Link from "next/link";

function Main() {
     return (
          <div>
               <div className="hero min-h-[80vh] bg-base-200">
                    <div className="hero-content text-center">
                         <div className="">
                              <h1 className="text-5xl font-bold text-center uppercase ">
                                   The hassle-free <br /> <span className="text-[#65C3C8] underline">README</span>
                              </h1>
                              <p className="py-6">
                                   Effortlessly customize your project&apos;s README with our intuitive editor. <br /> Add and tailor sections quickly to fit your project&apos;s needs.
                              </p>
                              <Link href="/editor">
                                   {" "}
                                   <button className="btn bg-[#65C3C8]">Get Started</button>
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Main;
