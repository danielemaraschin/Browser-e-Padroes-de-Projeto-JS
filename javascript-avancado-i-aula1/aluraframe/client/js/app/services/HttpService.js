class HttpService {
    get(url) {
        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();

            xhr.open('GET', url);
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(xhr.responseText);
                    }
                }
            };
            xhr.send(); 

        });
    }
}

service = new HttpService();

service.get('negociacoes/semana').then(negociacoes => ???);
//service.get('url').then(acesso ao retorno que é a lista de negoc. => faz a operação desejada)
//é uma promise por isso tem o 'then'