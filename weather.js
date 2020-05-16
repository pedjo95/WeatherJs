class Weather {
  constructor(city, country) {
    this.apiKey = "ebfce807c35d1e328562d4c5b638fca8";
    this.city = city;
    this.country = country;
  }

  async getWeather() {
    const response = await fetch(`
    http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`);

    const responseData = await response.json();

    return responseData;
  }

  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
