import Image from 'next/image'

export default function Hero() {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio')
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="min-h-screen-mobile flex items-center bg-gradient-to-br from-gray-50 to-white section-padding">
      <div className="container">
        <div className="text-center content-spacing">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/PokhrelDevelopmentLOGO.png"
              alt="Pokhrel Development LLC"
              width={200}
              height={80}
              className="h-16 md:h-20 lg:h-24 w-auto transition-transform duration-300 hover:scale-105"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-balance mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Pokhrel Development LLC
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto text-balance font-light">
            Building Digital Solutions for Tomorrow
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToPortfolio}
            className="btn-primary text-lg px-8 py-4 touch-manipulation relative overflow-hidden group"
            aria-label="View our portfolio"
          >
            <span className="relative z-10">View Our Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  )
} 