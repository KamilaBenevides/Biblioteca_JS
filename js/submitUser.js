var firebaseConfig = {
    apiKey: "AIzaSyDsI7NwHgOjhtt5j2bWPFu29Fb5CYsH06w",
    authDomain: "payroll-ba15c.firebaseapp.com",
    databaseURL: "https://payroll-ba15c.firebaseio.com",
    projectId: "payroll-ba15c",
    storageBucket: "payroll-ba15c.appspot.com",
    messagingSenderId: "169965503316",
    appId: "1:169965503316:web:3303709e490565f4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    const fire = firebase.firestore();
    
        const inputNome = document.querySelector("#nome");
        const inputInstutuicao = document.querySelector("#instutuicao");
        const inputMatricula = document.querySelector("#matricula");
        const inputCpf = document.querySelector("#cpf");
        const saveButton = document.querySelector("#saveB");

        const docRef = firestore.doc("Usuer");

        saveButton.addEventListener("click", function(){
            docRef.set({
            nome: inputNome.value,
            instituicao: inputInstutuicao.value,
            matricula: inputMatricula.value,
            cpf: inputCpf.value,
            multa: ""
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    });