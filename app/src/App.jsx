import { useEffect, useState } from "react"

function App() {

  const techStack = ["Python", "JavaScript", "React", "FastAPI", "Tailwind CSS", "Golang", "Linux", "Bash", "Web Scraping", "Django", "Git", "Github", "Docker", "C++", "MySQL", "PostgreSQL", "MongoDB", "Algorithms", "Data Structures"]
  const subHeadings = ["Python Developer", "JavaScript Developer"]
  
  const [showMenu, setShowMenu] = useState(false)
  const [subHeading, setSubHeading] = useState("")

  function subHeadingWriter(i, j) {
    setSubHeading(subHeadings[i].slice(0, j + 1))
    if (j == (subHeadings[i].length - 1)) {
      setTimeout(() => subHeadingWriter((i + 1) % subHeadings.length, 0), 200)
    } else {
      setTimeout(() => subHeadingWriter(i, j + 1), 200)
    }
  } 

  useEffect(() => {
    subHeadingWriter(0, 0)
  }, [])
  

  return (
    <div className="flex flex-col font-['Work_Sans'] p-2 h-screen">
      <div className="flex justify-between mx-2 px-2 md:px-4 pb-2 border-b">
        <div className="text-4xl tracking-[-3.6px]">ad<span className="font-bold">.</span></div>
        <div className="hidden sm:flex gap-8 justify-center items-center text-xl tracking-tighter">
          <div className="underline decoration-1 decoration-gray-200 hover:decoration-gray-950">About</div>
          <div className="underline decoration-1 decoration-gray-200 hover:decoration-gray-950">Projects</div>
          <div className="underline decoration-1 decoration-gray-200 hover:decoration-gray-950">Blog</div>
        </div>
        <div className="flex sm:hidden justify-center items-center text-xl tracking-tighter relative">
          <div className="underline decoration-1 decoration-gray-200 hover:decoration-gray-950 border px-2 hover:border-gray-950" onClick={() => setShowMenu(!showMenu)}>Menu</div>
          <div className={`${showMenu ? "flex" : "hidden"} flex-col gap-1 absolute top-10 right-0 border bg-white px-4 py-2`}>
            <div className="underline decoration-1 decoration-gray-200 hover:decoration-gray-950">About</div>
            <div className="underline decoration-1 decoration-gray-200 hover:decoration-gray-950">Projects</div>
            <div className="underline decoration-1 decoration-gray-200 hover:decoration-gray-950">Blog</div>
          </div>
        </div>
      </div>
      <div className="grow overflow-scroll">
        <div className="h-full flex flex-col items-center justify-center gap-6 md:gap-8 border-b">
          <div className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter text-center">Ajay Dandge</div>
          <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl px-2 md:px-3 md:py-1 tracking-tighter border">{subHeading}</div>
        </div>
        <div className="h-full p-4 border-b flex items-center justify-center">
          <div className="grid grid-cols-2 min-[425px]:grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-5">
            {
              techStack.map(
                (value, index) => <div key={`stack-${index.toString().padStart(2, '0')}`} className="border px-2 py-1 text-center tracking-tighter sm:text-xl lg:text-2xl xl:text-3xl hover:border-gray-950">{value}</div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
