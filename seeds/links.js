exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('links').del()
    .then(function() {
      // Inserts seed entries
      return knex('links').insert([{
          id: 1,
          title: 'Pumpkin Bread',
          links: 'http://allrecipes.com/recipe/6820/downeast-maine-pumpkin-bread/',
          vote: '3'
        },
        {
          id: 2,
          title: 'Ginger Bread',
          links: 'http://allrecipes.com/recipe/7322/favorite-old-fashioned-gingerbread/',
          vote: '3'
        },
        {
          id: 3,
          title: 'Banana Bread',
          links: 'http://allrecipes.com/recipe/20144/banana-banana-bread/',
          vote: '3'
        }
      ]);
    });
};
