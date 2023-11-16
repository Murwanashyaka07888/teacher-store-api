const notFound = (req,res) => res.status(404).send('router does no exist')

module.exports = notFound