"use client";

import { useState } from "react";
import { db, storage } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [km, setKm] = useState("");
  const [image, setImage] = useState(null);

  const login = () => {
    if (password === "nctokat60") {
      setLoggedIn(true);
    } else {
      alert("Şifre yanlış");
    }
  };

  const handleUpload = async () => {
    if (!image) return;

    const imageRef = ref(storage, `cars/${Date.now()}-${image.name}`);

    await uploadBytes(imageRef, image);

    const imageUrl = await getDownloadURL(imageRef);

    await addDoc(collection(db, "cars"), {
      title,
      price,
      km,
      imageUrl,
      createdAt: new Date()
    });

    alert("Araç eklendi");

    setTitle("");
    setPrice("");
    setKm("");
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="bg-zinc-900 p-10 rounded-2xl w-[400px]">
          <h1 className="text-white text-3xl font-bold mb-6">
            NC MOTORS ADMIN
          </h1>

          <input
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded bg-black text-white mb-4"
          />

          <button
            onClick={login}
            className="w-full bg-yellow-500 text-black p-3 rounded font-bold"
          >
            Giriş Yap
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-10">
        NC MOTORS ADMIN PANEL
      </h1>

      <div className="flex flex-col gap-4 max-w-md">
        <input
          className="p-3 rounded bg-zinc-900"
          placeholder="Araç Başlığı"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="p-3 rounded bg-zinc-900"
          placeholder="Fiyat"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          className="p-3 rounded bg-zinc-900"
          placeholder="KM"
          value={km}
          onChange={(e) => setKm(e.target.value)}
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button
          onClick={handleUpload}
          className="bg-yellow-500 text-black p-3 rounded font-bold"
        >
          Araç Ekle
        </button>
      </div>
    </div>
  );
}