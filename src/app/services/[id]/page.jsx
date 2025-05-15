
export const metadata = {
      title: "Service Details",
      description: "Trying to learn next.js as well as good",
}

const ServicesDetailPage = ({ params }) => {
      const id = params?.id

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
      const findService = services.find(services => services.id == id)
      if (!findService) {
            return <h2 className='text-3xl font-semibold text-red-600 text-center py-5'> Service item not found </h2>
      }
      return (
            <div className="max-w-3xl mx-auto py-8">
                  <p>Service Id: {id}</p>
                  <h3 className="text-lg font-semibold">Title: {findService.title}</h3>
                  <p>Description: {findService.description}</p>
            </div>
      )
}

export default ServicesDetailPage
