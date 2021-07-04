function addText() {

      $('#name-input');

      return;

      let count = 0;

      $('#categories li h2').each(function(i)
      {
        ++count;
        console.log($(this).text());
      });

      console.log(count);
    }

    function change() {
      console.log('pushka');

      $('#name-output').html($('#name').val());
    }

    $(function() {
      console.log('onready is alive');
      addText();
    });
