const firebaseConfig = {
    apiKey: "AIzaSyDsI7NwHgOjhtt5j2bWPFu29Fb5CYsH06w",
    authDomain: "payroll-ba15c.firebaseapp.com",
    databaseURL: "https://payroll-ba15c.firebaseio.com",
    projectId: "payroll-ba15c",
    storageBucket: "payroll-ba15c.appspot.com",
    messagingSenderId: "169965503316",
    appId: "1:169965503316:web:3303709e490565f4"
  };
  firebase.initializeApp(firebaseConfig);

    //const submitRecommendation = function () {
        const firestore = firebase.firestore();
        //const docRef = firestore.doc("users");
        const inputNome = document.querySelector("#nome");
        const inputInstutuicao = document.querySelector("#instutuicao");
        const inputMatricula = document.querySelector("#matricula");
        const inputCpf = document.querySelector("#cpf");
        const saveButton = document.querySelector("#saveB");
        
        console.log("chegou aqui");
        
        //saveButton.addEventListener("click", function(){
            firestore.collection("usuarios").add({
            nome: inputNome.value,
            instituicao: inputInstutuicao.value,
            matricula: inputMatricula.value,
            cpf: inputCpf.value
            })
            .then(function() {
                console.log("Document written with ID: ");
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
        //});
    //}
    window.load = function () {
        // Find the HTML element with the id recommendationForm,
        // and when the submit event is triggered on that element, call submitRecommendation.
        $("#recommendationForm").submit(submitRecommendation);
    };
