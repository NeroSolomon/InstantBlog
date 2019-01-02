const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/instantBlog';

exports.insertOne = (obj, collectionName, callback)=> {
  if (!obj || !collectionName) return;
  MongoClient.connect(url, (err, db)=> {
    if (err) throw err;
    console.log('success connect');
    const dbase = db.db('instantBlog');
    dbase.collection(collectionName).insertOne(obj, (err, res)=> {
      callback(err, res);
      db.close();
    });
  });
};

exports.insertMany = (obj, collectionName, callback)=> {
  if (!obj || !collectionName) return;
  MongoClient.connect(url, (err, db)=> {
    if (err) throw err;
    console.log('success connect');
    const dbase = db.db('instantBlog');
    dbase.collection(collectionName).insertMany(obj, (err, res)=> {
      callback(err, res);
      db.close();
    });
  });
};

exports.find = (obj, collectionName, callback)=> {
  if (!obj || !collectionName) return;
  MongoClient.connect(url, (err, db)=> {
    if (err) throw err;
    console.log('success connect');
    const dbase = db.db('instantBlog');
    dbase.collection(collectionName).find(obj).toArray((err, res)=> {
      callback(err, res);
      db.close();
    });
  });
};

exports.updateOne = (obj, newValue, collectionName, callback)=> {
  if (!obj || !newValue || ! collectionName) return;
  MongoClient.connect(url, (err, db)=> {
    if (err) throw err;
    console.log('success connect');
    const dbase = db.db('instantBlog');
    const updateObj = {$set: newValue};
    dbase.collection(collectionName).updateOne(obj, updateObj, (err, res)=> {
      callback(err, res);
      db.close();
    });
  });
};

exports.updateMany = (obj, newValue, collectionName, callback)=> {
  if (!obj || !newValue || !collectionName) return;
  MongoClient.connect(url, (err, db)=> {
    if (err) throw err;
    console.log('success connect');
    const dbase = db.db('instantBlog');
    const updateObj = {$set: newValue};
    dbase.collection(collectionName).updateMany(obj, updateObj, (err, res)=> {
      callback(err, res);
      db.close();
    });
  });
};

exports.deleteOne = (obj, collectionName, callback)=> {
  if (!obj || !collectionName) return;
  MongoClient.connect(url, (err, db)=> {
    if (err) throw err;
    console.log('success connect');
    const dbase = db.db('instantBlog');
    dbase.collection(collectionName).deleteOne(obj, (err, res)=> {
      callback(err, res);
      db.close();
    });
  });
};

exports.deleteMany = (obj, collectionName, callback)=> {
  if (!obj || !collectionName) return;
  MongoClient.connect(url, (err, db)=> {
    if (err) throw err;
    console.log('success connect');
    const dbase = db.db('instantBlog');
    dbase.collection(collectionName).deleteMany(obj, (err, res)=> {
      callback(err, res);
      db.close();
    });
  });
};

exports.aggregate = (obj, collectionName, callback)=> {
  if (!obj || !collectionName) return;
  MongoClient.connect(url, (err, db)=> {
    if (err) throw err;
    console.log('success connect');
    const dbase = db.db('instantBlog');
    dbase.collection(collectionName).aggregate([
      {
        $lookup: obj
      }
    ]).toArray((err, res)=> {
      callback(err, res);
      db.close();
    });
  });
};

exports.drop = (collectionName, callback)=> {
  if (!collectionName) return;
  MongoClient.connect(url, (err, db)=> {
    if (err) throw err;
    console.log('success connect');
    const dbase = db.db('instantBlog');
    dbase.collection(collectionName).drop((err, res)=> {
      callback(err, res);
      db.close();
    });
  });
};