const GadgetPage = async () => {
      const res = await fetch("http://localhost:3000/api/items", {
            cache: "force-cache"
      })
      const data = await res.json()
      return (
            <div>
                  <h2 className="text-3xl text-center font-semibold py5">Gadgets page</h2>
                  <p>{JSON.stringify(data)}</p>
                  <ul className="text-center font-semibold text-lg py-2">
                        {
                              data?.map(d => <li key={d._id}>{d?.gadgetName}</li>)
                        }
                  </ul>
            </div>
      )
}

export default GadgetPage
