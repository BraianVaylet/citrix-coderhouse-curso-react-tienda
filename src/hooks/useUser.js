import {useEffect, useState} from 'react';
import {FirebaseClient} from 'firebase/client';

export default function useUser() {
	const firebase = new FirebaseClient();
	const [user, setUser] = useState(null);

	console.log('user', user);

	useEffect(() => {
		firebase.onAuthStateChangedClient(setUser);
	}, [user]);

	return user;
}
