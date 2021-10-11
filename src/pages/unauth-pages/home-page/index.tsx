import '../../../styles/tailwind.css';

import Header from '../../../layouts/header'
function HomePage() {
  return (
    <div>
      <Header></Header>

      <section className="hero-area pt-48 pb-10">
        <div className="container">
          <div className="flex justify-between">
            <div className="w-full text-center">
              <h2 className="text-4xl font-bold leading-snug text-gray-700 mb-10 wow fadeInUp" data-wow-delay="1s">Find experienced Developers!
              {/* <br className="hidden lg:block"></br> Built with TailwindCSS</h2> */}
              </h2>
              <div className="text-center mb-10 wow fadeInUp" data-wow-delay="1.2s">
                <a href="void(0)"
                  rel="nofollow"
                  className="primary-btn text-xl px-10 py-4">Get Started</a>
              </div>
              <div className="text-center wow fadeInUp" data-wow-delay="1.6s">
                <img className="img-fluid mx-auto" src="assets/img/hero.svg" alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-12 section-heading wow fadeInDown" data-wow-delay="0.3s">Services</h2>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 wow fadeInRight" data-wow-delay="0.3s">
                <div className="icon text-5xl">
                  <i className="lni lni-cog"></i>
                </div>
                <div>
                  <h3 className="service-title">Web Development</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia
                  incidunt laborum aspernatur...</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 wow fadeInRight" data-wow-delay="0.6s">
                <div className="icon text-5xl">
                  <i className="lni lni-bar-chart"></i>
                </div>
                <div>
                  <h3 className="service-title">Graphic Design</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia
                  incidunt laborum aspernatur...</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 wow fadeInRight" data-wow-delay="0.9s">
                <div className="icon text-5xl">
                  <i className="lni lni-briefcase"></i>
                </div>
                <div>
                  <h3 className="service-title">Business Branding</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia
                  incidunt laborum aspernatur...</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 wow fadeInRight" data-wow-delay="1.2s">
                <div className="icon text-5xl">
                  <i className="lni lni-pencil-alt"></i>
                </div>
                <div>
                  <h3 className="service-title">Content Writing</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia
                  incidunt laborum aspernatur...</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 wow fadeInRight" data-wow-delay="1.5s">
                <div className="icon text-5xl">
                  <i className="lni lni-mobile"></i>
                </div>
                <div>
                  <h3 className="service-title">App Development</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia
                  incidunt laborum aspernatur...</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="m-4 wow fadeInRight" data-wow-delay="1.8s">
                <div className="icon text-5xl">
                  <i className="lni lni-layers"></i>
                </div>
                <div>
                  <h3 className="service-title">Digital Marketing</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia
                  incidunt laborum aspernatur...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default HomePage;
