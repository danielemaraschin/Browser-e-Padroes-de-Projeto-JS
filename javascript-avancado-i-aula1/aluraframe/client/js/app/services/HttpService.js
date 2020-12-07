class HttpService {
    
    get(url) {
        
        return new Promise((resolve, reject) => {
            

            let xhr = new XMLHttpRequest();
            
            xhr.open('GET', url);
            
            xhr.onreadystatechange = () => {
                    
                if(xhr.readyState == 4) {
                    
                    if(xhr.status == 200) {   
                        
                        resolve(JSON.parse(xhr.responseText));  
                    } else {
                        
                        reject(xhr.responseText);
                    }
                }
            };
            
            xhr.send();
             
            
        });
    }

    post(url, dado) {
        
        return new Promise((resolve, reject) => {
            

            let xhr = new XMLHttpRequest();
            
            xhr.open('POST', url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            
            xhr.onreadystatechange = () => {
                    
                if(xhr.readyState == 4) {
                    
                    if(xhr.status == 200) {   
                        
                        resolve(JSON.parse(xhr.responseText));  
                    } else {
                        
                        reject(xhr.responseText);
                    }
                }
            };
            
            xhr.send(JSON.stringify(dado)); //usando JSON.stringifly para converter objeto em uma string no formato JSON.            
        });
    }
}

service = new HttpService();

//service.get('negociacoes/semanaRetrasda').then(negociacoes => ???);
//service.get('url').then(acesso ao retorno que é a lista de negoc. => faz a operação desejada)
//é uma promise por isso tem o 'then'