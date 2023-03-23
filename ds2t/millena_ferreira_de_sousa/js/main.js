'use strict'

export const getDados = async (telefonePerfil) => {


    const url = `http://localhost:8080/v1/whatsapp/perfil/telefone/${telefonePerfil}`
    const response = await fetch(url);
    const dado = await response.json();

    console.log(dado);

    return dado
    
   
}