function makeFoldersArray() {
    return [
      {
        id: 1,
        folder_name: 'Test One',
      },
      {
        id: 2,
        folder_name: 'Test Two',
      },
      {
        id: 3,
        folder_name: 'Test Three',
      },
      {
        id: 4,
        folder_name: 'Test Four',
      },
    ];
  }

  function makeMaliciousFolder() {
    const maliciousFolder = {
      id: 911,
      style: 'How-to',
      date_published: new Date().toISOString(),
      title: 'Naughty naughty very naughty <script>alert("xss");</script>',
      content: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`
    }
    const expectedFolder = {
      ...maliciousFolder,
      title: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
      content: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
    }
    return {
      maliciousFolder,
      expectedFolder,
    }
  }
  
  module.exports = {
    makeFoldersArray,
    makeMaliciousFolder,
  }