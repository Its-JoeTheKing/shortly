import axios from "axios";
import { redirect } from "next/navigation";

async function Page({ params }) {
	var s = "";
	s = await axios.get("https://shortly-server-0o6k.onrender.com/search/"+params.link);
	redirect(s.data.link, "replace");
}
export default Page;