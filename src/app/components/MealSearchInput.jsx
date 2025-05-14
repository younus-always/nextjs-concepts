"use client"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

const MealSearchInput = () => {
      const [search, setSearch] = useState("")
      const searchInput = useRef()
      const router = useRouter()
      const pathname = usePathname()

      useEffect(() => {
            // search value
            const searchQuery = { search }
            // create urlQueryParam(searchQuery)
            const urlQueryParam = new URLSearchParams(searchQuery)
            // set urlQueryParam in search bar after pathname
            const url = `${pathname}?${urlQueryParam}`
            router.push(url)
      }, [search])

      // Auto focus input field
      useEffect(() => {
            searchInput.current.focus()
      }, [searchInput])

      return (
            <input ref={searchInput} type="search" onChange={(e) => setSearch(e.target.value)}
                  value={search} placeholder="Search by name here..." className="p-2 bg-gray-600 w-96 rounded-md outline-2 outline-gray-500 focus:outline-gray-400" />
      )
}

export default MealSearchInput
