window.addEventListener('load', () => {
  let long
  let lat
  let temperatureDescription = document.querySelector(
    '.temperature-description'
  )

  let temperatureDegree = document.querySelector('.temperature-degree')
  let locationTimezone = document.querySelector('.location-timezone')
  let temperatureSection = document.querySelector('.temperature')
  const temperatureSpan = document.querySelector('.temperature span')

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude
      lat = position.coords.latitude

      const proxy = 'https://cors-anywhere.herokuapp.com/corsdemo'
      const api = `${proxy} http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1f266a5c9acdc72496e12f2447660e3b` //paste api key here use (backtics)`` and replace the two sets of coords with '${lat}' and '${long}';

      fetch(api)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log(data)
          const { temp, description, icon } = data.currently
          //set dom elements from the API
          temperatureDegree.textContent = temp
          temperatureDescription.textContent = description
          locationTimezone.textContent = data.timezone
          //Converting to celsius
          let celsius = (temp - 32) * (5 / 9)

          //set icon
          setIcons(icon, document.querySelector('.icon'))

          //change to degree celsius/fareheit
          degree -
            section.addEventListener('click', () => {
              if (temperatureSpan.textContent === 'F') {
                temperatureSpan.textContent = 'C'
                temperatureDegree.textContent = math.floor(celsius)
              } else {
                temperatureSpan.textContent = 'F'
                temperatureDegree.textContent = temp
              }
            })
        })
    })
  }
  function setIcons(icon, iconID) {
    const Skycons = new Skycons({ color: 'white' })
    const currentIcon = icon.replace(/-/g, '_').toUpperCase()
    Skycons.play()
    return Skycons.set(iconID, Skycons[currentIcon])
  }
})
