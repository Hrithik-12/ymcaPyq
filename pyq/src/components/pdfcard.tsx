"use client";
import React from "react";
import { Button, Card } from "flowbite-react";

interface CardProps {
  title: string;
  description: string;
}
// max-w-sm
{/* <Card
          className="max-w-sm   "
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVbXvtNuIuSva4ocvU_7d2l_BjRGjXfHVtsH3pIL43k5HkKvXX7gEEcW5nciEk-SMX4Fs&usqp=CAU"
        >
          <div className="flex justify-between items-center   ">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="text-sm">Branch</p>
          </div>
          <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
            {description}
          </p>

          <Button>
            View Pdf
            <svg
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Card> */}

const Pdfcard: React.FC<CardProps> = ({ title, description }) => {
  return (
      <div className="grid grid-cols-1  bg-blue-500  gap-2  ">
        
        <Card
          className="max-w-sm   "
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVbXvtNuIuSva4ocvU_7d2l_BjRGjXfHVtsH3pIL43k5HkKvXX7gEEcW5nciEk-SMX4Fs&usqp=CAU"
        >
          <div className="flex justify-between items-center   ">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="text-sm">Branch</p>
          </div>
          <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
            {description}
          </p>

          <Button>
            View Pdf
            <svg
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Card>
        
        
      </div>
     



    
  );
};

export default Pdfcard;
