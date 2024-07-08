// const returnClarifaiRequestOptions = (imageUrl) => {
//     const PAT = '3784dc030efe4f808ee15a8556a38831';
//     const USER_ID = 'zaugust48';
//     const APP_ID = 'Imagerecognition';
//     const MODEL_ID = 'face-detection';
//     const IMAGE_URL = imageUrl;

//     const raw = JSON.stringify({
//         "user_app_id": {
//             "user_id": USER_ID,
//             "app_id": APP_ID
//         },
//         "inputs": [
//             {
//                 "data": {
//                     "image": {
//                         "url": IMAGE_URL
//                         // "base64": IMAGE_BYTES_STRING
//                     }
//                 }
//             }
//         ]
//     });
//     const requestOptions= {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Authorization': 'Key ' + PAT
//         },
//         body: raw
    
//     };
//     return requestOptions
// }




  //   this.setState({imageUrl: this.state.input});
  //     fetch('http://localhost:3000/imageurl', {
  //       method: 'post',
  //       headers: {'Content-Type': 'application/json'},
  //       body: JSON.stringify({
  //         input: this.state.input
  //       })
  //     })
  //     .then(response => response.json())
  //     .then(response => {
  //       if (response) {
  //         fetch('http://localhost:3000/image', {
  //           method: 'put',
  //           headers: {'Content-Type': 'application/json'},
  //           body: JSON.stringify({
  //             id: this.state.user.id
  //           })
  //         })
  //           .then(response => response.json())
  //           .then(count => {
  //             this.setState(Object.assign(this.state.user, { entries: count}))
  //           })
  //           .catch(console.log)

  //       }
  //       this.displayFaceBox(this.calculateFaceLocation(response))
  //     })
  //     .catch(err => console.log(err));
  // }