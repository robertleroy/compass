<script>
  import { onMount } from "svelte";

  let heading = "Waiting for data...";
  let magneticDeclination = 0;

  async function getMagneticDeclination(lat, lon) {
      try {
          const response = await fetch(
              `https://www.ngdc.noaa.gov/geomag-web/calculators/calculateDeclination?lat1=35.547&lon1=-97.565&key=zNEw7&resultFormat=json`
            //   35.547497054555784, -97.56519453210645
          );
          if (!response.ok) throw new Error("Failed to get magnetic declination");
          const data = await response.json();
          return data.result[0].declination; // Degrees to adjust
      } catch (error) {
          console.error("Error fetching magnetic declination:", error);
          return 0; // Default to 0 if the API fails
      }
  }
/*   
https://www.ngdc.noaa.gov/geomag-web/calculators/calculateDeclination?lat1=35.547&lon1=-97.565&resultFormat=json
https://www.ngdc.noaa.gov/geomag-web/calculators/calculateDeclination?lat1=35.547&lon1=-97.565&key=zNEw7&resultFormat=json
*/

  function startOrientationTracking() {
      function handleOrientation(event) {
          let alpha = event.alpha; // Device-relative heading
          let trueNorthHeading = (alpha + magneticDeclination + 360) % 360; // Normalize
          heading = `True North: ${trueNorthHeading.toFixed(2)}°`;
      }

      if (typeof DeviceOrientationEvent.requestPermission === "function") {
          DeviceOrientationEvent.requestPermission()
              .then((permissionState) => {
                  if (permissionState === "granted") {
                      window.addEventListener("deviceorientation", handleOrientation);
                  } else {
                      heading = "Permission denied";
                  }
              })
              .catch((error) => {
                  heading = `Error: ${error.message}`;
              });
      } else {
          window.addEventListener("deviceorientation", handleOrientation);
      }
  }

  onMount(() => {
      if (!navigator.geolocation) {
          heading = "Geolocation not supported";
          return;
      }

      navigator.geolocation.getCurrentPosition(
          async (position) => {
              const { latitude, longitude } = position.coords;
              magneticDeclination = await getMagneticDeclination(latitude, longitude);
              startOrientationTracking();
          },
          (error) => {
              heading = `Geolocation error: ${error.message}`;
          },
          { enableHighAccuracy: true }
      );
  });
</script>

<style>
  main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      text-align: center;
      font-size: 1.5rem;
      font-family: Arial, sans-serif;
  }

  .compass {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 5px solid black;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: bold;
      margin-top: 20px;
  }
</style>

<main>
  <h1>True North Compass</h1>
  <div class="compass">{heading}</div>
</main>
