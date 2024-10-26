const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc, Timestamp } = require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBQd8Doe5m0gjo0wXSCt-UrzoUO5WNV3w4",
    authDomain: "windyhomes-8018a.firebaseapp.com",
    projectId: "windyhomes-8018a",
    storageBucket: "windyhomes-8018a.appspot.com",
    messagingSenderId: "683148403795",
    appId: "1:683148403795:web:4e5f9f23d98ff8e17f12a6",
    measurementId: "G-GFHGGKR55H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function createListings() {
    const listingsCollection = collection(db, "listings");

    const listings = [
        // Sale Listings
        {
            discountedPrice: "230000",
            location: "University Village, Chicago, IL",
            bedrooms: 2,
            furnished: true,
            longitude: -87.6542,
            offer: true,
            regularPrice: "250000",
            bathrooms: 1,
            userRef: "AEuZXLgBv8XJMsT1aoMklBZTurD2",
            geolocation: { lng: -87.6542, lat: 41.8661 },
            type: "sale",
            latitude: 41.8661,
            parking: true,
            imgUrls: ["https://example.com/image1.jpg"],
            timestamp: Timestamp.fromDate(new Date()),
            name: "Sale Property #1"
        },
        {
            discountedPrice: "320000",
            location: "Little Italy, Chicago, IL",
            bedrooms: 3,
            furnished: false,
            longitude: -87.6553,
            offer: true,
            regularPrice: "350000",
            bathrooms: 2,
            userRef: "AEuZXLgBv8XJMsT1aoMklBZTurD2",
            geolocation: { lng: -87.6553, lat: 41.8535 },
            type: "sale",
            latitude: 41.8535,
            parking: true,
            imgUrls: ["https://example.com/image2.jpg"],
            timestamp: Timestamp.fromDate(new Date()),
            name: "Sale Property #2"
        },
        // More Sale Properties...
        
        // Rent Listings
        {
            discountedPrice: "2300",
            location: "Pilsen, Chicago, IL",
            bedrooms: 2,
            furnished: true,
            longitude: -87.6550,
            offer: true,
            regularPrice: "2500",
            bathrooms: 1,
            userRef: "AEuZXLgBv8XJMsT1aoMklBZTurD2",
            geolocation: { lng: -87.6550, lat: 41.8500 },
            type: "rent",
            latitude: 41.8500,
            parking: true,
            imgUrls: ["https://example.com/image3.jpg"],
            timestamp: Timestamp.fromDate(new Date()),
            name: "Rent Property #1"
        },
        {
            discountedPrice: "3200",
            location: "South Loop, Chicago, IL",
            bedrooms: 3,
            furnished: false,
            longitude: -87.6282,
            offer: true,
            regularPrice: "3500",
            bathrooms: 2,
            userRef: "AEuZXLgBv8XJMsT1aoMklBZTurD2",
            geolocation: { lng: -87.6282, lat: 41.8593 },
            type: "rent",
            latitude: 41.8593,
            parking: true,
            imgUrls: ["https://example.com/image4.jpg"],
            timestamp: Timestamp.fromDate(new Date()),
            name: "Rent Property #2"
        },
        // More Rent Properties...
    ];

    for (const listing of listings) {
        try {
            const docRef = await addDoc(listingsCollection, listing);
            console.log(`Document written with ID: ${docRef.id}`);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}

createListings();