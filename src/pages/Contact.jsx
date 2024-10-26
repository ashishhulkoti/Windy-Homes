import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'

function Contact() {
  const [message, setMessage] = useState('')
  const [landlord, setLandlord] = useState(null)
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams()

  const params = useParams()

  useEffect(() => {
    const getLandlord = async () => {
      const docRef = doc(db, 'users', params.landlordId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setLandlord(docSnap.data())
      } else {
        toast.error('Could not get landlord data')
      }
    }

    getLandlord()
  }, [params.landlordId])


  

  const onChange = (e) => setMessage(e.target.value)

  return (
    <div className='pageContainer'>
      <header>
        <p className='pageHeader'>Contact Landlord</p>
      </header>

      {landlord !== null && (
        <main>
          <div className='contactLandlord'>
            <p className='landlordName'>Contact {landlord?.name}</p>
          </div>

          <form className='messageForm'>
            <div className='messageDiv'>
              <label htmlFor='message' className='messageLabel'>
                Message
              </label>
              <textarea
                name='message'
                id='message'
                className='textarea'
                value={message}
                onChange={onChange}
              ></textarea>
            </div>

            <a
              href={`mailto:${landlord.email}?Subject=${searchParams.get(
                'listingName'
              )}&body=${message}`}
            >
              <button type='button' className='primaryButton'>
                Send Message
              </button>
            </a>
          </form>
        </main>
      )}
    </div>
  )
}

export default Contact


// import { useState, useEffect } from 'react';
// import { useParams, useSearchParams } from 'react-router-dom';
// import { doc, getDoc } from 'firebase/firestore';
// import { db } from '../firebase.config';
// import { toast } from 'react-toastify';

// function Contact() {
//   const [message, setMessage] = useState('');
//   const [landlord, setLandlord] = useState(null);
//   const [searchParams] = useSearchParams();
//   const params = useParams();

//   // Adjust the landlordId as necessary
//   const landlordId = params.landlordId || "mDRyfOMZjRQXJFpLinlybEv1fk1"; // Replace with an existing ID

//   console.log("Landlord ID:", landlordId); // Log for debugging

//   useEffect(() => {
//     const getLandlord = async () => {
//       try {
//         const docRef = doc(db, 'users', landlordId);
//         const docSnap = await getDoc(docRef);
        
//         if (docSnap.exists()) {
//           setLandlord(docSnap.data());
//           console.log("Landlord data:", docSnap.data()); // Log fetched data
//         } else {
//           console.error('Document does not exist in Firestore.');
//           toast.error('Could not get landlord data: Document does not exist.');
//         }
//       } catch (error) {
//         console.error("Error fetching landlord data:", error);
//         toast.error(`Error fetching landlord data: ${error.message}`);
//       }
//     };

//     getLandlord();
//   }, [landlordId]);

//   const onChange = (e) => setMessage(e.target.value);

//   return (
//     <div className='pageContainer'>
//       <header>
//         <p className='pageHeader'>Contact Landlord</p>
//       </header>

//       {landlord && (
//         <main>
//           <div className='contactLandlord'>
//             <p className='landlordName'>Contact {landlord.name}</p>
//           </div>

//           <form className='messageForm'>
//             <div className='messageDiv'>
//               <label htmlFor='message' className='messageLabel'>
//                 Message
//               </label>
//               <textarea
//                 name='message'
//                 id='message'
//                 className='textarea'
//                 value={message}
//                 onChange={onChange}
//               ></textarea>
//             </div>

//             <a
//               href={`mailto:${landlord.email}?Subject=${searchParams.get('listingName')}&body=${message}`}
//             >
//               <button type='button' className='primaryButton'>
//                 Send Message
//               </button>
//             </a>
//           </form>
//         </main>
//       )}
//       {landlord === null && <p>Loading landlord data...</p>}
//     </div>
//   );
// }

// export default Contact;

