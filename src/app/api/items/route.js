import dbConnect from "@/lib/dbConnect"

export async function GET() {

      const data = await dbConnect("practice-data").find({}).toArray()
      return Response.json({ data })
};


export async function Post(req) {

      const postData = await req.json()
      const result = await dbConnect("practice-data").insertOne(postData)
      return Response.json({ postData })
}