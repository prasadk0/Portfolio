import './content.css'
import ProfileInfo from './ProfileInfo'
import { useContext } from 'react';
import { DialogContext } from './DialogContent';

export default function Content(){
  const { dialogOpen } = useContext(DialogContext);
   return(
    <>
     <div className="flex flex-row justify-center align-baseline py-10">
       <div className="w-1/2 flex flex-row justify-center align-middle">
       <div className=" my-16">
       <p className="bebas-neue-regular text-left text-[50px]">
            Frontend Developer
        </p>
        <p className='w-80 text-left text-[20px]'>
            I Like to Craft solid and Scalable Frontend Products With great user Experience.
        </p>
       </div>
       </div>
       <div className="w-1/2">
        <img src="/dev.jpg" alt="developer image" className='rounded-lg' />
       </div>
     </div>
     <div>
     {dialogOpen && <ProfileInfo/>}
     </div>
    </>
   )
}