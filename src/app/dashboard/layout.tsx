import Link from "next/link";
import Image from "next/image";
import Menue_dashboard from "@/components/ui/Menue/menue";
import Navbar from "@/components/ui/Navbar/navbar";

export default function Dashboard_Layout({
    children
}: Readonly<{
    children: React.ReactNode;
}>)
    {
        // if(!Authenticated){
        //     return (
        //         <Redirect to="/sign_in"/>
        //     )
        // } else
    return (
        //w and h means the default widths and heights for the component
        //w-[14%] means the default width for the div of left
        //Breakpoint: md:w, lg:w, xl:w, these reprensents the width of different screen size.
        // md:w stands for width on medium screen; lg:w stands for width for large screen, ... 
        <div className="h-screen flex">
            {/* Left */}
            <div className="w-[12%] phone_sm:w-[10%] phone_rs:w-[14%] tablet:w-[16%] laptop:w-[18%] monitor:w-[18%] bg-red-200">
                {/* Aceit Logo */} 
                <div className="flex items-center justify-center laptop:justify-start laptop:p-2">
                    <Link 
                        href="./" 
                        className="flex p-2">
                        <Image
                            src="/aceit_logo.png" 
                            alt="logo" 
                            width={40} 
                            height={40}
                        />
                    </Link>
                    <strong>
                    <span className="hidden laptop:block tablet:block px-1">AceIt</span>
                    </strong>

                </div>
                
                {/* Menur Dashboard */}
                <div className="flex flex-col items-center justify-center mt-6">
                    <Menue_dashboard/>
                </div>
            </div>
            {/* Right */}
            <div className="w-[88%] phone_sm:w-[90%] phone_rs:w-[86%] tablet:w-[84%] 
                            laptop:w-[82%] monitor:w-[82%] bg-blue-200 overflow-auto">
                <Navbar/> 
                {children}  
            </div>   
        </div>
    );
  }