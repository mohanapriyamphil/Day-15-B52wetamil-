let count = 10;

setTimeout(() => {
  document.querySelector("b").innerHTML = count;
  count--;

  setTimeout(() => {
    document.querySelector("b").innerHTML = count;
    count--;
    setTimeout(() => {
      document.querySelector("b").innerHTML = count;
      count--;
      setTimeout(() => {
        document.querySelector("b").innerHTML = count;
        count--;
        setTimeout(() => {
          document.querySelector("b").innerHTML = count;
          count--;
          setTimeout(() => {
            document.querySelector("b").innerHTML = count;
            count--;
            setTimeout(() => {
              document.querySelector("b").innerHTML = count;
              count--;
              setTimeout(() => {
                document.querySelector("b").innerHTML = count;
                count--;
                setTimeout(() => {
                  document.querySelector("b").innerHTML = count;
                  count--;
                  setTimeout(() => {
                    document.querySelector("b").innerHTML = count;
                    count--;
                    setTimeout(() => {
                      document.querySelector("h1").innerHTML =
                        "Happy Independence Day";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
