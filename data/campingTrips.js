// export const campingTrips = [
//   {
//     id: "1",
//     day: "Monday",
//     date: "6.03.2023",
//     location: "Leucate",
//     details: ["-windy", "-large spaces", "-sunny", "-cloudy"],
//     friends: ["Chris", "Maik"],
//     images: ["/leucate-pano.jpg", "/beach.jpg"],
//   },
//   {
//     id: "2",
//     day: "Sunday",
//     date: "9.04.2023",
//     location: "Barcelona",
//     details: ["-windy", "-large spaces", "-sunny", "-cloudy"],
//     friends: ["Saskia"],
//     images: ["/leucate-pano.jpg", "/beach.jpg"],
//   },
//   {
//     id: "3",
//     day: "Sunday",
//     date: "6.08.2023",
//     location: "Paris",
//     details: ["-windy", "-large spaces", "-sunny", "-cloudy"],
//     friends: ["Saskia", "Bailey"],
//     images: ["/leucate-pano.jpg", "/beach.jpg"],
//   },
// ];

export const addCampingTrip = (newTrip) => {
  campingTrips.push(newTrip);
};
