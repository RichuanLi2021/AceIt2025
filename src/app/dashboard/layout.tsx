import Link from "next/link";
import Image from "next/image";
import Menue_dashboard from "@/components/ui/Menue/menue";

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
            <div className="w-[18%] sm:w[8%] md:w[12%] lg:w-[16%] xl:w-[14%] bg-red-200 p-4"> 
                <Link 
                    href="./"
                    className="flex items-center justify-center lg:justify-start gap-2 w-10 sm:w-5 mb-5"
                >
                    <Image src="/aceit_logo.png" alt="logo" width={20} height={20}/>
                    <span className="hidden lg:block">AceIt</span>
                </Link>
                <div className="m-2">
                    <Menue_dashboard/>
                </div>
            </div>

            {/* Right */}
            <div className="w-[82%] sm:w[92%] md:w-[88%] lg:w-[84%] xl:w-[86%] bg-blue-200"> 
                {children}  
            </div>   
        </div>
    );
  }