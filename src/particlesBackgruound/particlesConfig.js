const particleConfig = {
  autoPlay: true,

  background: {
    color: {
      value: "#000000"
    },
    opacity: 1
  },

  fullScreen: {
    enable: true,
    zIndex: -1
  },

  detectRetina: true,
  fpsLimit: 120,

  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 200,
        duration: 0.4
      },
      grab: {
        links: {
          color: {
            value: "#ffffff"
          }
        }
      },
      bubble: {
        color: {
          value: "#ffffff"
        }
      }
    }
  },

  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        width: 1920,
        height: 1080
      }
    },

    color: {
      value: "#ffffff"
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: { min: 0.3, max: 0.8 },
      animation: {
        enable: true,
        speed: 0.5,
        sync: false
      }
    },

    size: {
      value: { min: 1, max: 3 },
      animation: {
        enable: true,
        speed: 3,
        sync: false
      }
    },

    move: {
      enable: true,
      speed: 2,
      direction: "none",
      outModes: {
        default: "out"
      }
    },

    links: {
      enable: true,
      distance: 100,
      color: {
        value: "#ffffff"
      },
      opacity: 0.8,
      width: 1
    },

    stroke: {
      width: 0,
      color: {
        value: "#ffffff"
      }
    }
  },

  pauseOnBlur: true,
  pauseOnOutsideViewport: true,

  motion: {
    disable: true
  }
};

export default particleConfig;
