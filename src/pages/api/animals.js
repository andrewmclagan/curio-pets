import { Proxy } from "../../lib/sdk";
import chance from "../../lib/chance";

const host = 'https://curio-hosting.s3-ap-southeast-2.amazonaws.com';

const proxy = new Proxy(host);

let memoryCache = [];

setInterval(() => {
  memoryCache = [];
}, 120000); // 2 minutes

const error = {
  code: 422,
  message: "Validation failed.",
  errors: [
    {
      field: "name",
      message: "What a terrible name! Try again.",
    },
  ],
};

export default async (req, res) => {
  const { method, body } = req;

  const apiResponse = await proxy.get("animals.json");

  const data = [...apiResponse, ...memoryCache];

  switch (method) {
    default:
    case "GET":
      return res.status(200).json(data);
    case "POST":
      if (chance()) {
        memoryCache.push(body);
        return res.status(201).json(body);
      } else {
        return res.status(422).json(error);
      }
  }
};
