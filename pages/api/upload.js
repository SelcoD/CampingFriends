import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};
export default async function hanlder(request, response) {
  if (!request.method === "POST") {
    response.status(405).json({ error: "Method not allowed" });
    return;
  }
  const form = formidable({});
  const [fields, files] = await form.parse(request);
}
