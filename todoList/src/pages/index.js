import Form from "@/components/Form";
import { useEffect, useState } from "react";


export default function Home() {
  const [mounted, setMounted]=useState(false)
  // hooks doesnot work in serverside in nextjs
  // hook just works in clientside
  useEffect(()=>{
    setMounted(true)
  },[])
  return (
      mounted && <Form />
  )
}
