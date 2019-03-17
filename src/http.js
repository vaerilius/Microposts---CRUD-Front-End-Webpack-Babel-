/** 
 * EasyHTTP Library
 * Library for making HTTP request
 * 
 * @version 3.0.0
 * @author Timo Tamminen
 * @license 123
**/

class EasyHTTP {

   // get(url) {
   //   return new Promise ((resolve, reject) => {
   //     fetch(url)
   //     .then(response => response.json())
   //     .then(data =>resolve(data))
   //     .catch(err => reject(err));
   //   });
   // }
   async get(url) {
     const response = await fetch(url);
     const resData = await response.json();
     return resData;
   }
 
   // post(url,data) {
   //   return new Promise ((resolve, reject) => {
   //     fetch(url, {
   //       method: 'POST',
   //       headers: {
   //         'Content-type': 'application/json'
   //       },
   //       body: JSON.stringify(data)
   //     })
   //     .then(response => response.json())
   //     .then(data =>resolve(data))
   //     .catch(err => reject(err));
   //   });
   // }
   async post(url, data) {
 
     const response = await fetch(url, {
       method: 'POST',
       headers: {
         'Content-type': 'application/json'
       },
       body: JSON.stringify(data)
     });
     const resData = await response.json();
     return resData;
   }
 
   async put(url, data) {
 
      const response = await fetch(url, {
         method: 'PUT',
         headers: {
           'Content-type': 'application/json'
         },
         body: JSON.stringify(data)
       });
       const resData = await response.json();
       return resData;
   }
    async delete(url) {
    
      const response = await fetch(url, {
         method: 'DELETE',
         headers: {
           'Content-type': 'application/json'
         }
       });
       const resData = await 'Resource deleted';
       return resData;
   }
 }

 export const http = new EasyHTTP();