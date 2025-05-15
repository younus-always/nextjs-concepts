export const Get = async (req, params) => {
  
      const p = await params
      console.log(p)
      return Response.json({ params: p })
}