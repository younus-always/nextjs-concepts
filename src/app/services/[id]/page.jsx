import React from 'react'

const ServicesDetailPage = ({ params }) => {
      const id = params?.id
      return (
            <div>
                  <p>Service Id: {id}</p>
            </div>
      )
}

export default ServicesDetailPage
