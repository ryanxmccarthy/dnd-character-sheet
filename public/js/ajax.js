$(document).ready(() => {
  $("#submit").on('click', event => {
    event.preventDefault();
    var character = {
      Name: $("#name").val().trim(),
      Level: $("#level").val().trim(),
      Class: $('#class').val(),
      Race: $("#race").val(),
      Background: $("#background").val().trim(),
      Alignment: $("#alignment").val(),
      ArmorClass: $("#armorClass").val(),
      ExperiencePoints: $("#xp").val().trim(),
      Strength: $("#str").val().trim(),
      Dexterity: $("#dex").val().trim(),
      Constitution: $("#con").val().trim(),
      Intelligence: $("#int").val().trim(),
      Wisdom: $("#wis").val().trim(),
      Charisma: $("#cha").val().trim(),
      Physical: $('#physical').val().trim(),
      Personality: $('#personality').val().trim(),
      Story: $('#story').val().trim(),
    }

    $.ajax({
      url:"/api/character",
      method: "POST",
      data: character,
      dataType: "JSON"
    }).done(data => {
      window.location.href = '//gentle-thicket-15279.herokuapp.com/character/' + data.id;
    })
  });

  $('#diceRoll').on('click', event => {
    event.preventDefault();
    $('#diceRes').empty();
    var totalDice = $('#diceNum').val();
    var diceSize = $('#diceSize').val();
    $.ajax({
      url: `/api/dice/${totalDice}/${diceSize}`,
      method: 'GET'
    }).done(result => {
      for(var i = 0; i < result.length; i++) {
        $('#diceRes').append(result[i] + ',')
      }
    })
  })
})