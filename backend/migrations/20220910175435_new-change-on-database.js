/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
await knex.schema.createTable("share_link", (table) => {
    table.increments();
    table.string("title");
    table.string("URL_link");
})};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = async function (knex) {
    await knex.schema.dropTable("share_link");
};
