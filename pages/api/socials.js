import {socials} from "./data/socialsLink";

export default function handler(req, res) {
	if (req.method === "GET") {
		res.status(200).json(socials);
	}
}
