import { Side_bar_data } from "constants/side_bar_data"
import Link from "next/link"
import Image from "next/image"

const Menue_dashboard = () => {
  return (
    <div className='mt-8 text-sm'>
        {Side_bar_data.map((obj) => (
        <div className="flex flex-col gap-4 p-4" key={obj.title}>
            <span className="hidden lg:blockc text-gray-500 font-bold mb-4">{obj.title}</span>
            {obj.items.map((items)=>(
                <Link 
                    href={items.href} 
                    key={items.label}
                    className="flex items-center justify-center lg:justify-start gap-4 text-gray-400 py-4"
                >
                    {items.icon}
                    <span className="hidden lg:block text-black m-4 p-4 gap-4 py-4">
                        {items.label}
                    </span>
                </Link>
            ))}
        </div>   
    ))
}


    </div>
  )
}

export default Menue_dashboard