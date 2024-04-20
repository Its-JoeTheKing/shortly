import { Josefin_Sans, Acme, Roboto, Poppins, Montserrat, Open_Sans } from "next/font/google";

export const josefin = Josefin_Sans({weight: "400", subsets: ["latin"]});
export const aacme = Acme({weight: ["400"], subsets: ["latin"]});
export const roboto = Roboto({weight: ["500"], subsets: ["latin"]});
export const poppins = Poppins({weight: "700", subsets: ["latin"]});
export const montserrat = Montserrat({weight: "500",  subsets: ["latin"]});
export const opensans = Open_Sans({weight: "500",  subsets: ["latin"]});

export default function Header()
{
	return (
		<header>
			<h2 className="title">Shortly</h2>
			<ul>
				<a className={josefin.className} style={{fontSize: 18, margin: 40}} href="#">
					<li>shorten</li>
				</a>
				<a className={josefin.className} style={{fontSize: 18, margin: 40}} href="#">
					<li>About</li>
				</a>
				<a className={josefin.className} style={{fontSize: 18, margin: 40}} href="#">
					<li>Contact Us</li>
				</a>
			</ul>
			<div className="btns">
				<button className="login" style={poppins.style}>login</button>
				<button className="s-up" style={poppins.style}>sign up</button>
			</div>
		</header>
	);
}