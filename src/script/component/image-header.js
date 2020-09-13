class ImageHeader extends HTMLElement {
 
   constructor() {
       super();
       this.shadowDOM = this.attachShadow({mode: "open"});
   }
 
   connectedCallback(){
       this.render();
   }
 
   render() {
       this.shadowDOM.innerHTML = `<style>


header.masthead {
  position: relative;
  height: 400px;
      text-align: center;
    color: #ffffff;
  background-color: #343a40;
  background: url("./styles/header.jpg") no-repeat center center;
  background-size: cover;
  padding-top: 8rem;
  padding-bottom: 8rem;
}
header.masthead .overlay {
  position: absolute;
  background-color: #212529;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0.3;
}

header.masthead h1 {
  font-size: 2rem;
}
text-white {
    color: #fff!important;
}
@media (min-width: 768px) {
  header.masthead {
    padding-top: 12rem;
    padding-bottom: 12rem;
  }
  header.masthead h1 {
    font-size: 3rem;
  }
}
</style>
<header class="masthead text-white text-center">
<div class="overlay"></div>
<div class="container" style="position:relative">
  <div class="row">
    <div class="col-xl-9 mx-auto">
      <h1 class="mb-5">Menoe Seafood</h1>
      <h4><strong>There is no love sincerer than the love of food</strong></h4>
<h4>“Tak ada cinta yang lebih tulus dari pada cinta terhadap makanan.”</h4>

<p>George Bernard Shaw</p>
    </div>
  </div>
</div>
</header>`;

   }
}
 
customElements.define("image-header", ImageHeader);