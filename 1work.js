const parser = new DOMParser();

const xmlinfo = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const parxml = parser.parseFromString(xmlinfo, "text/xml");

const listinfo = parxml.querySelector("list")
const studentru = listinfo.querySelectorAll('student')     



let result = [];


function info(user){
    const name = user.querySelector('name')
    const firstName = s.querySelector("first")
    const second = s.querySelector("second")
    const age = user.querySelector("age")
    const prof = user.querySelector("prof")
    const lang = s.getAttribute('lang')
    const fullname = firstName.textContent +"  "+second.textContent
    let v= { "name" :fullname,'age' :age.textContent, "prof" :prof.textContent, "lang" :lang};
    return v;
}

for (res of studentru){
    info(res)
    result.push(info(res))
}

let finalRes = {"list" : result};
console.log(finalRes)