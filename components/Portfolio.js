export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Meridian AI",
      url: "https://beldangi-fax-machine.github.io/meridian-ai/public/index.html"
    },
    {
      title: "Aqube Barbershop", 
      url: "https://aqubebarbershop.com"
    },
    {
      title: "Dahal Brothers Mechanical",
      url: "https://dahalmechanical.com"
    }
  ]

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container">
        <div className="content-spacing">
          <h2 className="text-center mb-12">Our Work</h2>
          
          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-item"
              >
                <div className="p-6">
                  <h3 className="mb-4">{item.title}</h3>
                  <div className="iframe-container">
                    <iframe
                      src={item.url}
                      title={item.title}
                      loading="lazy"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 