const main = () => {
    const renderAllProv = (prov) => {
        const listProvElement = document.querySelector("#listProv");
        listProvElement.innerHTML = "";
    
    const data=prov.meals;
        data.map(pr => {
          
            listProvElement.innerHTML += `
            <div class="row no-gutters">
    
            <div class="col-lg-6 order-lg-2 text-white showcase-img"><img class="gambar" src="${pr.strMealThumb}"/></div>
            <div class="col-lg-6 order-lg-1 my-auto showcase-text">
            
              <h2>${pr.strMeal}</h2>
              <p class="lead mb-0">${pr.idMeal}</p>
            </div>
          </div>
               
            `;
        });
        
    }   
    const getProv = async () => {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
        const prov = await res.json();
        renderAllProv(prov);
    }
    
    
    getProv()
    };
    
    export default main;