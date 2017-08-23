console.log('its works!')
// wait for the DOM to finish loading


$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function


  // user selects a certain div
  $('p').html(`X starts the game! Go X!`)
  $('.box').on('click', getRowCol);
  let count = 0;
  function getRowCol () {


    // calling the function .text() to get the value
    let value = $(this).text();
    console.log('value of the clicked area: ', value)

    console.log('current count of clicks: ', count)
    if ( value === '' ) {

      count++;
      if ( count % 2 !== 0 ) {
        $('p').html(`Its your turn O!`)
        $(this).html('x');
      } else {
        $('p').html(`Its your turn X!`)
        $(this).html('0');
      }
      }
    }

    // this is used to refresh the page
    $('button').on('click', reload);

    // location.reload => reloads the website
    function reload() {
      location.reload(true);
    }




  // if that div is blank

    // and if count = odd
      // fill in with x

  // if count = even
    // fill in with O

  // if that div is not blank
    // do not allow to be filled in



  // button shoul allow reset



});
/*

$('.box').on('click', getRowCol);
let count = 0;
function getRowCol () {

  // calling the function .text() to get the value
  let value = $(this).text();
  console.log('value of the clicked area: ', value)

  console.log('current count of clicks: ', count)
  if ( value === '' ) {
    count++;
    if ( count % 2 !== 0 ) {
      $(this).html('x');
    } else {
      $(this).html('0');
    }
    }
  }

  // this is used to refresh the page
  $('button').on('click', reload);

  // location.reload => reloads the website
  function reload() {
    location.reload(true);
  }
*/
