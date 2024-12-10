import { IconListSearch } from '@tabler/icons-react'
import { IconBell } from '@tabler/icons-react'
import { IconUserCircle } from '@tabler/icons-react'
import { IconMail } from '@tabler/icons-react'

const Navbar = () => {
  return (
    <div className="relative flex flex-col">

      {/* Left: Search bar */}
      <div className='absolute flex items-start justify-start p-2 left-3 top-2 phone_rs:p-4 w-1/3'> 

        <IconListSearch 
          stroke={1} 
          viewBox='0 0 25 25' 
          width={45} 
          height={50}  
          className='items-center justify-center'
          />        
        <input 
          type="text" 
          placeholder='Search'
          className="grow rounded-full h-12"
        />
      </div>

      {/* Right: Icon */}
      <div className='absolute flex justify-evenly top-5 right-4 w-1/3'>
        <IconBell
          stroke={1}
          viewBox='0 0 25 25' 
          width={45} 
          height={50}  
          className='items-center justify-center cursor-pointer'
        />
        <IconMail
          stroke={1}
          viewBox='0 0 25 25' 
          width={45} 
          height={50}  
          className='items-center justify-center cursor-pointer'
        />
        <IconUserCircle
          stroke={1}
          viewBox='0 0 25 25' 
          width={45} 
          height={50}  
          className='items-center justify-center cursor-pointer'
        />
      </div>

    </div>  
  )
}

export default Navbar