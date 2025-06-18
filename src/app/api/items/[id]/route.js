import { collectionNames } from "@/lib/dbConnect"
import { ObjectId } from "mongodb"

// Get single data
export async function GET(req, { params }) {
      const { id } = await params
      const singleData = await dbConnect(collectionNames.PRACTICE_DATA).findOne({ _id: new ObjectId(id) })
      return Response.json(singleData)
}
// Delete
export async function DELETE(req, { params }) {
      const { id } = await params
      const deleteData = await dbConnect(collectionNames.PRACTICE_DATA).deleteOne({ _id: new ObjectId(id) })
      return Response.json(deleteData)
}
// update 
export async function PATCH(req, { params }) {
      const { id } = await params
      const postedData = await req.json()
      const filter = { _id: new ObjectId(id) }
      const updatedData = await dbConnect(collectionNames.PRACTICE_DATA).updateOne(filter,
            { $set: { ...postedData } }, { upsert: true }
      )
      return Response.json(updatedData)
}