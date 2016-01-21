
exports.all = function(req, res) {
  const json = [
    {
      Name: 'Hieno huvila hietaniemessä',
      Address: 'Hietsu'
    },
    {
      Name: 'Kaamea koppi kalliossa',
      Address: 'Kallio'
    },
    {
      Name: 'Lupsakka luukku',
      Address: 'Lakkila'
    },
    {
      Name: 'La maison trés élegant',
      Address: 'Lyon'
    },
  ];
  res.send(json);
}
