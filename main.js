let usuarios = [
    {
        name: 'tatiana',
        genero: 'f',
        hobbies: 'correr',
        avatar:'myAvatar.svg'   
    },
    {
        name: 'niolas',
        genero: 'm',
        hobbies: 'tenis',
        avatar:'myAvatar.svg' 
    },
    {
        name: 'tatiana',
        genero: 'f',
        hobbies: 'colorear',
        avatar:'myAvatar.svg' 
    },
    {
        name: 'nicolas',
        genero: 'm',
        hobbies: 'x-box',
        avatar:'myAvatar.svg' 
    }
];
// Se espera que cargue la pagina
window.addEventListener('load',function(){
    let buscarBtn = document.getElementById("buscarBtn");
    let resultados = document.getElementById("resultados");
    buscarBtn.addEventListener('click', function(){
        // get hobbies
        let hobbies = document.getElementById('hobbies');
        let hobby = hobbies.value;
        console.log(hobby);
        // get genero
        let genero = document.getElementById('genero');
        let gen = genero.value;   
        console.log(gen);  
        let resultHTML = '';
        let largoUsuarios = usuarios.length;
        for(let i=0; i<largoUsuarios;i++){
            // filtro
            if(gen == 'n' || gen == usuarios[i].genero){
                if(hobby == '' || hobby == usuarios[i].hobbies){

                    resultHTML += '<div class="persona">\
                    <img src="images/'+ usuarios[i].avatar +'" alt="">\
                    <div class="persona-info">\
                    <span>'+ usuarios[i].name +'</span><br>\
                    <span>' + usuarios[i].hobbies + '</span></div>\
                    <button class="add-friend">Agregar amigo</button></div>';
                }
            }
        }
        resultados.innerHTML = resultHTML;

   });

});