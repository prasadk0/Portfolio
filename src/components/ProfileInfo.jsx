import { useContext } from "react"
import { DialogContext } from "./DialogContent"

export default function ProfileInfo(){
    const {closeDialog} =useContext(DialogContext)
    return(
        <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" 
      onClick={closeDialog}
    >
      <div 
        className="bg-white rounded-lg p-6 shadow-lg w-1/3 relative" 
        onClick={(e) => e.stopPropagation()} // Prevent click inside the pop-up from closing it
      >
        <h2 className="text-2xl font-bold mb-4 text-left text-black">Hey!</h2>
        <p className="mb-4 text-left text-black">
        You can call me Prasad, I am currently working as Associate Software Consultant in Muraai information Tech. 
        </p>
        <button 
          onClick={closeDialog} 
          className="px-4 py-2 bg-[#00e1df] text-white rounded-lg shadow-md hover:bg-[#f9b92a] transition"
        >
          Close
        </button>
        <button 
          onClick={closeDialog} 
          className="absolute top-2 right-2 text-gray-400 hover:text-black text-xl"
        >
          &times;
        </button>
      </div>
    </div>
    )
}