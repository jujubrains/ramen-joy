import React, { Component } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import FilesUploadComponent from '../components/FilesUploadComponent';

class Friends extends Component {
  render() {
    return (
      <div>
        <FilesUploadComponent />
      </div>
    );
  }
}

export default Friends;








// import React,{useEffect} from 'react';

// const Friends = () => {

// function handleFormSubmit(e){
//   e.preventDefault();
  
// }

//   return ( 
//     <div>
//       <form class="mt-4"
//             action="/upload"
//             method="POST"
//             enctype="multipart/form-data"
//           >
//             <div class="form-group">
//               <input
//                 onUpload={handleFormSubmit}
//                 type="file"
//                 name="file"
//                 id="input-files"
//                 class="form-control-file border"
//               />
//             </div>
//             <button type="submit" class="btn btn-primary">Submit</button>
//           </form>
      
//     </div>
//    );
// }
 
// export default Friends;