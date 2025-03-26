

```js
async function getMagneticDeclination(lat, lon) {
    try {
        const response = await fetch(
            `https://www.ngdc.noaa.gov/geomag-web/calculators/calculateDeclination?lat1=${lat}&lon1=${lon}&resultFormat=json`
        );
        if (!response.ok) throw new Error("Failed to get magnetic declination");
        const data = await response.json();
        return data.result[0].declination; // Degrees to adjust
    } catch (error) {
        console.error("Error fetching magnetic declination:", error);
        return 0; // Default to 0 if the API fails
    }
}

async function getTrueNorthHeading() {
    if (!navigator.geolocation) {
        console.error("Geolocation is not supported by this browser.");
        return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        console.log(`Location: ${latitude}, ${longitude}`);

        let magneticDeclination = await getMagneticDeclination(latitude, longitude);
        console.log(`Magnetic Declination: ${magneticDeclination}°`);

        function handleOrientation(event) {
            let alpha = event.alpha; // Device-relative heading
            let trueNorthHeading = (alpha + magneticDeclination + 360) % 360; // Normalize

            console.log(`True North Heading: ${trueNorthHeading.toFixed(2)}°`);
        }

        // Request permission on iOS
        if (typeof DeviceOrientationEvent.requestPermission === "function") {
            DeviceOrientationEvent.requestPermission()
                .then((permissionState) => {
                    if (permissionState === "granted") {
                        window.addEventListener("deviceorientation", handleOrientation);
                    } else {
                        console.error("DeviceOrientation permission denied.");
                    }
                })
                .catch(console.error);
        } else {
            window.addEventListener("deviceorientation", handleOrientation);
        }
    }, console.error, { enableHighAccuracy: true });
}

// Call the function to get true north heading
getTrueNorthHeading();
```
