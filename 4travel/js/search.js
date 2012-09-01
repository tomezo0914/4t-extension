$(function() {
  $('#search').on('click', function() {
    search();
  });

  $('body').keypress(function(event) {
    if (event.which === 13) {
      search();
    }
  });

  var search = function() {
    var keyword = encodeURIComponent($('#keyword').val());
    var url = 'http://4travel.jp/retrieve?keyword=' + keyword;
    chrome.tabs.update(null, { url: url }, null);
  };

});
