const Flags = require("../models/Flags")

const flagController = {
    getAll: (req, res) => {
        Flags.find()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }
}

module.exports = flagController;