function addImage() {
        let count = 0;

        $("#categories li h2").each(function (i) {
          ++count;
          console.log($(this).text());
        });

        console.log(count);
      }

      $(function () {
        console.log("onready is alive");
        addImage();
      });
