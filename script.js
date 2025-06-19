<script>
 
  // Use only these 6 asterisks (exclude asterisk7)
  const asteriskIcons = [
    './dist/assets/icons/asterisk1.svg',
    './dist/assets/icons/asterisk2.svg',
    './dist/assets/icons/asterisk3.svg',
    './dist/assets/icons/asterisk4.svg',
    './dist/assets/icons/asterisk5.svg',
    './dist/assets/icons/asterisk6.svg',
  ];

  // Helper to get random asterisk URL
  function getRandomAsterisk() {
    return asteriskIcons[Math.floor(Math.random() * asteriskIcons.length)];
  }

     // Animate header asterisk
  let currentAsteriskIndex = 0;
  function animateHeaderAsterisk(){
    const img = document.getElementById("header-asterisk");
    currentAsteriskIndex = (currentAsteriskIndex + 1) % asteriskIcons.length;
    img.src = asteriskIcons[currentAsteriskIndex];
  }
  setInterval(animateHeaderAsterisk, 500);

  
</script>
