"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const ServicesPage = () => {
      const router = useRouter()
      const services = [
            {
                  id: 1,
                  title: "Web Development",
                  description: "Building responsive and modern websites using the latest front-end technologies.",
                  icon: "🌐"
            },
            {
                  id: 2,
                  title: "UI/UX Design",
                  description: "Creating user-friendly and attractive designs for web and mobile platforms.",
                  icon: "🎨"
            },
            {
                  id: 3,
                  title: "SEO Optimization",
                  description: "Improving website visibility on search engines to drive more organic traffic.",
                  icon: "⚙️"
            },
            {
                  id: 4,
                  title: "E-commerce Solutions",
                  description: "Developing online stores with smooth checkout, secure payment, and product management.",
                  icon: "🛒"
            },
            {
                  id: 5,
                  title: "Website Maintenance",
                  description: "Keeping your website updated, secure, and performing at its best.",
                  icon: "🔧"
            }
      ]

      return (
            <div>
                  {
                        services.map(service => <div key={service.id}
                              onClick={() => router.push(`/services/${service.id}`)}
                              className='rounded-lg p-5 shadow-md'>
                              <h3>{service.title}</h3>
                              <span>{service.icon}</span>
                              <p>{service.description}</p>
                        </div>)
                  }
            </div>
      )
}

export default ServicesPage
