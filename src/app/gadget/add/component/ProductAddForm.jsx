"use client"
const productAddForm = () => {

      const handleSubmit = async (e) => {
            e.preventDefault()
            const form = e.target
            const gadgetName = form.gadget.value
            const payload = { gadgetName }
            const res = await fetch("http://localhost:3000/api/items", {
                  method: "POST",
                  headers: {
                        "Content-Type": "application/json"
                  },
                  body: JSON.stringify(payload)
            });
            const result = await res.json()
            console.log(result)
            form.reset()
            alert("Gadget Name Stored Successfully!")
      }

      return (
            <div>
                  <form onSubmit={handleSubmit}>
                        <div className="flex items-center justify-center space-x-2 ">
                              <input type="text" name="gadget" id="" placeholder="Add gadget name" className="p-2 rounded outline-2 outline-gray-400 bg-gray-600" required />
                              <button type="submit" className="py-2 px-4 rounded-md bg-green-500 font-semibold cursor-pointer">Submit</button>
                        </div>
                  </form>
            </div>
      )
}

export default productAddForm
