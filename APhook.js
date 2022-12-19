function apHook() {

  //      AWARD POOL
  //    Create Amazing
  //
  //        /\__/\
  //       ( o.o  )
  //         >^<
  //
  //     js by @rUv

  // Get the APuid & Version value from the URL query string
  const urlParams = new URLSearchParams(window.location.search);
  const APuid = urlParams.get('APuid');
  const version = urlParams.get('version');

  // This function is used to check if a APuid value is not empty.
  if (APuid !== '' && APuid !== null) {
    console.log(`✅ Posted ${APuid} to ${version || 'live'}`);

    // Construct the full URL for the GET request
    const url = `https://app.awardpool.com/version-${version || 'live'}/api/1.1/wf/hook/?uid=${APuid}&version=${version || 'live'}`;

  // This function is using the Fetch API to make a request to the Award Pool API.

    // Make the GET request
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        console.log(data.response.completed);
        console.log(data.status);
      })
      .catch(error => {
        // Handle any errors here
      });
  } else {
    console.log(`❌ APuid is empty or null`);
  }
  }
// Call the apHook function when the page finishes loading
// window.addEventListener('load', apHook);

// Set timer in seconds 
  var time = 5;
  
function apTimer() {
  setTimeout(apHook, time * 1000);
}

// Call the apHook function when the page finishes loading
window.addEventListener('load', apTimer);
