import Link from "next/link";

function Navbar() {
     return (
          <div>
               <div className="navbar px-10 py-3">
                    <div className="navbar-start">
                         <a className="btn btn-ghost text-xl uppercase">Readme Editor</a>
                    </div>

                    <div className="navbar-end">
                         <Link href="https://github.com/Vivek563/Readme-File-Maker-Nextjs">
                              <button className="btn bg-[#65C3C8]">Github</button>
                         </Link>
                    </div>
               </div>
          </div>
     );
}

export default Navbar;
