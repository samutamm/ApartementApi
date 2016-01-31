


function getQuery(list) {
  return list.reduce(function(prev, current, i, arr) {
    return prev + current;
  });
}
