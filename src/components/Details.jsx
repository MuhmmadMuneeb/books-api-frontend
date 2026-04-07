import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingle } from "./axios/Api";

const Details = () => {
  const { id } = useParams();
  const [singlebook, setdata] = useState()

  async function getData() {
    const response = await getSingle(id)
    if (response) {
      setdata(response.data)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  if (!singlebook) {
    /* Theme Change: Dark background for the loading/error state */
    return <p className="text-center mt-20 text-slate-400 bg-slate-900 min-h-screen pt-20">Book not found</p>;
  }

  return (
    /* Theme Change: Changed bg-gray-100 to bg-slate-900 */
    <section className="px-6 py-16 bg-slate-900 min-h-screen">
      <div className="max-w-5xl mx-auto bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Image */}
        <img
          src={`http://localhost:3000/uploads/${singlebook.bookImg}`}
          alt={singlebook.bookTitle}
          className="w-full h-[400px] object-cover rounded-lg border border-slate-700 shadow-lg"
        />

        {/* Content */}
        <div>
          {/* Theme Change: Text color to slate-100 */}
          <h1 className="text-3xl font-bold text-slate-100">
            {singlebook.bookTitle}
          </h1>
          <p className="text-slate-400 mt-1">by {singlebook.author}</p>

          <p className="mt-4 text-slate-300 leading-relaxed">
            {singlebook.desc}
          </p>

          {/* Theme Change: text-orange-500 to text-amber-500 */}
          <p className="text-2xl font-semibold text-amber-500 mt-6">
            {singlebook.price}
          </p>

          <div className="mt-6 flex gap-4">
            {/* Theme Change: Amber Primary Button */}
            <button className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-2 rounded-md transition-colors font-medium">
              Add to Cart
            </button>
            
            {/* Theme Change: Outlined Amber Button */}
            <button className="border border-amber-600 text-amber-500 px-6 py-2 rounded-md hover:bg-amber-600/10 transition-colors font-medium">
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Details;