import {initializeApp} from 'firebase/app';
import {getFirestore, collection, getDocs, getDoc, doc, query, where, addDoc, Timestamp, updateDoc} from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBmiS1YQfEQYTLs8xHwWlGfJgPvO9z-6Jw',
	authDomain: 'coderhouse-store.firebaseapp.com',
	projectId: 'coderhouse-store',
	storageBucket: 'coderhouse-store.appspot.com',
	messagingSenderId: '532871784844',
	appId: '1:532871784844:web:f96bb804f9fbbddba80ea9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export class FirebaseClient {
	async getProducts() {
		try {
			const ref = collection(db, 'products');
			const docSnapshot = await getDocs(ref);
			return docSnapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data(),
			}));
		} catch (error) {
			console.error('getProducts', error);
		}
	}

	async getProduct(id) {
		try {
			const ref = doc(db, 'products', id);
			const docSnapshot = await getDoc(ref);
			if (docSnapshot.exists()) {
				return {
					id: docSnapshot.id,
					...docSnapshot.data(),
				};
			}

			return null;
		} catch (error) {
			console.error('getProducts', error);
		}
	}

	async getProductsByCategory(category) {
		try {
			const q = query(collection(db, 'products'), where('category', '==', category));
			const docSnapshot = await getDocs(q);
			return docSnapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data(),
			}));
		} catch (error) {
			console.error('getProducts', error);
		}
	}

	async updateProductStockById(id, count) {
		const ref = doc(db, 'products', id);
		const docSnapshot = await getDoc(ref);
		if (docSnapshot.exists()) {
			const {stock} = docSnapshot.data();
			// Defino mi nuevo stock
			const newStock = stock === 0 || stock - count < 0 ? 0 : stock - count;
			// Actualizo el valor del stock
			await updateDoc(ref, {
				stock: newStock,
			});
			return true;
		}

		return null;
	}

	async addOrder(items, user, price, total) {
		try {
			// Mapeo mi nueva orden
			const newOrder = {
				...user,
				items,
				date: Timestamp.now().toDate(),
				price,
				total,
			};
			// Actualizo el stock de los items
			items.forEach(async element => {
				await this.updateProductStockById(element.item.id, element.count);
			});
			// Genero nueva orden
			const docRef = await addDoc(collection(db, 'orders'), newOrder);
			// Retorno el id de la nueva orden
			return docRef.id;
		} catch (error) {
			console.error('addOrder', error);
		}
	}
}