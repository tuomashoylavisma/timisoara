const data = [
    {id: 1, parent: null, name: 'Suomi'}, 
    {id: 2, parent: null, name: 'Viro'},
    {id: 3, parent: 1, name: 'Helsinki'}, 
    {id: 4, parent: 1, name: 'Jyväskylä'}, 
    {id: 5, parent: 4, name: 'Kuokkala'}, 
    {id: 6, parent: 4, name: 'Halssila'},
    {id: 7, parent: 3, name: 'Mellunmäki'},
    {id: 8, parent: null, name: 'Ruotsi'},
    {id: 9, parent: 3, name: 'Konala'},
    {id: 10, parent: 7, name: 'Aarteenetsijäntie'},
    {id: 11, parent: 1, name: 'Vantaa'},
    {id: 12, parent: 11, name: 'Itä-Hakkila'},
    {id: 13, parent: 8, name: 'Tukholma'},
    {id: 14, parent: 2, name: 'Pärnu'},
    {id: 15, parent: 2, name: 'Tallinna'},
    {id: 16, parent: 5, name: 'Suuruspääntie'},
    {id: 17, parent: 5, name: 'Siepparinkuja'}
  ]

export default data