function showsInfo() {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const result = document.getElementById("sss").value;

      
      let tableInfo = document.getElementById("tbl");

      let tblContent = `<tr>
                        <th>Name</th>
                        <th>Capital</th>
                        <th>Region</th>
                        <th>Currency</th>
                        <th>Languages</th>
                        <th>Area (sq km)</th>
                        <th>Population</th>
                      </tr>`;

        result != "" ? data.filter((ele) => ele.name.common === result).forEach((element) => {
          tblContent += `<tr>
                              <td>${element.name.common}</td>
                              <td>${element.capital}</td>
                              <td>${element.region}</td>
                              <td>${element.currencies? Object.values(element.currencies)[0].name: "N/A"}</td>
                              <td>${element.languages? Object.values(element.languages).join(", "): "N/A"}</td>
                              <td>${element.area}</td>
                              <td>${element.population}</td>
                         </tr>`;
        }) : data.forEach((element) => {
          tblContent += `<tr>
                              <td>${element.name.common}</td>
                              <td>${element.capital}</td>
                              <td>${element.region}</td>
                              <td>${element.currencies? Object.values(element.currencies)[0].name: "N/A"}</td>
                              <td>${element.languages? Object.values(element.languages).join(", "): "N/A"}</td>
                              <td>${element.area}</td>
                              <td>${element.population}</td>
                         </tr>`;
        });;

      tableInfo.innerHTML = tblContent;
    });
}



// const myFunc = async (e) => {
//   const result = document.getElementById("sss").value;
// console.log(result);

//   const sss = await fetch("https://restcountries.com/v3.1/all")
//     .then((res) => res.json())
//     .then((data) => 
//       data.filter((ele) => ele.name.common === result)
//     )

//     console.log(sss);
    
  
// }
