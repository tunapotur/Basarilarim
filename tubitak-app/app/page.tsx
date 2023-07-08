import React from "react";

const successes = [
  {
    id: 1,
    title: "Okul Üçüncülüğü 11.Sınıf",
    description:
      "2022 - 2023 Eğitim öğretim yılı Ramazan Yaman Fen Lisesi Okul üçüncülüğü.",
    date: "2023-06-09",
  },
  {
    id: 2,
    title: "Futbol Şampiyonluğu",
    description:
      "2022 - 2023 Eğitim öğretim yılı Lüleburgaz liseler arası ilçe futbol şampiyonası ilçe birinciliği.",
    date: "2023-05-05",
  },
  {
    id: 3,
    title: "Kompozisyon Birinciliği",
    description:
      "2022 - 2023 Eğitim öğretim yılı Lüleburgaz liseler arası ilçe şiir birinciliği.",
    date: "2023-03-03",
  },
];

export default function Home() {
  return (
    <ul>
      {successes.map((success) => (
        <li key={success.id}>
          <div>id {success.id}</div>
          <div>title {success.title}</div>
          <div>description {success.description}</div>
        </li>
      ))}
    </ul>
  );
}
