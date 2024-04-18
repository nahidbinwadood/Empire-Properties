import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
const Blogs = ({ title }) => {
  return (
    <div 
      data-aos="fade-right"
      data-aos-anchor-placement="top-bottom"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="container mx-auto px-6 md:px-0 "
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <section className="py-10 ws bg-white sm:py-16 lg:py-14">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Latest from blog
              </h2>
              <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
                Here are some of our blogs of our people .You can know more
                about us after reading those blogs.
              </p>
            </div>

            <div className="grid  max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
              <div>
                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                  <img
                    className="object-cover w-full h-full"
                    src="https://blog.ipleaders.in/wp-content/uploads/2021/06/Real-Estate-Agent-Business-India-1.jpg"
                    alt=""
                  />
                </a>
                <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9">
                  {" "}
                  Technology{" "}
                </span>
                <p className="mt-6 text-xl font-semibold">
                  <a href="#" title="" className="text-black">
                    Beyond Opulence: Exploring the Worlds Most Luxurious Real
                    Estate Destinations
                  </a>
                </p>
                <p className="mt-4 text-gray-600">
                  Beyond Opulence: Exploring the Worlds Most Luxurious Real
                  Estate Destinations is a captivating journey through the
                  crests of opulence in global real estate. Immerse yourself in
                  the realm of exclusivity as we unveil private islands,
                  exquisite penthouses, and architectural marvels that redefine
                  luxury living. Traverse the globe from the azure shores of the
                  Caribbean to the glittering skylines of Dubai, discovering the
                  epitome of refinement and sophistication in each unique
                  property. Delve into the lavish interiors, breathtaking
                  vistas, and unparalleled amenities that grace these
                  exceptional homes, offering a glimpse into a world where
                  luxury knows no bounds
                </p>
                <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
                  {" "}
                  Oliver Omnibus. June 12, 2021{" "}
                </span>
              </div>

              <div>
                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                  <img
                    className="object-cover w-full h-full"
                    src="https://imageio.forbes.com/specials-images/imageserve/657b29edf09ae8354c4debba/Real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is/960x0.jpg?format=jpg&width=1440"
                    alt=""
                  />
                </a>
                <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9">
                  {" "}
                  Business{" "}
                </span>
                <p className="mt-6 text-xl font-semibold">
                  <a href="#" title="" className="text-black">
                    The Ultimate in Extravagance: A Closer Look at Iconic
                    Mansions and Estates
                  </a>
                </p>
                <p className="mt-4 text-gray-600">
                  The Ultimate in Extravagance unveils a world where luxury
                  transcends boundaries, showcasing the most iconic and
                  extravagant real estate properties worldwide. Step into a
                  realm where opulence knows no limits, from historic mansions
                  adorned with timeless elegance to contemporary estates exuding
                  modern grandeur. Each property featured in this blog is a
                  masterpiece of architectural brilliance, boasting meticulous
                  craftsmanship and unparalleled design. Explore sprawling
                  grounds, lavish interiors, and state-of-the-art amenities that
                  redefine luxury living. Embark on a journey through elite
                  neighborhoods and exclusive enclaves, where every corner
                  exudes sophistication and refinement.
                </p>
                <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
                  {" "}
                  Liam Literary . June 12, 2023{" "}
                </span>
              </div>

              <div>
                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                  <img
                    className="object-cover w-full h-full"
                    src="https://media.istockphoto.com/id/1365436662/photo/successful-partnership.jpg?s=2048x2048&w=is&k=20&c=K3Y0J8WDtZvQQOCrWxo47kXeGDdrWYH8aWqhd9q6QGo="
                    alt=""
                  />
                </a>
                <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9">
                  {" "}
                  Business{" "}
                </span>
                <p className="mt-6 text-xl font-semibold">
                  <a href="#" title="" className="text-black">
                    Living the High Life: Luxury in
                    Global Real Estate Markets
                  </a>
                </p>
                <p className="mt-4 text-gray-600">
                  Living the High Life offers an exclusive peek into the most
                  prestigious real estate markets around the globe. Embark on a
                  virtual tour of elite neighborhoods and upscale residences,
                  from chic urban penthouses to sprawling countryside estates.
                  Discover the epitome of refined living as we uncover the
                  unmatched amenities, unparalleled views, and sophisticated
                  lifestyles that distinguish these extraordinary properties.
                  Whether nestled in the heart of a bustling metropolis or
                  overlooking panoramic vistas, these homes represent the
                  pinnacle of luxury living, where every detail is meticulously
                  curated for the discerning connoisseur.
                </p>
                <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
                  {" "}
                  Sofia Storyteller . January 12, 2024{" "}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
Blogs.propTypes = {
  title: PropTypes.object.isRequired,
};
export default Blogs;
