import MealSearchInput from "../components/MealSearchInput"


export const metadata = {
      title: "All Meals",
      description: "Trying to learn next.js as well as good",
}

const MealsPage = async ({ searchParams }) => {
      const { search } = await searchParams

      // function define
      const fetchMeals = async () => {
            try {
                  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
                  const data = await res.json()
                  return data?.meals
            } catch (error) {
                  console.log("Fetching Error:", error)
                  return []
            }
      }
      // function call
      const meals = await fetchMeals()


      return (
            <section className="max-w-6xl mx-auto py-6">
                  <div className="flex items-center justify-center">
                        <MealSearchInput />
                  </div>
                  {meals?.length < 1 ?
                        <p className="text-3xl text-center font-semibold py-5 text-red-600">No Data Found</p>
                        : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-8">
                              {meals?.map(m => <div key={m.idMeal} className="rounded-lg bg-gray-800 shadow-lg shadow-gray-500">
                                    <img src={m.strMealThumb} alt={`Picture of the ${m.strMeal}`} className="rounded-lg" />
                                    <div className="p-4">
                                          <h3>Name: {m.strMeal}</h3>
                                          <p>Category: {m.strCategory}</p>
                                    </div>
                              </div>)}
                        </div>
                  }
            </section>
      )
}

export default MealsPage
