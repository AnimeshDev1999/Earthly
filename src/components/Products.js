import cup from "../images/cup.jpg";
import straw from "../images/straw.jpg";
import loofah from "../images/loofah.jpg";
import brush from "../images/brush.jpg";
import box from "../images/box.jpg";
import Slide from "react-reveal/Slide";

const Products = () => {
  return (
    <div className="text-slate-800 flex flex-col justify-center items-center py-20 w-full">
      <div className="sm:w-4/5 md:w-4/5 lg:w-2/3">
        <h3 className="sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-green-900 mb-4">
          Products
        </h3>
        <h3 className="sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-12">
          Earthly sustainable prodict kit contains
        </h3>
        <Slide left>
          <div className="flex justify-center items-center w-full mb-12">
            <div className="sm:w-full md:w-full lg:w-1/2 flex flex-col justify-center p-4 rounded-md bg-green-100">
              <h2 className="sm:text-2xl md:text-3xl lg:text-3xl font-semibold mb-4">
                Plant Based Reusable Cups
              </h2>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis ipsum quo eum, voluptatem delectus blanditiis est.
                Ipsum nobis aperiam nostrum dolore. Dolorum, atque ut? Quo harum
                nobis doloribus totam repellat.
              </p>
            </div>
            <div className="sm:hidden md:hidden w-1/2 lg:flex justify-center items-center border-r-8 border-green-600">
              <img src={cup} alt="" className="w-2/3 rounded-md" />
            </div>
          </div>
        </Slide>
        <Slide right>
          <div className="flex justify-center items-center w-full mb-12">
            <div className="sm:hidden md:hidden w-1/2 lg:flex justify-center items-center border-l-8 border-green-600">
              <img src={straw} alt="" className="w-2/3 rounded-md" />
            </div>
            <div className="sm:w-full md:w-full lg:w-1/2 flex flex-col justify-center p-4 rounded-md bg-green-100">
              <h2 className="sm:text-2xl md:text-3xl lg:text-3xl font-semibold mb-4">
                Reusable Bamboo Straws
              </h2>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis ipsum quo eum, voluptatem delectus blanditiis est.
                Ipsum nobis aperiam nostrum dolore. Dolorum, atque ut? Quo harum
                nobis doloribus totam repellat.
              </p>
            </div>
          </div>
        </Slide>
        <Slide left>
          <div className="flex justify-center items-center w-full mb-12">
            <div className="sm:w-full md:w-full lg:w-1/2 flex flex-col justify-center p-4 rounded-md bg-green-100">
              <h2 className="sm:text-2xl md:text-3xl lg:text-3xl font-semibold mb-4">
                Natural Bamboo Loofah
              </h2>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis ipsum quo eum, voluptatem delectus blanditiis est.
                Ipsum nobis aperiam nostrum dolore. Dolorum, atque ut? Quo harum
                nobis doloribus totam repellat.
              </p>
            </div>
            <div className="sm:hidden md:hidden w-1/2 lg:flex justify-center items-center border-r-8 border-green-600">
              <img src={loofah} alt="" className="w-2/3 rounded-md" />
            </div>
          </div>
        </Slide>
        <Slide right>
          <div className="flex justify-center items-center w-full mb-12">
            <div className="sm:hidden md:hidden w-1/2 lg:flex justify-center items-center border-l-8 border-green-600">
              <img src={brush} alt="" className="w-2/3 rounded-md" />
            </div>
            <div className="sm:w-full md:w-full lg:w-1/2 flex flex-col justify-center p-4 rounded-md bg-green-100">
              <h2 className="sm:text-2xl md:text-3xl lg:text-3xl font-semibold mb-4">
                Bamboo Toothbrush
              </h2>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis ipsum quo eum, voluptatem delectus blanditiis est.
                Ipsum nobis aperiam nostrum dolore. Dolorum, atque ut? Quo harum
                nobis doloribus totam repellat.
              </p>
            </div>
          </div>
        </Slide>
        <Slide left>
          <div className="flex justify-center items-center w-full mb-12">
            <div className="sm:w-full md:w-full lg:w-1/2 flex flex-col justify-center p-4 rounded-md bg-green-100">
              <h2 className="sm:text-2xl md:text-3xl lg:text-3xl font-semibold mb-4">
                Plant Based Reusable Containers
              </h2>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis ipsum quo eum, voluptatem delectus blanditiis est.
                Ipsum nobis aperiam nostrum dolore. Dolorum, atque ut? Quo harum
                nobis doloribus totam repellat.
              </p>
            </div>
            <div className="sm:hidden md:hidden w-1/2 lg:flex justify-center items-center border-r-8 border-green-600">
              <img src={box} alt="" className="w-2/3 rounded-md" />
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Products;
