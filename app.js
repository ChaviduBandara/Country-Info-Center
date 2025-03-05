function showsInfo() {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const result = document.getElementById("input").value;

      let table = document.getElementById("tbl");

      let tblContent = `<tr>
                        <th>Name</th>
                        <th>Capital</th>
                        <th>Region</th>
                        <th>Currency</th>
                        <th>Languages</th>
                        <th>Area (sq km)</th>
                        <th>Population</th>
                      </tr>`;

      // ternary operator ekak use karanne; id result is not an empty string ..........
      result != "" ? data
            .filter((info) => info.name.common.toLowerCase() === result.toLowerCase())
            .forEach((element) => {
              tblContent += `<tr>
                              <td><img src="${element.flags.png}" width="50" height="40" style="margin-right: 10px;"> ${element.name.common}</td>
                              <td>${element.capital}</td>
                              <td>${element.region}</td>
                              <td>${element.currencies ? Object.values(element.currencies)[0].name: "N/A"}</td>
                              <td>${element.languages ? Object.values(element.languages).join(", "): "N/A"}</td>
                              <td>${element.area}</td>
                              <td>${element.population}</td>
                         </tr>`;

              // else do this,
            })
        : alert("Please enter the name of the country!");

      table.innerHTML = tblContent;
    });
}

// To show all the names of the countries
function showAllTheCountries() {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      let table = document.getElementById("tbl");

      let tblContent = `<tr>
                        <th>Names of the Countries</th>
                      </tr>`;

      data.forEach((element) => {
        tblContent += `<tr>
                            <td>${element.name.common}</td>      
                        </tr>`;
      });

      table.innerHTML = tblContent;
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
