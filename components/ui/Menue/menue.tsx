import { Side_bar_data } from "constants/side_bar_data"
import Link from "next/link"

const Menue_dashboard = () => {
  return (
    <div className='flex flex-col min-h-full'>
        {Side_bar_data.map((obj, index) => (
        <div 
            className={`flex flex-col ${index > 0 ? 'mt-8' : ''}`} 
            key={obj.id}>
                    <span className="hidden tablet:block laptop:block desktop:block">
                        {obj.title}
                    </span>
            {obj.items.map((items)=>(
                <Link 
                    href={items.href} 
                    key={items.label}
                    className="flex items-center justify-start p-4">

                        <div className="flex items-start p-2">
                            {items.icon}
                        </div>
                    
                        <span className="hidden laptop:block desktop:block">
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