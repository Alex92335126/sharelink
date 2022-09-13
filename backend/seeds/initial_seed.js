/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('share_link').del()
    await knex('share_link').insert([
      {
        title: 'Google', 
        URL_link: 'www.google.com', 
      },
      {
        title: 'Yahoo', 
        URL_link: 'www.yahoo.com', 
      },
      {
        title: 'Apple', 
        URL_link: 'www.apple.com', 
      },
      {
        title: 'NBA', 
        URL_link: 'www.nba.com', 
      }
    ]);
  };
