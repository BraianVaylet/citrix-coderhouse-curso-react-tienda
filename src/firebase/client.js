import {initializeApp} from 'firebase/app';
import {getFirestore, collection, getDocs, getDoc, doc, query, where, addDoc, Timestamp, updateDoc} from 'firebase/firestore/lite';
import {getAuth, signInWithPopup, GithubAuthProvider, onAuthStateChanged, signOut} from 'firebase/auth';

const provider = new GithubAuthProvider();

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
		try {
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
		} catch (error) {
			console.error('updateProductStockById', error);
		}
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

	// Para actualizar el stock de todos los items a 20
	async updateProductsStock() {
		try {
			const items = await this.getProducts();
			items.forEach(async item => {
				const ref = doc(db, 'products', item.id);
				const docSnapshot = await getDoc(ref);
				if (docSnapshot.exists()) {
					// Actualizo el valor del stock
					await updateDoc(ref, {
						stock: 20,
					});
					return true;
				}

				return null;
			});
		} catch (error) {
			console.error('updateProductsStock', error);
		}
	}

	async onAuthStateChangedClient(onChange) {
		const auth = getAuth();
		await onAuthStateChanged(auth, user => {
			if (user) {
				onChange(user);
				return user;
			}

			onChange(null);
			return null;
		});
	}

	async onAuthSignOut() {
		const auth = getAuth();
		await signOut(auth).then(user => {
			console.log('client:user', user);
		})
			.catch(error => {
				console.error('onAuthSignOut', error);
			});
	}

	async loginWithGithub() {
		const auth = getAuth();
		await signInWithPopup(auth, provider)
			.then(result => {
				// This gives you a GitHub Access Token. You can use it to access the GitHub API.
				const credential = GithubAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const {user} = result;
				return {token, user};
			}).catch(error => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const {email} = error;
				// The AuthCredential type that was used.
				const credential = GithubAuthProvider.credentialFromError(error);
				console.error('loginWithGithub', error);
				console.error('errorCode', errorCode);
				console.error('errorMessage', errorMessage);
				console.error('email', email);
				console.error('credential', credential);
			});
	}
}
