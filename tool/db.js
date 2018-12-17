const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/instantBlog';

exports.insertOne = (obj, collectionName)=> {
  if (!obj || !collectionName) return;
  MongoClient.connect(url, (err, db)=> {
    if (err) throw err;
    console.log('success connect');
    const dbase = db.db('instantBlog');
    dbase.collection(collectionName).insertOne(obj, (err)=> {
      if (err) throw err;
      console.log('success insert');
      db.close();
    });
  });
};

exports.insertMany = (obj, collectionName)=> {
  if (!obj || !collectionName) return;
  MongoClient.connect(url, (err, db)=> {
    if (err) throw err;
    console.log('success connect');
    const dbase = db.db('instantBlog');
    dbase.collection(collectionName).insertMany(obj, (err)=> {
      if (err) throw err;
      console.log('success insert');
      db.close();
    });
  });
};

exports.find = (obj, collectionName, type = { type: 1}, limit = '', skip = '')=> {
  if (!obj || !collectionName) return;
  MongoClient.connect(url, (err, db)=> {
    if (err) throw err;
    console.log('success connect');
    const dbase = db.db('instantBlog');
    dbase.collection(collectionName).find(obj).sort(type).skip(skip).limit(limit).toArray((err)=> {
      if (err) throw err;
      console.log('success find');
      db.close();
    });
  });
};

exports.updateOne = (obj, newValue, collectionName)=> {
  if (!obj || !newValue || ! collectionName) return;
  MongoClient.connect(url, (err, db)=> {
    if (err) throw err;
    console.log('success connect');
    const dbase = db.db('instantBlog');
    const updateObj = {$set: newValue};
    dbase.collection(collectionName).updateOne(obj, updateObj, (err)=> {
      if (err) throw err;
      console.log('success update');
      db.close();
    });
  });
};

exports.updateMany = (obj, newValue, collectionName)=> {
  if (!obj || !newValue || !collectionName) return;
  MongoClient.connect(url, (err, db)=> {
    if (err) throw err;
    console.log('success connect');
    const dbase = db.db('instantBlog');
    const updateObj = {$set: newValue};
    dbase.collection(collectionName).updateMany(obj, updateObj, (err)=> {
      if (err) throw err;
      console.log('success update');
      db.close();
    });
  });
};

exports.deleteOne = (obj, collectionName)=> {
  if (!obj || !collectionName) return;
  MongoClient.connect(url, (err, db)=> {
    if (err) throw err;
    console.log('success connect');
    const dbase = db.db('instantBlog');
    dbase.collection(collectionName).deleteOne(obj, (err)=> {
      if (err) throw err;
      console.log('success delete');
      db.close();
    });
  });
};

exports.deleteMany = (obj, collectionName)=> {
  if (!obj || !collectionName) return;
  MongoClient.connect(url, (err, db)=> {
    if (err) throw err;
    console.log('success connect');
    const dbase = db.db('instantBlog');
    dbase.collection(collectionName).deleteMany(obj, (err)=> {
      if (err) throw err;
      console.log('success delete');
      db.close();
    });
  });
};

exports.aggregate = (obj, collectionName)=> {
  if (!obj || !collectionName) return;
  MongoClient.connect(url, (err, db)=> {
    if (err) throw err;
    console.log('success connect');
    const dbase = db.db('instantBlog');
    dbase.collection(collectionName).aggregate([
      {
        $lookup: obj
      }
    ]).toArray((err)=> {
      if (err) throw err;
      console.log('success aggregate');
      db.close();
    });
  });
};

exports.drop = (collectionName)=> {
  if (!collectionName) return;
  MongoClient.connect(url, (err, db)=> {
    if (err) throw err;
    console.log('success connect');
    const dbase = db.db('instantBlog');
    dbase.collection(collectionName).drop((err, res)=> {
      if (err) throw err;
      if (res) console.log('success drop');
      db.close();
    });
  });
};