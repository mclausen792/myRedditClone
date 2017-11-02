exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function() {
      // Inserts seed entries
      return knex('comments').insert([{
          id: 1,
          name: 'Makayla',
          comment: 'Perfect for fall'
        },
        {
          id: 2,
          name: 'Makayla',
          comment: 'Love this for Christmas'
        },
        {
          id: 3,
          name: 'Makayla',
          comment: 'A year-round favorite'
        }
      ]);
    });
};
