import React from 'react'

function Testimonial() {
  return (
    <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/9c21/988d/a88e39960cdb3d07194580d6345f6a58?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=j0~uI8iJGjtVIpI8TCly-hLshWS00GsGrsmzj9w5BDXSyo1Q8-98KxSllpytXtjPWCfjClLvtG~3o4sD8ShFoXzqypQNTU2R89frl-eGfKOkEix1QsWsaWp0-WgWDEboXLKmcMUuVGoYWp94tA8On1MaFrMQSHOfrsN8XcLs-wDwlkebY-odTGpG6vGVe-69NDQmLOAWPDfloGehNoZV2LrHQHQ7GvKRSw2z3qPr1pe6LdhplTmz7ADFhdN-bBxVdbO21i4tx4btUNJLf22z7cfQ6wQ~JrF5djnR5yzptSeDIQ7-SAkVKmMD2y8OOWLnIYAlzlg6R6b0U54aICAYKA__')" }}>
    {/* Overlay for Opacity */}
    <div className="absolute inset-0 bg-black bg-opacity-55"></div>
  
    {/* Content goes here */}
    <div className="relative z-10 text-white flex items-center justify-center h-full">
      <h1 className="text-4xl font-bold">Your Content Here</h1>
    </div>
        </div>
  )
}

export default Testimonial