'use client'
import { Dropdown } from "flowbite-react"
import Pdfcard from "@/components/pdfcard"
interface CardProps {
  title: string;
  description: string;
}


const page:React.FC=()=> {
// data fetch from api title---> sub name description---> year 
  const cards = [
    { id:1, title: 'Card 1', description: 'This is the description for card 1.' },
    {  id:2,title: 'Card 2', description: 'This is the description for card 2.' },
    { id:3,title: 'Card 3', description: 'This is the description for card 3.' },
    { id:4,title: 'Card 4', description: 'This is the description for card 4.' },
    { id:5,title: 'Card 5', description: 'This is the description for card 5.' },
    { id:6,title: 'Card 6', description: 'This is the description for card 6.' },
    { id:7,title: 'Card 7', description: 'This is the description for card 7.' },
    { id:8,title: 'Card 8', description: 'This is the description for card 8.' },
    { id:9,title: 'Card 9', description: 'This is the description for card 9.' },
  ];

  return (
  
<div className='min-h-screen w-full flex flex-col items-center  overflow-hidden mx-auto py-10 md:py-0  '>

    <div className='w-full flex flex-col items-center justify-center mt-[3rem]'>
      <h1 className='text-2xl text-center font-serif uppercase'>Find Your Paper</h1>
      
      <div className="w-full max-w-4xl px-4 flex flex-wrap justify-between items-center mt-5 gap-2">
        <Dropdown label="Branch" className="flex-1 min-w-[150px]">
          <Dropdown.Item>hello</Dropdown.Item>
        </Dropdown>
        
        <Dropdown label="Semester" className="flex-1 min-w-[150px]">
          <Dropdown.Item>hello</Dropdown.Item>
        </Dropdown>
        
        <Dropdown label="Subject" className="flex-1 min-w-[150px]">
          <Dropdown.Item>hello</Dropdown.Item>
        </Dropdown>
      </div>
    </div>

    <div className="p-6 flex w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-[80%] mx-auto p-2  ">
        {cards.map((data) => (
          <Pdfcard 
          
            key={data.id} 
            description={data.description} 
            title={data.title} 
          />
        ))}
      </div>
    </div>
 
</div>
  )
}

export default page