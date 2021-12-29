const express = require('express');
const {execSQL}=require('../db/mysql')
const router = express.Router();

router.get('/', (req, res) => {
  const sql='select * from blogs'
execSQL(sql).then(result=>{
  console.log(result)
})

  
  
  
  res.send('这是我的网站!');
});

module.exports = router;