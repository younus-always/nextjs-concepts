const DashboardLayout = ({ children }) => {
      return (
            <div className="grid grid-cols-12">
                  <div className="col-span-3 bg-gray-800 p-5">
                        <ul>
                              <li>
                                    Admin Layout Navber
                              </li>
                        </ul>
                  </div>
                  <div className="col-span-9">
                        {children}
                  </div>
            </div>
      )
}

export default DashboardLayout
