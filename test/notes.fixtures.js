function makeNotesArray() {
    return [
      {
        id: 1,
        note_name: 'Test One',
        modified: '2029-01-22T16:28:32.615Z',
        folder_id: 1,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
      },
      {
        id: 2,
        note_name: 'Test Two',
        modified: '2100-05-22T16:28:32.615Z',
        folder_id: 2,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, exercitationem cupiditate dignissimos est perspiciatis, nobis commodi alias saepe atque facilis labore sequi deleniti. Sint, adipisci facere! Velit temporibus debitis rerum.',
      },
      {
        id: 3,
        note_name: 'Test Three',
        modified: '1919-12-22T16:28:32.615Z',
        folder_id: 3,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, voluptate? Necessitatibus, reiciendis? Cupiditate totam laborum esse animi ratione ipsa dignissimos laboriosam eos similique cumque. Est nostrum esse porro id quaerat.',
      },
      {
        id: 4,
        note_name: 'Test Four',
        modified: '1919-12-22T16:28:32.615Z',
        folder_id: 4,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae accusamus veniam consectetur tempora, corporis obcaecati ad nisi asperiores tenetur, autem magnam. Iste, architecto obcaecati tenetur quidem voluptatum ipsa quam?',
      },
    ];
  }

  function makeMaliciousNote() {
    const maliciousNote = {
      id: 911,
      style: 'How-to',
      date_published: new Date().toISOString(),
      title: 'Naughty naughty very naughty <script>alert("xss");</script>',
      content: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`
    }
    const expectedNote = {
      ...maliciousNote,
      title: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
      content: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
    }
    return {
      maliciousNote,
      expectedNote,
    }
  }
  
  module.exports = {
    makeNotesArray,
    makeMaliciousNote,
  }