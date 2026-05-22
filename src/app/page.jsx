"use client";

import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function HomePage() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const querySnapshot = await getDocs(collection(db, "cars"));

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setCars(data);
    };

    fetchCars();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}

      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000"
          className="absolute w-full h-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-7xl font-black leading-tight">
            NC MOTORS
          </h1>

          <p className="text-zinc-300 mt-6 text-xl">
            Hayalindeki Araca Güvenle Ulaş
          </p>

          <div className="flex gap-4 justify-center mt-8 flex-wrap">

            <a
              href="https://instagram.com/_ncmotors_"
              target="_blank"
              className="bg-yellow-500 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
            >
              Instagram
            </a>

            <a
              href="https://wa.me/905555555555"
              target="_blank"
              className="border border-zinc-700 px-8 py-4 rounded-2xl hover:bg-zinc-900 transition"
            >
              WhatsApp
            </a>

          </div>
        </div>
      </div>

      {/* İLANLAR */}

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <h2 className="text-5xl font-black">
            Araç İlanları
          </h2>

          <div className="text-yellow-500 font-semibold">
            Premium Araç Alım - Satım
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {cars.map((car) => (

            <div
              key={car.id}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden hover:scale-[1.02] transition duration-300 shadow-2xl"
            >

              <div className="overflow-hidden">
                <img
                  src={car.imageUrl}
                  className="w-full h-64 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">

                <h3 className="text-3xl font-bold">
                  {car.title}
                </h3>

                <p className="text-yellow-500 text-2xl mt-3 font-bold">
                  {car.price}
                </p>

                <p className="text-zinc-400 mt-2">
                  {car.km} KM
                </p>

                <div className="flex gap-3 mt-6">

                  <a
                    href="https://wa.me/905555555555"
                    target="_blank"
                    className="flex-1 bg-yellow-500 text-black text-center py-3 rounded-2xl font-bold hover:opacity-90 transition"
                  >
                    WhatsApp
                  </a>

                  <a
                    href="https://instagram.com/_ncmotors_"
                    target="_blank"
                    className="flex-1 border border-zinc-700 text-center py-3 rounded-2xl hover:bg-zinc-900 transition"
                  >
                    Instagram
                  </a>

                </div>

              </div>
            </div>

          ))}

        </div>
      </div>

      {/* NEDEN BİZ */}

      <div className="max-w-7xl mx-auto px-6 pb-20">

        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10">

          <h2 className="text-5xl font-black mb-10">
            Neden NC MOTORS?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-black rounded-2xl p-6 border border-zinc-800">
              <h3 className="text-yellow-500 text-2xl font-bold mb-3">
                Güven
              </h3>

              <p className="text-zinc-400">
                Güvenilir ve şeffaf araç alım-satım hizmeti.
              </p>
            </div>

            <div className="bg-black rounded-2xl p-6 border border-zinc-800">
              <h3 className="text-yellow-500 text-2xl font-bold mb-3">
                Premium
              </h3>

              <p className="text-zinc-400">
                Kaliteli ve seçilmiş araç portföyü.
              </p>
            </div>

            <div className="bg-black rounded-2xl p-6 border border-zinc-800">
              <h3 className="text-yellow-500 text-2xl font-bold mb-3">
                Hızlı İşlem
              </h3>

              <p className="text-zinc-400">
                Hızlı dönüş ve profesyonel süreç yönetimi.
              </p>
            </div>

            <div className="bg-black rounded-2xl p-6 border border-zinc-800">
              <h3 className="text-yellow-500 text-2xl font-bold mb-3">
                Hesaplı
              </h3>

              <p className="text-zinc-400">
                Bütçene uygun premium araç seçenekleri.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* İLETİŞİM */}

      <div className="max-w-7xl mx-auto px-6 pb-20">

        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl p-10 text-black">

          <h2 className="text-5xl font-black mb-6">
            İletişim
          </h2>

          <p className="text-xl font-semibold mb-8">
            Hayalindeki araç için hemen bizimle iletişime geç.
          </p>

          <div className="flex gap-4 flex-wrap">

            <a
              href="https://wa.me/905469190660"
              target="_blank"
              className="bg-black text-white px-8 py-4 rounded-2xl font-bold"
            >
              WhatsApp
            </a>

            <a
              href="https://instagram.com/_ncmotors_"
              target="_blank"
              className="border border-black px-8 py-4 rounded-2xl font-bold"
            >
              Instagram
            </a>

          </div>
        </div>
      </div>

      {/* FOOTER */}

      <div className="border-t border-zinc-900 py-8 text-center text-zinc-500">

        <p>
          Design by{" "}
          <span className="text-yellow-500 font-semibold">
            DESİGN BY KUT DESIGN AGENCY
          </span>
        </p>

      </div>

    </div>
  );
}