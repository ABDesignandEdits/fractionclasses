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
