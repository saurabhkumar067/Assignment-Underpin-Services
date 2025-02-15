import React, { useState } from 'react'

function ShowcaseEvents() {

    const [article, setArticle] = useState([
        {
          img:"https://s3-alpha-sig.figma.com/img/8071/d18f/ddf6426d905900806b1c893d9c481dd8?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IgaS05x8FbpHAlZ8DQ-mf9h9GwVQYKbM~70nhT1fgsByPobWiS2j4Rdksc02YY~ehEJrMxxw55~3OB6ZVs1Cf~0bAha2kZ2a19KnQTjEPAopk9k6LjzKpBp~~83Kd1FSwjsiqygVyHjx5EsBeyQPBpn~ClGbaKlu3188ExiINoZGOP2XaxFJVbGnTt8JZfWMF8wduChQ3USB9SbPSppaemmYomVBcRFtDsDtSzDs2FkXPVfk4AxcHYbVU54gQzy7gfoxU2MpwnYsA6A3Nmy8X2PIOJG6JVxBNUWTxMxqgrIWh12vbYN8UMs4z2a383kDwBfgfiVBQey3x8ubK8-QaA__",
          title:"White Paper EN",
          content:"In the Blackrose Club ecosystem, the virtual and physical worlds come together.",
        },
        {
          img:"https://s3-alpha-sig.figma.com/img/fb46/6274/fb9065c4b42aec023edf10ffe4f31329?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J7nCTWlULP6e3IQCVxe1LdLomXjOyhz96blJRe9KL7hYV5kCw7dSLPhm6U5cm8mARtAyU1LU4eiBpI8JhYC39XTbEALGBlByUY2AKvQug65p-S~EiLgD715dYvK1AL0U01bNEHHNpz1zF-aE4GNFRstz8jrPB3N7vek6CJs5WvITl~q8FrQalS-wRP2b9zQlyzIiuCt-6vd-UgQZxZVmi2diu6gCQDOFgoEL~go6ei~qZgKtEtlwQrAuQE9aUezvbvfHnYg03D9Rf599YUeRkOWauh1hOBUfRyvP5jckHR1yVtntYkPhIOoFt9YCzeHnp6ORalF0fOQKi9UUtaFHGQ__",
          title:"White Paper DE",
          content:"In the Blackrose Club ecosystem, the virtual and physical worlds come together. ",
        },
        {
          img:"https://s3-alpha-sig.figma.com/img/6a6e/91f9/260175459dab8292161027e3da0d8ced?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cKYtl9WZH8NS6rTpfgoAFvQlEOSBJ5u6Kyjt4D~-xv5FTcIA6cNfMjkIzfrNIpNA5h-6J-~BTEfhfyfk7V-k08d0KmxPg7ZgxU14YM2bsQ3Nbga4L16B-S-nnRLHNAuVXWDC3a5QVj9lnD3PhL4PMSkwSyRIDSV3uTVAQuVG6f7I8goolOLkFOlOCAiTtu0PTGbIs0DhVlLDTzwXtKujiKMuAeb5D9CyYe85zcqm3N6eUqwGHbJdOpohEQwQkp8yvCMp-JjXvjcXdNqKbA2y2JjTTVbKAnDkmWAHLAgApAbEjHMlCMeNWZg55CLrTImpzYAGRECGek-3DBx35bWZIA__",
          title:"Pitchdeck EN",
          content:"In the Blackrose Club ecosystem, the virtual and physical worlds come together. ",
        },
        {
          img:"https://s3-alpha-sig.figma.com/img/bf93/f15e/7bbeaf476da120617f3dfd09c86ba3fc?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OFlkNzfiuHKlhy6HjF2bcrJdE-il6QJtq6tsZAhVzD-Lm5EDYx7Yc~Cjl7QJCz-0~QwAUZGgc8f4nzPSCJSev8IfbXWBMRZB2TLgL5fkTqaqfzq3Hke5XPY7BeeM5Yt~doM-wKQ-LhCsIZh3gzFYlAXiNtjL6qscB9oMiFiHCspTRnsIq-Of6BUC-VVOcWS-w8T3~sSaRCQ0YLNQZVxvRUnbmfN11miV8qn-Nmi3QHXk-oUE8p-3mcxQyspNLJvwS-nWBsbQ73WiCy6JhuB5mS6pu6HUgKMaz~KGxZH-U7nrMCPDXTnpiO746z2IxYJ2vY4HRERbpJJhSq1GxZLb6Q__",
          title:"Pichdeck DE",
          content:"In the Blackrose Club ecosystem, the virtual and physical worlds come together.",
        },
      ])

  return (
    <div className="bg-[#141B22] h-full w-full relative">
        <img src="/gradient-bg.svg" alt="" className="w-1/2 blur-lg absolute" />
        <div className="flex flex-col justify-center items-center px-28 py-16 text-white">

        <h5 className="text-3xl font-semibold">Documents: Whitepaper & Pitch Deck</h5>
        <p className="text-center w-2/3 text-sm mt-5 mb-20 font-poppins">Blackrose Club targets the most active and technology savvy target group in the DACH region and will later expand to serve the global market.Blackrose Club targets the most active and technology savvy target group in the DACH region and will later expand to serve the global market.</p>
        <div className="flex justify-center gap-10">

          {
            article.map((article, index)=>{
              return (
                <div key={index} className="card rounded-2xl overflow-hidden bg-[#10171C] w-1/2">
                  <img src={article.img} alt={article.title} className="h-1/2 w-full object-cover"/>
                  <div className="p-4">

                  <span className="bg-[#283032] px-10 rounded-md "></span>
                  <h6 className="text-xl font-semibold mt-1">{article.title}</h6>
                  <p className="font-poppins text-[#B6B6B6] text-xs my-2">{article.content}</p>
                  </div>
                </div>
              )
            })
          }
                
                

        </div>  
        <div className="mx-auto w-full h-[0.5px] my-16 bg-[#888B8D]"></div>
        <div className="text-center">
          <h5 className="font-semibold text-3xl">Stay Updated with us</h5>
          <p className="font-poppins mt-5 mb-8 text-sm">Blackrose Club targets the most active and technology savvy target group in the DACH region and will later</p>
          <div className="border border-[#FFFFFF66]  bg-[#292E33] rounded-full flex justify-between items-center">
            <input type="email" placeholder="Enter email address to subscribe our newsletter" className="w-full h-full bg-transparent py-4 px-8 border-none outline-none" />
            <button className=" mr-1 bg-[#5bff6d] py-3 px-6 rounded-full text-sm text-black font-bold tracking-wide">
            Subscribe
            </button>
          </div>
        </div>
      </div>
      </div>
  )
}

export default ShowcaseEvents