import { revalidatePath } from "next/cache"
import dbConnect from "../../../lib/dbConnect"

export async function GET() {
      const data = await dbConnect("practice-data").find({}).toArray()
      return Response.json(data)
};


export async function POST(req) {
      const postedData = await req.json()
      const result = await dbConnect("practice-data").insertOne(postedData)
      revalidatePath("/gadget")
      return Response.json(result)
}