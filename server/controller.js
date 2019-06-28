module.exports = {
    post: (req, res) => {
        console.log(req.body)
        res.status(201).send('received')
    }
}