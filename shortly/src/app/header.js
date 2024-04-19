import "../app/style.css"

export default function Header()
{
	return (
		<header>
		<h2 class="title">Shortly</h2>
		<ul>
			<a href="#">
				<li>shorten</li>
			</a>
			<a href="#">
				<li>About</li>
			</a>
			<a href="#">
				<li>Contact Us</li>
			</a>
		</ul>
		<div class="btns">
			<button class="login">login</button>
			<button class="s-up">sign up</button>
		</div>
		</header>
	);
}