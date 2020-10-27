const Booksell = require('./../models/bookModel');
exports.getAllBooksells = async (req, res) => {
    try {
        const booksells = await Booksell.find();
        res.status(200).render("main",{
        status:'success',
        results: booksells.length,
        data: {booksells}
        });
        } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
exports.getBooksell = async (req, res) => {
    try {
        const booksellId = parseInt(req.params.id);
        const booksell = await Booksell.findOne({ id: booksellId });
        if (booksell) {
            res.status(200).json({
                status: 'success',
                data: { booksell }
            });
        } else {
            res.status(404).json({
                status: 'fail',
                message: 'no id found'
            });
        }
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });

    }
};
exports.createBooksell = async (req, res) => {
    try {
        const newBooksell = await Booksell.create(req.body);
        res.status(201).json({
            status: 'success',
            data: { booksell: newBooksell }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });

    }
};
exports.updateBooksell = async (req, res) => {
    try {
        const booksellId = parseInt(req.params.id);
        const booksell = await Booksell.findOneAndUpdate({ id: booksellId }, req.body, {
            new: true,
            runValidators: true
        });
        if (booksell) {
            res.status(200).json({
                status: 'success',
                data: { booksell }
            });
        } else {
            res.status(404).json({
                status: 'fail',
                message: 'no id found'
            });
        }
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
exports.deleteBooksell = async (req, res) => {
    try {
        const booksellsId = parseInt(req.params.id);
        const booksell = await Booksell.findOneAndDelete({ id: parseInt(booksellsId) });
        if (booksell) {
            res.status(200).json({
                status: 'success',
                data: null
            });
        } else {
            res.status(404).json({
                status: 'fail',
                message: 'no id found'
            });
        }
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });

    }
};

exports.test01 = async (req, res) => {
    res.send('NOT IMPLEMENTED: Site Home Page');
};