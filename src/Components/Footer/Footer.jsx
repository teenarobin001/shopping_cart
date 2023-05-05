import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div> 
          <hr className="h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none" /> 
        <div className="flex items-center justify-around p-4 bg-black "> 
          <div>
            <p className="text-white text-sm font-inter no-underline normal-case">
              Copyright {year} page by store
            </p>
          </div>
        </div>
      </div>
    );
}

export default Footer
