export const weatherDatabase = {
  "USA": {
    cities: ["New York", "Chicago", "Miami"],
    data: {
      "New York": { temp: "22°C", condition: "Sunny", humidity: "40%", wind: "10 km/h", updated: "12:00 PM" },
      "Chicago": { temp: "15°C", condition: "Cloudy", humidity: "55%", wind: "25 km/h", updated: "11:30 AM" },
      "Miami": { temp: "30°C", condition: "Rain", humidity: "80%", wind: "15 km/h", updated: "12:15 PM" },
    }
  },
  "UK": {
    cities: ["London", "Manchester", "Edinburgh"],
    data: {
      "London": { temp: "18°C", condition: "Drizzle", humidity: "70%", wind: "12 km/h", updated: "05:00 PM" },
      "Manchester": { temp: "16°C", condition: "Rain", humidity: "75%", wind: "14 km/h", updated: "04:45 PM" },
      "Edinburgh": { temp: "14°C", condition: "Overcast", humidity: "65%", wind: "18 km/h", updated: "05:10 PM" },
    }
  }
};