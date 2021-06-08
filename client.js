console.log( 'js' );

$( document ).ready( readyNow );

function readyNow(){
  console.log( 'JQ' );
  $( '#sayHelloButton' ).on('click', sayHello );
  $( 'h2' ).mouseenter( h2mouseEnter );
  $( 'h2' ).mouseleave( h2MouseLeave)
  $( '.clicker' ).on('click', changeTextColor);
}

function changeTextColor(){
  console.log( 'in changeTextColor' );
  $( this ).css( 'color', 'blue');
}

function h2mouseEnter(){
  $( this ).css( 'background-color', 'red' );
}

function h2MouseLeave(){
  $( this ).css( 'background-color', 'white');
}

function sayHello(){
  // target inputn element by //
  // get value of the text input
  let outputText =  'Hello, ' + $( '#nameInput' ).val();
  console.log( outputText );
  // display out text on DOM
  // target output element
  let outputEl = $( '#helloOut' )
  // empty it
  outputEl.empty();
  // append the output text int it
  outputEl.append( outputText );
  // empty input
  $ ( '#nameInput').val('');
}
