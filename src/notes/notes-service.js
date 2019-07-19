const NotesService = {
  getAllNotes(knex) {
    return knex.select('*').from('notes')
  },
  insertNote(knex, newNote) {
    return knex
      .insert(newNote)
      .into('notes')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },
  getById(knex, note_id) {
    return knex.from('notes').select('*').where('note_id', note_id).first()
  },
  
  deleteNote(knex, note_id) {
    return knex('notes')
      .where({ note_id })
      .delete()
  },
  updateNote(knex, note_id, newNoteFields) {
    return knex('notes')
      .where({ note_id })
      .update(newNoteFields)
  },
}

module.exports = NotesService
