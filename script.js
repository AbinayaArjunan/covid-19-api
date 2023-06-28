// let container_fluid1 = document.querySelector(".container-fluid");

// let container = document.createElement("div");
// container.className = "cointainer";

// let div_header = document.createElement("div");
// div_header.className = "col-12";

// let h1_tag = document.createElement("h1");
// h1_tag.innerHTML = "COVID-19 REPORT";

// let div_form = document.createElement("div");
// div_form.className = "form-group";

// let div_type = document.createElement("div");
// div_type.className = "col-md-12";

// let h4_tag = document.createElement("h4");
// h4_tag.className = "text-center";
// h4_tag.innerHTML = "ENTER A COUNTRY NAME";

// let div_row = document.createElement("div");
// div_row.className = "row";



// let div_col1 = document.createElement("div");
// div_col1.className = "col-6"

// let form = document.createElement("form");
// form.className = "form-inline dictform";
// //div
// let div = document.createElement("div");
// div.className = "form-group";

// let wordInput = document.createElement("input");
// wordInput.setAttribute("type", "search");
// wordInput.classList.add("form-control", "wordinput");
// wordInput.setAttribute("arial-label", "large");
// wordInput.setAttribute("placeholder", "type here....");

// let searchButton = document.createElement("div");
// searchButton.className = "col-6";
// searchButton.innerHTML = `<button type="submit" class="btn btn-info searchButton" >Search</button>`

// div.append(wordInput);
// form.append(div);
// div_col1.append(form);
// //div_col2.append(button_tag)
// div_row.append(div_col1,searchButton);
// div_type.append(h4_tag);
// div_form.append(div_type, div_row);
// div_header.append(h1_tag);
// container.append(div_header, div_form);
// container_fluid1.append(container);
// //document.body.append(container_fluid1,container_fluid2);
//container_fluid2.append(word_info);







// form.addEventListener('submit', handleSubmit);
// searchButton.addEventListener('click', handleSubmit);


async function disease() {
    try {
        let input = document.querySelector('#wordinput').value;

        let v = await fetch(`https://disease.sh/v3/covid-19/countries/${input}`);
        let a = await v.json();
        console.log(a);



        document.querySelector('#country').value = a.country;
        document.querySelector('#continent').value = a.continent;
        document.querySelector('#population').value = a.population;
        document.querySelector('#cases').value = a.cases;
        document.querySelector('#deaths').value = a.deaths;
        document.querySelector('#tdydeaths').value = a.todayDeaths;
        document.querySelector('#recovered').value = a.recovered;
        document.querySelector('#active').value = a.active;
        document.querySelector('#tdycases').value = a.todayCases;
        document.querySelector('#tdyrecovered').value = a.todayRecoverd;

    } catch {
        console.log('error');
    }

} disease()













