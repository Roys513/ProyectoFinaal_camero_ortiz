// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "entrega-final-curso-react-ch.firebaseapp.com",
  projectId: "entrega-final-curso-react-ch",
  storageBucket: "entrega-final-curso-react-ch.firebasestorage.app",
  messagingSenderId: "390145676377",
  appId: "1:390145676377:web:02f72d24e0bc4d6bbf0d48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

// --------------------------------------------------------------------------------------------------------------------

// const misProductos = [
//     {
//         nombreArtista: "Taylor Swift",
//         album: "1989 (CD)",
//         precio: 10,
//         img: "https://recordsale.de/600/600/taylorswift-1989(2).jpg",
//         stock: 5,
//         idCat:"cd"
//     },
//     {
//         nombreArtista: "Rosalía",
//         album: "El malquerer (Vinilo)",
//         precio: 12,
//         img: "https://i.discogs.com/gK2OYqKT5m__7dGpSEQvgukGD7j_nj3Vj82ivSJCHws/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNzQ2/NTk4LTE1NDExNzQx/MTMtODA2OC5qcGVn.jpeg",
//         stock: 10,
//         idCat:"vinilos"
//     },
//     {
//         nombreArtista: "Toto",
//         album: "IV (Cassette)",
//         precio: 6,
//         img: "https://i.discogs.com/6iD9FWau_13-_E-Vous1lNC-GRC0vdnxeyjTPx7I6sQ/rs:fit/g:sm/q:90/h:508/w:512/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4ODI3/MjAtMTMwNTUzMzQy/OS5qcGVn.jpeg",
//         stock: 3,
//         idCat:"cassettes"
//     },
//     {
//         nombreArtista: "Mark Ronson",
//         album: "Late night feelings",
//         precio: 12.99,
//         img: "https://img.cdandlp.com/2019/07/imgL/119601418.jpg",
//         stock: 5,
//         idCat:"cd"
//     },
//     {
//         nombreArtista: "Coldplay",
//         album: "A head full of dreams",
//         precio: 41.99,
//         img: "https://recordsale.de/600/600/coldplay_a-head-full-of-dreams_20.jpg",
//         stock: 3,
//         idCat:"vinilos"
//     },
//     {
//         nombreArtista: "Camarón",
//         album: "Soy gitano y éxitos (cassette)",
//         precio: 12,
//         img: "https://i.discogs.com/buj23p2CUAFfwyxG4stsphixGP5CNef76Pq1C1Ub0Sg/rs:fit/g:sm/q:90/h:778/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc0Mzk3/NDQtMTQ0NTY5NDk0/OC05NDkwLmpwZWc.jpeg",
//         stock: 1,
//         idCat:"cassettes"
//     },
// ]

// import { collection, doc, writeBatch } from "firebase/firestore";

// const subirProductos = async() =>{
//     const batch = writeBatch(db);
//     const productosRef = collection(db,"productos");

//     misProductos.forEach((producto) =>{
//         const nuevoDoc = doc(productosRef);
//         batch.set(nuevoDoc,producto);
//     });

//     try{
//         await batch.commit();
//         console.log("Productos subidos exitosamente")
//     } catch(error){
//         console.error("Ha ocurrido un imprevisto en la subida de los productos", error);
//     }
// };

// subirProductos()