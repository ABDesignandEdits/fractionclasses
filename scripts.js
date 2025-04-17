<!-- JavaScript Functions -->
<script>
  function showForm(event) {
    event.preventDefault();
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('enroll-btn').style.display = 'none';
  }

  function goBack(event) {
    event.preventDefault();
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('enroll-btn').style.display = 'inline-block';
    // Optionally, redirect to homepage
    // window.location.href = '/';
  }
</script>

                            <!-- JavaScript -->
                            <script>
                              document.addEventListener("DOMContentLoaded", function () {
                                const container = document.getElementById("cardContainer");
                                const leftArrow = document.getElementById("leftArrow");
                                const rightArrow = document.getElementById("rightArrow");
                          
                                // Manual scroll
                                leftArrow.addEventListener("click", () => {
                                  container.scrollBy({ left: -300, behavior: "smooth" });
                                });
                          
                                rightArrow.addEventListener("click", () => {
                                  container.scrollBy({ left: 300, behavior: "smooth" });
                                });
                          
                                // Auto-scroll every 4 seconds
                                setInterval(() => {
                                  const maxScroll = container.scrollWidth - container.clientWidth;
                                  if (container.scrollLeft >= maxScroll - 10) {
                                    container.scrollTo({ left: 0, behavior: "smooth" });
                                  } else {
                                    container.scrollBy({ left: 300, behavior: "smooth" });
                                  }
                                }, 4000);
                          
                                // Touch swipe
                                let startX = 0;
                                let isDown = false;
                          
                                container.addEventListener("touchstart", (e) => {
                                  isDown = true;
                                  startX = e.touches[0].clientX;
                                });
                          
                                container.addEventListener("touchmove", (e) => {
                                  if (!isDown) return;
                                  const currentX = e.touches[0].clientX;
                                  const deltaX = startX - currentX;
                                  container.scrollLeft += deltaX;
                                  startX = currentX;
                                });

 container.addEventListener("touchend", () => {
                                  isDown = false;
                                });
                              });
                            </script>


  <!-- JavaScript for auto-scroll and arrows -->
  <script>
    const scrollContainer = document.getElementById("galleryScroll");
    const cardWidth = 304; // new card width + spacing
    let scrollIndex = 0;

    setInterval(() => {
      scrollIndex++;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const nextScrollLeft = scrollIndex * cardWidth;

      if (nextScrollLeft >= maxScroll) {
        scrollIndex = 0;
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollContainer.scrollTo({ left: nextScrollLeft, behavior: 'smooth' });
      }
    }, 4200);

    // Trigger stack animation
    window.addEventListener("load", () => {
      document.querySelectorAll(".stack-animate").forEach(el => {
        el.style.animationPlayState = "running";
      });
    });

    document.getElementById("leftArrow").addEventListener("click", () => {
      scrollIndex = Math.max(0, scrollIndex - 1);
      scrollContainer.scrollBy({ left: -cardWidth, behavior: "smooth" });
    });

    document.getElementById("rightArrow").addEventListener("click", () => {
      scrollIndex++;
      scrollContainer.scrollBy({ left: cardWidth, behavior: "smooth" });
    });
  </script>

// 🔹 Enroll Form Toggle (Formfacade Integration)
function showForm(event) {
  event.preventDefault();
  document.getElementById('form-container').style.display = 'block';
  document.getElementById('enroll-btn').style.display = 'none';
}

function goBack(event) {
  event.preventDefault();
  document.getElementById('form-container').style.display = 'none';
  document.getElementById('enroll-btn').style.display = 'inline-block';
  document.querySelectorAll('.btn-outline, .mobile-nav-link').forEach(el => {
    if (el.innerText.includes("Enroll Now")) {
      el.style.display = 'inline-block';
    }
  });
}

// 🔹 Background Video Auto Mute + Play
const video = document.getElementById("bg-video");
if (video) {
  video.muted = true;
  video.volume = 0;
  video.defaultMuted = true;
  video.setAttribute("muted", "muted");
  video.play().catch(err => console.log("Autoplay failed:", err));
}

// 🔹 Gallery Auto Scroll + Arrows + Animation Trigger
const scrollContainer = document.getElementById("galleryScroll");
const cardWidth = 304;
let scrollIndex = 0;

setInterval(() => {
  scrollIndex++;
  const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
  const nextScrollLeft = scrollIndex * cardWidth;
  if (nextScrollLeft >= maxScroll) {
    scrollIndex = 0;
    scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    scrollContainer.scrollTo({ left: nextScrollLeft, behavior: 'smooth' });
  }
}, 4200);

window.addEventListener("load", () => {
  document.querySelectorAll(".stack-animate").forEach(el => {
    el.style.animationPlayState = "running";
  });
});

document.getElementById("leftArrow").addEventListener("click", () => {
  scrollIndex = Math.max(0, scrollIndex - 1);
  scrollContainer.scrollBy({ left: -cardWidth, behavior: "smooth" });
});

document.getElementById("rightArrow").addEventListener("click", () => {
  scrollIndex++;
  scrollContainer.scrollBy({ left: cardWidth, behavior: "smooth" });
});

// 🔹 Mobile Menu Toggle + Outside Click Close
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const menu = document.getElementById("mobile-menu-content");

menuIcon.addEventListener("click", () => {
  menu.classList.remove("hidden");
  menuIcon.classList.add("hidden");
  closeIcon.classList.remove("hidden");
});

closeIcon.addEventListener("click", () => {
  menu.classList.add("hidden");
  menuIcon.classList.remove("hidden");
  closeIcon.classList.add("hidden");
});

document.addEventListener("click", (e) => {
  const isClickInsideMenu = menu.contains(e.target);
  const isClickOnMenuIcon = menuIcon.contains(e.target);
  const isClickOnCloseIcon = closeIcon.contains(e.target);
  if (!isClickInsideMenu && !isClickOnMenuIcon && !isClickOnCloseIcon) {
    menu.classList.add("hidden");
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
});

// 🔹 Our Experts Section Scroll + Touch Support
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("cardContainer");
  const leftArrow = document.getElementById("leftArrow");
  const rightArrow = document.getElementById("rightArrow");

  leftArrow.addEventListener("click", () => {
    container.scrollBy({ left: -300, behavior: "smooth" });
  });

  rightArrow.addEventListener("click", () => {
    container.scrollBy({ left: 300, behavior: "smooth" });
  });

  setInterval(() => {
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (container.scrollLeft >= maxScroll - 10) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: 300, behavior: "smooth" });
    }
  }, 4000);

  let startX = 0;
  let isDown = false;

  container.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].clientX;
  });

  container.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    const currentX = e.touches[0].clientX;
    const deltaX = startX - currentX;
    container.scrollLeft += deltaX;
    startX = currentX;
  });

  container.addEventListener("touchend", () => {
    isDown = false;
  });
});
