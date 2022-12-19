function apHook() {

  //      AWARD POOL - Create Amazing
  //        /\__/\   - js by @rUv
  //       ( o.o  )  - v1.0.0
  //         >^<     - https://github.com/awardpool/awardpool-hook


// Set Timer in Seconds to use with apTimer()
  const timer = 25;

  // Get the APuid & Version value from the URL query string
  const urlParams = new URLSearchParams(window.location.search);
  const APuid = urlParams.get('APuid');
  const version = urlParams.get('version');

  // This function is used to check if a APuid value is not empty.
  if (APuid !== '' && APuid !== null) {
    console.log(`✅ Posted ${APuid} to ${version || 'live'}`);

    // Construct the full URL for the GET request
    const url = `https://app.awardpool.com/version-${version || 'live'}/api/1.1/wf/hook/?uid=${APuid}&version=${version || 'live'}`;

  // This function is using the Fetch API to make a request to the Award Pool API

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
        // Handle any errors here.
      });
  } else {
    console.log(`❌ APuid is empty or null`);
  }
  }

    // Use this function to execute timer instead of remove slashes below
    //   window.addEventListener('load', apTimer);

    // This function is used to set a timer before executing the apHook() function.
  function apTimer() {
    setTimeout(apHook, timer * 1000);
  }

// This function is used to execute apHook() when a user scrolls to a part of the page with the div id=apHook

  function APScroll() {
    const apHook = document.getElementById('apHook');
    const apHookPosition = apHook.getBoundingClientRect();
    const apHookPositionTop = apHookPosition.top;
    const apHookPositionBottom = apHookPosition.bottom;
    const apHookPositionLeft = apHookPosition.left;
    const apHookPositionRight = apHookPosition.right;
    const apHookPositionWidth = apHookPosition.width;
    const apHookPositionHeight = apHookPosition.height;
    const apHookPositionX = apHookPosition.x;
    const apHookPositionY = apHookPosition.y;
    const apHookPositionWindowTop = apHookPosition.top + window.pageYOffset;
    const apHookPositionWindowBottom = apHookPosition.bottom + window.pageYOffset;
    const apHookPositionWindowLeft = apHookPosition.left + window.pageXOffset;
    const apHookPositionWindowRight = apHookPosition.right + window.pageXOffset;
    const apHookPositionWindowX = apHookPosition.x + window.pageXOffset;
    const apHookPositionWindowY = apHookPosition.y + window.pageYOffset;

    // This function is used to execute apHook() when a user scrolls to a part of the page with the div id=apHook
    if (apHookPositionWindowTop < window.innerHeight && apHookPositionWindowBottom > 0) {
      console.log('apHook is in the viewport');
      apHook();
    } else {
      console.log('apHook is not in the viewport');
    }
  }

  // Remove slashes with window.events to enable or disable various functions.  
  // Call the APScroll function when the page finishes loading, used with scroll function. 
  //  window.addEventListener('load', APScroll);

  // Call the APScroll function when the page is scrolled, used with scroll function. 
  //  window.addEventListener('scroll', APScroll);

  // Call the APScroll function when the page is resized, used with scroll function. 
  //  window.addEventListener('resize', APScroll);

  // Call the apHook function when the page finishes loading
  window.addEventListener('load', apHook);
