const mongoose = require('mongoose');
const Store = mongoose.model('Store')


exports.homePage = (req, res) => {
  console.log(req.name);
  res.render('index');
}

exports.addStore = (req, res) => {
  res.render('editStore', { title: 'Add Store' });
}

exports.createStore = async (req, res) => {
  const store = await (new Store(req.body)).save();
  req.flash('success', `Successfully created ${store.name}. Care to leave a review?`)
  res.redirect(`/store/${store.slug}`);
}

exports.getStores = async (req, res) => {
  // query the db
  const stores = await Store.find();

  res.render('stores', { title: 'Stores', stores})
}

exports.editStore = async (req, res) => {
  // 1. Find the store given the id
  // 2. confirm that they are the owner of the store
  // 3. render out the edit form so the user can edit their store
}