/* eslint-env jquery */
/* eslint prefer-template: 0, no-use-before-define: 0, func-names: 0*/
'use strict';
$(() => {
  $.getJSON('/dictionary-api', printTerms);
  $('form').submit((e) => {
    e.preventDefault();
    $.post('/dictionary-api', { term: $('#term').val(), defined: $('#defined').val() }, printTerms);
    $('form').trigger('reset');
  });
});

function printTerms(terms) {
  $('body>dl').empty();
  $.each(terms, function () {
    $('<dt>').text(this.term).appendTo('body>dl');
    $('<dd>').text(this.defined).appendTo('body>dl');
  });
  $('dt').off('dblclick').dblclick(function () {
    $.ajax({
      url: '/dictionary-api/' + $(this).text(),
      type: 'DELETE',
      success: printTerms,
    });
  });
}
