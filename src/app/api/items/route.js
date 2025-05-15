
export async function GET() {
      // const res = await fetch('https://data.mongodb-api.com/...', {
      //       headers: {
      //             'Content-Type': 'application/json',
      //             'API-Key': process.env.DATA_API_KEY,
      //       },
      // })
      // const data = await res.json()

      const data = {
            message: "Successfully get data",
            error: false,
            status: '200'
      }

      return Response.json({ data })
};


export async function Post(req) {
      console.log(req)
      const postData = await req.json()
      return Response.json({ postData })
}