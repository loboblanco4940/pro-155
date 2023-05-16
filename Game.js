AFRAME.registerComponent("game-play", {
    schema: {
      elementId: { type: "string", default: "#coin" },
    },
  
    update: function () {
      this.isCollided(this.data.elementId);
    },
  
    isCollided: function (elementId) {
      const element = document.querySelector(elementId);
      element.addEventListener("collide", (e) => {
        if (elementId.includes("#coin")) {
            element.setAttribute("visible", false)
            console.log("colision de anillo");
        } 

       if (elementId.includes("#fish")) {
          console.log("Colision de pez");
        }
      });
    },
  });