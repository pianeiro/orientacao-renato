const controller = {
    index: (req, res) => res.render('index'),
    cadastrar: (req, res) => res.render('cadastro', {dados: JSON.stringify(req.body)}),
    logar: (req, res) => res.send('Logado'),
};

module.exports = controller;