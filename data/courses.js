export const levels = [
  {
    id: "100",
    name: "100 Level",
    path: "/courses/100",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80",
    accent: "#6aa06c",
  },
  {
    id: "200",
    name: "200 Level",
    path: "/courses/200",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80",
    accent: "#ffe900",
  },
  {
    id: "300",
    name: "300 Level",
    path: "/courses/300",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80",
    accent: "#5d9ddd",
  },
  {
    id: "400",
    name: "400 Level",
    path: "/courses/400",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80",
    accent: "#c989d8",
  },
];

export const coursesByLevel = {
  100: [
    { id: "c101", code: "MTH 101", title: "Engineering Mathematics I" },
    { id: "c102", code: "PHY 101", title: "General Physics I" },
    { id: "c103", code: "CSC 101", title: "Introduction to Computing" },
    { id: "c104", code: "EEE 101", title: "Basic Electrical Engineering" },
  ],

  200: [
    { id: "c201", code: "MTH 201", title: "Engineering Mathematics II" },
    { id: "c202", code: "EEE 201", title: "Circuit Theory" },
    { id: "c203", code: "CSC 201", title: "Data Structures" },
  ],

  300: [
    { id: "c301", code: "CPE 301", title: "Digital Electronics" },
    { id: "c302", code: "CPE 302", title: "Computer Architecture" },
    { id: "c303", code: "CPE 303", title: "Signals and Systems" },
  ],

  400: [
    { id: "c401", code: "CPE 401", title: "Computer Networks" },
    { id: "c402", code: "CPE 402", title: "Embedded Systems" },
    { id: "c403", code: "CPE 403", title: "Software Engineering" },
  ],
};