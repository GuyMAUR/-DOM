//function validateForm(e){
    //e.preventDefault();
   // var name=document.loginForm.name.value
    //var password=document.loginForm.password.value
    //if(name.length==0)
   // return alert('name is required')
    //if(password.length<5)
    //return alert('password length should more than 5')
//}

function AjouterArticle() {
    const ArticleInput = document.getElementById("ArticleInput");
    const liste = document.getElementById("liste");
    const valueArticle = ArticleInput.value.trim();
    if (valueArticle !== "") {
      const li = document.createElement("li");
      li.innerHTML = `
          <h4>${valueArticle}</h4>
  
          <button onclick="deleteArticle(this)"> supprimer</button>
          <input type="checkbox" />
      `;
      liste.appendChild(li);
    }
  }
  
  function deleteArticle(btn) {
    const li = btn.parentElement;
    const liste = document.getElementById("liste");
    liste.removeChild(li);
  }
  
  const btnAdd = document.getElementById("btnAdd");
  btnAdd.addEventListener("click", AjouterArticle);
  