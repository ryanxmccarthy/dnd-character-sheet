$(document).ready(() => {
  var url = window.location.href;
  var split = url.split('/');
  var id = split[split.length - 1];

  $('#delete').on('click', event => {
    event.preventDefault();
    $.ajax({
      url: `/api/character/${id}`,
      method: 'DELETE'
    }).done(result => {
      console.log(result)
    })
  })

  $.ajax({
    url: `/api/character/${id}`,
    method: 'GET'
  }).done(result => {
    $('#name').text(result.name);
    $('#level').text(result.level);
    $('#class').text(result.class);
    $('#race').text(result.race);
    $('#background').text(result.background);
    $('#alignment').text(result.alignment);
    $('#armor').text(result.armorClass);
    $('#xp').text(result.xp);
    $('#str').text(result.strength);
    $('#dex').text(result.dex);
    $('#int').text(result.intelligence);
    $('#wis').text(result.wisdom);
    $('#con').text(result.constitution);
    $('#char').text(result.charisma);
    $('#story').text(result.story);
    $('#physical').text(result.physical);
    $('#personality').text(result.personality);
    
  var charName = $("#class").html();

  if (charName === "Bard") {
    // Bard
    $("#bard").removeAttr('disabled');
    $('#profileImg').attr('src', '/assets/images/bard.jpg');
  } else if (charName === "barbarian") {
    // Barbarian
    $('#barbarian').removeAttr('disabled');
    $('#profileImg').attr('src', '/assets/images/barbarian.jpg');
  } else if (charName === "cleric") {
    // Cleric
    $('#cleric').removeAttr('disabled');
    $('#profileImg').attr('src', '/assets/images/cleric.jpg');
  } else if (charName === "druid") {
    // Druid
    $('#druid').removeAttr('disabled');
    $('#profileImg').attr('src', '/assets/images/druid.jpg');
  } else if (charName === "fighter"){
    // Fighter
    $('#fighter').removeAttr('disabled');
    $('#profileImg').attr('src', '/assets/images/fighter.jpg');
  } else if (charName === "paladin"){
    // Paladin
    $('#paladin').removeAttr('disabled');
    $('#profileImg').attr('src', '/assets/images/paladin.jpg');
  } else if (charName === "monk"){
    // Monk
    $('#monk').removeAttr('disabled');
    $('#profileImg').attr('src', '/assets/images/monk.jpg');
  } else if (charName === "ranger"){
    // Ranger
    $("#ranger").removeAttr('disabled');
    // $('#ranger').removeAttr('disabled');
    $('#profileImg').attr('src', '/assets/images/ranger.jpg');
  } else if (charName === "rogue"){
    // Rogue
    $('#rogue').removeAttr('disabled');
    $('#profileImg').attr('src', '/assets/images/rogue.jpg');
  } else if (charName === "sorcerer"){
    // Sorcerer
    $('#sorcerer').removeAttr('disabled');
    $('#profileImg').attr('src', '/assets/images/sorcerer.jpg');
  } else if (charName === "wizard"){
    // Wizard
    $('#wizard').removeAttr('disabled');
    $('#profileImg').attr('src', '/assets/images/wizard.jpg');
  } else {
    // Default
    $('#profileImg').attr('src', '/assets/images/rogue.jpg');
  }

  })
})