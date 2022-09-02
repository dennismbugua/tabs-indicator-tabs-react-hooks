import React from 'react'

export const Tabs = ({
   options,
   onChange,
   value,
   renderTab = defaultTab,
}) => {

   return (
      <>
         <div className="tabs">
            {options.map((tab) => {
               return (
                  <div 
                     key={tab.value} 
                     className={`tabs__item tabs__item${tab.value}`} 
                     onClick={() => onChange(tab)}
                  >
                     {defaultTab(value) && renderTab(tab.label)}
                  </div>
               )
            })}
         </div>
      </>
   )
}

const defaultTab = (value) => {
   return (
      <button className='tabs__button'>
         {value.label}
      </button>
   )
}