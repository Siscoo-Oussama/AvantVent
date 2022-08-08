import React from "react";
import "./fournisseurs.scss";

const Fournisseurs=()=>{
    return(
        <>
        <section id="Client">
        <nav class="navbar bg-light">
  <form class="container-fluid justify-content-start">
    <button class="b1 ">Plus</button>
    <button class="b2">Plus</button>
    <button class="b3">Plus</button>
  </form>
</nav>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">SOCIETE</th>
      <th scope="col">ADRESSE</th>
      <th scope="col">ICE</th>
      <th scope="col">TELEPHONE</th>
      <th scope="col">EMAIL</th>
      <th scope="col">BANQUE</th>
      <th scope="col">RIB</th>
    </tr>
  </thead> 
   <tbody>
  </tbody>
  
</table>
<nav aria-label="Page navigation example" className="pg">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
        </section>
        </>
    )
}

export default Fournisseurs;