import axios from "axios";
import { redirect } from "next/navigation";

async function Page({ params }) {
	var s = "";
	s = await axios.get("http://127.0.0.1:3000/search/"+params.link);
	redirect(s.data.link, "replace");
}
export default Page;