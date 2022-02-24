let jsoninfo = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`
   
   const listjs = JSON.parse(jsoninfo);
   
   const list = listjs.list;
   
   const result = {"list" : list}
   
   console.log (result)