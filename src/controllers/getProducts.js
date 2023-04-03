exports.getProducts = (req, res, next) => {
    const products = [
        { id: 1, name: 'Produk sandang' },
        { id: 2, name: 'Produk pakan' },
        { id: 3, name: 'Produk papan' },
    ];
    res.send(`
      <h1>Produk Kami</h1>
      <ul>
        ${products.map(product => `<li>${product.name}</li>`).join('')}
      </ul>
    `);
};
