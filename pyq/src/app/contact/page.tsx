"use client";

import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";

function page() {
  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="text-center text-2xl font-serif mt-2 ">Want to reach us!! 😀😀</h1>
      <form className="flex max-w-md flex-col gap-4 w-1/2  ">
      <div>
        <div className="mb-2 block">
          <Label  value="Your email" />
        </div>
        <TextInput  id="email" type="email"  required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label  value="Your password" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label  value="Your Query" />
        </div>
        <Textarea placeholder="Leave Your query here...."  />
      </div>

      <div className="mt-2 w-full block">
      <Button className="w-full" type="submit">Submit</Button>
      </div>
     
     
     
    </form>

    </div>
  )
}

export default page