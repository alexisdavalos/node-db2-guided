//changes to apply to database
exports.up = function(knex) {
    //DO NOT FORGET TO RETURN
    return knex.schema.createTable('characters', tbl => {
        //ads an id column that auto increments

        tbl.increments(); //primary key

        tbl
            .string('name')
            .notNullable()
            .index(); // makes searching by name faster
        
        tbl.string('house', 128);

        tbl.string('origin', 256);

        //booleans are normally stored as 1 (true) and 0 (false)
        tbl.boolean('alive').defaultTo(true);
    })
};
//how to undo the changes
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('characters');
};
