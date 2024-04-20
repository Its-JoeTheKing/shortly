"use client"
import axios from "axios";
import RootLayout from "./layout";
import Header, { poppins, roboto, montserrat, aacme, josefin, opensans } from "./header";
import { Footer } from "./footer";
import Image from "next/image";
import "../app/style.css";
import { useState } from "react";

function Link({link, redirect})
{
	return (
		<div className="link">
			<p className={opensans.className}>{link}</p>
			<div>
				<p className={opensans.className}>{redirect}</p>
				<button className={poppins.className} onClick={()=>{navigator.clipboard.writeText(redirect)}}>copy link</button>
			</div>
		</div>
	);
}

export default function () {
	var [url, setUrl] = useState("");
	var [error, setError] = useState(0);
	var [url_render, setUrlRender] = useState("");
	var [link_short, setShort] = useState("");
	var [clicked, setClicked] = useState(0);
	
	const updateUrl = event  => {
		setUrl(event.target.value);
		setError(0);
	}
	const shortenLink = (url) => {
		if (url.includes("https://") || url.includes("http://"))
		{
			setUrlRender(url);
			axios.post("http://127.0.0.1:3000/add", {link: url}).then((res)=>{setShort(res.data)});
			setClicked(1);
			setUrl("");
		}
		else {
			setError(1);
		}
	}
  return (
    <RootLayout>
      <Header/>
      <section className="s1">
	    <div className="s1-1">
			  <h1 className={poppins.className}>More than just links shorter</h1>
			  <p className={opensans.className} style={{fontSize: 16, lineHeight: 1.5, width: "60%"}}>Build your brand's recognition and get detailed insights, make your link shorter and brighent</p>
			  <div className="b-cont">
		  		<a href="#s2"><button className={poppins.className}>Get Started</button></a>
			  </div>
		  </div>
		  <div className="s1-2">
			  <Image src="/imgs/3918929.jpg" height={0} width={0} sizes="100vh" style={{width: "80%"}}/>
		  </div>
	    </section>
	    <section id="s2" className="s2">
	    	<div className="link-zone">
	    		<input value={url} onChange={updateUrl} type="text" style={{animation: error?"shake 0.1s ease-in-out 3":"", borderColor: error?"red":"transparent"}} placeholder="https://www.google.com"/>
				<button className={poppins.className} style={poppins.style} onClick={()=>{shortenLink(url)}}>shorten</button>
	    	</div>
			{clicked?<Link redirect={link_short} link={(url_render.length > 40)?(url_render.slice(0, 40).toString()+"..."):url_render} />:""}
	    </section>
      <Footer/>
    </RootLayout>
  );
}
