const ingredients = [
        "Картошка",
        "Грибы",
        "Чеснок",
        "Помидоры",
        "Зелень",
        "Приправы",
      ];

      function addIngredients() {
        let html = "";

        for (var key in ingredients) {
          html = html + `<li>${ingredients[key]}</li>`;
        }

        console.log(html);
        $("#ingredients").append(html);
      }

      $(function () {
        console.log("onready is alive");
        addIngredients();
      });
