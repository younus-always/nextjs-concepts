import { ObjectId } from "mongodb"
import dbConnect from "../../../../lib/dbConnect"

export async function GET(req, { params }) {

      const { id } = await params
      const singleData = await dbConnect("practice-data").findOne({ _id: new ObjectId(id) })
      return Response.json(singleData)
}

export async function DELETE(req, { params }) {

      const { id } = await params
      const deleteData = await dbConnect("practice-data").deleteOne({ _id: new ObjectId(id) })
      return Response.json(deleteData)
}

export async function PATCH(req, { params }) {

      const { id } = await params
      const postedData = await req.json()
      const filter = { _id: new ObjectId(id) }
      const updatedData = await dbConnect("practice-data").updateOne(filter,
            { $set: { ...postedData } }, { upsert: true }
      )
      return Response.json(updatedData)
}